import React from 'react';
import { CiCoffeeCup } from 'react-icons/ci';

function SubscribeForUpdatesAndScecialDiscounts() {
  return (
    <section className='w-full bg-[#E7E1D9] py-10 flex flex-col items-center gap-8 text-[#242120]'>
      <div className='flex ml-20 gap-20'>
        <h4 className='text-3xl text-center'>Welcome</h4>
        <CiCoffeeCup className=' justify-self-end' />
      </div>
      <p className='text-lg max-w-sm text-center'>
        SUBSCRIBE FOR UPDATES AND SPECIAL DISCOUNTS
      </p>
      <form className='flex max-w-2xl w-full text-center items-center flex-col gap-3'>
        <div className='flex w-full gap-4'>
          <label htmlFor='' className='border-b flex-1'>
            <input type='text' placeholder='Name' className='w-full ' />
          </label>
          <label htmlFor='' className='border-b flex-1'>
            <input type='email' placeholder='Email' className='w-full' />
          </label>
        </div>
        <button
          type='submit'
          className='cursor-pointer hover:border-b self-center transform-border duration-4'
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default SubscribeForUpdatesAndScecialDiscounts;
