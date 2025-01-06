'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Loader, SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { APP_NAME } from '@/lib/constants';

const Categories = dynamic(() => import('./categories'), {
  loading: () => <Loader />,
  // ssr: false,
});

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <form action='/search' method='GET' className='flex  items-stretch h-10 '>
      <Select name='category'>
        <SelectTrigger
          className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r  rounded-r-none rounded-l-md'
          onClick={() => setIsOpen(true)}
        >
          <SelectValue placeholder='All' />
        </SelectTrigger>
        {isOpen && (
          <SelectContent position='popper'>
            <Categories setOpen={setIsOpen} />
          </SelectContent>
        )}
      </Select>
      <Input
        className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
        placeholder={`Search Site ${APP_NAME}`}
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2 '
      >
        <SearchIcon className='w-6 h-6' />
      </button>
    </form>
  );
}
