'use client';
import {motion} from 'framer-motion'
import {staggerContainer} from '../utils/motion'
import { ExploreCard, TitleText, TypingText} from '../components'
import {exploreWorlds} from '../constants'
import { useState } from 'react';

const Explore = () => {
  const [active,setActive] = useState('world-2')
  return(
    <section id='explore' className='sm:p-16 xs:p-8 px-6 py-12' >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.25}}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        <TypingText title={"| The World"} textStyle='text-center' />
        <TitleText title={<>Choose the world you want <br className='md:block hidden'/>to explore</>} textStyle='text-center' />
        <div className=' mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5'>
          {exploreWorlds.map((world,index)=>(
            <ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive} />
          ))}
        </div>
      </motion.div>
  </section>
  )
  
}

export default Explore;
