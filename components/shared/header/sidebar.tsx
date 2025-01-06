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
      <DrawerTrigger className='header-button flex items-center !p-2  '>
        <MenuIcon className='h-5 w-5 mr-1' />
        All
      </DrawerTrigger>
      {open && <SidebarDrawerContent />}
    </Drawer>
  );
}
