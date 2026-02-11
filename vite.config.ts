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
    // Custom plugin to resolve figma:asset imports
    {
      name: 'resolve-figma-assets',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          // Extract filename from figma:asset/filename
          const filename = id.replace('figma:asset/', '');
          const assetPath = path.resolve(__dirname, 'src/assets/img', filename);
          
          // Check if file exists
          if (!fs.existsSync(assetPath)) {
            throw new Error(
              `[figma:asset] File not found: ${filename}\n` +
              `Expected location: ${assetPath}\n` +
              `Please ensure the file exists in src/assets/img/`
            );
          }
          
          // Return a virtual module ID
          return '\0figma:asset:' + filename;
        }
      },
      load(id) {
        if (id.startsWith('\0figma:asset:')) {
          // Extract filename from virtual module ID
          const filename = id.replace('\0figma:asset:', '');
          
          // Return absolute path (will be fixed by post-processing in export script)
          return `export default "/src/assets/img/${filename}";`;
        }
      }
    }
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})