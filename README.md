# 🚀 3D-Planets

A visually engaging **interactive 3D planets scene** built using **Three.js** and **Tailwind CSS**.  
Explore animated planets, smooth rotations, and immersive space visuals — perfect for learning **WebGL, Three.js, and modern frontend 3D development**. 🌍🌕🪐

---

## 🎯 Features

- ✨ Beautiful 3D planet visuals  
- 🔄 Smooth rotation animations  
- 🎥 Interactive camera controls  
- 📱 Responsive design with Tailwind CSS  
- ⚡ Lightweight and performant  
- 🛠️ Easy to customize and extend  

---

## 🛠️ Technologies Used

| Tech | Purpose |
|-------|------------|
| Three.js | 3D rendering & animations |
| Tailwind CSS | UI styling |
| Vite (optional) | Fast development & bundling |
| HTML, CSS, JS | Core frontend |

---

## 📁 Project Structure

```
3D-Planets
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── js/
│   │   └── main.js
│   └── styles/
│       └── input.css
├── dist/
│   └── output.css
└── README.md
```

---

## 🧩 Getting Started

### 🧪 Prerequisites

- Node.js installed  
- npm installed  

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/AMANkumar0004/3D-Planets.git
```

Move into the project folder:

```bash
cd 3D-Planets
```

Install dependencies:

```bash
npm install
```

---

## 🛠️ Build (Local Tailwind Setup)

Add Tailwind directives inside:

`src/input.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run Tailwind build:

```bash
npm run build
```

Open `index.html` in your browser.

---

## 🚀 Deployment

Deploy easily on:

- Vercel
- Netlify
- GitHub Pages

### Vercel Settings

```
Build Command: npm run build
Output Directory: dist
```

---

## 🧠 How It Works

- Three.js creates the 3D scene  
- Planets use sphere geometry + textures  
- Animation loop handles rotation  
- Camera controls allow interaction  

---

## 🧩 Scripts

```json
"scripts": {
  "build": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
  "start": "vite"
}
```

---

## 📸 Demo

Live: https://3-d-planets-pied.vercel.app/

---

## 👨‍💻 Contributing

1. Fork the repo  
2. Make changes  
3. Open a Pull Request  

---

## 📝 License

MIT License
