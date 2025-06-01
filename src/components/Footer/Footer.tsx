import React from 'react';

function Footer() {
  return (
    <footer className=' bottom-0 flex h-[42vh] flex-col w-full bg-[#E7E1D9]'>
      <div className='w-full mt-20 flex flex-col items-center'>
        <h2 className='text-4xl  mb-20'>Stoneground Coffee</h2>
        <p className='cursor-none'>FIND US ON INSTAGRAM!</p>
      </div>
      <div className='w-full flex  border-t items-center h-full mt-20'>
        <span className='max-w-[1440px]  w-full mx-auto'>
          &copy; 2025. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
