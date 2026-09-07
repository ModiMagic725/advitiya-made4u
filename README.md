# Advitiya Made4U — Static 3D One-Page Website

## Run
From this folder:
```bash
python -m http.server 8000
```
Open `http://localhost:8000`.

Do not open `index.html` directly with `file://` because ES modules, GLTF loading and some browser APIs require a local server.

## Edit brand details
Open `script.js` and edit the single `BRAND` object near the top:
- `instagram`
- `whatsapp`
- `email`

## Replace demo images
All demo image URLs are centralized in `siteImages` and `products` inside `script.js`.
Replace the `https://images.unsplash.com/...` values with your real images.

For production local assets, use:
`assets/images/product-01.jpg`, etc.
Then change the corresponding JS value to:
`assets/images/product-01.jpg`

The HTML does not need to change.

## Add / remove products
Edit the `products` array in `script.js`.
Each product has:
- id
- name
- category
- image
- description

The product wall, collection and gift references use these data entries.

## Add a GLB/GLTF model
Put the model here:
`assets/models/product.glb`

The Three.js hero attempts to load it automatically. If it is missing or fails, the procedural jewellery composition stays active.

For a model with external textures, keep the model's texture paths relative to the model file.

## Assets
- `assets/images/` — production product photography
- `assets/models/` — GLB/GLTF
- `assets/textures/` — optional textures
- `assets/audio/` — optional future audio

## Stack
HTML5 + CSS3 + Vanilla ES6+ + Three.js + GSAP/ScrollTrigger + Lenis + Swiper.
No npm/build process is required.
