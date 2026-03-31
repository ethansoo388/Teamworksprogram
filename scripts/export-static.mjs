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
    siteType = 'teamworks', // 'main', 'teamworks', or 'jess'
    filename = '',
    jsonLd = '',

    // SEO / Social
    canonicalUrl = '',
    robotsMeta = '',
    ogTitle = '',
    ogDescription = '',
    ogUrl = '',
    ogImage = '',
    ogType = 'website',
    ogSiteName = 'CI Agile',
    ogLocale = 'en_SG',
  } = options;

  // Compute prefix based on output filename depth:
  // "index.html" → depth 0 → ""
  // "teamworks/index.html" → depth 1 → "../"
  // "jess/nova/agile-scrum.html" → depth 2 → "../../"
  const dir = path.dirname(filename);
  const depth = dir === '.' ? 0 : dir.split('/').length;
  const prefix = '../'.repeat(depth);

  const formJsTag = includeFormJS
    ? `\n    <script defer src="${prefix}js/form.js"></script>`
    : '';

  const shell = fs.readFileSync(path.join(templatesDir, 'shell.html'), 'utf8');
  return shell
    .replace('{{DESCRIPTION}}', description)
    .replace('{{CANONICAL_URL}}', canonicalUrl)
    .replace('{{ROBOTS_META}}', robotsMeta)
    .replace('{{TITLE}}', title)

    .replace('{{OG_TITLE}}', ogTitle || title)
    .replace('{{OG_DESCRIPTION}}', ogDescription || description)
    .replace('{{OG_URL}}', ogUrl || canonicalUrl)
    .replace('{{OG_IMAGE}}', ogImage)
    .replace('{{OG_TYPE}}', ogType)
    .replace('{{OG_SITE_NAME}}', ogSiteName)
    .replace('{{OG_LOCALE}}', ogLocale)

    .replace('{{TWITTER_TITLE}}', ogTitle || title)
    .replace('{{TWITTER_DESCRIPTION}}', ogDescription || description)
    .replace('{{TWITTER_IMAGE}}', ogImage)

    .replace('{{JSON_LD}}', jsonLd)
    .replace('{{CSS_PATH}}', `${prefix}css`)
    .replace('{{BODY_CLASS}}', pageClass ? ` ${pageClass}` : '')
    .replace('{{BODY_HTML}}', bodyHTML)
    .replace('{{JS_PATH}}', `${prefix}js`)
    .replace('{{FORM_JS_TAG}}', formJsTag);
}

// ---------------------------------------------------------------------------
// SEO helpers
// ---------------------------------------------------------------------------

function normalizeUrlPathFromFilename(filename) {
  // index.html -> /
  if (filename === 'index.html') return '/';

  // folder index -> /folder/
  if (filename.endsWith('/index.html')) {
    const dir = filename.slice(0, -'/index.html'.length);
    return `/${dir}/`;
  }

  // all other html -> /path/file.html
  return `/${filename}`;
}

function joinUrl(baseUrl, pathPart) {
  const base = (baseUrl || '').replace(/\/$/, '');
  const pathNorm = (pathPart || '').startsWith('/') ? pathPart : `/${pathPart}`;
  return `${base}${pathNorm}`;
}

function getSitemapPriority(page) {
  const f = page.filename;
  if (f === 'index.html') return 1.0;
  if (f === 'teamworks/index.html' || f === 'jess/index.html') return 0.9;

  if (f.startsWith('teamworks/')) return 0.8;
  if (f.startsWith('jess/')) return 0.8;

  if (['privacy-policy.html', 'terms-of-use.html', 'cookie-policy.html'].includes(f)) return 0.3;
  return 0.6;
}

function getSitemapChangefreq(page) {
  const f = page.filename;
  if (f === 'index.html') return 'weekly';
  if (f === 'teamworks/index.html' || f === 'jess/index.html') return 'monthly';
  if (['privacy-policy.html', 'terms-of-use.html', 'cookie-policy.html'].includes(f)) return 'yearly';
  return 'monthly';
}

