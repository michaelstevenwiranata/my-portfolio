'use client';
import { Canvas } from '@react-three/fiber';
import HeroText from '../components/HeroText';
import { Mecha } from '../components/Model';
import { Model } from '../components/Model_lego';
import { Car } from '../components/Model_car';

export default function Hero() {
  return (
    <section id="home" className='relative flex min-h-screen overflow-hidden'>
      {/* Text is positioned on top */}
      <div className='relative z-10 w-full flex items-start justify-center md:justify-start'>
        <HeroText />
      </div>

      {/* Canvas is the background */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2.4} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Car></Car>
        </Canvas>
      </div>
    </section>
  );
}
