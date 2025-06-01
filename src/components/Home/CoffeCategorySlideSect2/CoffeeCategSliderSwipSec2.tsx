'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AnimatePresence, motion, easeIn, easeInOut } from 'framer-motion';
import { Bean1, Bean2 } from '../../../../public/images';

import 'swiper/css';
import useDimension from '@/useDimensions';
import { ICoffee } from './CoffeeCategSwiperSect2';

interface IProps {
  categories: ICoffee[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  swiperRef: React.RefObject<any>;
  handleSetActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
}

const CoffeeCategSliderSwipSec2: React.FC<IProps> = ({
  categories,
  swiperRef,
  handleSetActiveIndex,
  activeIndex,
}) => {
  const { width } = useDimension();

  return (
    <div className=' w-full  h-screen'>
      <Swiper
        ref={swiperRef}
        speed={500}
        direction='vertical'
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => handleSetActiveIndex(swiper.activeIndex)}
        className='w-full h-full'
      >
        {categories.map((el, i) => (
          <SwiperSlide key={el.id}>
            <div className='w-full h-full flex flex-col lg:flex-row '>
              <div
                className='flex-1 flex justify-center items-center h-full px-5'
                style={{ background: el.bgColor }}
              >
                <div className='flex gap-10 relative'>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ y: '-100vh', rotate: -180, opacity: 0 }}
                        animate={{ y: 0, rotate: -45, opacity: 1 }}
                        exit={{ y: '100vh', opacity: 0 }}
                        transition={{ duration: 1.0 }}
                        className='absolute lg:-top-30 -top-10 -right-10 lg:-right-20 lg:max-w-[130px] w-full max-w-[100px] max-h-[400px]'
                      >
                        <Image
                          src={el.leaf}
                          alt={`${el.name} leaf`}
                          className='w-full h-full'
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: '-100vw', rotate: -180, opacity: 0 }}
                        animate={{ x: 0, rotate: -45, opacity: 1 }}
                        exit={{ x: '100vw', opacity: 0 }}
                        transition={{ duration: 1.0, ease: easeInOut }}
                        className='max-w-[45px] w-full h-[45px] left-10 -top-15 sm:-left-20 absolute'
                      >
                        <Image
                          src={Bean1}
                          alt='bean image'
                          className='w-full h-full'
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: '-100vw', rotate: -180, opacity: 0 }}
                        animate={{ x: 0, rotate: -45, opacity: 1 }}
                        exit={{ x: '100vw', opacity: 0 }}
                        transition={{ duration: 1.0, ease: easeIn }}
                        className='max-w-[45px] w-full h-[45px] lg:-bottom-30 bottom-50 right-10 lg:-right-20 absolute'
                      >
                        <Image src={Bean1} alt='bean image' fill />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: '-100vw', rotate: -180, opacity: 0 }}
                        animate={{ x: 0, rotate: -45, opacity: 1 }}
                        exit={{ x: '100vw', opacity: 0 }}
                        transition={{ duration: 0.98, ease: easeIn }}
                        className='max-w-[45px] w-full h-[45px] -bottom-20 right-20 absolute'
                      >
                        <Image src={Bean1} alt='bean image' fill />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: '-100vw', rotate: -180, opacity: 0 }}
                        animate={{ x: 0, rotate: -45, opacity: 1 }}
                        exit={{ x: '100vw', opacity: 0 }}
                        transition={{ duration: 0.95, ease: easeIn }}
                        className='lg:flex hidden max-w-[45px] w-full h-[45px] -bottom-50 -right-0 xl:-right-45 absolute'
                      >
                        <Image src={Bean1} alt='bean image' fill />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: '-100vw', rotate: -180, opacity: 0 }}
                        animate={{ x: 0, rotate: -45, opacity: 1 }}
                        exit={{ x: '100vw', opacity: 0 }}
                        transition={{ duration: 1.05, ease: easeIn }}
                        className='lg:flex hidden max-w-[45px] w-full h-[45px] -bottom-40 right-0 absolute'
                      >
                        <Image src={Bean2} alt='bean image' fill />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: '-100vw', rotate: -180, opacity: 0 }}
                        animate={{ x: 0, rotate: -45, opacity: 1 }}
                        exit={{ x: '100vw', opacity: 0 }}
                        transition={{ duration: 1.1, ease: easeIn }}
                        className='max-w-[45px] w-full h-[45px] lg:-bottom-15 -bottom-5 lg:-right-30 -right-10 absolute'
                      >
                        <Image src={Bean2} alt='bean image' fill />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        key={i}
                        initial={{ x: '-100vw', rotate: -180, opacity: 0 }}
                        animate={{ x: 0, rotate: -45, opacity: 1 }}
                        exit={{ y: '100vh' }}
                        transition={{ duration: 1.2 }}
                        className='absolute -left-5 lg:-left-20 top-10 sm:-left-20 xl:max-w-[130px] max-w-[60px] lg:max-w-[100px] w-full min-h-[100px] lg:min-h-[100px] max-h-[400px]'
                      >
                        <Image
                          src={el.spoonImage}
                          alt={`spoon of ${el.name}`}
                          className='w-full h-auto object-contain'
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence mode='wait'>
                    {activeIndex === i && (
                      <motion.div
                        className='max-w-[390px] w-full'
                        key={i}
                        initial={{ y: '-100vh', opacity: 0, rotate: -180 }}
                        animate={
                          width > 800
                            ? activeIndex === i
                              ? { y: 0, opacity: 1, rotate: 0 }
                              : { y: '-100px' }
                            : activeIndex === i
                            ? { y: 0, opacity: 1, rotate: 0 }
                            : { x: '-100vw' }
                        }
                        exit={
                          width > 800
                            ? { y: '100vh', rotate: 10, opacity: 0 }
                            : { x: '100vw', rotate: 10, opacity: 0 }
                        }
                        transition={{ duration: 0.7 }}
                      >
                        <Image
                          src={el.image}
                          alt={el.name}
                          className='object-contain max-w-[390px] w-full'
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className='flex-1 h-full flex items-center justify-start lg:justify-center px-5'>
                <AnimatePresence mode='wait'>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ y: '100px', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '-100px', opacity: 0 }}
                      transition={{ duration: 1 }}
                      className='flex  max-w-[60%] flex-col text-start text-[#242120] gap-10'
                    >
                      <h3 className='text-4xl'>{el.name}</h3>
                      <p className='text-xs'>{el.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoffeeCategSliderSwipSec2;
