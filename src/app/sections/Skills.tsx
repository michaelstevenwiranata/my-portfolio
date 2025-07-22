import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    { name: 'C#', category: 'Languages' },
    { name: 'PHP', category: 'Languages' },
    { name: 'Kotlin', category: 'Languages' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'NestJS', category: 'Backend' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'PostgreSQL', category: 'Databases' },

    { name: 'Machine Learning', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'Natural Language Processing', category: 'AI/ML' },
    { name: 'Deep Learning', category: 'AI/ML' },

    { name: 'GraphQL', category: 'APIs' },
    { name: 'RESTful APIs', category: 'APIs' },

    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Postman', category: 'Tools' },
    { name: 'AWS', category: 'Cloud' },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id='skills' className='py-16 bg-gray-800 text-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-8'>My Skills</h2>
        <div className='max-w-4xl mx-auto'>
          {categories.map((category) => (
            <div key={category} className='mb-8'>
              <h3 className='text-2xl font-semibold mb-4 text-center md:text-left'>
                {category}
              </h3>
              <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className='bg-gray-700 text-gray-200 px-4 py-2 rounded-full shadow-lg transform transition duration-300 hover:scale-105'>
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
