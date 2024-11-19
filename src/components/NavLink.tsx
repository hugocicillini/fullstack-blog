'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  item: {
    title: string;
    path: string;
  };
};

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();

  const isActive = pathName === item.path;

  return (
    <Link
      href={item.path}
      className={`min-w-24 p-2.5 rounded-3xl font-medium text-center ${
        isActive ? 'bg-blue-500 text-white' : ''
      }`}
    >
      {item.title}
    </Link>
  );
};
export default NavLink;
