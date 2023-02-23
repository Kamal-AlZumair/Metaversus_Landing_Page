'use client';
import {motion} from 'framer-motion'
import {navVariants} from '../utils/motion'

import Image from 'next/image';
import search from '../public/search.svg'
import menu from '../public/menu.svg'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView={'show'}
    className={`sm:px-16 px-6 py-8 relative`}
  >
    <div className=' absolute w-[50%] inset-0 gradient-01' />
    <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8'>
      <Image src={search} width={24} height={24} alt='search' className='w-[24px] h-[24px] object-contain' />
      <h2 className=' font-extrabold text-[24px] leading-[30px] text-white'>METAVERSUS</h2>
      <Image src={menu} width={24} height={24} alt='search' className='w-[24px] h-[24px] object-contain' />
    </div>
  </motion.nav>
);

export default Navbar;
