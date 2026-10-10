import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Icosahedron wireframe core ─── */
function CoreSphere() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

/* ─── Glowing inner sphere ─── */
function InnerGlow() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const s = 1 + Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
    ref.current.scale.set(s, s, s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#6d28d9"
        emissiveIntensity={0.6}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

/* ─── Orbital ring ─── */
function OrbitalRing({ radius, color, speed, rotX, rotY }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * speed;
  });
  return (
    <mesh ref={ref} rotation={[rotX, rotY, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

/* ─── Floating satellite nodes ─── */
function Satellites({ count = 6 }) {
  const refs = useRef([]);
  const data = useMemo(() => {
    const arr = [];
    const colors = ["#38bdf8", "#818cf8", "#c084fc", "#06b6d4", "#60a5fa"];
    for (let i = 0; i < count; i++) {
      arr.push({
        angle: (i / count) * Math.PI * 2,
        radius: 2 + (i % 3) * 0.3,
        speed: 0.006 + (i % 3) * 0.003,
        yOffset: (Math.random() - 0.5) * 1.2,
        color: colors[i % colors.length],
      });
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    data.forEach((d, i) => {
      if (!refs.current[i]) return;
      d.angle += d.speed;
      refs.current[i].position.x = Math.cos(d.angle) * d.radius;
      refs.current[i].position.z = Math.sin(d.angle) * d.radius;
      refs.current[i].position.y =
        d.yOffset + Math.sin(t * 1.2 + d.angle) * 0.25;
      refs.current[i].rotation.x += 0.02;
      refs.current[i].rotation.y += 0.02;
    });
  });

  return (
    <>
      {data.map((d, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <octahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial
            color={d.color}
            emissive={d.color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </>
  );
}

/* ─── Particle field ─── */
function Particles({ count = 50 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 7;
      arr[i + 1] = (Math.random() - 0.5) * 5;
      arr[i + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#93c5fd"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Scene composition ─── */
function Scene() {
  const groupRef = useRef();

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y +=
      (pointer.x * 0.3 - groupRef.current.rotation.y) * 0.02;
    groupRef.current.rotation.x +=
      (pointer.y * 0.15 - groupRef.current.rotation.x) * 0.02;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 5, 4]} color="#38bdf8" intensity={2} />
      <pointLight position={[-4, -4, 3]} color="#a855f7" intensity={1.5} />
      <group ref={groupRef}>
        <CoreSphere />
        <InnerGlow />
        <OrbitalRing
          radius={2.2}
          color="#38bdf8"
          speed={0.1}
          rotX={Math.PI / 3}
          rotY={0}
        />
        <OrbitalRing
          radius={2.6}
          color="#a855f7"
          speed={-0.07}
          rotX={-Math.PI / 6}
          rotY={Math.PI / 4}
        />
        <Satellites />
      </group>
      <Particles />
    </>
  );
}

/* ─── Exported component ─── */
export default function ThreeDHero() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
