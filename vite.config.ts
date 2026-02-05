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
    // Custom plugin to resolve figma:asset imports
    {
      name: 'resolve-figma-assets',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          // Extract filename from figma:asset/filename
          const filename = id.replace('figma:asset/', '');
          const assetPath = path.resolve(__dirname, 'src/assets', filename);
          
          // Check if file exists
          if (!fs.existsSync(assetPath)) {
            throw new Error(
              `[figma:asset] File not found: ${filename}\n` +
              `Expected location: ${assetPath}\n` +
              `Please ensure the file exists in src/assets/`
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
          
          // Return a module that exports the public URL path
          return `export default "/assets/${filename}";`;
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