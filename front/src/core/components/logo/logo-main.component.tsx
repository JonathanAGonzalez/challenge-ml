'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import logo from '@/core/assets/logo.png';
import { GET_HOME_ROUTE } from '@/core/routes';

export const LogoMain = () => {
  const router = useRouter();

  return (
    <div
      aria-label='Mercado Libre'
      onClick={() => router.push(GET_HOME_ROUTE())}
      role='button'
      tabIndex={0}
      className='logo-container'
    >
      <h1>Mercado Libre</h1>
      <Image
        priority
        src={logo}
        width={134}
        height={34}
        alt='Mercado Libre Logo'
      />
    </div>
  );
};
