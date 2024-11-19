import Image from 'next/image';
import Links from './Links';
import { auth } from '@/lib/auth';

const NavBar = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-between h-28 p-4 mb-12">
      <Image
        src="/logo.jpg"
        alt="logo"
        width={60}
        height={80}
        className="cursor-pointer rounded-full"
      />

      <Links session={session} />
    </div>
  );
};
export default NavBar;
