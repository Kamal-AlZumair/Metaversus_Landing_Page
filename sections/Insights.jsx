'use client';
import {motion} from 'framer-motion'
import {staggerContainer} from '../utils/motion'
import {InsightCard , TitleText, TypingText} from '../components'
import {insights} from '../constants'

const Insights = () => (
  <section className=' relative z-10 sm:p-16 xs:p-8 px-6 py-12'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.25}}
      className='mx-auto flex flex-col  2xl:max-w-[1280px] w-full'
    >
      <TypingText title={'| Insight'} textStyle={'text-center'} />
      <TitleText title={<>Insight about metaverse</>} textStyle={'text-center'} />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insight, index )=>(
          <InsightCard key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
