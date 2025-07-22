import { FlipWords } from './FlipWords';
import { motion } from 'motion/react';
export default function HeroText() {
  const words = ['Junior Developer', 'AI & ML Enthusiast', 'Web Developer'];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      {/* desktop */}
      <div className='flex-col hidden md:flex c-space'>
        <h1 className='text-4xl font-medium'>Hi I'm Steven</h1>
        <div className='flex flex-col items-start'>
          <p className='text-5xl font-medium'>
            Junior Developer <br /> driven by a deep curiosity for new
            technologies.
          </p>
        </div>
        <FlipWords words={words} className='font-black text-5xl' />
      </div>
      {/* mobile */}
      <div className='flex-col flex-col space-y-6 md:hidden'>
        <p className='text-4xl font-medium'>Hi I'm Steven</p>
        <div>
          <p className='text-4xl font-black text-neutral-300'>
            Junior Developer <br /> driven by a deep curiosity for new
            technologies.
          </p>
          <FlipWords words={words} className='font-black text-4xl'></FlipWords>
        </div>
      </div>
    </div>
  );
}
