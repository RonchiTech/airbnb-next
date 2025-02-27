'use client';

import Image from 'next/image';
import React from 'react';

function Avatar() {
  return (
    <Image
      className='rounded-full'
      height={30}
      width={30}
      src='/images/avatar.png'
      alt='avatar'
    />
  );
}

export default Avatar;
