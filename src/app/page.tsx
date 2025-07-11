import CoffeCategSwiperSect2 from '@/components/Home/CoffeCategorySlideSect2/CoffeeCategSwiperSect2';
import CoffeStoreS2 from '@/components/Home/CoffeStoreS2/CoffeStoreS2';
import HeroSect1 from '@/components/Home/Hero/HeroSect1';
import BuySubscribeAbout from '@/components/Home/SubscibeForUpdates/BuySubscribeAbout';

export default function Home() {
  return (
    <main className=''>
      <CoffeCategSwiperSect2 />
      <HeroSect1 />
      <CoffeStoreS2 />
      <BuySubscribeAbout />
    </main>
  );
}
