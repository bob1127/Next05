"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { card, CardFooter } from '@nextui-org/react';
import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

import { Tabs, Tab} from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";
import testPictureStatic from "../../public/images/SG01-Camera.webp";


import Carousel from "../../components/Products/ProductCarousel.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import TwoColSlider from '../../components/TwoColumnSlider/app/page01.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import ModalBtn from "../../components/ModalBtn-1.jsx"
import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";
import UP10001 from '../../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'

import { CldVideoPlayer } from "next-cloudinary";
import carousel001 from '../../public/images/截圖.webp'

import UP1002 from '../../public/images/截圖.webp'
import ReactSlick from '../../components/reactSlick.jsx'





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
const title01 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: 0,
        }
    }

}
const title02 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: .3,
        }
    }

}
const title03 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1,
            delay: .9,
        }
    }

}

const card01
    = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 0,
        }
    }

}
const card02 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .3,
        }
    }

}
const card03 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .6,
        }
    }

}
const card04 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .9,
        }
    }

}
const card05 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 1.2,
        }
    }

}
const card06 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 1.5,
        }
    }

}
const ImageAnimate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: 0.5,
        }
    }

}

const gallery = [
    { id: 1, imgUrl: "/images/Bed-1.webp" },
    { id: 2, imgUrl: "/images/Bed-2.webp" },
    { id: 3, imgUrl: "/images/Bed-3.webp" },
    { id: 4, imgUrl: "/images/Oak.webp" },
];



let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};



const data = [
    {
        image:
          
            '/輪播圖-04_iautsb.webp' ,
       
    },
    {
        image:
            '/輪播圖-04_iautsb.webp'
      
    },
    {
        image:
            '/輪播圖-04_iautsb.webp'
      
    },
    {
        image:
            '/輪播圖-04_iautsb.webp'
      
    },
    {
        image:
            '/輪播圖-04_iautsb.webp'
      
    },
    {
        image:
            '/輪播圖-04_iautsb.webp'
      
    },


];
const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
};
const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
};

// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (
    

    <div className="relative">



        <title>Ultrapeace｜ Instant H.pylori BUT test kit</title>
        <meta key="description" name="description" content="DESCRIPTION" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        <meta property="og:url" content="https://ithelp.ithome.com.tw/articles/10278469" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="#21 No-code 之旅 — 如何讓網站在分享時看起來漂亮和有吸引力？Open Graph (OG) 簡介" />
        <meta property="og:description" content="大家有沒有發現當有人在社群軟體分享網址的時候，通常除了網址本身還會看到一張縮圖加上網站的標題和描述？這就是用 Open Graph (OG) 設定出來的！今天會解釋一點點什麼是 OG tag (標籤)，加上怎麼在 Next.js 專案中設定 OG 標籤～" />
        <meta property="og:image" content="https://i.imgur.com/D9cZHL7.png" />


        <AnimatedTabs />
      <MobileMenu/>
        <DefaultSeo
            title="Next SEO Example"
            description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: 'https://www.url.ie/',
                siteName: 'SiteName',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />



        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Navigation />
            <div className='fullscreen'>

                {/* modal open  */}
                {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                <ModalBody>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal> */}

                {/* ---------------------- */}

                <div className='product px-3 md:px-10  flex-col md:flex-row border py-9'>

                    <Carousel
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 200, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        data={data}
                        time={3000}

                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        // slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={false}
                        dots={false}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        // slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        showNavBtn={true}
                    // style={{
                    //     textAlign: "center",
                    //     maxWidth: "850px",
                    //     margin: "40px auto",
                    // }}
                    />
                    {/* <motion.div
                    className='img'
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}>
                    <motion.img
                        key={props.product.image}
                        src={props.product.image}
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 200, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    />
                    
                    
                </motion.div> */}




                    <div className='product-details  md:px-10 px-4 w-full'>
                        <motion.div variants={stagger} className='inner w-full pr-2'>
                            <Link href='../products'>
                                {/* <motion.div variants={fadeInUp}>
                                Back to products
                            </motion.div> */}
                            </Link>
                            <motion.div variants={fadeInUp}>
                                <span className=' '>Humming Probe UX200</span>
                                <Link href='../Products/product01'>CN</Link>
                            </motion.div>
                            <motion.h1 className="" variants={fadeInUp}>適用於全系列全球首創的免校正pH酸鹼電極
</motion.h1>
                            <motion.p className="dark: text-slate-300 " variants={fadeInUp}>


                                <ul className="mt-6 ml-0 pl-0">
                                    <li className="text-m font-normal dark:text-white"> ・非侵入檢測方式</li>
                                    <li className="text-m font-normal dark:text-white"> ・30分鐘立即獲得檢測成果
