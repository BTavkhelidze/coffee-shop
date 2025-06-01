'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'motion/react';
import { CoffeShop } from '../../../../public/images';
import Image from 'next/image';
import Lenis from 'lenis';
import useDimension from '@/useDimensions';

function CoffeStoreS2() {
  const container = useRef(null);

  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  return (
    <section className='h-[145vh]  w-full  '>
      <div ref={container} className='w-full  h-full overflow-hidden'>
        <motion.div
          style={{ y }}
          className='w-full h-full  -top-[55%] relative'
        >
          <Image
            src={CoffeShop}
            alt='CoffeShop'
            className='w-full h-[100%] object-contain'
          />
        </motion.div>
      </div>
    </section>
  );
}

export default CoffeStoreS2;