function generateRobotsTxt({ baseUrl, disallowPaths = [], sitemapPath = '/sitemap.xml' }) {
  const lines = [
    'User-agent: *',
    'Allow: /',
    ...disallowPaths.map((p) => `Disallow: ${p}`),
    `Sitemap: ${joinUrl(baseUrl, sitemapPath)}`,
    '',
  ];
  return lines.join('\n');
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemapXml({ pages, baseUrl, excludedFilenames = [], lastmodISO }) {
  const included = pages.filter((p) => !excludedFilenames.includes(p.filename));

  const urlset = included
    .map((p) => {
      const loc = joinUrl(baseUrl, normalizeUrlPathFromFilename(p.filename));
      const priority = getSitemapPriority(p).toFixed(1);
      const changefreq = getSitemapChangefreq(p);
      return [
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${escapeXml(lastmodISO)}</lastmod>`,
        `    <changefreq>${escapeXml(changefreq)}</changefreq>`,
        `    <priority>${escapeXml(priority)}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset,
    '</urlset>',
    '',
  ].join('\n');
}

function buildJsonLd({ baseUrl, organizationName, page, extraGraph = [] }) {
  const pagePath = normalizeUrlPathFromFilename(page.filename);
  const pageUrl = joinUrl(baseUrl, pagePath);

  const graph = [
    {
      '@type': 'Organization',
      '@id': joinUrl(baseUrl, '/#organization'),
      name: organizationName,
      url: baseUrl,
    },
    {
      '@type': 'WebSite',
      '@id': joinUrl(baseUrl, '/#website'),
      url: baseUrl,
      name: organizationName,
      publisher: { '@id': joinUrl(baseUrl, '/#organization') },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': joinUrl(baseUrl, '/#website') },
      about: { '@id': joinUrl(baseUrl, '/#organization') },
      inLanguage: 'en',
    },
  ];

  if (Array.isArray(extraGraph) && extraGraph.length) {
    graph.push(...extraGraph);
  }

  const json = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  // Keep output compact to reduce HTML weight.
  return `<script type="application/ld+json">${JSON.stringify(json)}</script>`;
}

// ---------------------------------------------------------------------------
// Structured data helpers (Breadcrumb / Course / FAQ)
// ---------------------------------------------------------------------------

function stripHtmlToText(html) {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*\baria-hidden="true"[^>]*>[^<]*<\/[a-z][a-z0-9]*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function buildBreadcrumbGraph({ baseUrl, page, breadcrumbLabels = {} }) {
  const pagePath = normalizeUrlPathFromFilename(page.filename);
  const pageUrl = joinUrl(baseUrl, pagePath);

  const segments = pagePath
    .split('/')
    .filter(Boolean)
    .filter((seg) => seg !== 'index.html');

  // Home always first
  const items = [
    {
      name: 'Home',
      url: joinUrl(baseUrl, '/'),
    },
  ];

  // Build up intermediate paths
  let accum = '';
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const isLast = i === segments.length - 1;

    const segKey = seg.replace(/\.html$/i, '');
    const label = breadcrumbLabels[segKey] || segKey;

    accum += `/${seg}`;
    const name = isLast ? page.title : label;
    const url = isLast ? pageUrl : joinUrl(baseUrl, `${accum}/`);

    if (url !== joinUrl(baseUrl, '/')) {
      items.push({ name, url });
    }
  }

  const itemListElement = items.map((it, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: it.name,
    item: it.url,
  }));

  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement,
  };
}

function buildCourseGraph({ baseUrl, page, courseConfig }) {
  const pagePath = normalizeUrlPathFromFilename(page.filename);
  const pageUrl = joinUrl(baseUrl, pagePath);

  return {
    '@type': 'Course',
    '@id': `${pageUrl}#course`,
    name: courseConfig?.name || page.title,
    description: courseConfig?.description || page.description,
    provider: { '@id': joinUrl(baseUrl, '/#organization') },
    inLanguage: courseConfig?.inLanguage || 'en',
    courseMode: courseConfig?.courseMode || 'In-person or live online',
    areaServed: courseConfig?.areaServed || 'MY',
    educationalLevel: courseConfig?.educationalLevel || 'Professional',
    url: pageUrl,
  };
}

function extractFaqPairsFromHtml(bodyHTML) {
  const html = String(bodyHTML || '');

  const faqHeadingRe = /<h[1-6][^>]*>\s*(?:FAQ|FAQs|Frequently\s+Asked\s+Questions)\s*<\/h[1-6]>/i;
  const m = faqHeadingRe.exec(html);
  if (!m) return [];

  const startIdx = m.index;

  // Find the next heading AFTER the FAQ heading to bound the section.
  const afterFaqIdx = startIdx + m[0].length;
  const nextHeadingRe = /<h[1-6][^>]*>\s*[^<]+\s*<\/h[1-6]>/ig;
  nextHeadingRe.lastIndex = afterFaqIdx;
  const next = nextHeadingRe.exec(html);
  const endIdx = next ? next.index : Math.min(html.length, startIdx + 120000);

  const section = html.slice(startIdx, endIdx);
  const detailsRe = /<details[^>]*>([\s\S]*?)<\/details>/gi;
  const pairs = [];
  let dm;

  while ((dm = detailsRe.exec(section))) {
    const block = dm[1] || '';
    const sm = /<summary[^>]*>([\s\S]*?)<\/summary>/i.exec(block);
    if (!sm) continue;

    const question = stripHtmlToText(sm[1]);
    const answerHtml = block.replace(sm[0], '');
    const answer = stripHtmlToText(answerHtml);

    if (!question || !answer) continue;
    pairs.push({ question, answer });
  }

  return pairs;
}

function buildFaqGraph({ baseUrl, page, bodyHTML }) {
  const pairs = extractFaqPairsFromHtml(bodyHTML);
  if (!pairs.length) return null;

  const pagePath = normalizeUrlPathFromFilename(page.filename);
  const pageUrl = joinUrl(baseUrl, pagePath);

  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: pairs.map((p) => ({
      '@type': 'Question',
      name: p.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: p.answer,
      },
    })),
  };
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