Screen</li>
                                    <li className="text-m font-normal dark:text-white"> ・可用於評估治療前後效果Determination by Algorithm</li>
                                    <li className="text-m font-normal dark:text-white">   ・自動判讀檢測成果dustproof grade</li>
                                </ul>
                                {/* <CelebrateBTN/> */}






                            </motion.p>
                            {/* <motion.div variants={fadeInUp} className='additonals'>
                                <span>Soy Free</span>
                                <span>Gluten Free</span>
                            </motion.div> */}
                            {/* <motion.div variants={fadeInUp} className='qty-price'>
                                <div className='qty'>
                                    <div className='minus'>-</div>
                                    <div className='amount'>1</div>
                                    <div className='add'>+</div>
                                </div>
                                <span className='price'></span>
                            </motion.div> */}
                            <motion.div variants={fadeInUp} className='btn-row'>
                                <ModalBrn />
                                {/* <button className='add-to-cart rounded-full	 bg-pink-500 text-gray-100 dark:bg-gray-700'> Add to cart</button>
                            <button className='subscribe'> Subscribe</button> */}

                            </motion.div>

                        </motion.div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="content-bottom md:p/x-10 xl:px-15 2xl:px-20">
                <section className="w-full section-about border  ">
                    <TextScroll />
                    <div className="Container items-center flex justify-center w-full	pt-10">
                        <div className="wrap flex flex-col justify-center items-center w-3/4">


                            <motion.div className="card"
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ staggerChildren: 0.3 }}
                            >

                                <motion.h2
                                    className="text-center mb-4 text-2xl  tracking-tight text-gray-900 lg:text-4xl lg:leading-loose  dark:text-white font-bold uppercase"
                                    variants={textAnimate}
                                > Humming Probe UX100 - 產品外觀</motion.h2>


                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="section_appearance ">
                   <div className="container w-4/5">
                        <div className="grid  md:grid-cols-1 lg:grid-cols-2 px-20 ">
                            <div className=" flex flex-col justify-center pl-10 ">
                                <div className="txt">
                                    <h2 className="">
                                        開機自檢校正<br></br>
                                        確保每次測量的可靠性

                                    </h2>
                                    <p>
                                        4.3寸的全彩觸控螢幕，清楚簡明的圖形選單，<br></br>提供直覺操作體驗，讓您立即進行測量。
                                    </p>
                                </div>

                            </div>
                            <div>
                                <Image src='/UX100-12-產品說明-720x540_工作區域_1-2_ru6jfc.webp' width={1000} height={1000}></Image>

                            </div>
                        </div>

                   </div>
                      
                          
                        
                    <div className=" flex justify-center px-10 ">
                        <div className="grid text-center  md:grid-cols-2 lg:grid-cols-4 mt-10  rounded-lg py-5 px-5 bg-orange-500"> 
                            <a href='#inside' className="hover:bg-white hover:bg-opacity-20 p-4 rounded-lg hover:duration-400 text-white flex md:mt-5 mt-6">
                               
                                    <Image className="ml-5 rounded-lg" src='/UX100-Unboxing_ivzyjz.webp' width={110} height={110}></Image><br></br>
                                <p className="text-white ml-1">內容配件<br></br>(極安檢測-胃幽門螺旋桿菌不同診斷方式比較
)</p>
                               
                            </a>
                            <a href='#features' className="hover:bg-white hover:bg-opacity-20 p-4 rounded-lg hover:duration-400 text-white flex md:mt-5 mt-6">
                                <Image className="ml-5 rounded-lg" src='/banner01_hox7to.png' width={110} height={110}></Image>
                                <p className="text-white ml-1">產品特點<br></br>(Algorithm automatically reads endpoints)</p>
                            </a>
                            <a href='#' className="hover:bg-white hover:bg-opacity-20 p-4 rounded-lg hover:duration-400 text-white flex md:mt-5 mt-6">
                                <Image className="ml-5 rounded-lg" src='/banner01_hox7to.png' width={110} height={110}></Image>
                                <p className="text-white ml-1">各種場都可提供清晰顯示(Provides a clear display)
</p>
                            </a>
                            <a href='#' className="hover:bg-white hover:bg-opacity-20 p-4 rounded-lg hover:duration-400 text-white flex md:mt-5 mt-6">
                                <Image className="ml-5 rounded-lg" src='/banner01_hox7to.png' width={110} height={110}></Image>
                                <p className="text-white ml-1">Shop Early, 
Enjoy Sooner</p>
                            </a>
                        </div>
                        
                    </div>
                  
                    
                    {/* <div className="flex justify-center bg-black py-4 mt-5">
                        <div className="color-bar w-2/4  grid grid-cols-3">
                            <div className="text-center">
                                <a href="" className="text-white text-center">產品概述</a>
                            </div>
                            <div className="text-center">
                                <a href="" className="text-white text-center">使用方式

</a>
                            </div>
                            <div className="text-center">
                                <a href="#fff" className="text-white text-center">您可能也會喜歡</a>


                            </div>
                        </div>
                       
                        
                    </div>
                     */}
                </section>
                
                <section className="section_Accessories " id='inside'>

                    <div className="flex flex-col w-full px-[20px] md:px-20 bg-gray-150">
                        <div className="w-full text-center flex flex-col items-center justify-center py-10">
                            <h1 className="mt-2  text-center text-3xl md:text-5xl font-bold uppercase" >
                                內容物配件
                            </h1>
                            <p className="">
                                極安檢測-胃幽門螺旋桿菌不同診斷方式比較

                            </p>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row ">
                            <div className="w-full lg:w-1/2">

                                <div className="left py-16 border-gray-50 rounded-2xl shadow-md bg-black border  flex flex-col items-center justify-center overflow-hidden group">
                                    <div className="txt text-center p-1">

                                        <p className="text-white text-normal">Stem Play</p>
                                        <h2 className="text-white mt-2 text-center text-4xl font-bold uppercase">直覺性操作指引
</h2>

                                        <a href="#" className="mt-10">Learn More</a>
                                    </div>
                                    <Image className="duration-500 group-hover:scale-110" src='/UX100_cpaa0v.webp' width={600} height={200}></Image>
                                    <p className="text-gray-300 w-2/3 text-center mt-10 hidden md:block">4.3寸的全彩觸控螢幕，清楚簡明的圖形選單，提供直覺操作體驗，讓您立即進行測量。</p>
                                </div>


                            </div>
                            <div className="right w-full lg:w-1/2">
                                <div class='h-1/2 ml-0 md:ml-5 mt-4  w-full border border-gray-50 bg-white flex rounded-2xl p-8 shadow-md overflow-hidden  group'>
                                    <div className="tx w-2/5">
                                        <h2 className="text-black mt-2 text-left text-3xl font-bold uppercase">What's Include ?</h2>
                                        <p className="text-xs">1.UX100:酸鹼檢測儀(一台)</p>
                                        <p className="text-xs">1.UX100:酸鹼檢測儀(一台)</p>
                                        <p className="text-xs">1.UX100:酸鹼檢測儀(一台)</p>
                                        <p className="text-xs">1.UX100:酸鹼檢測儀(一台)</p> <p className="text-xs">1.UX100:酸鹼檢測儀(一台)</p>
                                        
                                    </div>
                                    <div className="w-3/5 group-hover:scale-150 relative h-[300px] duration-500">
                                        <Image src='/UX100-Unboxing_ivzyjz.webp' width={800} height={500} className="absolute right-[-10px] scale-[1.05] "></Image>
                                    </div>
                                    
                                   


                                </div>
                                <div className=" flex md:flex-row flex-col   w-full ">
                                    <div className="w-full mt-4  ml-0 md:ml-5 mt-3 h-1/2">
                                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                                                <h4 className="text-gray-200 font-medium text-2xl">Acme camera</h4>
                                            </CardHeader>
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                
                                                removeWrapper
                                                alt="Card example background"
                                                className="z-0 w-full h-full object-cover"
                                                src="https://www.ultraehp.com/images/Ultra%20Video/UX100/中文版/UX100中文版.mp4"
                                            />
                                            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                                <div>
                                                    <p className="text-black text-tiny">Available soon.</p>
                                                    <p className="text-black text-tiny">Get notified.</p>
                                                </div>
                                                <Button className="text-tiny"  color="primary" radius="full" size="sm">
                                                    <a href="https://www.youtube.com">
                                                        Go youtube
                                                   </a>
                                                </Button>
                                              
                                            </CardFooter>
                                        </Card>
                                    </div>
                                    <div className="w-full ml-0 mt-4 md:ml-5 mt-3 h-full">
                                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                                            </CardHeader>
                                            <Image
                                                 width={500}
                                                 height={500}
                                                removeWrapper
                                                alt="Relaxing app background"
                                                className="z-0 w-full h-full object-cover"
                                                src="/截圖_2024-02-16_上午11.11.08_qcpxwy.png"
                                            />
                                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                                <div className="flex flex-grow gap-2 items-center">
                                                    <Image
                                                        width={600}
                                                        height={600}
                                                        alt="Breathing app icon"
                                                        className="rounded-full w-10 h-11 bg-black"
                                                        src="/截圖_2024-02-16_上午11.11.08_qcpxwy.png"
                                                    />
                                                    <div className="flex flex-col">
                                                        <p className="text-tiny text-white/60">Breathing App</p>
                                                        <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                                                    </div>
                                                </div>
                                                <Button radius="full" size="sm">Download DM</Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>


                
                </section>
                
                <section className="section_clear_display" id="features">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">
                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                       <div className="container flex flex-col justify-center items-center center">
                                            <h2 className="">各種場都可提供清晰顯示</h2>
                                            <p className=" w-full lg:w-2/3 ">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。</p>
                                       </div>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >

                                        <div className="order mt-10 mx-auto py-1 px-5 text-center w-[150px] bg-black rounded-full text-slate-200 border">
                                            UP100
                                        </div>

                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div>


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >

                                        <div className="container center relative w-full border flex justify-center">
                                            {/* <img className="w-[1000px] mx-auto rotate-[-1.5deg]" src="https://www.ultraehp.com/images/Products-Detail-Img/UP100/up100-12.png" alt="" /> */}

                                            <Image placeholder="empty" loading="lazy" alt="running people" src='/UX100-02-手拿方便-03-720x540-2_gsmgfq.png' width={1000} height={400} className="rounded-2xl" />



                                            
                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>


                            
                        </div>
                    </div>
                </section>
                <section className="section_lens">
                    <div className=" flex flex-col justify-center items-center px-5 md:px-20">
                        <div className="grid md:w-full  lg:w-2/3 grid-cols-1">
                            <div className="row mt-20  flex items-center flex-col  justify-center">
                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex flex-col justify-center items-center center">
                                            <h2 className="">內置鏡頭
