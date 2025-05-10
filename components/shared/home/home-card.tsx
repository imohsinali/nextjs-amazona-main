import React from 'react';
import dynamic from 'next/dynamic';

const HomeCard1 = dynamic(() => import('./home-card1'));
const HomeCard2 = dynamic(() => import('./home-card2'));
const HomeCard3 = dynamic(() => import('./home-card3'));
const HomeCard4 = dynamic(() => import('./home-card3'));

// import { Skeleton } from '@/components/ui/skeleton';

export default async function HomeCard() {
  return (
    <div className='mx-4 m-2 space-y-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:gap-4'>
      <HomeCard1 />
      <HomeCard2 />
      <HomeCard3 />
      <HomeCard4 />
    </div>
  );
}
