import './style.css'


import * as THREE from 'three'
import { gsap } from 'gsap';

import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 100)
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') , antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)



// load hdr file and apply it to scene
const loader = new RGBELoader();
loader.load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/moonlit_golf_1k.hdr",function(texture){
texture.mapping = THREE.EquirectangularReflectionMapping;
texture.encoding = THREE.sRGBEncoding;

scene.environment = texture;
});





const radius = 1.3;
const segments = 32;
const orbitRadius = 5;const colors = [0x00ff00, 0xff0000, 0x0000ff, 0xffff00];
const textures = ["./csilla/color.png","./earth/map.jpg","./venus/map.jpg","./volcanic/color.png"];
const spheres = new THREE.Group();


const starTexture = new THREE.TextureLoader().load('/stars.jpg');
starTexture.colorSpace = THREE.SRGBColorSpace;
const geometryBig = new THREE.SphereGeometry(50,64,64);
const materialBig = new THREE.MeshStandardMaterial({ map: starTexture ,side:THREE.BackSide});
const bigSphere = new THREE.Mesh(geometryBig, materialBig);
scene.add(bigSphere);

const sphereMesh =[];

for(let i = 0; i < 4; i++) {

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textures[i]);
  texture.colorSpace = THREE.SRGBColorSpace;


  const geometry = new THREE.SphereGeometry(radius, segments, segments);
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);
  sphereMesh.push(sphere);


  
  material.map = texture;
  material.needsUpdate = true;
  
  

  const angle = (i/4)*(Math.PI*2);
  sphere.position.x = orbitRadius * Math.cos(angle);
  sphere.position.z = orbitRadius * Math.sin(angle);
  spheres.add(sphere);
  
}

spheres.rotation.x = 0.08;
spheres.position.y = -0.9;
scene.add(spheres);


camera.position.z = 9;




let lastwheelTime = 0;
const throttleDelay = 2000;
let scrollCount = 0;

function handleWheel(event) {
  const currentTime = Date.now();
  if (currentTime - lastwheelTime >= throttleDelay) {
    
    
    lastwheelTime = currentTime;
    const direction = event.deltaY > 0 ? "down" : "up";

    scrollCount = (scrollCount + 1) % 4;
   
    


    const heading = document.querySelectorAll(".heading");
    gsap.to(heading,{duration:1,
      y:`-=${100}%`,
      ease:"power2.inOut"});

      gsap.to(spheres.rotation, { duration: 1, y: `-=${Math.PI /2 }`, ease:"power2.inOut" });

      if (scrollCount === 0) {
        gsap.to(heading,{duration:1,
          y: `0`,
          ease:"power2.inOut"});
      }


    
  }
 
}
window.addEventListener('wheel', handleWheel);






window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate)
  
  for(let i = 0; i < sphereMesh.length; i++) {
    const sphere = sphereMesh[i];
    sphere.rotation.y = clock.getElapsedTime() * 0.02;
  }
  
  renderer.render(scene, camera)
}
animate()