</h2>
                                            <p className=" w-full lg:w-2/3 ">可隨時記錄現場樣品狀態及測試環境。</p>
                                        </div>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >

                                        <div className="order mt-10 mx-auto py-1 px-5 text-center w-[150px] bg-black rounded-full text-slate-200 border">
                                            UP100
                                        </div>

                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div>


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >


                                        <div className="container center relative w-full border flex justify-center">
                                            {/* <img className="w-[1000px] mx-auto rotate-[-1.5deg]" src="https://www.ultraehp.com/images/Products-Detail-Img/UP100/up100-12.png" alt="" /> */}

                                            <Image placeholder="empty" loading="lazy" alt="running people" src='/UX100-10-手持拍照-720x540-2_tgcgm8.webp' width={1100} height={400} className="rounded-2xl" />




                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>


                <section>
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">
                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >
                                        <div className="container flex flex-col justify-center items-center center">

                                            <h2 className="">產品特點</h2>
                                            <p className="text-base text-gray-800 md:w-2/3 w-full mx-auto">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。</p>



                                            </div>

                                    
                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >

                                        <div className="order mt-10 mx-auto py-1 px-5 text-center w-[150px] bg-black rounded-full text-slate-200 border">
                                            UP100
                                        </div>

                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div>


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >

                                        <div className="relative w-full grid lg:grid-cols-2 px-20">

                                            <div className="px-10 flex shadow-xl p-7 rounded-2xl flex-col items-center m-3 dark:bg-white ">
                                                <div className="txt">
                                                    <h3 className="">
                                                        可透過USB連接至電腦


                                                    </h3>
                                                 

                                                </div>
                                                <small className=" ">內嵌大容量移記憶體空間，可記錄大量現場原始數據（照片，文件等）。也可作為一般移動硬碟使用。</small>
                                                <div className="img mt-5">
                                                    <Image src='/UX100-09-USB-720x540-2_vyfagg.webp' width={600} height={600}></Image>
                                                </div>
                                                
                                                
                                            </div>
                                            <div className="px-10 m-3 flex shadow-xl p-7 rounded-2xl flex-col items-center dark:bg-white">
                                                <div className="txt">
                                                    <h3 className="">
                                                        高效充電電池系統


                                                    </h3>


                                                </div>
                                                <small className=" ">內建高效充電電池，，充電後可使用數小時，滿足實驗室及野外，無電力系統環境下的各種移動檢測需求。

</small>
                                                <div className="img mt-5">
                                                    <Image src='/UX100-01-高校充電電池720x540-2_isuywj.webp' width={600} height={600}></Image>
                                                </div>


                                            </div>
                                          

                                           




                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>
                <section>
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">
                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <h2 className="mb-4 dark:text-white text-center text-3xl md:text-5xl leading-none font-bold uppercase">產品特點</h2>
                                        <p className="text-base text-gray-800 md:w-2/3 w-full mx-auto">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。</p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >

                                        <div className="order mt-10 mx-auto py-1 px-5 text-center w-[150px] bg-black rounded-full text-slate-200 border">
                                            UP100
                                        </div>

                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div>


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >

                                        <div className="relative w-full grid lg:grid-cols-2 border border-black px-20">

                                            <div className="px-10">
                                                <Card className="py-4">
                                                    <CardHeader className="pb-0 pt-2 px-4 flex-col  items-center">

                                                        <h2 className="font-bold text-large">無論如何使用都得心應手

                                                        </h2>

                                                     
                                                        <small className="text-default-500 text-gray-900">長時間連續監測
