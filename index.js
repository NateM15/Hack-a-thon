//setting up the scene
const scene = new THREE.Scene();
//creating the camera with FOV, aspect ratio and then near and far clipping plane.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Creates the render where the objects appear, 
//set to the height and width of the window it is in
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//creating a cube
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshBasicMaterial({color: 0x0fff09});
const material2 = new THREE.MeshBasicMaterial({color: 0xffffff});
const sphereGeometry = new THREE.SphereGeometry(20, 40, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere)

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const cube2 = new THREE.Mesh(geometry, material2);
scene.add(cube2);

//creating light

//moves the camera away from the object so when you use scene.add 
//they don't appear in the same location
camera.position.z = 150;

//runs a loop that actually animates the scene
function animate() {
    requestAnimationFrame(animate);
    sphere.position.x = -70
    sphere.position.y = 70
    cube2.position.x = 70
    cube2.position.y = 70
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clintY / window.innerHeight) * 2 + 1;
}

// function render() {
//     raycaster.setFromCamera(pointer, camera);
//     const intersects = raycaster.intersectObjects(scene.children);
//     for (let i = 0; i < intersects.length; i++){
//         intersects[i].cube.rotation.x += 0.01
//     }
//     renderer.render(scene, camera)
// }
// window.addEventListener('onPointerMove', onPointerMove);
// window.requestAnimationFrame(render);