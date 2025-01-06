import Link from 'next/link';
import React from 'react';

const HeaderMenus = () => {
  const headerMenus = [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ];
  return (
    <>
      {headerMenus.map((menu) => (
        <Link href={menu.href} key={menu.href} className='header-button !p-2'>
          {menu.name}
        </Link>
      ))}
    </>
  );
};

export default HeaderMenus;
