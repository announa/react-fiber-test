import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { Icosahedron } from './icosahedron/Icosahedron';
import { Sphere } from './sphere/Sphere';
import { Tree } from './tree/Tree';

export const Objects = () => {
  const box = useRef<Mesh>(null);
  const sphere = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (box.current) {
      box.current.rotation.x = clock.getElapsedTime();
    }
    if (sphere.current) {
      sphere.current.position.x = -4 + Math.cos(clock.getElapsedTime() / 5);
      sphere.current.position.y = -1 + Math.sin(clock.getElapsedTime() / 5);
    }
  });

  return (
    <>
      <Icosahedron ref={box} />
      <Sphere ref={sphere} />
      <Tree />
    </>
  );
};
