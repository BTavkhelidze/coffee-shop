'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { CoffeeCuo } from '../../../../public/images';
import { useScroll, useTransform, motion } from 'motion/react';

function HeroSect1() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  return (
    <section
      ref={container}
      className='w-full flex h-[120vh]  relative overflow-hidden'
    >
      {/* <div className='w-full absolute h-full top-0 left-0'>
        <Image
          src={HeroImg}
          alt='hero background image'
          className='w-full h-full'
        />
      </div> */}
      <motion.div
        style={{ y }}
        className='flex-1 flex items-end    w-full h-[50%]  p-5 '
      >
        <Image
          src={CoffeeCuo}
          alt='cup image'
          className='w-full object-contain h-full'
        />
      </motion.div>
      <div className='flex-1 px-5 text-[#242120] py-10  h-full flex-col w-full relative flex justify-center gap-8'>
        <h2 className='text-4xl  mb-20'>Stoneground Coffee</h2>
        <h3 className='text-xl'> More Than Your Typical Coffee Spot</h3>
        <span className='text-xs'>
          Latte | Espresso | Macchiato | Black Coffee | Mocha
        </span>

        <p className='text-sm'>
          Welcome to your daily retreat — where coffee is more than a drink,
          it’s a moment.
        </p>

        <p className='text-md'>
          At our café, every cup is crafted with intention — from the smooth,
          velvety latte to the bold simplicity of black coffee. Whether you're
          stopping in for a peaceful solo moment or meeting friends for an
          afternoon pick-me-up, we’ve created a space that feels like home (but
          with better coffee).
        </p>

        <p>
          ☕ Be Happy, Try Hygge Experience the comfort of warm tones, soft
          music, and rich aromas. Stay for one cup — or linger for more.
        </p>

        <span>📍 Stoneground Coffee – Chavchavadzis 13, Tbilisi, Georgia</span>
        <span>Open Daily | Weekdays: 7am – 6pm | Weekends: 8am – 6pm</span>
        <span>
          No reservations. No pressure. Just good coffee and good vibes.
        </span>
      </div>
    </section>
  );
}

export default HeroSect1;