</small>
                                                        <small className="text-default-500 text-gray-900">三角力學活動架
                                                        </small>
                                                        <small className="text-default-500 text-gray-900">方便穩定的固定方式
                                                        </small>


                                                    </CardHeader>
                                                    <CardBody className="overflow-visible py-2">
                                                        <Image
                                                            alt="Card background"
                                                            className="object-cover rounded-xl"
                                                            src="/UX100-img03_eakhd8.webp"
                                                            width={970}
                                                            height={500}
                                                        />
                                                    </CardBody>
                                                </Card>
                                            </div>
                                            <div className="px-10">
                                                <Card className="py-4">
                                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                                        <h2 className="font-bold text-large">IP54防水防塵等級
                                                        </h2>
                                                        <small className="text-default-500 text-gray-900">不受天氣影響</small>
                                                        <small className="text-default-500 text-gray-900">適合各種應用場合</small>
                                                        <small className="text-default-500 text-gray-900">堅固耐用</small>
                                                      
                                                       
                                                    </CardHeader>
                                                    <CardBody className="overflow-visible py-2">
                                                        <Image
                                                            alt="Card background"
                                                            className="object-cover rounded-xl"
                                                            src="/UX100-img02_wfp5ej.webp"
                                                            width={970}
                                                            height={500}
                                                        />
                                                    </CardBody>
                                                </Card>
                                            </div>







                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>
                <section className=" section_slider mt-20">
                    <div className="mb-10"> 
                        {/* <div className="text-center ">
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://medium.com/@jeyprox"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the article
                            </Link>
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://github.com/jeyprox/framer-carousel"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the repo
                            </Link>
                        </div> */}
                        <h1 className="mt-2  text-center text-4xl font-bold uppercase">
                          

                        </h1>
                       
                        <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={title01}
                            >

                              

                                <h2 id='fff' className="mb-4 dark:text-white text-3xl text-center md:text-5xl leading-none font-bold uppercase">  胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>
                              

                            </motion.h2>



                            <motion.p
                                className="text-m "
                                variants={title02}
                            >

                                <div className="px-[20px]">
                                    <p className="text-black w-full md:w-1/2  text-m text-center mx-auto dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem officiis saepe accusamus error, sit maxime commodi officia, rerum temporibus laudantium culpa recusandae dolor, ipsa eveniet cupiditate natus vero non!</p>
                                </div>

                                <div className="flex justify-center">
                                    <p className="text-sm text-center   rounded-full bg-orange-500 inline-block text-gray-100 mt-4 px-3 py-2 mx-auto ">
                                        幽門螺旋桿菌
 
                                    </p>
                                </div>

                            </motion.p>


                        </motion.div>
                       

                    </div>

                    <div className="flex w-full p-[15px] px-20 relative">

                   

                    <div className="w-[60%] px-20 ">

                        <div className="txt  pl-[20%]">
                            <h3>
                                    輕鬆手持，方便攜帶
                            </h3>
                                <p className="mt-2 dark:text-white text-base text-gray-800">250g 的輕巧重量，適合手持操作的大小。皮革質感防滑設計，可輕鬆單手完成操作。配合方便攜帶的拋棄式蜂鳥探針電極 (瞭解更多) 無需層層保護，輕鬆移動。</p>
                        </div>

                    </div>
                    <div className="w-[40%]  ">
                        {/* <TwoColSlider /> */}

                            <Image src='/截圖_2024-02-01_下午3.59.25_gfj4te.webp' width={400}height={1000}></Image>
                    </div>
                    </div>
                  
                </section>






                <section className="  mt-20 flex center">
                    <div className="mb-10 container md:px-10 lg:px-20">
                        {/* <div className="text-center ">
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://medium.com/@jeyprox"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the article
                            </Link>
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://github.com/jeyprox/framer-carousel"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the repo
                            </Link>
                        </div> */}
                        <h1 className="mt-2  text-center text-4xl font-bold uppercase">


                        </h1>

                        <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={title01}
                            >



                                <h2 id='fff' className="mb-4 dark:text-white text-3xl text-center text-black  leading-none font-bold uppercase">  什麼時候需要使用蜂鳥探針pH檢測電極？

