import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { getProductsForCard } from '@/lib/actions/product.actions';
import { Skeleton } from '@/components/ui/skeleton';
const Card = dynamic(() => import('../../ui/card'));
const CardContent = dynamic(() => import('../../ui/cardContent'));
const CardFooter = dynamic(() => import('../../ui/cardFooter'));

// import { Skeleton } from '@/components/ui/skeleton';

export default async function HomeCard() {
  const newArrivals = await getProductsForCard({
    tag: 'new-arrival',
    limit: 4,
  });

  const cards = [
    {
      title: 'Explore New Arrivals',
      items: newArrivals,
      link: {
        text: 'View All',
        href: '/search?tag=new-arrival',
      },
    },
  ];

  if (!newArrivals) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
        {Array.from({ length: 4 }, (_, i) => (
          <Card key={i} className='rounded-none flex flex-col'>
            <Skeleton />
            <div className='grid grid-cols-2 gap-4'>
              {Array.from({ length: 2 }, (_, i) => (
                <div key={i} className='flex flex-col'>
                  <Skeleton />
                  <Skeleton />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.title} className='rounded-none flex flex-col'>
          <CardContent className='p-4 flex-1'>
            <h3 className='text-xl font-bold mb-4'>{card.title}</h3>
            <div className='grid grid-cols-2 gap-4'>
              {card.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex flex-col'
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='aspect-square object-scale-down max-w-full h-auto mx-auto'
                    height={120}
                    width={120}
                  />
                  <p className='text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </CardContent>
          {card.link && (
            <CardFooter>
              <Link href={card.link.href} className='mt-4 block'>
                {card.link.text}
              </Link>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}