function generateFavicon() {
  console.log('🔖 Generating favicon...');
  fs.copyFileSync(path.join(templatesDir, 'favicon.svg'), path.join(publicDir, 'favicon.svg'));
  console.log('✅ favicon generated');
}

function generate404Page() {
  console.log('🚫 Generating 404 page...');
  fs.copyFileSync(path.join(templatesDir, '404.html'), path.join(publicDir, '404.html'));
  console.log('✅ 404 page generated');
}

function generateHtaccess() {
  console.log('🔀 Generating .htaccess...');
  fs.copyFileSync(path.join(templatesDir, '.htaccess'), path.join(publicDir, '.htaccess'));
  console.log('✅ .htaccess generated');
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
// Build-time image dimension injection (CLS prevention)
// - Adds width/height to local raster <img> tags in exported HTML
// - No runtime JS required
// ---------------------------------------------------------------------------

const __imgSizeCache = new Map();

function isSkippableImgSrc(src) {
  if (!src) return true;
  const s = String(src).trim();
  if (!s) return true;
  if (s.startsWith('data:')) return true;
  if (/^https?:\/\//i.test(s)) return true;
  return false;
}

function normalizeSrcForCache(src) {
  return String(src).split('#')[0].split('?')[0];
}

function getPngSize(buf) {
  // PNG signature + IHDR chunk at fixed offset
  if (buf.length < 24) return null;
  // width/height are big-endian at bytes 16..23
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  return (w > 0 && h > 0) ? { width: w, height: h } : null;
}

function getGifSize(buf) {
  if (buf.length < 10) return null;
  const w = buf.readUInt16LE(6);
  const h = buf.readUInt16LE(8);
  return (w > 0 && h > 0) ? { width: w, height: h } : null;
}

function getJpegSize(buf) {
  // Scan JPEG segments for SOF marker
  if (buf.length < 4 || buf[0] !== 0xFF || buf[1] !== 0xD8) return null;
  let i = 2;
  while (i < buf.length - 1) {
    if (buf[i] !== 0xFF) { i += 1; continue; }
    // skip fill bytes 0xFF
    while (i < buf.length && buf[i] === 0xFF) i += 1;
    if (i >= buf.length) break;
    const marker = buf[i];
    i += 1;

    // Standalone markers
    if (marker === 0xD9 || marker === 0xDA) break; // EOI / SOS
    if (marker === 0x01 || (marker >= 0xD0 && marker <= 0xD7)) continue;

    if (i + 1 >= buf.length) break;
    const size = buf.readUInt16BE(i);
    if (size < 2) break;
    const segmentStart = i + 2;

    // SOF0/1/2/3 etc
    const isSOF =
      (marker >= 0xC0 && marker <= 0xC3) ||
      (marker >= 0xC5 && marker <= 0xC7) ||
      (marker >= 0xC9 && marker <= 0xCB) ||
      (marker >= 0xCD && marker <= 0xCF);

    if (isSOF && segmentStart + 7 <= buf.length) {
      const h = buf.readUInt16BE(segmentStart + 1);
      const w = buf.readUInt16BE(segmentStart + 3);
      return (w > 0 && h > 0) ? { width: w, height: h } : null;
    }

    i += size;
  }
  return null;
}

function getWebpSize(buf) {
  // RIFF....WEBP
  if (buf.length < 30) return null;
  if (buf.toString('ascii', 0, 4) !== 'RIFF') return null;
  if (buf.toString('ascii', 8, 12) !== 'WEBP') return null;

  const chunkType = buf.toString('ascii', 12, 16);
  const chunkSize = buf.readUInt32LE(16);
  const dataStart = 20;

  if (chunkType === 'VP8X') {
    // Extended format: width-1 at bytes 24..26, height-1 at 27..29 (3 bytes LE)
    if (buf.length < 30) return null;
    const wMinus1 = buf.readUIntLE(24, 3);
    const hMinus1 = buf.readUIntLE(27, 3);
    return { width: wMinus1 + 1, height: hMinus1 + 1 };
  }

  if (chunkType === 'VP8 ') {
    // Lossy bitstream: look for start code 0x9D 0x01 0x2A after frame tag (3 bytes)
    const maxSearch = Math.min(buf.length, dataStart + Math.min(chunkSize, 64));
    for (let j = dataStart; j < maxSearch - 10; j += 1) {
      if (buf[j] === 0x9D && buf[j + 1] === 0x01 && buf[j + 2] === 0x2A) {
        const wRaw = buf.readUInt16LE(j + 3);
        const hRaw = buf.readUInt16LE(j + 5);
        const w = wRaw & 0x3FFF;
        const h = hRaw & 0x3FFF;
        return (w > 0 && h > 0) ? { width: w, height: h } : null;
      }
    }
  }

  if (chunkType === 'VP8L') {
    // Lossless: signature 0x2F then 4 bytes
    if (buf.length < dataStart + 5) return null;
    const sig = buf[dataStart];
    if (sig !== 0x2F) return null;
    const bits = buf.readUInt32LE(dataStart + 1);
    const w = (bits & 0x3FFF) + 1;
    const h = ((bits >> 14) & 0x3FFF) + 1;
    return (w > 0 && h > 0) ? { width: w, height: h } : null;
  }

  return null;
}

function getImageSizeFromFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  // Read just enough bytes for headers
  const fd = fs.openSync(filePath, 'r');
  try {
    const max = 256 * 1024; // plenty for JPEG scanning
    const buf = Buffer.allocUnsafe(max);
    const bytes = fs.readSync(fd, buf, 0, max, 0);
    const slice = buf.subarray(0, bytes);

    if (ext === '.png') return getPngSize(slice);
    if (ext === '.gif') return getGifSize(slice);
    if (ext === '.jpg' || ext === '.jpeg') return getJpegSize(slice);
    if (ext === '.webp') return getWebpSize(slice);
    return null;
  } finally {
    fs.closeSync(fd);
  }
}

function resolvePublicImageFilePath(src, pageFilename) {
  // src is already rewritten to a relative "assets/..." with prefix via fixImagePaths
  const raw = normalizeSrcForCache(src).trim();
  const pageDir = path.dirname(pageFilename);
  const absPath = path.resolve(publicDir, pageDir, raw);
  return absPath;
}

function injectImageDimensions(html, pageFilename) {
  if (!html) return html;

  return String(html).replace(/<img\b[^>]*>/gi, (tag) => {
    try {
      // quick checks
      const hasW = /\bwidth\s*=\s*["']\d+["']/i.test(tag);
      const hasH = /\bheight\s*=\s*["']\d+["']/i.test(tag);
      if (hasW && hasH) return tag;

      // extract src
      const m = tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
      if (!m) return tag;
      const src = m[1];
      if (isSkippableImgSrc(src)) return tag;

      const srcKey = normalizeSrcForCache(src);
      // Only handle local raster files
      const ext = path.extname(srcKey).toLowerCase();
      if (!['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext)) return tag;

      let size = __imgSizeCache.get(srcKey);
      if (!size) {
        const abs = resolvePublicImageFilePath(srcKey, pageFilename);
        if (!fs.existsSync(abs)) return tag; // don't break build
        size = getImageSizeFromFile(abs);
        if (!size || !size.width || !size.height) return tag;
        __imgSizeCache.set(srcKey, size);
      }

      // Inject missing attributes only
      let out = tag;
      if (!hasW) out = out.replace(/<img\b/i, `<img width="${size.width}"`);
      if (!hasH) out = out.replace(/<img\b/i, `<img height="${size.height}"`);
      return out;
    } catch {
      return tag;
    }
  });
}

function validateExportedImages(pages) {
  const issues = [];
  for (const page of pages) {
    const outPath = path.join(publicDir, page.filename);
    if (!fs.existsSync(outPath)) continue;
    const html = fs.readFileSync(outPath, 'utf8');

    const imgTags = html.match(/<img\b[^>]*>/gi) || [];
    for (const tag of imgTags) {
      const m = tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
      if (!m) continue;
      const src = m[1];
      if (isSkippableImgSrc(src)) continue;

      const srcKey = normalizeSrcForCache(src);
      const ext = path.extname(srcKey).toLowerCase();
      const isRaster = ['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext);
      if (!isRaster) continue;

      const hasW = /\bwidth\s*=\s*["']\d+["']/i.test(tag);
      const hasH = /\bheight\s*=\s*["']\d+["']/i.test(tag);
      if (!hasW || !hasH) {
        issues.push({ type: 'missing-dims', page: page.filename, src: srcKey });
      }

      const abs = resolvePublicImageFilePath(srcKey, page.filename);
      if (!fs.existsSync(abs)) {
        issues.push({ type: 'missing-file', page: page.filename, src: srcKey });
      }
    }
  }

  const missingDims = issues.filter((x) => x.type === 'missing-dims');
  const missingFiles = issues.filter((x) => x.type === 'missing-file');

  console.log('');
  console.log('🧪 Post-export image sanity check');
  console.log(`  • Missing width/height (local raster): ${missingDims.length}`);
  console.log(`  • Missing files referenced by <img>: ${missingFiles.length}`);

  if (missingDims.length) {
    const sample = missingDims.slice(0, 10);
    console.log('  Sample missing dimensions:');
    for (const it of sample) console.log(`   - ${it.page}: ${it.src}`);
  }
  if (missingFiles.length) {
    const sample = missingFiles.slice(0, 10);
    console.log('  Sample missing files:');
    for (const it of sample) console.log(`   - ${it.page}: ${it.src}`);
  }

  if (missingDims.length || missingFiles.length) {
    throw new Error('Image sanity check failed: missing dimensions and/or missing files.');
  }

  console.log('  ✓ Image sanity check passed');
  console.log('');
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

    const seoModule = await vite.ssrLoadModule('/src/config/seo.ts');
    const seo = seoModule.seo;

    const schemaModule = await vite.ssrLoadModule('/src/config/schema.ts');
    const courseSchemaByFilename = schemaModule.courseSchemaByFilename || {};
    const breadcrumbLabels = schemaModule.breadcrumbLabels || {};

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
        const bodyWithDims = injectImageDimensions(fixedBodyHTML, page.filename);

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

        // -----------------------------------------------------------------
        // Canonical + Open Graph values (static, build-time only)
        // -----------------------------------------------------------------
        const canonicalPath = normalizeUrlPathFromFilename(page.filename);
        const canonicalUrl = joinUrl(seo.baseUrl, canonicalPath);

        const excluded = Array.isArray(seo?.excludeFromIndex) ? seo.excludeFromIndex : [];
        const robotsMeta = excluded.includes(page.filename)
          ? '<meta name="robots" content="noindex, nofollow">'
          : '';

        const ogDefaults = seo?.og || {};
        const ogOverrides = ogDefaults?.overridesByFilename?.[page.filename] || {};

        const imagePathFromSiteType =
          (ogDefaults?.defaultImageBySiteType && ogDefaults.defaultImageBySiteType[siteType])
            ? ogDefaults.defaultImageBySiteType[siteType]
            : (ogDefaults?.defaultImageBySiteType && ogDefaults.defaultImageBySiteType.main)
              ? ogDefaults.defaultImageBySiteType.main
              : '';

        const ogImagePath = ogOverrides.image || imagePathFromSiteType;
        const ogImage = ogImagePath ? joinUrl(seo.baseUrl, ogImagePath) : '';

        const ogTitle = ogOverrides.title || page.title;
        const ogDescription = ogOverrides.description || page.description;
        const ogType = ogOverrides.type || ogDefaults.type || 'website';

        const html = createHTMLShell(page.title, bodyWithDims, {
          description: page.description,
          includeFormJS: page.includeFormJS || false,
          siteType,
          filename: page.filename,
          pageClass,
          canonicalUrl,
          robotsMeta,
          ogTitle,
          ogDescription,
          ogUrl: canonicalUrl,
          ogImage,
          ogType,
          ogSiteName: seo.siteName,
          ogLocale: seo.locale,
          jsonLd: buildJsonLd({
            baseUrl: seo.baseUrl,
            organizationName: seo.organizationName,
            page,
            extraGraph: (() => {
              const extra = [];

              // Breadcrumbs: on every page
              extra.push(buildBreadcrumbGraph({
                baseUrl: seo.baseUrl,
                page,
                breadcrumbLabels,
              }));

              // Course schema: only on configured course pages
              const courseConfig = courseSchemaByFilename[page.filename];
              if (courseConfig) {
                extra.push(buildCourseGraph({
                  baseUrl: seo.baseUrl,
                  page,
                  courseConfig,
                }));
              }

              // FAQ schema: only if a visible FAQ section exists
              const faqGraph = buildFaqGraph({
                baseUrl: seo.baseUrl,
                page,
                bodyHTML: bodyWithDims,
              });
              if (faqGraph) extra.push(faqGraph);

              return extra;
            })(),
          }),
        });

        fs.writeFileSync(path.join(publicDir, page.filename), html);
        console.log(`  ✓ ${page.filename} generated`);
      } catch (error) {
        console.error(`  ✗ Error generating ${page.filename}:`, error);
        throw error;
      }
    }

    console.log('✅ All HTML files generated');

    // Post-export sanity check: ensure local raster <img> tags have width/height and files exist
    validateExportedImages(pages);

    return { pages, seo };
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

    generateFavicon();
    console.log('');

    generate404Page();
    console.log('');

    generateHtaccess();
    console.log('');

    copyAssets();
    console.log('');

    const { pages, seo } = await generateHTMLFiles();
    console.log('');

    // -----------------------------------------------------------------
    // SEO output files
    // - robots.txt
    // - sitemap.xml
    // -----------------------------------------------------------------
    console.log('🔎 Generating SEO files (robots.txt + sitemap.xml)...');

    const excluded = Array.isArray(seo?.excludeFromIndex) ? seo.excludeFromIndex : [];
    const disallowPaths = excluded.map((f) => normalizeUrlPathFromFilename(f));
    const lastmodISO = new Date().toISOString();

    const robotsTxt = generateRobotsTxt({
      baseUrl: seo.baseUrl,
      disallowPaths,
      sitemapPath: '/sitemap.xml',
    });
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

    const sitemapXml = generateSitemapXml({
      pages,
      baseUrl: seo.baseUrl,
      excludedFilenames: excluded,
      lastmodISO,
    });
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);

    console.log('  ✓ robots.txt generated');
    console.log('  ✓ sitemap.xml generated');
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
