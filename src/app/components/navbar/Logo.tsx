'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

function Logo() {
  const router = useRouter();
  return (
    <div>
      <Image
        className='hidden md:block cursor-pointer'
        height='100'
        width='100'
        src="/images/airbnb-logo.png"
        alt='logo'
      />
    </div>
  );
}

export default Logo;
