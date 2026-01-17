# TeamWorks - SME Training Program Website

A modern, static website for TeamWorks training programs in Southeast Asia.

## 🚀 Deployment

This is a **static HTML/CSS/JS website** that works without any build process. Simply upload the `/public` folder to your hosting provider.

### Hostinger Deployment

1. Log in to your Hostinger control panel
2. Navigate to File Manager
3. Upload all files from the `/public` folder to your `public_html` directory
4. Your site is now live!

### Alternative Hosting Options

- **Netlify**: Drag and drop the `/public` folder
- **Vercel**: Import and point to `/public` as root
- **GitHub Pages**: Push `/public` contents to your repository
- **Any shared hosting**: Upload via FTP to your web root

## 📁 File Structure

```
/public
├── index.html          # Main HTML file
├── /css
│   └── style.css      # Custom CSS styles
├── /js
│   └── main.js        # JavaScript functionality
└── /assets            # Images and media (if needed)
```

## 🎨 Features

- **Pure HTML/CSS/JS** - No build pipeline required
- **Tailwind CSS** - Via CDN for utility classes
- **Lucide Icons** - Via CDN for modern icons
- **Fully Responsive** - Mobile-first design
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessible** - WCAG compliant, keyboard navigation
- **Fast Loading** - Optimized assets and minimal dependencies

## 🎯 Course Colors

The site features 5 vibrant course themes:

1. **Creating Super Teams** - Purple (#6D28D9)
2. **Design Like Apple** - Pink (#EC4899)
3. **Work Clear, Work Fast** - Orange (#F59E0B)
4. **Lean Six Sigma** - Green (#16A34A)
5. **Prompt Your AI Better** - Blue (#0EA5E9)

## 🛠️ Customization

### Updating Content

Simply edit `index.html` - all content is in one file for easy management.

### Changing Colors

Course colors are defined inline. Search for color values in `index.html` to update them.

### Adding Images

1. Add images to `/public/assets/`
2. Update image `src` attributes in HTML
3. Use optimized formats (WebP) when possible

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Local Development

No build tools needed! Simply:

1. Open `index.html` in your browser
2. Or use a simple local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```

## 📄 License

© 2026 TeamWorks. All rights reserved.

## 🙋 Support

For customization help or technical support, contact your development team.
