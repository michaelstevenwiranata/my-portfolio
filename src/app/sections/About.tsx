import React from 'react';

const About = () => {
  return (
    <section id='about' className='py-16 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-8'>About Me</h2>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='flex-shrink-0'>
              <img
                src='/222117046.jpg'
                alt='Steven - Informatics Student'
                className='w-64 h-64 rounded-full object-cover border-4 border-gray-700'
              />
            </div>
            <div className='flex-1 text-lg leading-relaxed'>
              <p className='mb-6'>
                Hi, I'm Steven, a 7th-semester Informatics student with a strong
                passion for software development, AI, and machine learning.
                Currently pursuing my degree, I've been building my skills in
                web development, programming, and emerging technologies through
                both academic projects and personal exploration.
              </p>
              <p className='mb-6'>
                Throughout my studies, I've gained experience with various
                programming languages and frameworks, working on projects that
                range from web applications to AI/ML implementations. I'm
                particularly drawn to the intersection of traditional software
                development and artificial intelligence, always eager to learn
                new technologies and explore innovative solutions.
              </p>
              <p>
                As I approach graduation, I'm actively seeking opportunities to
                apply my knowledge in real-world projects. I'm particularly
                interested in internships and entry-level positions where I can
                contribute to meaningful projects while continuing to grow as a
                developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