</h2>


                            </motion.h2>



                            <motion.p
                                className="text-m "
                                variants={title02}
                            >

                             



                                <div className="card-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                    <div>
                                        <Card className="py-4">
                                            <CardHeader className="pb-0 pt-2 px-4 flex-col h-[250px] items-start">
                                                <h4 className="font-bold text-large">生物實驗室
                                                </h4>
                                                <small className="text-default-500 text-gray-900">培養基或者緩衝溶液的酸鹼值控制通常需要在0.1pH的範圍內調整酸鹼度。蜂鳥探針可以直接插入培養基中，精確控制及監測培養基酸鹼度。保證細胞及細菌等的培養所需的適合的環境。</small>
                                              
                                            </CardHeader>
                                            <CardBody className="overflow-visible py-2">
                                                <Image
                                                    alt="Card background"
                                                    className="object-cover rounded-xl"
                                                    src="/FAQ-01_kjgfr3.webp"
                                                    width={500}
                                                    height={300}
                                                />
                                            </CardBody>
                                        </Card>

                                    </div>
                                    <div>
                                        <Card className="py-4">
                                            <CardHeader className="pb-0 pt-2 px-4 flex-col h-[250px]  items-start">
                                                <h4 className="font-bold text-large">戶外現場檢測</h4>
                                                <small className="text-default-500 text-gray-900">傳統方法在監測戶外環境汙染問題，往往需要將樣品採樣至實驗室後進行檢測，直接現場檢測之方式較少採用，所需時間往往較長，無法於第一時間檢測出汙染問題。蜂鳥探針無須攜帶多種校正液體，只需攜帶檢測儀及試片電極，直接於現場檢測，快速得到檢測結果，大幅縮短檢測時程，第一時間了解汙染程度。</small>
                                               
                                            </CardHeader>
                                            <CardBody className="overflow-visible py-2">
                                                <Image
                                                    alt="Card background"
                                                    className="object-cover rounded-xl"
                                                    src="/FAQ-02_iidqpu.webp"
                                                    width={500}
                                                    height={300}
                                                />
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="py-4">
                                            <CardHeader className="pb-0 pt-2 px-4 flex-col h-[250px]  items-start">
                                                <h4 className="font-bold text-large">生醫檢測領域
                                                </h4>
                                                <small className="text-default-500 text-gray-800">生醫檢測的樣品體積量通常比較微小，如:血液、尿液、組織液等，以傳統pH計檢測電極無法量測，故常以較為簡單的模式(如顯色法)進行，無法準確得到量測數據。蜂鳥探針可以在樣品體積只有1 - 20 微升時 仍可準確的量測生物反應中酸鹼值及電導度之變化。拋棄式的設計更可以避免交叉污染。蜂鳥探針系統也可以客製化方式嵌入至其他檢測產品中提供pH數值。

</small>
                                               
                                            </CardHeader>
                                            <CardBody className="overflow-visible py-2">
                                                <Image
                                                    alt="Card background"
                                                    className="object-cover rounded-xl"
                                                    src="/FAQ-03_zpb7fd.webp"
                                                    width={500}
                                                    height={300}
                                                />
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="py-4">
                                            <CardHeader className="pb-0 pt-2 px-4 flex-col h-[250px]  items-start">
                                                <h4 className="font-bold text-large">農業領域
                                                </h4>
                                                <small className="text-default-500 text-gray-900">土壤的酸鹼度(pH值)是作物種植時重要的一步。蜂鳥探針可以直接在濕潤土壤或使用簡單水溶解介質中測試土壤的酸鹼度。協助植物生長管理或者土壤改良。</small>
                                              
                                            </CardHeader>
                                            <CardBody className="overflow-visible py-2">
                                                <Image
                                                    alt="Card background"
                                                    className="object-cover rounded-xl"
                                                    src="/FAQ-04_a9id6p.webp"
                                                    width={500}
                                                    height={300}
                                                />
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div><Card className="py-4">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[250px ]">
                                            <h4 className="font-bold text-large">食品與飲料加工業
                                                </h4>
                                            <small className="text-default-500 text-gray-900">酸鹼值對於生產食品的製程中，會影響到成品的口味、新鮮度和保存期限。蜂鳥探針的專利離子膜及拋棄式電極的設計可以克服樣品中的成分複雜，通常需要前處理過程後才能精確測測試。提供如肉品、魚類、果醬、海鮮、牛奶、起司、優格、乳製品、醬汁、茶類等pH值的精確量測結果。

</small>
                                          
                                        </CardHeader>
                                        <CardBody className="overflow-visible py-2">
                                            <Image
                                                alt="Card background"
                                                className="object-cover rounded-xl"
                                                src="/FAQ-05_jlfyqv.webp"
                                                width={500}
                                                height={300}
                                            />
                                        </CardBody>
                                    </Card></div>
                                    <div><Card className="py-4">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[250px ]">
                                            <h4 className="font-bold text-large">合成實驗室
                                            </h4>
                                            <small className="text-default-500 text-gray-900">無論是有機，無機或是高分子合成實驗室，在控制反應條件及中間產物的管理中，會需要針對不同階段的產物進行pH酸鹼值的控制。拋棄式的蜂鳥探針可以在不同階段直接蘸取少量樣品即可獲得精確的pH值。拋棄式的設計也不用擔心雜質污染電極，或帶入污染物。

