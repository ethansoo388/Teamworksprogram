import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer, build } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const templatesDir = path.join(__dirname, 'templates');

// ---------------------------------------------------------------------------
// IMPORTANT: Update this to your actual domain before deploying to production.
// ---------------------------------------------------------------------------
const SITE_URL = 'https://www.ciagile.com';

// Default Open Graph hero image per site section.
// These images are served from the deployed domain after build.
const OG_IMAGES = {
  main:      `${SITE_URL}/assets/img/main/ciagile-home-hero-presenter-flipchart.webp`,
  teamworks: `${SITE_URL}/assets/img/teamworks/ciagile-teamworks-course-high-interactivity.webp`,
  jess:      `${SITE_URL}/assets/img/jess/people-jeff-sutherland-leadership-training.webp`,
};

// ---------------------------------------------------------------------------
// HTML shell builder — reads shell.html template and injects page-specific values
// ---------------------------------------------------------------------------
function createHTMLShell(title, bodyHTML, options = {}) {
  const {
    description = 'CI Agile & TeamWorks - Transform your organization with proven delivery systems and team training.',
    includeFormJS = false,
    pageClass = '',
    siteType = 'teamworks', // 'main', 'teamworks', or 'jess'
    filename = '',
    canonicalUrl = '',
    ogImage = '',
  } = options;

  // Compute prefix based on output filename depth:
  // "index.html" → depth 0 → ""
  // "teamworks/index.html" → depth 1 → "../"
  // "jess/nova/agile-scrum.html" → depth 2 → "../../"
  const dir = path.dirname(filename);
  const depth = dir === '.' ? 0 : dir.split('/').length;
  const prefix = '../'.repeat(depth);

  const formJsTag = includeFormJS
    ? `\n    <script src="${prefix}js/form.js"></script>`
    : '';

  const shell = fs.readFileSync(path.join(templatesDir, 'shell.html'), 'utf8');
  return shell
    .replace('{{DESCRIPTION}}', description)
    .replace('{{TITLE}}', title)
    .replace(/\{\{CANONICAL_URL\}\}/g, canonicalUrl)  // appears twice — canonical + og:url
    .replace('{{OG_TITLE}}', title)
    .replace('{{OG_DESCRIPTION}}', description)
    .replace('{{OG_IMAGE}}', ogImage)
    .replace('{{CSS_PATH}}', `${prefix}css`)
    .replace('{{BODY_CLASS}}', pageClass ? ` ${pageClass}` : '')
    .replace('{{BODY_HTML}}', bodyHTML)
    .replace('{{JS_PATH}}', `${prefix}js`)
    .replace('{{FORM_JS_TAG}}', formJsTag);
}

// ---------------------------------------------------------------------------
// Pretty-print HTML with indentation ONLY (no text reflow).
// This avoids breaking layouts that rely on whitespace-pre/whitespace-pre-wrap.
// ---------------------------------------------------------------------------
function prettyIndentHtml(html) {
  const voidTags = new Set([
    'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'
  ]);

  // Only add newlines BETWEEN tags. This does not touch text nodes.
  const withNewlines = html.replace(/>\s*</g, '>\n<');
  const lines = withNewlines.split('\n');

  let indent = 0;
  const out = [];

  for (const line of lines) {
    const t = line.trim();

    // Decrease indent before closing tags
    if (t.startsWith('</')) {
      indent = Math.max(indent - 1, 0);
    }

    out.push('  '.repeat(indent) + t);

    // Increase indent after opening tags that aren't self/void/inline-closed
    const m = t.match(/^<([a-zA-Z0-9-]+)(\s|>|\/>)/);
    if (m) {
      const tag = m[1].toLowerCase();
      const isClosing = t.startsWith('</');
      const isDecl = t.startsWith('<!') || t.startsWith('<?');
      const isSelf = t.endsWith('/>') || voidTags.has(tag);
      const inlineClose = !isClosing && t.includes(`</${tag}>`);

      if (!isClosing && !isDecl && !isSelf && !inlineClose) {
        indent += 1;
      }
    }
  }

  // Preserve empty textareas — don't let indentation become default content
  return out.join('\n')
    .replace(/<textarea([^>]*)>\s*<\/textarea>/g, '<textarea$1></textarea>')
    + '\n';
}

function prettifyHtmlFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const formatted = prettyIndentHtml(html);
  fs.writeFileSync(filePath, formatted);
}

function prettifyAllHtmlInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) prettifyAllHtmlInDir(fullPath);
    else if (entry.isFile() && fullPath.endsWith('.html')) prettifyHtmlFile(fullPath);
  }
}

// ---------------------------------------------------------------------------
// Directory setup
// ---------------------------------------------------------------------------
function setupPublicDir() {
  console.log('🧹 Cleaning build artifacts...');

  if (fs.existsSync(distDir)) {
    console.log('  ✓ Removing dist/ folder...');
    fs.rmSync(distDir, { recursive: true, force: true });
  }

  if (fs.existsSync(publicDir)) {
    console.log('  ✓ Removing public/ folder...');
    fs.rmSync(publicDir, { recursive: true, force: true });
  }

  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'css'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'js'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'assets'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'teamworks'), { recursive: true });

  console.log('✅ Public directory ready');
}

// ---------------------------------------------------------------------------
// Tailwind CSS build — compiles src/styles/index.css via Vite + Tailwind plugin.
// Replaces the CDN script that was previously in shell.html.
// ---------------------------------------------------------------------------
async function generateTailwindCSS() {
  console.log('🎨 Compiling Tailwind CSS...');

  await build({
    configFile: false,
    root: rootDir,
    logLevel: 'warn',
    plugins: [tailwindcss()],
    build: {
      outDir: path.join(publicDir, 'css'),
      emptyOutDir: false,
      sourcemap: false,
      minify: process.env.NODE_ENV === 'production',
      rollupOptions: {
        input: path.join(rootDir, 'src', 'styles', 'tailwind-build.js'),
        output: {
          entryFileNames: '_tw-unused.js',
          assetFileNames: () => 'tailwind.css',
        },
      },
    },
  });

  // Rollup always emits a JS entry file in this mode — discard it.
  const unusedJs = path.join(publicDir, 'css', '_tw-unused.js');
  if (fs.existsSync(unusedJs)) fs.unlinkSync(unusedJs);

  console.log('✅ Tailwind CSS compiled → public/css/tailwind.css');
}

// ---------------------------------------------------------------------------
// robots.txt generation
// ---------------------------------------------------------------------------
function generateRobotsTxt() {
  console.log('🤖 Generating robots.txt...');

  const content = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /thankyou.html',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n');

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), content);
  console.log('✅ robots.txt generated');
}

