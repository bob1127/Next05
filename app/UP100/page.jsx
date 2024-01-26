"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import TextScroll from '../../components/textScroll/TextScroll.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";


import 'cloudinary-video-player/cld-video-player.min.css';

import MobileMenu from '../../components/mobileMenu/index.jsx'


import { Table } from "@nextui-org/react";
import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";



import Carousel from "../../components/Products/ProductCarousel.jsx";
import Navigation from "../../components/Products/Navigation.jsx";

import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";


import { CldVideoPlayer } from "next-cloudinary";




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
            "https://www.ultraehp.com/images/Products-Detail-Img/UP100/輪播圖01.webp",
        //     caption: `<div>
        //     San Francisco<br/><span>Next line</span>
        //   </div>`,
    },
    {
        image:
            "https://www.ultraehp.com/images/Products-Detail-Img/UP100/輪播圖-04.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.ultraehp.com/images/Products-Detail-Img/UP100/輪播圖02-01.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.ultraehp.com/images/Products-Detail-Img/UP100/輪播圖-03.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.ultraehp.com/images/Products-Detail-Img/UP100/輪播圖-05-02.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.ultraehp.com/images/Products-Detail-Img/UP100/輪播圖-06-05.webp",
        caption: "Darjeeling",
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
const Product = props => (

    <>
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



        <title>Ultrapeace｜ Instant H.pylori BUT test kit</title>
        <meta key="description" name="description" content="DESCRIPTION" />

        <meta key="description" name="description" content="DESCRIPTION" />
        <meta property="og:url" content="https://ithelp.ithome.com.tw/articles/10278469" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="#21 No-code 之旅 — 如何讓網站在分享時看起來漂亮和有吸引力？Open Graph (OG) 簡介" />
        <meta property="og:description" content="大家有沒有發現當有人在社群軟體分享網址的時候，通常除了網址本身還會看到一張縮圖加上網站的標題和描述？這就是用 Open Graph (OG) 設定出來的！今天會解釋一點點什麼是 OG tag (標籤)，加上怎麼在 Next.js 專案中設定 OG 標籤～" />
        <meta property="og:image" content="https://i.imgur.com/D9cZHL7.png" />





        <motion.div className="dark:bg-black bg-gray-100" initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Navigation />
            <div className='fullscreen'>

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




                    <div className='product-details md:px-10 px-4 w-full'>
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
                            <motion.h1 className="dark:text-white" variants={fadeInUp}>UX200｜Acid/Base Trend Detector</motion.h1>
                            <motion.p className="dark: text-slate-300 " variants={fadeInUp}>


                                <ul>
                                    <li className="text-m font-normal dark:text-white"> ・非侵入檢測方式</li>
                                    <li className="text-m font-normal dark:text-white"> ・30分鐘立即獲得檢測成果
Screen</li>
                                    <li className="text-m font-normal dark:text-white"> ・可用於評估治療前後效果Determination by Algorithm</li>
                                    <li className="text-m font-normal dark:text-white">   ・自動判讀檢測成果dustproof grade</li>
                                </ul>






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
                                    className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                    variants={textAnimate}
                                > 關於胃幽門螺旋桿菌</motion.h2>


                            </motion.div>
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

                                        <h2 className="mb-4 dark:text-white text-center text-5xl leading-none r">什麼是胃幽門螺旋桿菌？</h2>
                                        <p className="text-base text-gray-800 w-2/3 mx-auto">胃幽門螺旋桿菌（Helicobacter pylori）是一種微小的革蘭氏陰性菌。胃幽門螺旋桿菌是螺旋狀且具有纖毛，這種形狀使得它能夠在胃部黏膜中穿梭移動。它表面的黏附分子能夠與胃部黏膜細胞表面的受體結合，這有助於它們固定在胃部黏膜上並避免被洗脫。這些特點使得胃幽門螺旋桿菌能夠在胃部環境中存活並定居，導致感染和相關的胃部問題。</p>

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

                                        <div className="relative w-full border">
                                            <img className="w-[1000px] mx-auto rotate-[-1.5deg]" src="https://www.ultraehp.com/images/Products-Detail-Img/UP100/up100-12.png" alt="" />
                                            <div className="tooltip-wrap h-[100%] hidden lg:block w-[100%]">
                                                <div className="absolute left-[50%] top-[30%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">3.5 寸液晶顯示螢幕</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>
                                                <div className="absolute left-[30%] top-[24%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">電源顯示燈</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>
                                                <div className="absolute left-[30%] top-[40%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">開機按鈕</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>

                                                <div className="absolute left-[10%] top-[46%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">試片插入口ＳＰＥ</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>
                                            </div>
                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>


                            <div className="row replacement mt-20">
                                <h2 className="text-5xl dark:text-slate-300 text-center  mx-auto font-extralight">Our replacement</h2>
                                <h2 className="text-5xl text-center dark:text-slate-200  mx-auto font-bold">Products</h2>
                                <div className="Container mt-10">
                                    <div className="">


                                        <motion.div className="card grid gap-4  grid-cols-1    md:grid-cols-2 xl:grid-cols-3 "
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ staggerChildren: 0.3 }}
                                        >

                                            <motion.h2
                                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                                variants={card01}
                                            >
                                                <div>

                                                    <Card className="py-4 border border-white">
                                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                                            <p className="text-tiny uppercase font-bold">產品配件</p>
                                                            <h3 className="text-default-500">UP100 機器</h3>


                                                        </CardHeader>
                                                        <CardBody className="overflow-visible py-2">
                                                            <Image
                                                                alt="Card background"
                                                                className="object-cover rounded-xl"
                                                                src='/images/UP100/acessories/up100-10-PhotoRoom.png-PhotoRoom.png'
                                                                width={370}
                                                                height={260}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </motion.h2>

                                            <motion.h2
                                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                                variants={card02}
                                            >


                                                <div>
                                                    <Card className="py-4 border border-white">
                                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                                            <p className="text-tiny uppercase font-bold">產品配件</p>
                                                            <h3 className="text-default-500">吹氣袋*2</h3>

                                                        </CardHeader>
                                                        <CardBody className="overflow-visible py-2">
                                                            <Image
                                                                alt="Card background"
                                                                className="object-cover rounded-xl"
                                                                src='/images/UP100/acessories/up100-10-PhotoRoom.png-PhotoRoom.png'
                                                                width={370}
                                                                height={260}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </motion.h2>
                                            <motion.h2
                                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                                variants={card03}
                                            >
                                                <div>
                                                    <Card className="py-4 border border-white">
                                                        <CardHeader className=" pb-0 pt-2 px-4 flex-col items-start">
                                                            <p className="text-tiny uppercase font-bold">產品配件</p>
                                                            <h3 className="text-default-500">I Pad 連接設備 </h3>

                                                        </CardHeader>
                                                        <CardBody className="overflow-visible py-2">
                                                            <Image
                                                                alt="Card background"
                                                                className="object-cover rounded-xl"
                                                                src='/images/UP100/acessories/up100-10-PhotoRoom.png-PhotoRoom.png'
                                                                width={370}
                                                                height={260}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </motion.h2>
                                            <motion.h2
                                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                                variants={card04}
                                            >
                                                <div>
                                                    <Card className="py-4 border border-white">
                                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                                            <p className="text-tiny uppercase font-bold">產品配件</p>
                                                            <h3 className="text-default-500">尿素罐</h3>

                                                        </CardHeader>
                                                        <CardBody className="overflow-visible py-2">
                                                            <Image
                                                                alt="Card background"
                                                                className="object-cover rounded-xl"
                                                                src='/images/UP100/acessories/up100-10-PhotoRoom.png-PhotoRoom.png'
                                                                width={370}
                                                                height={260}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </motion.h2>
                                            <motion.h2
                                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                                variants={card05}
                                            >
                                                <div>
                                                    <Card className="py-4 border border-white">
                                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                                            <p className="text-tiny uppercase font-bold">產品配件</p>
                                                            <h3 className="text-default-500">手機</h3>

                                                        </CardHeader>
                                                        <CardBody className="overflow-visible py-2">
                                                            <Image
                                                                alt="Card background"
                                                                className="object-cover rounded-xl"
                                                                src='/images/UP100/acessories/up100-10-PhotoRoom.png-PhotoRoom.png'
                                                                width={370}
                                                                height={260}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </motion.h2>
                                            <motion.h2
                                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                                variants={card06}
                                            >
                                                <div>
                                                    <Card className="py-4 border border-white">
                                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                                            <p className="text-tiny uppercase font-bold">產品配件</p>
                                                            <h3 className="text-default-500">手機</h3>

                                                        </CardHeader>
                                                        <CardBody className="overflow-visible py-2">
                                                            <Image
                                                                alt="Card background"
                                                                className="object-cover rounded-xl"
                                                                src='/images/UP100/acessories/up100-10-PhotoRoom.png-PhotoRoom.png'
                                                                width={370}
                                                                height={260}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </motion.h2>

                                        </motion.div>



                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section_spline my-20">
                    <div className="Container">
                        <div className="row">
                            <div className="grid grid-cols-1 flex-col md:grid-cols-2 md:flex-row ">
                                <div className="border border-black">
                                    {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"></script>
                            <spline-viewer url="https://prod.spline.design/YmgwJaoyizLFPZFq/scene.splinecode"></spline-viewer> */}
                                    <div className="txt p-10 pl-20">
                                        <h2 className="dark:text-white  text-4xl font-medium">
                                            TITLE TEST
                                        </h2>
                                        <h3 className="text-3xl dark:text-white  font-normal">Lorem ipsum dolor sit amet.</h3>
                                        <p className="dark:text-slate-200 text-normal font-normal w-3/4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque perferendis debitis nihil quo animi nesciunt sequi eum, magnam quam deleniti repellendus minima a expedita ipsa numquam ipsum deserunt explicabo.</p>
                                        <Button radius="full" className=" bg-rose-500  text-white w-[200px] shadow-lg">
                                            Button
                                        </Button>

                                    </div>


                                </div>
                                <div className="overflow-hidden">
                                    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js"></script>
                                    <spline-viewer url="https://prod.spline.design/cPZDRSw-YP7AuzNs/scene.splinecode"></spline-viewer>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="Container px-5 md:px-20 mt-10 md:mt-20">

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="row">
                                <div className="" data-aos="fade-up" data-aos-delay="50">
                                    <h3 className="mb-4 text-3xl font-medium leading-none tracking-tight text-pink-600  mt-5 lg:text-4xl dark:text-white text-left">UltraPeace-Instant
                                        Helicobacter pylori urea breath test kit</h3>
                                </div>

                                <div className="" data-aos="fade-up" data-aos-delay="450">

                                    <h4>
                                        Detection Principle
                                    </h4>
                                </div>
                                <div className="" data-aos="fade-up" data-aos-delay="650">
                                    <p className="dark:text-slate-300">When the stomach is infected with Helicobacter pylori. The orally given urea is hydrolysed by the enzyme urease of H. pylori and carbon dioxide and ammonia gas is expired in breath . By analyzing the concentration of ammonia gas expired through breath and comparing it with the baseline value before drinking urea. It can help to determine the presence of Helicobacter pylori infection.</p>
                                </div>

                            </div>
                            <div className="row p-9">
                                <img className="w-full rounded-2xl" src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png" alt="" />

                            </div>
                        </div>
                    </div>
                </section>




                <div className="video-1-section flex flex-col align-middle items-center justify-center my-20 border border-black ">
                    <div className="txt w-1/2 my-10 flex justify-center flex-col items-center">
                        <h3 className=" text-4xl  dark:text-white ">
                            感染胃幽門螺旋桿菌
                        </h3>
                        <p className='text-grey-800 text-center dark:text-slate-300 '>感染幽門螺旋桿菌後，不同個體的反應會有所不同：某些個體可能不會出現明顯的症狀，即使他們已被幽門螺旋桿菌感染。另一些個體可能會因感染導致胃酸過量，進而引發幽門部胃炎和十二指腸潰瘍等併發症。另一類個體感染幽門螺旋桿菌後，可能進展為慢性胃炎，此狀況更增加罹患胃癌的風險。</p>
                    </div>
                    <CldVideoPlayer

                        width={1080}
                        height={607}
                        src='https://res.cloudinary.com/drmonozsf/video/upload/v1700535393/samples/mut4mlfncdywuj8eyza2.mp4'


                    /> </div>

                <section className="section_video">
                    <div className="Container">
                        <div className="row">
                            {/* <MobileMenu /> */}
                        </div>
                    </div>

                </section>
                <section className="w-full section-about border  ">
                    <div className="Container items-center flex justify-center w-full	pt-10">
                        <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">
                            {/* Section header */}
                            <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                                <div className="section-title flex flex-col w-full py-10 justify-center items-center">


                                    <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">What is Helicobacter pylori?</h3>


                                    <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal  text-left md:text-center   dark:text-gray-400">Helicobacter pylori is a type of tiny Gram-negative bacterium. It has a spiral shape and flagella, which allows it to move around in the gastric mucosa. The adhesive molecules on its surface can bind to receptors on the surface of gastric mucosal cells, helping them to attach to the gastric mucosa and avoid being washed away. These characteristics enable Helicobacter pylori to survive and colonize in the stomach environment, leading to infections and related stomach problems.</p>

                                 
                              




                                    
                                    

                                   








                                    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.37/build/spline-viewer.js"></script>
                                    <spline-viewer url="https://prod.spline.design/UJLv-iIGarvq4xQU/scene.splinecode"></spline-viewer>



                                    <CldVideoPlayer

                                        width={1080}
                                        height={607}

                                       


                                 

                                        id='sea-turtle'
                                     
                                        src="/samples/sea-turtle"



                                    />

                                </div>
                            </div>








                        </div>



                    </div>
                </section>
                <section className="w-full section-global border ">
                    <div className="Container items-center flex justify-center w-full	pt-10">
                        <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">

                            {/* Section header */}
                            <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                                <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                                    <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Almost half of the world's population is infected with Helicobacter pylori.</h3>
                                    <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal text-left md:text-center   dark:text-gray-400">The primary modes of transmission for Helicobacter pylori infection are through diet and oral contact. This bacterium can be present in the saliva, oral cavity, vomit, or feces of infected individuals. It can spread through direct contact, sharing utensils, consuming contaminated food or water, and more. Additionally, infection can occur through contact with the vomit or feces of an infected person.</p>
                                    <CldVideoPlayer
                                        className="rounded-2xl border border-2 border-black"

                                        width={1080}
                                        height={607}
                                        src='https://res.cloudinary.com/drmonozsf/video/upload/v1700538541/s6ongmhmy6fzltwenq74.mp4'


                                    />

                                </div>
                            </div>









                        </div>



                    </div>
                </section>
                {/* <CloVideoPlayer
            id='sea-turtle'
           width={1080}
           height={600}
           src='sample/sea-turtle'

        
        /> */}



                <section className="section_video border border-green-500">
                    <div className="Container w-full">
                        <div className="left flex flex-col w-2/5">
                            <div className="top">
                                <h4 className="text-4xl">
                                    Our Service
                                </h4>

                            </div>
                            <div className="bottom">

                            </div>


                        </div>
                        <div className="right w-3/5">

                        </div>
                    </div>
                </section>
                <section className="w-full mt-10 md:px-20 px-5 section-about border border-b-orange-700 ">
                    <div className="Container items-center flex flex-col ">
                        <div className="wrap flex flex-col justify-center items-center w-full ">
                            <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                                {/* Section header */}
                                <div className="section-title flex flex-col w-full py-2 justify-center items-center">
                                    <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Two versions of the Quick BUT </h3>


                                </div>
                            </div>


                        </div>

                        <main >

                            <div className={styles.gallery}>
                                {/* <a href="https://www.google.com">
                                <Double projects={[projects[0], projects[1]]} />
                            </a> */}
                                <Double projects={[projects[2], projects[3]]} reversed={true} />
                                {/* <Double projects={[projects[4], projects[5]]} />
                            <Double projects={[projects[6], projects[7]]} reversed={true} /> */}
                            </div>
                        </main>

                    </div>
                </section>
                <section className="section-table">
                    <div className="container">
                        <div className="table-wrap overflow-scroll px-10 w-full border  mt-20">

                            <div className=" w-full lg:w-4/5 mx-0 md:mx-auto">
                                <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                                    {/* Section header */}
                                    <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                                        <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Comparison of diagnostic modalities for gastric Helicobacter pylori infection</h3>


                                    </div>
                                </div>

                                <MobileMenu />
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                        <div className="inline-block min-w-full align-middle">
                                            <div className="overflow-hidden ">
                                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                                    <thead className="bg-gray-800 text-gray-100 dark:bg-gray-700">
                                                        <tr>
                                                            <th scope="col" className="p-4">
                                                                <div className="flex items-center">

                                                                    <label for="checkbox-all" className="sr-only">checkbox</label>
                                                                </div>
                                                            </th>
                                                            <th scope="col" rowSpan={2} className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                                Intrusive / Non-Invasive
                                                            </th>
                                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                                侵入式
                                                            </th>
                                                            <th scope="col" colSpan={4} className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-100  uppercase dark:text-gray-400">
                                                                非侵入式
                                                            </th>
                                                            {/* <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        非侵入式
                                                    </th>
                                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        非侵入式
                                                    </th>
                                                    <th scope="col" className="p-4">
                                                        <span className="sr-only">Edit</span>
                                                    </th> */}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            <td className="p-4 w-4">
                                                                <div className="flex items-center">

                                                                    <label for="checkbox-table-1" className="sr-only">checkbox</label>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                <Image />
                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"> </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"></td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                                                            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">

                                                            </td>

                                                        </tr>
                                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            <td className="p-4 w-4">

                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">檢測方法</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">	內視鏡</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">	糞便抗體檢測</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> 血清檢測</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">	 13C 尿素呼吸法</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">快速尿素呼吸法-UBT</td>


                                                        </tr>
                                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            <td className="p-4 w-4">
                                                                <div className="flex items-center">

                                                                    <label for="checkbox-table-2" className="sr-only">樣品型態</label>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">樣品型態</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">胃部組織</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">糞便</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">血液</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">呼出氣體</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">呼出氣體</td>

                                                        </tr>
                                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            <td className="p-4 w-4">

                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">檢測時間</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1-2 hr</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">3-7 day</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">3-7 day</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">3-7 day</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">⌃ 1 hr </td>

                                                        </tr>
                                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            <td className="p-4 w-4">

                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">費用/NT</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">低</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">中</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">中</td>

                                                        </tr>
                                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            <td className="p-4 w-4">

                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">優缺點</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不舒服</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不能評估治療前後的療效，<br />只能判斷是否曾經感染過HP</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>

                                                        </tr>
                                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            <td className="p-4 w-4">

                                                            </td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">準確度</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>

                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <p className="mt-5">This table component is part of a larger, open-source library of Tailwind CSS components. Learn
                                    more
                                    by going to the official
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>




        </motion.div>

    </>

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
