import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Custom plugin to resolve @/assets/img imports to proper paths
    {
      name: 'resolve-assets-img',
      resolveId(id) {
        if (id.startsWith('@/assets/img/')) {
          // Extract filename from @/assets/img/filename
          const filename = id.replace('@/assets/img/', '');
          const assetPath = path.resolve(__dirname, 'src/assets/img', filename);
          
          // Check if file exists
          if (!fs.existsSync(assetPath)) {
            throw new Error(
              `[@/assets/img] File not found: ${filename}\n` +
              `Expected location: ${assetPath}\n` +
              `Please ensure the file exists in src/assets/img/`
            );
          }
          
          // Return a virtual module ID
          return '\0assets-img:' + filename;
        }
      },
      load(id) {
        if (id.startsWith('\0assets-img:')) {
          // Extract filename from virtual module ID
          const filename = id.replace('\0assets-img:', '');
          
          // Return absolute path (will be fixed by post-processing in export script)
          return `export default "/src/assets/img/${filename}";`;
        }
      }
    },
    // NOTE: We intentionally do NOT support `figma:asset/*` anymore.
    // All images should be imported from `@/assets/img/*` so they can be copied to
    // `public/assets/img` during the static export.
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})