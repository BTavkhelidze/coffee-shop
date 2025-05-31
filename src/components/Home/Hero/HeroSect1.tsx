import Image from 'next/image';
import React from 'react';
import { HeroImg } from '../../../../public/images';

function HeroSect1() {
  return (
    <section className='w-full h-screen  responsive'>
      <div className='w-full absolute h-full top-0 left-0'>
        <Image
          src={HeroImg}
          alt='hero background image'
          className='w-full h-full'
        />
      </div>
      <div className='max-w-[1440px] m-auto h-full flex-col w-full relative flex items-center justify-center'>
        <h2>Start your Day with a Perfect Coffee</h2>
        <p>
          {`     „Way too much coffee. But if it weren't for the coffee, I'd have no
          identifiable personality whatsoever.“`}
        </p>

        <button className='px-[30px] py-[16px] border rounded-[12px] border-[#E6B08D] text-[#E6B08D] cursor-pointer'>
          OUR OFFER
        </button>
      </div>
    </section>
  );
}

export default HeroSect1;