</small>
                                          
                                        </CardHeader>
                                        <CardBody className="overflow-visible py-2">
                                            <Image
                                                alt="Card background"
                                                className="object-cover rounded-xl"
                                                src="/FAQ-06_nqo3sg.webp"
                                                width={500}
                                                height={300}
                                            />
                                        </CardBody>
                                    </Card></div>





                                </div>


                            </motion.p>

                            

                        </motion.div>


                    </div>

                    

                </section>










                <section className="section_find px-20 flex  flex-col justify-center items-center mt-10">
                    <div className="text-center py-5">
                        <h2 className="font-bold uppercase text-4xl">找到你的蜂鳥探針</h2>
                    </div>
                    <div className="w-4/5  flex flex-wrap  justify-center items-center align-middle">
                        <div className="item flex flex-col align-middle items-center justify-center w-1/3">
                            <Image src='/UH-1_twuf2y.webp' placeholder="empty"
                                loading="lazy" width={70} height={150}></Image>
                            <div className="txt flex flex-col justify-center items-center">
                                <h4 className="font-bold text-xl">Classic
                                </h4>
                                <p>適用於大部分的檢測需求</p>
                                <b className="text-rose-700 text-normal">UH1 pH STRIP
                                </b>
                            </div>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    適用於液體樣品
                                </li>
                                <li className="mt-2">
                                    樣品使用量：10~20μL
                                </li>
                                <li className="mt-2">
                                    適用單點&連續測試
                                </li>
                            </ul>
                            <Button radius="full" href='#' className="bg-orange-500  text-white shadow-lg">
                                More
                            </Button>
                        </div>
                        <div className="item flex flex-col align-middle items-center justify-center w-1/3">
                            <Image src='/UH2_ivwada.webp' placeholder="empty"
                                loading="lazy" width={70} height={150}></Image>
                            <div className="txt flex flex-col justify-center items-center">
                                <h4 className="font-bold text-xl">Classic
                                </h4>
                                <p>適用於大部分的檢測需求</p>
                                <b className="text-rose-700 text-normal">UH1 pH STRIP
                                </b>
                            </div>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    適用於液體樣品
                                </li>
                                <li className="mt-2">
                                    樣品使用量：10~20μL
                                </li>
                                <li className="mt-2">
                                    適用單點&連續測試
                                </li>
                            </ul>
                            <Button radius="full" href='#' className="bg-orange-500  text-white shadow-lg">
                                More
                            </Button>
                        </div>
                        <div className="item flex flex-col align-middle items-center justify-center w-1/3">
                            <Image src='/UH2-Gas_h1vvho.webp' placeholder="empty"
                                loading="lazy" width={70} height={150}></Image>
                            <div className="txt flex flex-col justify-center items-center">
                                <h4 className="font-bold text-xl">Classic
                                </h4>
                                <p>適用於大部分的檢測需求</p>
                                <b className="text-rose-700 text-normal">UH1 pH STRIP
                                </b>
                            </div>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    適用於液體樣品
                                </li>
                                <li className="mt-2">
                                    樣品使用量：10~20μL
                                </li>
                                <li className="mt-2">
                                    適用單點&連續測試
                                </li>
                            </ul>
                            <Button radius="full" href='#' className="bg-orange-500   text-white shadow-lg">
                                More
                            </Button>
                        </div>
                    </div>

                </section>
                <section className="section_find px-20 flex  flex-col justify-center items-center mt-20">
                    <div className="text-center py-5">
                        <h2 className="font-bold uppercase text-4xl">找到你的儀表及配件</h2>
                    </div>
                    <div className="w-4/5  flex flex-row justify-center items-center align-middle">
                        <div className="item flex flex-col align-middle items-center justify-center w-1/3">

                            <div className="txt flex flex-col justify-center items-center">
                                <h4 className="font-bold text-xl">UX100 酸鹼檢測儀
                                </h4>
                                {/* <p>適用於大部分的檢測需求</p>
                            <b className="text-rose-700 text-normal">UH1 pH STRIP
                            </b> */}
                            </div>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    4.3寸彩色防水觸控頻

                                </li>
                                <li className="mt-2">
                                    雙模式檢測片連結器

                                </li>
                                <li className="mt-2">
                                    500萬畫素鏡頭可編輯資料
                                </li>
                            </ul>
                            <Button radius="full" href='#' className="bg-orange-500   text-white shadow-lg">
                                More
                            </Button>
                            <Image src='/UX100_cpaa0v.webp' placeholder="empty" width={470}
                                loading="lazy" height={470}></Image>

                        </div>
                        <div className="item flex flex-col align-middle items-center justify-center w-1/3">

                            <div className="txt flex flex-col justify-center items-center">
                                <h4 className="font-bold text-xl">UX100 酸鹼檢測儀
                                </h4>
                                {/* <p>適用於大部分的檢測需求</p>
                            <b className="text-rose-700 text-normal">UH1 pH STRIP
                            </b> */}
                            </div>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    4.3寸彩色防水觸控頻

                                </li>
                                <li className="mt-2">
                                    雙模式檢測片連結器

                                </li>
                                <li className="mt-2">
                                    500萬畫素鏡頭可編輯資料
                                </li>
                            </ul>
                            <Button radius="full" href='#' className="bg-orange-500   text-white shadow-lg">
                                More
                            </Button>
                            <Image loading="lazy" placeholder="empty" src='/UX200_g8naeo.webp' width={470} height={470}></Image>

                        </div>
                        <div className="item flex flex-col align-middle items-center justify-center w-1/3">

                            <div className="txt flex flex-col justify-center items-center">
                                <h4 className="font-bold text-xl">UX100 酸鹼檢測儀
                                </h4>
                                {/* <p>適用於大部分的檢測需求</p>
                            <b className="text-rose-700 text-normal">UH1 pH STRIP
                            </b> */}
                            </div>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    4.3寸彩色防水觸控頻

                                </li>
                                <li className="mt-2">
                                    雙模式檢測片連結器

                                </li>
                                <li className="mt-2">
                                    500萬畫素鏡頭可編輯資料
                                </li>
                            </ul>
                            <Button radius="full" href='#' className="bg-orange-500   text-white shadow-lg">
                                More
                            </Button>
                            <Image loading="lazy" placeholder="empty" src='/CS200_mz0vj6.webp' width={470} height={470}></Image>

                        </div>
                    </div>

                </section>
                <section>
                    <div className="Container ">
                        <div className="grid grid-cols-1">
                        
                            <div className="row">
                                        <ModalBtn/>
                               
                                        {/* <div className="relative w-full border">
                                           

                                            <Image placeholder="empty" loading="lazy" alt="running people" src='/UX100-1920X768-促銷活動-01-2_mocojp.webp' width={1920} height={600}  />




                                        </div> */}






                            </div>



                        </div>
                    </div>
                </section>
                <section className="section_double">
                    {/* <Double/> */}
                </section>
                <section>
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">
                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <h2 className="">Humming Probe UX100
