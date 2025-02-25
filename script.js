document.addEventListener('DOMContentLoaded', () => {
    // 3D Profile Image Effect
    const profileContainer = document.getElementById('profile-container');
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(300, 300);
    profileContainer.appendChild(renderer.domElement);
    
    // Create a sphere geometry
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    
    // Load a profile image texture
    const texture = textureLoader.load('images/profile.jpg', () => {
        material.map = texture;
        material.needsUpdate = true;
    });
    
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        wireframe: true 
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    camera.position.z = 5;
    
    // Hover and rotation effects
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate sphere based on mouse position
        sphere.rotation.y += 0.01;
        sphere.rotation.x = mouseY * 0.5;
        sphere.rotation.z = mouseX * 0.5;
        
        renderer.render(scene, camera);
    }
    
    animate();
});

// Skill Card Hover Effects
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 20px rgba(52, 152, 219, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});
