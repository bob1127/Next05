"use client"


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
import { CldImage } from 'next-cloudinary';
import Image from 'next/image'
// import Img01 from '../../public/images/wix.jpg'
// import Img02 from '../../public/images/c2.jpg'
// import UP100 from '../public/images/UP100.png'
import UP10001 from '../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'
import airbag from '../public/images/bag.png'
import Hero from '@/components/hero'
import Link from "next/link";
import { motion } from "framer-motion";
import ReactSlick from '../components/reactSlick.jsx'


import Head from "next/head";

// import Features from '@/components/features'
// import FeaturesBlocks from '@/components/features-blocks'



import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../components/Application/ApplicateCard'
import CardHover from '../components/CardHover'
import Cards from '../components/Cards/Cards'
import { properties } from "../constants/data";
import Accordion from "../components/Accordion/Accordion"
import SwiperCard from "../components/SwiperCarousel/SwiperCard"
import { CldVideoPlayer } from 'next-cloudinary';



// import Head from "next/head"



// import SlickCard from '../components/slickCard/SlickCard'


import 'cloudinary-video-player/cld-video-player.min.css';

// import TabComponent from "../components/Tabs/TabComponent";
// import tabs from "../components/Tabs/tabs";
import '../styles/additional-styles/tab.css'



export default async function Home() {



  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "FadeUp",
        bounce: 0.4,
        duration: 1
      }
    }

  }
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.6, ease:easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.6,
        ease:easing
      }
    }
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  // const fadeInUp = {
  //   initial:{
  //     y:60,
  //     opacity: 0,
  //     transition: { duration: 0.6, ease: easing }


  //   }
  // }

  return (

    <div className='dark:bg-black group delay-500 duration-500'  id='#top'>
      {/* <head>
        <title>UitraPeace-Instant H. Pylori Urea Breath Test kit-Pro</title>
      </head> */}

      {/*       
      <head>
        <title key="title">jfifjifjififjifji</title>
        <meta key="description" name="description" content="DESCRIPTION" />
      </head>
     */}


      <div className="outWrap overflow-hidden ">


        <section className="section_HeroVideo p-0 relative h-[75vh] mb-[200px]" >


{/* 
          <Image quality={100} placeholder="empty" priority='true' alt="running people" src='/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f_btkzo6.webp' width={1920} height={600} className="hidden md:block" />


          <div className="relative w-[500px] h-[500px] block md:hidden  border border-green-500 ">
            <Image style={{ objectFit: "cover" }} quality={100} fill placeholder="empty" priority='true' alt="running people" src='/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f_btkzo6.webp' className="" />
          </div>
          */}
          <div className="HeroTitle top-[15%] md:top-[22%] lg:top-[31%] w-[90%] md:w-[50%] left-[6%] absolute  border  ">
          
            <motion.div className="" initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <motion.div variants={stagger} className='inner w-full pr-2'>
             
              <motion.div variants={fadeInUp}>
                <span className=' '>Humming Probe UX200</span>
                <Link href='../Products/product01'>CN</Link>
              </motion.div>
                <motion.h1 className="text-white text-xl md:text-2xl lg:text-4xl" variants={fadeInUp}>超越感測界線，極致健康生活</motion.h1>
              <motion.p className=" text-slate-300 mt-4 " variants={fadeInUp}>

                  我們針對食品與水質檢測發展與日常生活息息相關之感測器，以減少有害物質攝取與接觸，達到守護 人類健康的願景



              </motion.p>
             
              <motion.div variants={fadeInUp} className='btn-row'>

                  <div className="mt-10">
                    <a href='../next/Products.html' className="  w-[200px] mt-4 px-3 text-center  mr-5 py-2  bg-rose-500 text-white rounded-full mt-4">Detail Info </a>
                    <Link href='../next/Products.html' className="  w-[200px] mt-4 px-3 text-center py-2  bg-rose-500 text-white rounded-full mt-4">
                      Detail Info
                    </Link>
                  </div>

             
              </motion.div>

            </motion.div>
</motion.div>

        
      

          </div>

        </section>
        <Hero />

        <section className=' px-5  md:px-15 lg:px-20'>



        </section>




        {/* <Features /> */}


        <div className="App">
          {/* Section header */}
          <div className="section-title flex flex-col w-full py-10 justify-center items-center">
            <div className="txt  flex items-center flex-col  justify-center">

              <div className="relative flex-col flex justify-center mb-8 pl-5" data-aos="fade-up" data-aos-delay="450">
                <h2 className="text-black dark:text-rose-500  text-4xl ">Instant Helicobacter pylori</h2>
                <p data-aos="fade-up" data-aos-delay="600" className="text-2xl text-center text-zinc-900">main Producys </p>
              

              </div>
            </div>
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
            <div className="container">
           
            </div>
          </div>
        </section> */}


        {/* 
        <FeaturesBlocks /> */}








        <video className="mt-20 mx-auto w-36 h-24" autoPlay muted loop >
          <source src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faebcdc568ab9443e8b5282e52d49a586%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=aebcdc568ab9443e8b5282e52d49a586&amp;alt=media" />
        </video>
        {/* <SlickCard /> */}
        <section>
          <div className="section_banner02">
       
              <div className=" flex items-center justify-center">
                <div className="border border-white">
                  
                </div>
              

              </div>
   
          </div>
        </section>

        <section className="hidden">
          <div className="container ">

            <div className="row center">



              {/* <video autoplay=""  playsinline="" className="cvqchck"><source type="video/mp4" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faebcdc568ab9443e8b5282e52d49a586%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=aebcdc568ab9443e8b5282e52d49a586&amp;alt=media"></video> */}
              <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-4xl dark:text-white dark:text-rose-500  text-center"> Operation(專業使用版本kkkkkkkk)</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aperiam dolore nostrum, officia ipsam, in ullam vitae pariatur voluptates, incidunt porro saepe dolorem natus mollitia. Voluptatem reiciendis pariatur quae impedit. </p>

              </div>


            </div>


            <div className="row">
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2">




                  <div className='flex justify-start  px-9 border border-black'>
                    <Image
                      src="/images/Untitled-Camera拷貝.png"
                      width={500}
                      height={600}
                      style={{ borderRadius: "15px" }}

                      alt="Picture of the author"
                    />




                    {/* <iframe src="https://app.vectary.com/p/71Qomf7OQ746namGkE3YRq" width="100%" height="480"></iframe> */}



                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text flex flex-col  w-full">
                      <h2 className="text-4xl font-normal dark:text-rose-500 ">
                        UP100
                      </h2>
                      <p className="w-1/2 mb-10 dark:text-white">UitraPeace-Instant H. Pylori Urea Breath Test kit-Pro</p>
                    </div>
                    {/* <Accordion /> */}
                  </div>

                </div>
              </div>
            </div>
            <div className="row my-10 ">

              <div className="container">
                <div className="grid">
                  <h5 className="text-4xl dark:text-rose-500 text-center py-4">
                    胃幽門螺旋桿菌的快速尿素呼吸檢測法
                  </h5>
                  {/* <p className=" dark:text-rose-500 text-center py-4">
                    
                  </p> */}
                </div>
                <div className="grid gap-4 grid-cols-1  md:grid-cols-2 flex justify-center items-center lg:grid-cols-3">
                  <div className="border border-black dark:bg-slate-900  bg-[indexCard] rounded-3xl lg:h-[500px] justify-around flex flex-col items-center py-10">

                    <div className="top-wrap">
                      <div className="txt flex flex-col items-center mb-5">
                        <b className="text-3xl dark:text-white">ToothBaste Bits</b>
                        <p className='font-extralight dark:text-slate-200'>from Ind / Month</p>
                      </div>
                      <div className="imgWrap overflow-hidden rounded-full w-[280px] h-[280px] border border-black">
                        <img src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_427322551_2878x.png?v=1695786640" className="w-auto h-[400px]" alt="" />
                      </div>
                    </div>
                    <div className="bottom-wrap">
                      <div className="bottom w-full flex justify-between">
                        <div className="icon w-1/3 border rounded-2xl w-[150px] border-red-500">
                          lorem
                        </div>
                        <a href='www.google.com ' className="go-btn ">
                          Go to Products
                        </a>
                      </div>
                    </div>








                  </div>
                  <div className="middleImg relative overflow:hidden  border border-black    rounded-3xl h-[500px] p-[1px] justify-around flex flex-col items-center ">
                    <div className=" absolute transition-transform  hover:rounded-3xl hover:transform w-full h-full rounded-3xl bg-center bg-cover bg-no-repeat  relative bg-[url('http://ultraehp.com/images/UP100/Untitled-Camera-2.png')] "></div>

                    {/* <div className="top-wrap">
                      <div className="txt flex flex-col items-center mb-5">
                        <b className="text-3xl ">ToothBaste Bits</b>
                        <p className='font-extralight'>from Ind / Month</p>
                      </div>
                      <div className="imgWrap overflow-hidden rounded-full w-[280px] h-[280px] border border-black">
                        <img src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_427322551_2878x.png?v=1695786640" className="w-auto h-[400px]" alt="" />
                      </div>
                    </div>
                    <div className="bottom-wrap">
                      <div className="bottom w-full flex justify-between">
                        <div className="icon w-1/3 border rounded-2xl w-[150px] border-red-500">
                          lorem
                        </div>
                        <a href='www.google.com ' className="go-btn ">
                          Go to Products
                        </a>
                      </div>
                    </div> */}








                  </div>
                  <div className="border border-black rounded-3xl h-[500px] justify-around flex flex-col dark:bg-slate-900 items-center py-10">

                    <div className="top-wrap">
                      <div className="txt flex flex-col items-center mb-5">
                        <b className="text-3xl dark:text-white">ToothBaste Bits</b>
                        <p className='font-extralight dark:text-slate-200'>from Ind / Month</p>
                      </div>
                      <div className="imgWrap overflow-hidden rounded-full w-[280px] h-[280px] border border-black">
                        <img src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_427322551_2878x.png?v=1695786640" className="w-auto h-[400px]" alt="" />
                      </div>
                    </div>
                    <div className="bottom-wrap">
                      <div className="bottom w-full flex justify-between">
                        <div className="icon w-1/3 border rounded-2xl w-[150px] border-red-500">
                          lorem
                        </div>
                        <a href='www.google.com ' className="go-btn dark:text-slate-300">
                          Go to Products
                        </a>
                      </div>
                    </div>








                  </div>

                </div>
              </div>
            </div>

            {/* <div className="row">
              <h4 className="text-4xl font-light ">Tale UPir Eay wuth </h4>
              <p className="text-normal w-2/4  mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro excepturi facere optio sapiente totam reiciendis beatae perferendis deleniti laudantium ea, nemo quaerat, dolor laborum sit doloribus ad fugit enim reprehenderit?</p>
             </div> */}
            {/* <div className="row mt-20">
              <div className="container 3dModel-wrap border border-zinc-500 w-full h-[1000px ] ">
                <div className="grid grid-cols-2 py-10">
                <div className="flex justify-start flex-col pr-40">
                
                    <Accordion/>
                </div>
                <div className="flex justify-end">
                  <div className="smallCard h-[320px] w-[250px] flex flex-col border p-2 rounded-2xl border-black">
                    <div className="img border border-zinc-500 rounded-xl">
                        <img src="https://cdn.shopify.com/s/files/1/0489/1980/6120/files/Ellipse_2472_750x.png?v=1681456140" className='w-[]' alt="" />

                    </div>
                    <div className="txt">
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur molestias id doloremque dolorem 


                      </p>
                      <div className="bottom flex items-center  justify-between">
                        <div className="btn p-1 rounded-full text-xs  bg-black text-white ">
                          Go but 

                        </div>
                        <a href="">Detail Tern </a>

                      </div>

                      

                    </div>
                  </div>
                </div>



                  
                </div>
              </div>


            </div> */}
            {/*            
            <div className="row border relative border-black">
             
                <Image
                  className="absolute top-[-400px] left-[50px]"
                  src={UP10001}
                  width={1100}
                  height={800}
                  alt="Picture of the author"
                />
             
            </div>
             */}



            {/* <div className="row mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-10 lg:px-20">
                <div>
                  <div className="card bg-yellow bg-[url('')] rounded-3xl w-full h-[700px] border border-stone-100">
                    
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <Image
                      src={UP100}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                <div>
                    <Image
                      src={airbag}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                
                
              </div>
         
            Accordion</div> */}

          </div>
        </section>
        <section className="section_Cardhover">
         
            <div className="row px-[20px] md:px-20">
              <CardHover />
            </div>
       
        </section>
        <div className="iframe my-20  relative h-[900px]">
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.53/build/spline-viewer.js"></script>
          <spline-viewer url="https://prod.spline.design/iLKNk0ig4Z5QEzkf/scene.splinecode"></spline-viewer>

          <div className="txt-wrap flex flex-col justify-center items-center absolute left-[10%]  bg-white  top-[20%] rounded-2xl w-3/4 h-[450px] z-20">


            <div className="relative flex-col w-2/3 flex justify-center mb-8 pl-5" data-aos="fade-up" data-aos-delay="450">
              <h2 className="text-black  text-center dark:text-rose-500  text-5xl ">胃幽門螺旋桿菌的快速尿素呼吸檢測法法</h2>
              <ul>
                <li className="text-black  text-center text-normal ">・      我們透過 Webflow + NoCode 幫助企業發展和啟動品牌業務或是打造產品
                </li>
                <li className="text-black  text-center text-normal ">Obtain results within 30 minutes</li>
                <li className="text-black  text-center text-normal ">Assess treatment effect before and after</li>
              </ul>


            </div>
{/* 
            <motion.div className="w-2/3" initial='initial' animate='animate' exit={{ opacity: 0 }}>
              <motion.div variants={stagger} className='inner w-full pr-2'>

             
                <motion.p className=" text-gray-600 mt-4 text-center" variants={fadeInUp}>
            


                </motion.p>
                <motion.h1 className="text-black text-center" variants={fadeInUp}></motion.h1>
             

            

              </motion.div>
            </motion.div> */}


          </div>
        </div>

        {/* <section className='mt-20 '>
          <div className="container">
            <div className="row px-5 lg:px-10 xl:px-20 border flex justify-between pb-10">
              <h3 className="text-7xl dark:text-rose-500 text-black">
                Apple Hermes
              </h3>
              <div className="txt  w-1/4">
                <p className="dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error ratione quaerat fuga repudiandae ra deleniti, </p>
                <button className="bg-black mt-4 rounded-full py-1 px-3 text-white">
                  Read more
                </button>
              </div>
            </div>
            <div className="row ">
              <div className="grid grid-cols-1 border border-red  lg:grid-cols-3 px-5 lg:px-10  gap-3 xl:px-20">
                <div className="border border-rose-500 h-[600px]">
                  <div className="txt border w-full  2xl:w-2/3 border-black ">
                    <h4 className="text-2xl font-normal  mb-5">
                      Hermes Kilim Single Tour
                    </h4>
                    <p className="dark:text-slate-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis mollitia hic veritatis, consectetur praesentium earum incidunt officiis, odit voluptatibus inventore fugiat magnam nulla minima autem expedita nostrum a voluptatem!

                    </p>
                    <div className="bg-black my-4 rounded-full w-[200px] text-white py-2 px-3">GO to</div>
                  </div>
                  <div className="bottom border border-black ">
                    <span className="text-drrey text-m">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, dolore?
                    </span>
                    <img src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/Rectangle_41429_1_2878x.png?v=1699194073" alt="" className="w-full"/>
                    
                  </div>
                </div>
                <div className="border border-rose-300 h-[600px]">
                  <div className="w-full h-full rounded-2xl  img bg-center bg-no-repeat bg-cover bg-[url('https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png')]">
                    
                  </div>

                </div>
                <div className="border border-rose-400 p-5">
                  <ReactSlick/>



                  
                </div>
              </div>
            </div>
            <div className="row lg:px-10 px-5 xl:px-20 mt-10 ">
              <div className="title-wrap flex justify-between">
                 <h2 className="text-5xl dark:text-rose-500 mb-4">Catlog Hermes</h2>
                 <div className="wrap flex justify-around border">
                  <a className=" rounded-full mr-3">
                    Band Type
                    
                  </a>
                  <a className="dark:text-slate-300 rounded-full mr-3">
                    Band color
                  </a>
                  <a className="dark:text-slate-300 dark:bg-orange-600 h-auto rounded-full mr-3">
                    Csde Size
                  </a>
                  <a className=" rounded-full mr-3">
                    Collection 
                  </a>
                 </div>
              </div>
            </div>
            <div className="row lg:px-10 px-5 xl:px-20 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3" >
                <div className="w-full flex border pr-4">
                  <div className="left w-1/2">
                    <img className='w-full rounded-2xl' src="
           https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/A2669111_TD03_V1_3078x.jpg.png " alt="" />

                    
                  </div>
                  <div className="right p-5 w-1/2">
                    <div className="txt">
                      <h4 className="text-2xl dark:text-slate-100">
                        Made to push boundaries
                      </h4>
                      <p className="text-xs dark:text-slate-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi, laborum sunt sapiente nulla, dolorem non qui nemo quas veritatis optio eveniet rem officia neque quaerat temporibus at atque beatae!
                      </p>

                      <b className="text-m">
                        Price
                      </b>
                    </div>
                    
                  </div>
                  
                </div>


                <div className="w-full flex  border pr-4">
                  <div className="left  w-1/2">
                    <div className="video-wrap overflow-hidden rounded-2xl">
                      <video autoPlay className="" loop style={{ width: '520px', height: '170px' }}>
                        <source src="   https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/吹氣袋-吸管插入拷貝.mp4" />
                      </video>

                    </div>
                   

                  </div>
                  <div className="right p-5  w-1/2">
                    <div className="txt">
                     
                      <p className="text-xs dark:text-slate-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi, laborum sunt sapiente nulla, dolorem non qui nemo quas veritatis optio eveniet rem officia neque quaerat temporibus at atque beatae!
                      </p>

                      <b className="text-m">
                        Price
                      </b>
                    </div>

                  </div>

                </div>
                
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <div className="px-[25px] md:px-20">
            <div className="colorwrap flex py-20 md:py-40  justify-center rounded-2xl bg-black dark:bg-gray-100">
              <div className="txt w-full md:w-2/3 flex flex-col justify-center items-center">
                <h2 className="text-5xl text-center text-white dark:text-black">極安檢測-<br></br>
                  胃幽門螺旋桿菌的快速尿素呼吸檢測法法</h2>
                <p className="text-gray-300 w-2/3 text-center dark:text-gray-800">胃部感染胃幽門螺旋桿菌時，當我們服用尿素溶液後，胃幽門螺旋桿菌上的尿素酶會將尿素分解成二氧化碳和氨氣。</p>

                <a href="" className="bg-rose-500 text-center mt-6 rounded-full w-[150px] text-white py-2 ">GO to Product</a>

              </div>
            </div>


          </div>
        </section>
        <section className="mt-20">
          <div className="px-[25px] md:px-20">
            <div className="">

              <div className="txt w-full  md:w-1/2">

               
                <h2 className="text-black dark:text-white text-5xl">
                  多領域應用

                </h2>


                <p className="text-xl font-medium">專利技術建構的生態系健康檢測平台</p>
              </div>

            </div>
            <div className="">
              <ApplicateCard />
            </div>
            {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/cPZDRSw-YP7AuzNs/scene.splinecode"></spline-viewer> */}
          </div>
        </section>

        <section className="section_cloudinary mt-10">
          <div className="row">

          </div>
          <div className="row">
            <div className="container flex">


              <div className="flex  md:flex-row flex-col  justify-center row ">


                <div className="border rounded-2xl overflow-hidden video-wrap w-[100%] border border-white   flex justify-center  md:w-[70%] rounded-2xl overflow-hidden">
                  <CldVideoPlayer
                    className="rounded-2xl"
                    width={700}
                    height={607}
                    src="hnztzdfyhttcbmpwqkwm"

                  />
                </div>
                <div className="w-[100%] md:w-[30%] mb-5 p-0 md:pl-7">
                  <div className="txt">
                    <h1 className="text-5xl font- dark:text-slate-300">
                      TITLE1
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magnam, rem, maxime aliquid atque natus quae, hic blanditiis minima ipsum quidem! Tempora asperiores doloribus ad blanditiis. Recusandae a itaque accusamus?

                    </p>
                  </div>

                </div>
              </div>


            </div>
          </div>

        </section>








        {/* 
        <CldImage
          width="600"
          height="600"
          src="cld-sample-5"
          alt="My Image"
        /> */}

        <section>
          <div className="section_banner02 overflow-hidden ">
            <div className="row border border-black   bg-cover bg-no-repeat bg-right md:bg-center bg-[url('https://www.zensor.com.tw/images/nextTest/up100-banner01.png')] h-[500px] w-full px-10">
              <div className="grid grid-cols-2 h-full flex items-center justify-center">
                <div className="border border-white">
                  <div className="txt  flex items-center flex-col  justify-center">

                    <div className="relative flex-col flex justify-center mb-8 pl-5" data-aos="fade-up" data-aos-delay="450">
                      <h2 className="text-white dark:text-rose-500  text-5xl ">胃幽門桿菌快速檢測
</h2>
                      <p className="text-gray-100">30分鐘立即獲得尿素呼吸測試結果</p>
                      <a href="" className="btn bg-rose-600 mt-3 text-gray-200 rounded-full px-4 py-2 w-[150px] text-center">關於極安檢測</a>

                    </div>
                  </div>
                </div>
                <div className="border border-white"></div>

              </div>
            </div>
          </div>
        </section>
        <Testimonials />




        <div className="row py-20 lg:px-10 px-5 xl:px-20 ">
          <SwiperCard />

        </div>



        MobileMenu</div>
    </div>
  )
}
