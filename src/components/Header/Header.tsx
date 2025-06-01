import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

function Header() {
  return (
    <header className='w-full py-3 '>
      <div className='max-w-[1440px] justify-between flex items-center w-full mx-auto bg-[#E7E1D960]'>
        <h1 className='text-xl  '>Stoneground </h1>
        <p className='  hover:underline cursor-pointer text-center'>
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
