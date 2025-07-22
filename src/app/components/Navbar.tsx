'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='bg-gray-800 p-4 fixed w-full z-50 top-0'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-bold'>
          Steven
        </Link>
        <div className='space-x-4'>
          <Link href='/' className='text-gray-300 hover:text-white'>
            Home
          </Link>
          <Link
            href='#about'
            onClick={(e) => handleClick(e, 'about')}
            className='text-gray-300 hover:text-white'>
            About
          </Link>
          <Link
            href='#skills'
            onClick={(e) => handleClick(e, 'skills')}
            className='text-gray-300 hover:text-white'>
            Skills
          </Link>
          <Link
            href='#projects'
            onClick={(e) => handleClick(e, 'projects')}
            className='text-gray-300 hover:text-white'>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
