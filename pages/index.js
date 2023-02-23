import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaversus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
				<link
					rel="stylesheet"
					href="https://stijndv.com/fonts/Eudoxus-Sans.css"
				/>
      </Head>
      <div className=' bg-primary-black overflow-hidden'> 
        <Navbar />
        <Hero />
        <div className=' relative'>
          <About />
          <div className=' gradient-03 z-0'/>
          <Explore />
        </div>
        <div className=' relative'>
          <GetStarted />
          <div className=' gradient-4 z-0' />
          <WhatsNew />
        </div>
        <World />
        <div className=' relative'>
          <Insights />
          <div className=' gradient-04 z-0' />
          <Feedback />
        </div>
        <Footer />
      </div>
    </>
  )
}
