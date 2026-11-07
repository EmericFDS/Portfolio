#!/usr/bin/env bash
# ==============================================================================
# Build Clean Production Webroot for Infomaniak Hosting (dist-infomaniak/)
# Strips 317 MB legacy archive, node_modules, tests, git metadata & dev configs
# ==============================================================================
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="${ROOT_DIR}/dist-infomaniak"

rm -rf "${DIST_DIR}"
mkdir -p "${DIST_DIR}/.well-known" "${DIST_DIR}/fr"

# 1. Core HTML, SEO/GEO & Security Config
cp "${ROOT_DIR}/.htaccess" "${DIST_DIR}/.htaccess"
cp "${ROOT_DIR}/.well-known/security.txt" "${DIST_DIR}/.well-known/security.txt"
cp "${ROOT_DIR}/index.html" "${DIST_DIR}/index.html"
cp "${ROOT_DIR}/fr/index.html" "${DIST_DIR}/fr/index.html"
cp "${ROOT_DIR}/404.html" "${DIST_DIR}/404.html"
cp "${ROOT_DIR}/robots.txt" "${DIST_DIR}/robots.txt"
cp "${ROOT_DIR}/sitemap.xml" "${DIST_DIR}/sitemap.xml"
cp "${ROOT_DIR}/llms.txt" "${DIST_DIR}/llms.txt"
cp "${ROOT_DIR}/llms-full.txt" "${DIST_DIR}/llms-full.txt"
cp "${ROOT_DIR}/favicon.svg" "${DIST_DIR}/favicon.svg"

# 2. Production CSS & JS (Zero test files, zero package.json)
cp "${ROOT_DIR}/style.css" "${DIST_DIR}/style.css"
cp "${ROOT_DIR}/gtag-init.js" "${DIST_DIR}/gtag-init.js"
cp "${ROOT_DIR}/translations.js" "${DIST_DIR}/translations.js"
cp "${ROOT_DIR}/i18n.js" "${DIST_DIR}/i18n.js"
cp "${ROOT_DIR}/analytics.js" "${DIST_DIR}/analytics.js"
cp "${ROOT_DIR}/script.js" "${DIST_DIR}/script.js"

# 3. Media & PDF Assets (Clean copy without macOS .DS_Store)
cp -R "${ROOT_DIR}/img" "${DIST_DIR}/img"
cp -R "${ROOT_DIR}/assets" "${DIST_DIR}/assets"
cp -R "${ROOT_DIR}/content" "${DIST_DIR}/content"
find "${DIST_DIR}" -name ".DS_Store" -type f -delete

echo "Infomaniak production webroot ready at: ${DIST_DIR}"
du -sh "${DIST_DIR}"