</h2>
                                        <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">免校正酸鹼檢測儀
</p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m flex center "
                                        variants={title02}
                                    >

                                        <button href='' className="rounded-full w-[150px]  bg-orange-500 text-white py-2 px-4 mx-auto mb-[50px]">
                                            DM 下載
                                        </button>
{/* 
                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div> */}


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >


                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                         <div className="p-10">
                                                <Image src='/UX02_e3q1re.webp ' width={600} height={600}></Image>
                                         
                                         </div>
                                         <div>


                                                <div className="flex w-full flex-col">
                                                    <Tabs aria-label="Options">
                                                        <Tab key="UX100-酸鹼檢測儀" title="UX100-酸鹼檢測儀">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                           
                                                                            <tbody>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        螢幕：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        4.3寸 彩色LCD螢幕
                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        防水防塵等級：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        IP54
                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        防水防塵等級：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        IP54
                                                                                    </td>



                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        相機：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        500萬畫素
                                                                                    </td>

                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        電源：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        5V DC，2A(Input 100/240V AC)(電池容量2500mAh)
                                                                                    </td>


                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        尺寸（寬Ｘ長Ｘ高）：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        87 x 152 x 21 mm
                                                                                    </td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        重量：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        250g
                                                                                    </td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Apple Watch 5
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        Red
                                                                                    </td>

                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </Tab>
                                                        <Tab key="量測範圍
" title="量測範圍
">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                            
                                                                            <tbody>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        pH值：	
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        0.00~14.00 pH
                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        電位：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        ± 1000.0 mV
                                                                                    </td>



                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        溫度：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        10 ~ 40°C (小於10℃ 或 大於40℃ 顯示提示警語)
                                                                                    </td>

                                                                                </tr>
                                                                               
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </Tab>
                                                        <Tab key="解析度" title="解析度">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                            <tbody>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        pH值：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        0.01pH
                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        電位：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        0.1 mV
                                                                                    </td>



                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        溫度：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        0.1 °C
                                                                                    </td>

                                                                                </tr>

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </Tab>
                                                        <Tab key="精確度" title="精確度">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                            <tbody>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        pH值：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        ± 0.1 pH
                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        電位：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        0.05 %
                                                                                    </td>



                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        溫度：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        ± 0.5°C
                                                                                    </td>

                                                                                </tr>

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </Tab>
                                                    </Tabs>
                                                </div>  



                                               

                                         </div>
                                    
                                    </div>




                                       



                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>
                {/* <ReactSlick /> */}
                <section>
                    <div className="Container px-5 md:px-20">
                        
                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">
                               
                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >您可能也會喜歡

                                        <h2 className="text-black">
                                        </h2>
                                        <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">免校正酸鹼檢測儀
                                        </p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >
                                       

                                        <div className="order mt-10 mx-auto py-1 px-5 text-center w-[150px] bg-black rounded-full text-slate-200 border">
                                          
                                            
                                        </div>
                                        {/* 
                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div> */}


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >









                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>
                {/* <iframe
                    src="https://player.cloudinary.com/embed/?public_id=shoes_video&cloud_name=demo"
                    width="640"
                    height="360"
                    style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    frameborder="0"
                ></iframe> */}
         {/* <CldVideoPlayer
                    id="drmonozsf"
                    width="1920"
                    height="1080"
                    src="samples/sea-turtle`"
                />  */}



                
            </div>




        </motion.div>

    </div>

);


// Product.getInitialProps = async function (context) {
//     const { id } = context.query;
//     const res = await fetch(
//         `https://my-json-server.typicode.com/bob1127/next/products/${id}`
//     );
//     const product = await res.json();
//     return { product };


// };

export default Product;
