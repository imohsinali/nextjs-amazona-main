import CartButton from './cart-button';
import ThemeSwitcher from './theme-switcher';
import UserButton from './user-button';
import { Suspense } from 'react';

export default function Menu({ forAdmin = false }: { forAdmin?: boolean }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='flex justify-end'>
        <nav className='hidden md:flex gap-3  w-full'>
          <ThemeSwitcher />
          <UserButton />
          {forAdmin ? null : <CartButton />}
        </nav>
        <nav className='md:hidden'>
          <CartButton />
        </nav>
      </div>
    </Suspense>
  );
}
