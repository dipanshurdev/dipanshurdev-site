import { useEffect, useRef } from "react";
import * as THREE from "three";
import useStore from "../../libs/state";

const ParticlesRotate: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useStore(); // Access the theme (dark or light mode)

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

    // Set background color based on theme
    renderer.setClearColor(
      new THREE.Color(theme === "dark" ? 0x171717 : 0xe5e7eb),
      0
    );

    if (!mountRef.current) {
      console.log("mountRef is null");
    } else {
      mountRef.current.appendChild(renderer.domElement);
    }

    const particleCount = theme === "light" ? 1200 : 444; // Less particles in light mode to space them evenly
    const particles = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);

    // Position particles differently based on the theme
    if (theme === "light") {
      // Light mode: Particles evenly spaced
      const gridSize = Math.ceil(Math.sqrt(particleCount)); // Number of particles per row/column
      const spacing = 10; // Space between particles
      let index = 0;

      for (let i = -gridSize / 2; i < gridSize / 2; i++) {
        for (let j = -gridSize / 2; j < gridSize / 2; j++) {
          if (index < particleCount) {
            positions[index * 3] = i * spacing;
            positions[index * 3 + 1] = j * spacing;
            positions[index * 3 + 2] = 0; // Keep Z the same (flat)
            index++;
          }
        }
      }
    } else {
      // Dark mode: Random particle positions
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      }
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // @ts-ignore
    const createCircleTexture = (): THREE.CanvasTexture | null => {
      const size = 100;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      // Draw a circle with theme-based colors
      ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#171717"; // Light or dark mode fill color
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleMaterial = new THREE.PointsMaterial({
      map: createCircleTexture(),
      size: theme === "dark" ? 1.0 : 1.2,
      sizeAttenuation: false,
      transparent: true,
      alphaTest: 0.5,
      color: theme === "dark" ? 0xe5e7eb : 0x171717, // Different color based on theme
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);

    scene.add(particleSystem);
    camera.position.z = theme === "dark" ? 50 : 100;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (theme === "dark") {
        // Dark mode: Rotate particles
        particleSystem.rotation.y += 0.0008;
      }
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listeners and stop rendering
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]); // Re-run the effect when the theme changes

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
      className={theme === "light" ? "bg-lightGradient" : ""}
    />
  );
};

export default ParticlesRotate;

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import useStore from "../../libs/state";

// const ParticlesRotate: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);
//   const { theme } = useStore(); // Access the theme (dark or light mode)

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

//     // Set clear background to transparent, and use CSS for the gradient background
//     renderer.setClearColor(new THREE.Color(0x000000), 0);

//     if (!mountRef.current) {
//       console.log("mountRef is null");
//     } else {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     const particleCount = theme === "light" ? 1200 : 444; // Less particles in light mode to space them evenly
//     const particles = new THREE.BufferGeometry();

//     const positions = new Float32Array(particleCount * 3);

//     // Position particles differently based on the theme
//     if (theme === "light") {
//       // Light mode: Particles evenly spaced
//       const gridSize = Math.ceil(Math.sqrt(particleCount)); // Number of particles per row/column
//       const spacing = 10; // Space between particles
//       let index = 0;

//       for (let i = -gridSize / 2; i < gridSize / 2; i++) {
//         for (let j = -gridSize / 2; j < gridSize / 2; j++) {
//           if (index < particleCount) {
//             positions[index * 3] = i * spacing;
//             positions[index * 3 + 1] = j * spacing;
//             positions[index * 3 + 2] = 0; // Keep Z the same (flat)
//             index++;
//           }
//         }
//       }
//     } else {
//       // Dark mode: Random particle positions
//       for (let i = 0; i < particleCount; i++) {
//         positions[i * 3] = (Math.random() - 0.5) * 200;
//         positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
//         positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
//       }
//     }

//     particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//     // @ts-ignore
//     const createCircleTexture = (): THREE.CanvasTexture | null => {
//       const size = 100;
//       const canvas = document.createElement("canvas");
//       canvas.width = size;
//       canvas.height = size;

//       const ctx = canvas.getContext("2d");
//       if (!ctx) return null;

//       // Draw a circle with theme-based colors
//       ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#171717"; // Light or dark mode fill color
//       ctx.beginPath();
//       ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
//       ctx.fill();

//       const texture = new THREE.CanvasTexture(canvas);
//       return texture;
//     };

//     const particleMaterial = new THREE.PointsMaterial({
//       map: createCircleTexture(),
//       size: theme === "dark" ? 1.0 : 1.2,
//       sizeAttenuation: false,
//       transparent: true,
//       alphaTest: 0.5,
//       color: theme === "dark" ? 0xe5e5e5 : 0x171717, // Different color based on theme
//     });

//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     scene.add(particleSystem);

//     camera.position.z = theme === "dark" ? 50 : 100;

//     // Render loop
//     const render = () => {
//       renderer.render(scene, camera);
//     };

//     render();

//     // Handle window resizing
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup function to remove event listeners and stop rendering
//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [theme]); // Re-run the effect when the theme changes

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         zIndex: -1,
//         width: "100%",
//         height: "100%",
//         // background: "linear-gradient(to bottom, #3a7bd5, #00d2ff)", // Blue gradient background
//       }}
//     />
//   );
// };

// export default ParticlesRotate;
