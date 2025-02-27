'use client';

import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, []);

  const renderMenuItem = useCallback(() => {
    if (!isOpen) return null;

    return (
      <div className='absolute rounded-xl shadow-dm w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
        <div className='flex flex-col cursor-pointer'>
          <>
            <MenuItem onClick={() => {}} label='Login' />
            <MenuItem onClick={() => {}} label='Sign Up' />
          </>
        </div>
      </div>
    );
  }, [isOpen]);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutra-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {renderMenuItem()}
    </div>
  );
}

export default UserMenu;