// ---------------------------------------------------------------------------
// sitemap.xml generation — built from route definitions
// ---------------------------------------------------------------------------
function generateSitemap(pages) {
  console.log('🗺️  Generating sitemap.xml...');

  const today = new Date().toISOString().split('T')[0];

  // Pages that provide no SEO value — omit from sitemap
  const excluded = new Set(['thankyou.html']);

  const getPriority = (filename) => {
    if (filename === 'index.html') return '1.0';
    if (filename === 'teamworks/index.html' || filename === 'jess/index.html') return '0.9';
    if (filename === 'aboutus.html' || filename === 'contactus.html') return '0.8';
    if (filename.startsWith('teamworks/') || filename.startsWith('jess/')) return '0.8';
    if (/privacy|terms|cookie/.test(filename)) return '0.3';
    return '0.6';
  };

  const getChangefreq = (filename) => {
    if (filename === 'index.html') return 'weekly';
    if (filename.includes('class-schedule')) return 'weekly';
    if (/privacy|terms|cookie/.test(filename)) return 'yearly';
    return 'monthly';
  };

  const urlEntries = pages
    .filter(p => !excluded.has(p.filename))
    .map(p => {
      // Use canonical URLs: strip trailing index.html → clean directory URL
      const urlPath = p.filename.replace(/index\.html$/, '');
      const loc = `${SITE_URL}/${urlPath}`;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${getChangefreq(p.filename)}</changefreq>`,
        `    <priority>${getPriority(p.filename)}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✅ sitemap.xml generated');
}

// ---------------------------------------------------------------------------
// Asset generation — copy template files to public/
// ---------------------------------------------------------------------------
function generateCSS() {
  console.log('🎨 Generating CSS...');
  fs.copyFileSync(path.join(templatesDir, 'style.css'), path.join(publicDir, 'css', 'style.css'));
  console.log('✅ CSS generated');
}

function generateMainJS() {
  console.log('⚙️  Generating main.js...');
  fs.copyFileSync(path.join(templatesDir, 'main.js'), path.join(publicDir, 'js', 'main.js'));
  console.log('✅ main.js generated');
}

function generateFormJS() {
  console.log('📝 Generating form.js...');
  fs.copyFileSync(path.join(templatesDir, 'form.js'), path.join(publicDir, 'js', 'form.js'));
  console.log('✅ form.js generated');
}

// ---------------------------------------------------------------------------
// Asset copy — src/assets → public/assets
// ---------------------------------------------------------------------------
function copyAssets() {
  console.log('🖼️  Copying assets...');

  const srcAssetsDir = path.join(rootDir, 'src', 'assets');
  const destAssetsDir = path.join(publicDir, 'assets');

  // NOTE: This copies ALL files under src/assets (including newly added images like
  // src/assets/img/main/contactus-image.webp) into public/assets during build.

  if (!fs.existsSync(srcAssetsDir)) {
    console.log('  ⚠️  No src/assets directory found, skipping asset copy');
    return;
  }

  function copyRecursive(src, dest) {
    if (!fs.existsSync(src)) return;
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      fs.readdirSync(src).forEach(file => {
        copyRecursive(path.join(src, file), path.join(dest, file));
      });
    } else {
      fs.copyFileSync(src, dest);
      console.log(`  ✓ Copied ${path.relative(srcAssetsDir, src)}`);
    }
  }

  copyRecursive(srcAssetsDir, destAssetsDir);
  console.log('✅ Assets copied');
}

// ---------------------------------------------------------------------------
// SSR rendering
// ---------------------------------------------------------------------------
async function renderPageWithVite(vite, pagePath, componentName) {
  try {
    const module = await vite.ssrLoadModule(pagePath);
    const Component = module[componentName];

    if (!Component) {
      throw new Error(`Component ${componentName} not found in ${pagePath}`);
    }

    const element = React.createElement(Component);
    return renderToStaticMarkup(element);
  } catch (error) {
    console.error(`Error rendering ${componentName}:`, error);
    throw error;
  }
}

// Fix image paths in rendered HTML based on page location depth
function fixImagePaths(html, filename) {
  const dir = path.dirname(filename);
  const depth = dir === '.' ? 0 : dir.split('/').length;
  const prefix = '../'.repeat(depth);

  const srcAssetsPattern = /src="\/src\/assets\/img\//g;
  const assetsPattern = /src="assets\/img\//g;
  const absAssetsPattern = /src="\/assets\/img\//g;

  return html
    .replace(srcAssetsPattern, `src="${prefix}assets/img/`)
    .replace(absAssetsPattern, `src="${prefix}assets/img/`)
    .replace(assetsPattern, `src="${prefix}assets/img/`);
}

// ---------------------------------------------------------------------------
// HTML generation — renders all routes to static HTML files
// ---------------------------------------------------------------------------
async function generateHTMLFiles() {
  console.log('📄 Generating HTML files from React components...');

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
    plugins: [
      // SSR CSS no-op — CSS imports are irrelevant for static HTML export
      {
        name: 'ssr-css-noop',
        enforce: 'pre',
        resolveId(id) {
          if (/\.css(\?.*)?$/.test(id)) {
            return '\0ssr-css-noop:' + id;
          }
        },
        load(id) {
          if (id.startsWith('\0ssr-css-noop:')) {
            return 'export default ""';
          }
        },
      },
    ],
  });

  try {
    const routesModule = await vite.ssrLoadModule('/src/config/routes.ts');
    const pages = routesModule.routes;

    // Ensure subdirectories exist
    const subDirs = new Set(
      pages.map((p) => path.dirname(p.filename)).filter((d) => d !== '.')
    );
    for (const dir of subDirs) {
      fs.mkdirSync(path.join(publicDir, dir), { recursive: true });
    }

    for (const page of pages) {
      try {
        console.log(`  ✓ Rendering ${page.filename}...`);

        const bodyHTML = await renderPageWithVite(vite, page.modulePath, page.componentName);
        const fixedBodyHTML = fixImagePaths(bodyHTML, page.filename);

        // -----------------------------------------------------------------
        // Site-scoped body classes
        // - Main/TeamWorks: keep existing look
        // - Jess: activate the intended dark theme tokens by default
        // -----------------------------------------------------------------
        const siteType = page.siteType;
        const pageClass =
          siteType === 'main'
            ? 'site-main'
            : siteType === 'teamworks'
              ? 'site-teamworks'
              : siteType === 'jess'
                ? 'site-jess dark'
                : '';

        // Canonical URL — strip trailing index.html so the URL is clean
        const urlPath = page.filename.replace(/index\.html$/, '');
        const canonicalUrl = `${SITE_URL}/${urlPath}`;

        // OG hero image — one representative image per site section
        const ogImage = OG_IMAGES[siteType] || OG_IMAGES.main;

        const html = createHTMLShell(page.title, fixedBodyHTML, {
          description: page.description,
          includeFormJS: page.includeFormJS || false,
          siteType,
          filename: page.filename,
          pageClass,
          canonicalUrl,
          ogImage,
        });

        fs.writeFileSync(path.join(publicDir, page.filename), html);
        console.log(`  ✓ ${page.filename} generated`);
      } catch (error) {
        console.error(`  ✗ Error generating ${page.filename}:`, error);
        throw error;
      }
    }

    console.log('✅ All HTML files generated');
    return pages;
  } finally {
    await vite.close();
  }
}

