# Ichi - Tías Todoterreno

A modern, responsive landing page built with Astro and Tailwind CSS. This template is designed to be easily customizable through CSS custom properties (CSS variables) to adapt to different brands and themes.

## 🚀 Project Structure

```
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation header with smooth scrolling
│   │   ├── Hero.astro          # Hero with main CTA
│   │   ├── Plans.astro         # Pricing plans grid
│   │   ├── Features.astro      # Features overview
│   │   ├── FAQ.astro           # Frequently asked questions
│   │   └── Footer.astro        # Footer with links and social
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML layout
│   ├── pages/
│   │   └── index.astro         # Main landing page
│   └── styles/
│       └── global.css          # Global styles and CSS variables
├── astro.config.mjs
└── package.json
```

## 🎨 Customizing the Theme

All color schemes, typography, and spacing are controlled through CSS custom properties in `src/styles/global.css`. This makes it easy to rebrand the entire site by changing a few variables.

## 🛠 Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `bun install`     | Installs dependencies                        |
| `bun run dev`     | Starts local dev server at `localhost:4321`  |
| `bun run build`   | Build your production site to `./dist/`      |
| `bun run preview` | Preview your build locally, before deploying |

## 📱 Responsive Design

The landing page is fully responsive following Tailwind breakpoints modifiers

## ✨ Features

- **Semantic HTML**: Uses proper semantic tags for better accessibility and SEO
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **CSS Custom Properties**: Easy theming through CSS variables
- **Tailwind CSS v4**: Integrated via Vite plugin for utility classes
- **Performance Optimized**: Static site generation with Astro
- **No Extra External Dependencies**: Everything is develop using Astro + Tailwind

## 🎯 Usage as a Template

To use this as a template for another landing page:

1. **Update CSS Variables**: Modify colors in `src/styles/global.css`
2. **Replace Content**: Update text, images, and data in each component
3. **Add/Remove Sections**: Import/remove components in `src/pages/index.astro`
4. **Customize Navigation**: Update nav items in `src/components/Header.astro`
5. **Update Metadata**: Change title and description in `src/layouts/BaseLayout.astro`

## 📝 License

**Proprietary - Private Template**

This template is proprietary and confidential. Unauthorized copying, distribution, modification, or use of this template, via any medium, is strictly prohibited without explicit written permission from the owner.

© 2026 Ichi. All rights reserved.

For licensing inquiries or authorization requests, please contact the repository owner.
