import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import { toSlug } from '@/lib/utils';
import { getAllCategories } from '@/lib/actions/product.actions';
import { Skeleton } from '@/components/ui/skeleton';
const Card = dynamic(() => import('../../ui/card'));

// import { Skeleton } from '@/components/ui/skeleton';

export default async function HomeCard() {
  const categories = await getAllCategories();

  const cards = [
    {
      title: 'Categories to explore',
      link: {
        text: 'See More',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
  ];

  if (!categories) {
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
    <div className='mt-10'>
      {cards.map((card) => (
        <Card key={card.title} className='bg-red-200 rounded-lg flex flex-col'>
          {/* <CardContent className=''> */}
          <div className='bg-red-400 rounded-lg rounded-b-none p-10 pt-4'>
            <h3 className='text-xl font-bold mb-4 text-white'>{card.title}</h3>
          </div>
          <div className='m-4 -mt-10  rounded-lg bg-white grid grid-cols-2 gap-4'>
            {card.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='bg-white shadow-lg rounded-lg m-4 flex flex-col'
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
          {/* </CardContent> */}
          {/* {card.link && (
            <CardFooter>
              <Link href={card.link.href} className='mt-4 block'>
                {card.link.text}
              </Link>
            </CardFooter>
          )} */}
        </Card>
      ))}
    </div>
  );
}