// ---------------------------------------------------------------------------
// Main orchestration
// ---------------------------------------------------------------------------
async function exportStaticSite() {
  console.log('🚀 Starting static site export...\n');

  try {
    setupPublicDir();
    console.log('');

    generateCSS();
    console.log('');

    await generateTailwindCSS();
    console.log('');

    generateMainJS();
    console.log('');

    generateFormJS();
    console.log('');

    copyAssets();
    console.log('');

    const pages = await generateHTMLFiles();
    console.log('');

    generateRobotsTxt();
    console.log('');

    generateSitemap(pages);
    console.log('');

    // Format HTML for readability (dev builds only)
    if (process.env.NODE_ENV !== 'production') {
      console.log('🧼 Formatting HTML (indentation only)...');
      prettifyAllHtmlInDir(publicDir);
      console.log('  ✓ HTML formatted');
      console.log('');
    }

    console.log('✨ Static export complete!');
    console.log(`📁 Output directory: ${publicDir}`);
    console.log('\n📋 Generated files listed in src/config/routes.ts');
    console.log('  Assets:');
    console.log('    - css/tailwind.css (compiled — replaces CDN)');
    console.log('    - css/style.css');
    console.log('    - js/main.js');
    console.log('    - js/form.js');
    console.log('    - assets/* (images and other assets)');
    console.log('    - robots.txt');
    console.log('    - sitemap.xml');
    console.log('\n🚀 Ready to deploy to Hostinger!');

  } catch (error) {
    console.error('\n❌ Export failed:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

exportStaticSite();
