'use client';
import React, { useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
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
} from '../../../../public/images';

import Image, { StaticImageData } from 'next/image';

import CoffeeCategSliderSwipSec2 from './CoffeeCategSliderSwipSec2';
import clsx from 'clsx';

export interface ICoffee {
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
    <section className='relative w-full h-screen '>
      <div className='absolute hidden   right-1/2 top-1/2  translate-x-1/2 z-10 lg:flex flex-col gap-2  rounded'>
        {CoffeeCategories.map((el, index) => (
          <div
            key={index}
            onClick={() => swiperRef.current.slideTo(index)}
            className={clsx(
              `w-[34px] h-[34px] flex items-center  justify-center  rounded-full`,
              index === activeIndex ? 'bg-white' : 'bg-transparent'
            )}
          >
            <div className='w-[30px] h-[30px] rounded-full cursor-pointer transition-all duration-300 overflow-hidden '>
              <Image
                src={el.slideImage}
                alt='image'
                className='w-full h-full rounded-full '
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute  space-y-2  right-10 lg:right-20 lg:bottom-10 bottom-1/2 translate-y-1/2 z-10 lg:flex flex-col gap-10  lg:gap-4 rounded'>
        <FaAngleUp
          className='cursor-pointer'
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <FaAngleDown
          className='cursor-pointer'
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>

      <CoffeeCategSliderSwipSec2
        categories={CoffeeCategories}
        swiperRef={swiperRef}
        activeIndex={activeIndex}
        handleSetActiveIndex={setActiveIndex}
      />
    </section>
  );
}
