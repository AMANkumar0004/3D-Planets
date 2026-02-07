📌 3D-Planets

A visually engaging interactive 3D planets scene built with Three.js and Tailwind CSS.
Explore 3D planets, animations, and immersive space visuals — perfect for learning WebGL, Three.js, and frontend 3D development! 🚀🌍🌕🪐

🎯 Features

✨ Nice 3D planet visuals
✨ Rotation animation
✨ Camera controls
✨ Responsive design with Tailwind CSS
✨ Lightweight and performant
✨ Easy to customize

🛠️ Technologies Used
Tech	Purpose
Three.js	3D rendering & animation
Tailwind CSS	UI styling
Vite (optional)	Fast development build
HTML, CSS, JS	Core frontend
📁 Project Structure
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

🧩 Getting Started
🧪 Prerequisites

Make sure you have:

✔ Node.js installed
✔ npm (comes with Node.js)

📥 Installation

Clone the repo:

git clone https://github.com/AMANkumar0004/3D-Planets.git


Go to project folder:

cd 3D-Planets


Install dependencies:

npm install

🛠️ Build (Local Tailwind)

If you're using local Tailwind setup:

Add Tailwind directives in src/input.css:

@tailwind base;
@tailwind components;
@tailwind utilities;


Run build:

npm run build


Open index.html in browser.

🚀 Deployment

You can deploy this anywhere like:

✔ Vercel
✔ Netlify
✔ GitHub Pages

For Vercel:

Connect GitHub

Select 3D-Planets

Set build settings:

Build Command: npm run build
Output Directory: dist


Deploy!

🧠 How It Works

Three.js creates a 3D scene

Planets are added as spheres with textures

Animation loop keeps rotation moving

Controls allow interactive camera movement

🧩 Scripts

Inside package.json:

"scripts": {
  "build": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
  "start": "vite" //if configured
}

📸 Demo

🎥 Live demo: (paste deployed link when ready)
🌐 eg: https://3d-planets-yourid.vercel.app

👨‍💻 Contributing

Contributions are welcome!
Just fork the repo → make changes → open PR.

📝 License

This project is open source and available under the MIT License.

