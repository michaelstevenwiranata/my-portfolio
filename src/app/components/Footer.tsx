import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6 mt-16'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; {new Date().getFullYear()} Michael Steven Wiranata</p>
        <div className='flex justify-center space-x-4 mt-4'>
          <p className='text-lg'>
            Email:{' '}
            <a
              href='mailto:steven.wiranata123@gmail.com'
              className='text-blue-400 hover:underline'>
              steven.wiranata123@gmail.com
            </a>
          </p>
          <a
            href='https://www.linkedin.com/in/steven-wiranata-555124291/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white'>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-10.935c0-2.49 1.266-3.765 3.484-3.765 2.217 0 3.516 1.275 3.516 3.765v10.935h4.982v-10.935c0-5.017-2.66-7.065-6.998-7.065-3.359 0-5.017 1.765-5.017 4.065v3.005z' />
            </svg>
          </a>
          <a
            href='https://github.com/michaelstevenwiranata'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-white'>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.677-.233.677-.522 0-.256-.009-1.04-.015-2.042-2.78-.602-3.375-1.34-3.375-1.34-.454-1.158-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.088.387-1.978 1.024-2.675-.103-.253-.446-1.268.097-2.646 0 0 .837-.27 2.75 1.025.79-.22 1.628-.33 2.464-.33.835 0 1.674.11 2.464.33 1.912-1.295 2.749-1.025 2.749-1.025.542 1.378.199 2.393.097 2.646.637.697 1.024 1.587 1.024 2.675 0 3.826-2.339 4.673-4.566 4.92.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .289.208.61.684.504C21.137 20.19 24 16.437 24 12.017 24 6.484 19.522 2 14 2h-2z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
