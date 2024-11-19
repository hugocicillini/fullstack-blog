'use client';

import { handleLogout } from '@/lib/action';
import Image from 'next/image';
import { useState } from 'react';
import NavLink from './NavLink';

const links = [
  {
    title: 'Página Inicial',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Sobre',
    path: '/about',
  },
  {
    title: 'Contato',
    path: '/contact',
  },
];

const Links = ({ session }: { session: any }) => {
  const [open, setOpen] = useState(false);

  const isAdmin = false;

  return (
    <div className="flex items-center justify-center gap-6">
      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => (
          <NavLink item={link} key={link.path} />
        ))}
      </div>

      {session ? (
        <div className="flex items-center gap-2">
          {session.user?.isAdmin && (
            <NavLink item={{ title: 'Admin', path: '/admin' }} key="/admin" />
          )}
          <form action={handleLogout}>
            <button className="p-2.5 rounded-sm cursor-pointer text-black font-bold bg-white">
              Logout
            </button>
          </form>
        </div>
      ) : (
        <NavLink item={{ title: 'Login', path: '/login' }} key="/login" />
      )}

      <div className="md:hidden">
        <Image
          src="/menu.png"
          width={24}
          height={24}
          alt="menu"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

      {open && (
        <div className="absolute z-10 top-24 right-0 w-full h-[calc(100vh-6rem)] bg-gray-800 flex flex-col items-center justify-center gap-4 md:hidden">
          {session && (
            <Image
              src="/noavatar.png"
              width={48}
              height={48}
              alt="avatar"
              className="cursor-pointer rounded-full"
            />
          )}

          {links.map((link) => (
            <button key={link.path} onClick={() => setOpen(false)}>
              <NavLink item={link} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
