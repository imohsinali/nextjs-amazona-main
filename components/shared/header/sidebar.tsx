'use client';

import * as React from 'react';

import { MenuIcon } from 'lucide-react';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import dynamic from 'next/dynamic';

const SidebarDrawerContent = dynamic(() => import('./sidebarDrawerContent'), {
  ssr: false,
});

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  // const serverComponent = React.use(SideBarHeader);
  return (
    <Drawer direction='left' onOpenChange={(e) => setOpen(e)}>
      <DrawerTrigger className=' flex items-center md:!p-2  '>
        <MenuIcon className='h-10 w-8 mr-[-20px] md:h-5 md:w-5 md:mr-1  ' />
        <span className='hidden md:block'>All</span>
      </DrawerTrigger>
      {open && <SidebarDrawerContent />}
    </Drawer>
  );
}
