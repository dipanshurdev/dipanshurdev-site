import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreejsBg: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Canvar color
    renderer.setClearColor(new THREE.Color(0x171717));
    mountRef.current?.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 444;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3); // should be multiplied by 3 instead of 2 for XYZ positions

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Create a circle texture for rounded particles
    // @ts-ignore
    const createCircleTexture = (): THREE.CanvasTexture | null => {
      const size = 100;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      // Draw a circle
      ctx.fillStyle = "#e5e7eb";
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // Create material for particles using the circle texture
    const particleMaterial = new THREE.PointsMaterial({
      map: createCircleTexture(),
      size: 0.8,
      sizeAttenuation: false,
      transparent: true,
      alphaTest: 0.5,
      color: 0xe5e7eb,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 50;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.0008; // Rotate particles around Y-axis
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default ThreejsBg;

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// const ThreejsBg = () => {
//   const mountRef = useRef(null);
//   const [theme, setTheme] = useState("dark"); // Default theme is dark

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Set the background color based on the theme
//     const setBackground = (theme) => {
//       if (theme === "dark") {
//         renderer.setClearColor(new THREE.Color(0x000000)); // Dark mode background (black)
//       } else {
//         renderer.setClearColor(new THREE.Color(0xffffff)); // Light mode background (white)
//       }
//     };

//     setBackground(theme); // Initial background based on theme

//     // Create particles
//     const particleCount = 888;
//     const particles = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 200;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
//     }

//     particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//     // Create particle material (Change color based on theme)
//     const createParticleMaterial = (theme) => {
//       return new THREE.PointsMaterial({
//         map: createCircleTexture(),
//         size: 0.2,
//         sizeAttenuation: false, // Uniform particle size
//         transparent: true,
//         alphaTest: 0.5,
//         color: theme === "dark" ? 0xffffff : 0x000000, // White particles in dark mode, black in light mode
//       });
//     };

//     const particleMaterial = createParticleMaterial(theme);
//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     scene.add(particleSystem);

//     camera.position.z = 50;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       particleSystem.rotation.y += 0.0008; // Rotate particles
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [theme]); // Re-run the effect when theme changes

//   // Toggle theme (dark/light mode)
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   return (
//     <>
//       <div
//         ref={mountRef}
//         style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
//       />
//       <button onClick={toggleTheme} style={{ position: "absolute", top: 20, left: 20 }}>
//         Toggle {theme === "dark" ? "Light" : "Dark"} Mode
//       </button>
//     </>
//   );
// };

// export default ThreejsBg;
