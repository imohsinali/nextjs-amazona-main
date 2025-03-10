import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';
// import data from '@/lib/data';
// import Search from './search';
import Sidebar from './sidebar';
import dynamic from 'next/dynamic';
import { Loader } from 'lucide-react';
const HeaderMenus = dynamic(() => import('./headerMenus'), {
  loading: () => <Loader />,
  // ssr: false,
});

const Search = dynamic(() => import('./search'), {
  loading: () => <Loader />,
  // ssr: false,
});
// const Sidebar = dynamic(() => import('./sidebar'), {
//   loading: () => <Loader />,
//   ssr: true,
// });
export default async function Header() {
  return (
    <header className='bg-black  text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='md:hidden'>
              <Sidebar />
            </div>

            <Link
              href='/'
              className='sm:text-2xl flex items-center  font-extrabold text-lg m-[10px] '
            >
              <Image
                src='/icons/logo.svg'
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME}
            </Link>
          </div>
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>
          <Menu />
          {/* <CartButton  /> */}
        </div>
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
        <div className='hidden md:block '>
          <Sidebar />
        </div>

        <div className='flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
          <HeaderMenus />
        </div>
      </div>
    </header>
  );
}
