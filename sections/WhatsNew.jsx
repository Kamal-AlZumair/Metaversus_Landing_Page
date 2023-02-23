'use client';
import { motion } from 'framer-motion'
import { staggerContainer,fadeIn,planetVariants} from '../utils/motion'
import { NewFeatures, TitleText, TypingText} from '../components'
import {newFeatures} from '../constants'
import getStartedImg from '../public/whats-new.png'
import Image from 'next/image';


const WhatsNew = () => (
  <section className=' relative z-10 sm:p-16 xs:p-8 px-6 py-12'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.25}}
      className='mx-auto flex flex-col lg:flex-row gap-8 2xl:max-w-[1280px] w-full'
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title={"| What's New "} textStyle='text-center' />
        <TitleText title={<>What's new about metaversus?</>} />
        <div className=' mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature)=>(
            <NewFeatures
              key = {feature}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className='flex-1 flex justify-center items-center'
      >
        <Image src={getStartedImg} alt='get-started' className=' w-[90%] h-[90%] object-contain' />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
