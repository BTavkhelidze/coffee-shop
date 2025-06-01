'use client';
import React, { useRef } from 'react';
import SubscribeForUpdatesAndScecialDiscounts from './SubscribeForUpdatesAndScecialDiscounts';
import GalleryAboutBuyCoffee from './GalleryAboutBuyCoffee';
import Image from 'next/image';
import { Tbilisi } from '../../../../public/images';
import { useScroll, useTransform, motion } from 'motion/react';
import useDimension from '@/useDimensions';

function BuySubscribeAbout() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const { height } = useDimension();

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  return (
    <section
      ref={container}
      className='flex relative flex-col h-screen lg:h-[120vh]'
    >
      <motion.div
        style={{ y }}
        className=' hidden lg:flex absolute -top-[75%] left-0 -z-10'
      >
        <Image src={Tbilisi} alt='Tbilisi view Image' />
      </motion.div>
      <div>
        <SubscribeForUpdatesAndScecialDiscounts />
        <GalleryAboutBuyCoffee />
      </div>
    </section>
  );
}

export default BuySubscribeAbout;
