import React from 'react';

function GalleryAboutBuyCoffee() {
  return (
    <div className='grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 '>
      <div className='hidden lg:flex  cursor-pointer py-20 bg-[#C0BAB5] items-center justify-center'>
        <div className='w-[120px] h-[120px]  flex items-center justify-center-safe rounded-full border-2 '>
          <span className='text-[#FFFFFF]'>GALLERY</span>
        </div>
      </div>
      <div className='flex items-center py-20 cursor-pointer justify-center bg-[#888D8C]'>
        <div className='w-[120px] h-[120px]  flex items-center justify-center-safe rounded-full border-2 '>
          <span className='text-[#FFFFFF]'>ABOUT</span>
        </div>
      </div>
      <div className='flex items-center cursor-pointer justify-center bg-[#8B7465]'>
        <div className='w-[140px] h-[140px] text-wrap  flex items-center justify-center-safe rounded-full border-2 '>
          <span className='text-[#FFFFFF]'>BUY OUR COFFEE</span>
        </div>
      </div>
    </div>
  );
}

export default GalleryAboutBuyCoffee;
