import {
    Backdrop,
    Environment,
    OrbitControls,
    Scroll,
    ScrollControls,
    Sparkles,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Browse from '../components/Landing/Browse.tsx';
import Features from '../components/Landing/Features.tsx';
import Gallery from '../components/Landing/Gallery.tsx';
import Hero from '../components/Landing/Hero.tsx';
import LensModel from '../components/Landing/LensModel.jsx';

const Landing = () => {
    return (
        <>
            <Canvas style={{ height: '100vh' }}>
                <ambientLight intensity={0.1} />
                <pointLight position={[0, 50, 0]} intensity={0.5} />
                <Suspense fallback={null}>
                    <ScrollControls pages={4} damping={0.5}>
                        <LensModel scale={1.5} position={[0, 0, 0]} />
                        <Sparkles
                            size={1.4}
                            color={'#E5ECF3'}
                            scale={[5, 5, 5]}
                        ></Sparkles>
                        <Backdrop
                            receiveShadow={true}
                            floor={20.5}
                            scale={[50, 30, 10]}
                            position={[4, -10, 0]}
                            segments={100}
                        >
                            <meshStandardMaterial color='#d1eff9' />
                        </Backdrop>

                        <Scroll html>
                            <Hero />
                            <Features />
                            <Gallery />
                            <Browse />
                        </Scroll>
                    </ScrollControls>
                </Suspense>
                <Environment preset='city' blur={0.7} />
                <OrbitControls enabled={false} enableZoom={false} />
            </Canvas>
        </>
    );
};

export default Landing;
