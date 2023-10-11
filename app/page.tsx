// export const metadata = {
//   title: 'UltraeHP-HommingProbe',
//   description: 'This is our description',
//   openGraph: {
//     title: 'Next.js',
//     description: 'The React Framework for the Web',
//     url: 'https://nextjs.org',
//     siteName: 'Next.js',
//     images: [
//       {
//         url: 'https://nextjs.org/og.png',
//         width: 800,
//         height: 600,
//       },
//       {
//         url: 'https://nextjs.org/og-alt.png',
//         width: 1800,
//         height: 1600,
//         alt: 'My custom alt',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// }


import Tooltip from "../components/Tooltip"

import Image from 'next/image'
import Img01 from '../../public/images/wix.jpg'
import Img02 from '../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../components/Application/ApplicateCard'
import CardHover from '../components/CardHover'
import Cards from '../components/Cards/Cards'
import { properties } from "../constants/data";
import SwiperCard from "../components/SwiperCarousel/SwiperCard"
// import TabComponent from "../components/Tabs/TabComponent";
// import tabs from "../components/Tabs/tabs";
import '../styles/additional-styles/tab.css'



export default async function Home() {




  return (
    <div className='dark:bg-black'>

      <div className="outWrap overflow-hidden ">


        <Hero />
        <section className=' px-5  md:px-15 lg:px-20'>

          <CardHover />

        </section>




        <Features />

        <ApplicateCard />
        <div className="App">
          {/* Section header */}
          <div className="section-title flex flex-col w-full py-10 justify-center items-center">

          </div>
          <div className="properties flex flex-wrap   justify-center items-center">
            {properties.map((item) => (
              <Cards data={item} key={item.id} />
            ))}
          </div>
        </div>

        {/* <img src='../../../../public/images/wix.jpg' alt="" className='w-full' /> */}

        {/* <div className="relative flex justify-center mb-8 border" data-aos="zoom-y-out" data-aos-delay="450">

          <img src="https://www.zensor.com.tw/images/wix.jpg" alt="" />


        </div> */}
        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
          {/* <img src="https://www.zensor.com.tw/images/maven.jpg" alt="" /> */}

          {/* <img src='https://www.zensor.com.tw/images/maven.jpg' className='w-full' alt="" /> */}

        </div>
        {/* <section className="w-full border border-black bg-black">
          <div className="row">
            <div className="Container">
           
            </div>
          </div>
        </section> */}



        <FeaturesBlocks />




        
        <video className="mt-20 mx-auto w-36 h-24" autoPlay muted loop >
          <source src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faebcdc568ab9443e8b5282e52d49a586%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=aebcdc568ab9443e8b5282e52d49a586&amp;alt=media" />
        </video>
        <section>
          <div className="Container px-20">

            <div className="row center">

              {/* <video autoplay=""  playsinline="" className="cvqchck"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faebcdc568ab9443e8b5282e52d49a586%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=aebcdc568ab9443e8b5282e52d49a586&amp;alt=media"></video> */}
              <h2 className="mx-auto text-center w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint.</h2>
            </div>
            <div className="row">
              <div className="hero-img border border-black p-5 relative">
                <div className="rightTxt">
                  <h2 className="text-white text-5xl absolute top-10 left-2/3">OMNEST:YOUR<br></br>JOURNEY TO<br></br>MINDFULNESS</h2>
                  {/* <p className="text-white text-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab asperiores sit aliquam ullam saepe inventore veritatis animi adipisci iure.</p> */}
                </div>
                <img className="width-full w-full rounded-2xl " src="https://www.ultraehp.com/images/about/20210714-20210714_031832000_iOS.jpg" alt="" />
              </div>
            </div>
            
          </div>
        </section>

        <Testimonials />



        <Newsletter />
        <div className="row px-20">
          <SwiperCard />
          
        </div>



      </div>
    </div>
  )
}
