import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

function Header() {
  return (
    <header className='z-100 fixed bg-[#00000070] text-white w-full py-3 '>
      <div className='px-5 max-w-[1440px] justify-between flex items-center w-full mx-auto '>
        <h1 className='lg:text-xl text-lg '>Stoneground </h1>
        <p className='  hover:underline cursor-pointer text-center lg:text-lg text-sm '>
          Buy Coffe
        </p>
        <div>
          <LuShoppingCart />
        </div>
      </div>
    </header>
  );
}

export default Header;
