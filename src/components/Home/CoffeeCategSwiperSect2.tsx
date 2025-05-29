'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  MochaCup,
  LatteCup,
  MacchiatoCup,
  BlackCup,
  EspressoCup,
  BlackSpoon,
  EspressoSpoon,
  LatteImg,
  LatteSpoon,
  MacchiatoImg,
  MacchiatoSpoon,
  MochaSpoon,
  EspressoLeaf,
  MochaLeaf,
  MachhiatoLeaf,
  BlackLeaf,
  LatteLeaf,
  BlackCoffeeSlideImg,
  EspressoNavSlideImg,
  MochaNavSlideImg,
  Bean1,
  Bean2,
} from '../../../public/images';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface ICoffee {
  id: number;
  name: string;

  spoonImage: StaticImageData;
  leaf: StaticImageData;
  slideImage: StaticImageData;
  image: StaticImageData;
  bgColor: string;
  description: string;
}

const CoffeeCategories: ICoffee[] = [
  {
    id: 1,
    spoonImage: LatteSpoon,
    name: 'Latte',
    leaf: LatteLeaf,
    slideImage: LatteImg,
    image: LatteCup,
    bgColor: '#C0BAB5',
    description:
      'A latte is a smooth and creamy coffee made with espresso and steamed milk. Known for its balanced flavor and velvety texture, it’s perfect for those who enjoy a milder coffee experience.',
  },
  {
    id: 2,
    spoonImage: MacchiatoSpoon,
    name: 'Macchiato',
    leaf: MachhiatoLeaf,
    slideImage: MacchiatoImg,
    image: MacchiatoCup,
    bgColor: '#BBA998',
    description:
      'A macchiato is a bold espresso topped with a small amount of steamed milk or foam. It delivers a strong coffee taste with just a hint of creaminess.',
  },
  {
    id: 3,
    spoonImage: BlackSpoon,
    name: 'Black Coffee',
    leaf: BlackLeaf,
    slideImage: BlackCoffeeSlideImg,
    image: BlackCup,
    bgColor: '#888D8C',
    description:
      'Black coffee is pure, brewed coffee without any milk, sugar, or flavorings. It highlights the natural aroma and rich bitterness of coffee beans, favored by purists.',
  },
  {
    id: 4,
    spoonImage: EspressoSpoon,
    name: 'Espresso',
    leaf: EspressoLeaf,
    slideImage: EspressoNavSlideImg,
    image: EspressoCup,
    bgColor: '#AD9B8C',
    description:
      'Espresso is a concentrated shot of coffee made by forcing hot water through finely-ground beans. Known for its intense flavor and creamy crema on top, it’s the base for many other coffee drinks.',
  },
  {
    id: 5,
    spoonImage: MochaSpoon,
    name: 'Mocha',
    leaf: MochaLeaf,
    slideImage: MochaNavSlideImg,
    image: MochaCup,
    bgColor: '#8B7465',
    description:
      'A coffee mocha is a chocolate-flavored variation of a latte. Combining espresso, steamed milk, and rich cocoa, it’s a sweet and indulgent treat. The name originates from Mocha, Yemen, an early hub of coffee trade.',
  },
];

export default function CoffeCategSwiperSect2() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='relative w-full h-screen'>
      {/* Custom Pagination */}
      <div className='absolute  right-1/2 top-1/2  translate-x-1/2 z-10 flex flex-col gap-2  rounded'>
        {CoffeeCategories.map((el, index) => (
          <div
            key={index}
            onClick={() => swiperRef.current.slideTo(index)}
            className={`w-[14px] h-[14px] flex items-center  justify-center bg-white rounded-full`}
          >
            <div className='w-3 h-3 rounded-full cursor-pointer transition-all duration-300 overflow-hidden '>
              <Image
                src={el.slideImage}
                alt='image'
                className='w-full h-full rounded-full '
              />
            </div>
          </div>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        direction='vertical'
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className='w-full h-full'
      >
        {CoffeeCategories.map((el) => (
          <SwiperSlide key={el.id}>
            <div className='w-full h-full   flex'>
              <div
                className={clsx(
                  'flex-1  flex justify-center items-center h-full'
                )}
                style={{ background: el.bgColor }}
              >
                <div className='   flex gap-10 relative'>
                  <Image
                    src={el.leaf}
                    alt={`${el.name} leaf`}
                    className='max-w-[130px] w-full  max-h-[400px]  absolute -top-30 -right-20 '
                  />
                  <Image
                    src={Bean1}
                    alt={'bean image'}
                    className='max-w-[45px] w-full h-[45px] -left-20  absolute  '
                  />
                  <Image
                    src={Bean1}
                    alt={'bean image'}
                    className='max-w-[45px] w-full h-[45px] -bottom-30 -right-20  absolute  '
                  />
                  <Image
                    src={Bean1}
                    alt={'bean image'}
                    className='max-w-[45px] w-full h-[45px] -bottom-20 right-20  absolute  '
                  />
                  <Image
                    src={Bean1}
                    alt={'bean image'}
                    className='max-w-[45px] w-full h-[45px] -bottom-50 -right-45  absolute  '
                  />
                  <Image
                    src={Bean2}
                    alt={'bean image'}
                    className='max-w-[45px] w-full h-[45px] -bottom-40 right-0  absolute  '
                  />
                  <Image
                    src={Bean2}
                    alt={'bean image'}
                    className='max-w-[45px] w-full h-[45px] -bottom-15 -right-30  absolute  '
                  />
                  <Image
                    src={el.spoonImage}
                    alt={`spoon of ${el.name} `}
                    className='max-w-[130px] w-full min-h-[200px] max-h-[400px] -rotate-[35deg] absolute top-10 -left-20 '
                  />
                  <Image
                    src={el.image}
                    alt={el.name}
                    className='object-contain max-w-[390px] w-full
min-[300px]'
                  />
                </div>
              </div>
              <div className='flex-1  h-full  flex items-center justify-center '>
                <div className='flex max-w-[60%] flex-col text-start text-[#242120]   gap-10 '>
                  <h3 className='text-4xl'>{el.name}</h3>
                  <p className=' text-xs'>{el.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
