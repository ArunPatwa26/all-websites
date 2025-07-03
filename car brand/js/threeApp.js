// Initialize Three.js scene
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('carCanvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Add lights
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Add car model (placeholder - would be loaded from GLTF)
  const geometry = new THREE.BoxGeometry(2, 1, 4);
  const material = new THREE.MeshPhongMaterial({ 
    color: 0x00ffff,
    emissive: 0x003333,
    specular: 0xffffff,
    shininess: 100,
    transparent: true,
    opacity: 0.8
  });
  
  const car = new THREE.Mesh(geometry, material);
  scene.add(car);
  
  camera.position.z = 5;
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    car.rotation.y += 0.005;
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Scroll interaction
  window.addEventListener('scroll', () => {
    car.rotation.x = window.scrollY * 0.001;
  });
});