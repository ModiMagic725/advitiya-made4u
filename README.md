# Lumora Resin

A concept landing page for a handmade resin jewellery and personalized gifts brand.
Built with plain HTML, CSS and JavaScript. No build step needed.

> This is a demo project. The brand, links, contact details and images are sample content.

## Live Demo

https://lumora-resin.netlify.app

## Features

- Animated loading screen
- 3D hero with floating jewellery
- Smooth page scrolling
- Floating product gallery
- Live preview to personalize a piece with name, initials and date
- Drag-to-rotate 3D pendant
- Gift ideas in a horizontal scroll gallery
- Customer words slider
- Fully responsive (mobile, tablet, desktop)

## Tech Stack

HTML5, CSS3, JavaScript, Three.js, GSAP + ScrollTrigger, Lenis, Swiper

## Run Locally

Open the project folder in a terminal and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Do not open `index.html` by double-clicking it. The 3D parts need a local server to work.

## Project Files

```
index.html   - page structure
style.css    - all styling
script.js    - animations, 3D and content
```

## Customize

Open `script.js` and edit the `BRAND` section at the top to change the Instagram, WhatsApp and email links.

To change images or products, edit `siteImages` and `products` in the same file. The HTML does not need to change.

Optional: add your own 3D model at `assets/models/product.glb`. If it is missing, the built-in 3D jewellery shows instead.

## Deploy

Drag the project folder to [Netlify Drop](https://app.netlify.com/drop), or connect the GitHub repo with no build command and publish directory `.`

## License

Free to use for learning and portfolio purposes.