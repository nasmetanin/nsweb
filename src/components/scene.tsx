"use client";

import styles from '@/styles/scene.module.css'
import { Suspense, use, useEffect, useState } from 'react';
import Computer from '@/models/computer'
// import Netrunner from '@/models/netrunner'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@/components/loader';
import { gsap } from "gsap";
import * as THREE from "three";
import { CameraControls } from '@react-three/drei';


export default function Scene() {
    const [meshState, setMeshState] = useState({
        rotation: [0, 1.6, 0]
    });
    const [screenScale, setScreenScale] = useState(1);

    const adjustScreenScale = () => {

        if (window.innerWidth < 768) {
            setScreenScale(0.7);
        }

    }

    const moveMesh = (e: MouseEvent) => {
        const mouse = new THREE.Vector2();

        let rotation = {
            x: meshState.rotation[0],
            y: meshState.rotation[1],
            z: meshState.rotation[2]
        }

        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        rotation.x += mouse.y * 0.005;
        rotation.y += mouse.x * 0.005;

        gsap.to(rotation, {
            x: rotation.x,
            duration: 1,
            ease: 'power3.out',
            onUpdate: () => {
                setMeshState({
                    rotation: [rotation.x, rotation.y, rotation.z]
                })
            }
        });
    }

    useEffect(() => {
        adjustScreenScale();
        window.addEventListener('mousemove', moveMesh, false);
        window.addEventListener('resize', adjustScreenScale, false);

        return () => {
            window.removeEventListener('mousemove', moveMesh, false);
            window.removeEventListener('resize', adjustScreenScale, false);
        }
    }, []);

    return (
        <>
            <Canvas
                className={
                    styles.scene_intro
                } camera={
                    { near: 0.1, far: 50, fov: 75, position: [1.2, 0.1, 0] }
                }
                style={{ height: '100%', width: '100%' }}
                gl={{ antialias: true }}
                dpr={[1, 3]}
                shadows={true}>
                <CameraControls
                    dampingFactor={0.1}
                    minDistance={1.2}
                    maxDistance={1.2}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}

                />

                <Suspense fallback={<Loader />}>

                    <ambientLight intensity={2}
                        color={'#2813e775'}
                    />
                    <directionalLight position={[5, 3, 0]} intensity={1.2} castShadow={true}
                        color={'#ff8c00'}
                    />
                    <directionalLight position={[-10, 3, 0]} intensity={0.3} castShadow={true}
                        color={'#6c63ff'}
                    />
                    <directionalLight position={[-5, 3, 3]} intensity={1} castShadow={true}
                        color={'#6c63ff'}
                    />

                    <Computer
                        position={[3, -4.3, -7]}
                        rotation={meshState.rotation}
                        scale={[screenScale, screenScale, screenScale]}
                        castShadow={true}
                        receiveShadow={true}
                    />

                </Suspense>

            </Canvas>
        </>
    )
}
