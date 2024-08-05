import Image from 'next/image';
import logo from '/nextjs.svg';

export const MyLogo = (
  <Image src={logo} alt='My Logo' width={25} height={25} />
);