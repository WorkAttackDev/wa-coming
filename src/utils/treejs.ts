import * as THREE from 'three';
import { GLTFLoader } from './GLTFLoader';
import { OrbitControls } from '../libs/OrbitControls';
// import * as dat from 'dat.gui';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from 'dat.gui';

// Debug
// const gui = new dat.GUI();

export const initTreejs = (canvas: HTMLCanvasElement) => {
	// Debug
	// const gui = new dat.GUI();

	// Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0xa0a0a0);
	scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

	// loader
	const loader = new GLTFLoader();

	let waObj;

	loader.load(
		'/3d/wa.glb',
		(gltf) => {
			waObj = gltf.scene;
			console.log(gltf);
			scene.add(gltf.scene);

			waObj.traverse((object) => {
				if (object.isMesh) object.castShadow = true;
			});

			// animation
			// const animations = gltf.animations;
			// const mixer = new THREE.AnimationMixer(waObj);
			// const numAnimations = animations.length;
		},
		(xhr) => {
			console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
		}
	);
	// Lights
	const light = new THREE.PointLight(0xff811c, 2);
	light.position.set(0, 10, 10);
	scene.add(light);

	/**
	 * Sizes
	 */
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	window.addEventListener('resize', () => {
		// Update sizes
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;

		// Update camera
		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();

		// Update renderer
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	});

	/**
	 * Camera
	 */
	// Base camera
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 0, 3);
	scene.add(camera);

	// Controls
	// const controls = new OrbitControls(camera, canvas)
	// controls.enableDamping = true

	/**
	 * Renderer
	 */
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas
	});
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;

	// controls
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.update();
	/**
	 * Animate
	 */
	const clock = new THREE.Clock();

	const tick = () => {
		const elapsedTime = clock.getElapsedTime();

		// Update objects
		// if (waObj) waObj.rotation.y = 0.5 * elapsedTime;

		// Update Orbital Controls
		// controls.update()

		// Render
		renderer.render(scene, camera);

		// Call tick again on the next frame
		window.requestAnimationFrame(tick);
	};

	tick();
};
