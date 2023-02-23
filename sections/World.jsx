'use client';
import {motion} from 'framer-motion'
import {staggerContainer , fadeIn} from '../utils/motion'
import {TitleText, TypingText} from '../components'
import Image from 'next/image';
import map from '../public/map.png'
import People from '../public/people-01.png'
import People2 from '../public/people-02.png'
import People3 from '../public/people-03.png'

const World = () => (
  <section className=' relative z-10 sm:p-16 xs:p-8 px-6 py-12'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.25}}
      className='mx-auto flex flex-col  2xl:max-w-[1280px] w-full'
    >
      <TypingText title={'| People on the World'} textStyle={'text-center'} />
      <TitleText title={<>Track friends around you and invite them to play together in the same world </>} textStyle={'text-center'} />
      <motion.div
        variants={fadeIn('up','tween',0.3,1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <Image src={map} alt='map' layout='responsive' className=' w-full h-full object-cover' />
        <div className=' absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image src={People} alt='people-01' className='w-full h-full' />
        </div>
        <div className=' absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image src={People2} alt='people-01' className='w-full h-full' />
        </div>
        <div className=' absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <Image src={People3} alt='people-01' className='w-full h-full' />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
