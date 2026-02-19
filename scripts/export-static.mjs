import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const templatesDir = path.join(__dirname, 'templates');

// ---------------------------------------------------------------------------
// HTML shell builder — reads shell.html template and injects page-specific values
// ---------------------------------------------------------------------------
function createHTMLShell(title, bodyHTML, options = {}) {
  const {
    description = 'CI Agile & TeamWorks - Transform your organization with proven delivery systems and team training.',
    includeFormJS = false,
    pageClass = '',
    siteType = 'teamworks', // 'main' or 'teamworks'
  } = options;

  const prefix = siteType === 'main' ? '' : '../';
  const formJsTag = includeFormJS
    ? `\n    <script src="${prefix}js/form.js"></script>`
    : '';

  const shell = fs.readFileSync(path.join(templatesDir, 'shell.html'), 'utf8');
  return shell
    .replace('{{DESCRIPTION}}', description)
    .replace('{{TITLE}}', title)
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

  return out.join('\n') + '\n';
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

// Fix image paths in rendered HTML based on page location
function fixImagePaths(html, isTeamworksPage) {
  const srcAssetsPattern = /src="\/src\/assets\/img\//g;
  const assetsPattern = /src="assets\/img\//g;
  const absAssetsPattern = /src="\/assets\/img\//g;

  if (isTeamworksPage) {
    return html
      .replace(srcAssetsPattern, 'src="../assets/img/')
      .replace(absAssetsPattern, 'src="../assets/img/')
      .replace(assetsPattern, 'src="../assets/img/');
  } else {
    return html
      .replace(srcAssetsPattern, 'src="assets/img/')
      .replace(absAssetsPattern, 'src="assets/img/')
      .replace(assetsPattern, 'src="assets/img/');
  }
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
        const fixedBodyHTML = fixImagePaths(bodyHTML, page.siteType !== 'main');

        const html = createHTMLShell(page.title, fixedBodyHTML, {
          description: page.description,
          includeFormJS: page.includeFormJS || false,
          siteType: page.siteType,
        });

        fs.writeFileSync(path.join(publicDir, page.filename), html);
        console.log(`  ✓ ${page.filename} generated`);
      } catch (error) {
        console.error(`  ✗ Error generating ${page.filename}:`, error);
        throw error;
      }
    }

    console.log('✅ All HTML files generated');
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

    generateMainJS();
    console.log('');

    generateFormJS();
    console.log('');

    copyAssets();
    console.log('');

    await generateHTMLFiles();
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
    console.log('    - css/style.css');
    console.log('    - js/main.js');
    console.log('    - js/form.js');
    console.log('    - assets/* (images and other assets)');
    console.log('\n🚀 Ready to deploy to Hostinger!');

  } catch (error) {
    console.error('\n❌ Export failed:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

exportStaticSite();
