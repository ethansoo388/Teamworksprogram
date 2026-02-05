#!/bin/bash

# Fix all absolute URLs to relative URLs in source files

echo "Fixing relative URLs in source files..."

# Find all TSX files and replace absolute URLs with relative ones
find src/app/components -name "*.tsx" -type f -exec sed -i \
  -e 's|href="/bookConsultation\.html"|href="bookConsultation.html"|g' \
  -e 's|href="/creating-super-teams\.html"|href="creating-super-teams.html"|g' \
  -e 's|href="/design-like-apple\.html"|href="design-like-apple.html"|g' \
  -e 's|href="/operational-excellence\.html"|href="operational-excellence.html"|g' \
  -e 's|href="/index\.html#|href="index.html#|g' \
  -e 's|href="/index\.html"|href="index.html"|g' \
  {} \;

echo "✅ Fixed relative URLs"
