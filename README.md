# nflare

**nflare**, soon to be absorbed into **Flare** proper during the upcoming rewrite, is a powerful 2D animation software designed for creating cartoons, banners, games, and web content. Conceived as an advanced **fork of nanofl**, it maintains a lightweight footprint while modernizing the core graphics stack, improving user workflow, and extending features for modern multimedia creators.

## 🚀 Key Features

### 🎨 2D & 3D Graphics
* **Vector Tools:** Complete vector engine supporting edges, polygons, and boolean operations.
* **Raster Assets:** Native handling of `png`, `jpeg`, and rasterized `svg` files.
* **Layer Management:** Advanced timeline workflows incorporating groups, masks, classic tweens, and motion guides.
* **Effects & Filters:** Native color adjustments (alpha, brightness, tint) alongside production filters like Blur, Drop Shadow, and Glow.
* **Gradient Fills:** Support for linear gradients, radial gradients, and bitmap fill textures.
* **3D Integration:** Powered by **ThreeJS** with native `GLTF` loading and automatic conversion from Blender `.blend` files to `GLTF`.

### 🔤 Rich Text & Typography
* **Canvas Text:** Full text styling, engine metrics, and custom strokes.
* **Web Fonts:** Native support for local `woff2` assets and seamless importing from **Google Fonts**.

### 💻 Advanced Coding Environment
* **HTML5 Core:** Built entirely upon the **EaselJS** (CreateJS) engine framework.
* **Streamlined Output:** Compiles workflows directly into a unified, compact `application.js` file.
* **Developer Tooling:** Built-in boilerplate templates for **TypeScript** and **VS Code** optimization.

### 🎵 Audio & Asset Optimization
* **Texture Atlases:** Automated texture atlas generation to pack vector and raster layouts efficiently.
* **Seamless Audio:** Advanced sound system supporting clean loop playback, generating optimized `.ogg` files automatically upon publishing.

## 🔌 Plugins & IO Formats

### Importers
* **Adobe Flash Documents:** Import legacy work directly via `*.fla` and `*.xfl` files.
* **Vector Graphics:** Native import for standard vector `*.svg` files.

### Exporters
* **Vector Outputs:** `*.svg` format structures.
* **Static Stills:** Single image capture (`png`, `jpg`).
* **Animations:** Image sequence frames (`png`, `jpg`) or direct **Video encoding (`mp4`)** processed via integrated **FFmpeg**.

### Extended Tools
* **Batch Processing:** Command-line support for headless rendering and asset pipelines.
* **Modular Plugins:** Extensible infrastructure for custom Filters, Importers, Exporters, and Asset Library Loaders.
* **Dynamic Sizing:** Built-in Support for flexible **Scale Modes**.

## 🤝 Contributing

We welcome community contributions to make nflare the best open-source animation ecosystem possible:

1. **Fork** this repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push your branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

## 📜 Credits & Attributions

nflare builds upon the monumental efforts of the open-source community, inheriting dependencies from the original nanofl ecosystem:
* **CreateJS / EaselJS Framework** by gskinner
* **ThreeJS Library** by the three.js authors
* **jQuery Framework** by the jQuery Foundation
* **FFmpeg Ecosystem** by the FFmpeg contributors
* **Silk Icons** designed by Mark James

---
*nflare is an independent open-source software project fork and is not directly affiliated with or officially endorsed by the original nanofl authors.*

