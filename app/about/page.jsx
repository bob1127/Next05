
"use client"
import Tooltip from "../../components/Tooltip"
import './ultrae.scss'
import Image from 'next/image'
import Img01 from '../../public/images/wix.jpg'
import Img02 from '../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../components/Application/ApplicateCard'
import CardHover from '../../components/CardHover'
import Cards from '../../components/Cards/Cards'
import Marquee from 'react-fast-marquee'
import SwiperCard1 from '../../components/SwiperCarousel/SwiperCardAbout'
import React from "react";
import HeroCarousel from '../../components/Carousel/index'

// import Lottie from "react-lottie";
// import LoadingSpinner from "../../../public/Lottie/contact.json";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { properties } from "../../constants/data";
import { Button } from "@nextui-org/react";
// import TabComponent from "../components/Tabs/TabComponent";
// import tabs from "../components/Tabs/tabs";
import '../../styles/additional-styles/tab.css'
// import '../../public/images/demo.png'




export default async function Home() {


    // const fadeInUp = {
    //     initial: {
    //         y: 60,
    //         opacity: 0,
    //         transition: { duration: 0.6, ease: easing }
    //     },
    //     animate: {
    //         y: 0,
    //         opacity: 1,
    //         transition: {
    //             duration: 0.6,
    //             ease: easing
    //         }
    //     }
    // };

  

    return (
        
        <div className="dark:bg-black bg-gray-100">

          
           
            <section className="section_HeroVideo relative" >
                
             
            </section>



     


            {/* <section className="Bg-img w-full h-[80vh] bg-cover  bg-center bg-no-repeat  ">
                <div className="Container">
                    <div className="txt border shadow-md border-white flex justify-center py-10"  >
                       

                    </div>

                </div>
            </section> */}
            <div className="row mt-20">
                <div className="  border w-full    m-10 bg-white rounded-2xl p-20  border border-red">
                    
                    <div className="">

                         <SwiperCard1 />
                    </div>
                
                </div>
            </div>

            <section className="h-[100vh]">
               
            </section>
            {/* <section className="">
                <div className="Container relative border border-white h-full">
                    <div className="row">
                        <div className="txt w-3/5">
                            <h2 className='text-white text-6xl font-medium'>See the Results

                            </h2>
                          
                        </div>
                    </div>
                    

                </div>
            </section>
            <section>
                 <div className="container py-20">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div  className="border">
                            <iframe src='https://my.spline.design/untitled-e17fbea8704fb0489b816ed0e8953c2b/' frameborder='0' width='100%' height='600px'></iframe>
                        </div>
                        <div className="border">
                            <div className="txt w-2/3"> 
                              
                                <h1 className="text-5xl">Test video</h1>
                                <p className="text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore quisquam labore error at porro itaque blanditiis ad, facere in culpa excepturi debitis ipsa doloremque eveniet earum distinctio enim. Error!
                                    
                                </p>
                              
                            </div>
                        </div>
                        
                    </div>
                 </div>
            </section>
            <section>
                <div className="container py-20">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                     
                        <div className="border flex items-center align-middle">
                            <div className="txt flex flex-col border border-black w-2/3 ">
                                <h1 className="text-5xl">Test video</h1>
                                <p className="text-normal font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore quisquam labore error at porro itaque blanditiis ad, facere in culpa excepturi debitis ipsa doloremque eveniet earum distinctio enim. Error!

                                </p>
                                <a href="" className="bg-rose-500 border w-[150px] border-indigo-200 py-2  text-white  text-center rounded-full ">
                                    Go Shopping
                                </a>
                            </div>
                        </div>

                        <div className="border">
                            <iframe src='https://my.spline.design/untitled-7c12c393e850c53f64751592986ed871/' frameborder='0' width='100%' height='450px'></iframe>
                        </div>

                    </div>
                </div>
            </section> */}

            <section className="section_toolip px-20 flex  flex-col justify-center items-center">
                <div className="wrap flex  bg-slate-100 px-[40px]  rounded-3xl w-full py-[100px]">
                    <div className="w-1/2">
                        <Image src='' placeholder="empty"
                            loading="lazy"  width={400} height={400}></Image>
                        
                    </div>
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h4 className="text-xl font-bold">
                            如果你只是想要粗略測試酸鹼度，我想你不需要我們的產品。
                            但如果您符合以下條件，我想您已經找到了解決方案！
                        </h4>
                        
                        <div className="icon-wrap">

                            <ul className="flex flex-wrap mt-3">
                                <li className="bg-rose-600 mr-3 mt-3 inline-block text-white rounded-full pt-2 px-3">
                                    
                                        我的樣品很珍貴，只有一點點
                                   
                                </li>
                                <li className="bg-rose-600 mr-3 mt-3 inline-block text-white rounded-full pt-2 px-3">
                                   
                                        適合戶外 隨身攜帶
                                    
                                </li>
                                <li className="bg-rose-600 mr-3 mt-3 inline-block text-white rounded-full pt-2 px-3">
                                   
                                        培養基細胞培育(半固體介質)
                                    
                                </li>

                                <li className="bg-rose-600 mr-3 mt-3 inline-block text-white rounded-full pt-2 px-3">
                                   
                                        我是蛋白質，玻璃電極不能測
                                    
                                </li>
                                <li className="bg-rose-600 mr-3 mt-3 inline-block text-white rounded-full pt-2 px-3">
                                   
                                        我需要超精準的pH值，每次實驗前都要校正好麻煩
                                    
                                </li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
                
            </section>

            <section className="section_marquee border w-full flex-col  justify-center items-center border-black px-20">
                <div>
                    <h2 className="text-3xl font-semibold text-center">
                        Trusted by precision laboratory in universities and enterprises
                    </h2>
                </div>
                <div className="w-4/5 border py-10 border-x-green-600">
                    <Marquee>
                        <div className="border w-[200px] mx-5 flex justify-center border-black">
                            dssd
                        </div>
                        <div className="border w-[200px] mx-5 flex justify-center border-black">dsddd</div>
                        <div className="border w-[200px] mx-5 flex justify-center border-black">dsddd</div>
                        <div className="border w-[200px] mx-5 flex justify-center border-black">dsddd</div>
                        <div className="border w-[200px] mx-5 flex justify-center border-black">dsddd</div>
                    </Marquee>
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
                        <Button radius="full" href='#' className="bg-rose-600  text-white shadow-lg">
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
                        <Button radius="full" href='#' className="bg-rose-600  text-white shadow-lg">
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
                        <Button radius="full" href='#' className="bg-rose-600  text-white shadow-lg">
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
                        <Button radius="full" href='#' className="bg-rose-600  text-white shadow-lg">
                            More
                        </Button>
                        <Image  src='/UX100_cpaa0v.webp' placeholder="empty" width={470} 
                            loading="lazy"  height={470}></Image>
                       
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
                        <Button radius="full" href='#' className="bg-rose-600  text-white shadow-lg">
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
                        <Button radius="full" href='#' className="bg-rose-600  text-white shadow-lg">
                            More
                        </Button>
                        <Image loading="lazy" placeholder="empty" src='/CS200_mz0vj6.webp' width={470} height={470}></Image>

                    </div>
                </div>

            </section>

            <section className="section_contact">
                <div>
                    <div>
                        {/* <div>
                            <Lottie options={options} height={400} width={400} />
                        </div> */}
                    </div>
                    <div></div>
                </div>
            </section>

            <section className="section_feature mt-10 px-[100px]">
                <div className="top mt-5">
                    <div className="left flex w-full">
                        <div className="img flex justify-center w-2/5">
                            <Image src='' width={300} placeholder="empty"
                                loading="lazy"  height={300}></Image>
                        </div>

                        <div className="txt w-3/5">
                            <div className="border mt-4 rounded-xl border-black p-10">
                                <h4 className="text-3xl font-semibold">
                                    Original Equipment Manufacturing/OEM
                                </h4>
                                <p>
                                    按照您的規格和設計圖全程為您代工製造
                                </p>
                                
                            </div>
                            <div className="mt-4">
                                <div className="border rounded-xl border-black p-10">
                                    <h4 className="text-3xl font-semibold">
                                        Original Design Manufacturing/ODM
                                </h4>
                                <p>
                                        提供我們您的需求，我們也可以為您設計規格和外觀並客製化的製造
                                </p>
                                </div>

                            </div>
                            
                        </div>
                        
                    </div>
                   
                    
                </div>
                <div className="bottom mt-5">
                    <div className="right flex w-full">
                        <div className="img flex justify-center w-2/5">
                            <Image src='' width={300} height={300}></Image>
                        </div>

                        <div className="txt w-3/5">
                            <div className="border rounded-xl mt-4 border-black p-10">
                                <h4 className="text-3xl font-semibold">
                                    微型酸鹼pH檢測元件的置入
                                </h4>
                                <p>
                                    可以在您的產品設計中加入我們的酸鹼檢測模塊
                                </p>

                            </div>
                            <div className="mt-4">
                                <div className="border rounded-xl border-black p-10">
                                    <h4 className="text-3xl font-semibold"> 關於水質檢測，酸鹼值相關感測器合作開發
                                    </h4>
                                    <p>

                                        基於蜂鳥探針的試片架構，合作開發更多應用
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                
            </section>
            <section className="section_toolip mt-10 px-20 flex  flex-col justify-center items-center">
                <div className="wrap flex  bg-slate-100 px-[40px]  rounded-3xl w-full py-[100px]">
                    <div className="w-1/2">
                        <Image src='' width={400} height={400}></Image>

                    </div>
                    <div className="txt w-1/2 flex flex-col justify-center items-center">
                        <h4 className="text-4xl font-bold">
                            快來跟我們聊聊吧!
                        </h4>
                        <p>如果還不確定是否適用
                            立即聯絡專人體驗我們的產品</p>

                        <a href="" className="bg-rose-600 mt-4 px-5 py-1 text-white rounded-full">聯絡我們</a>
                        <div className="icon-wrap">

                           

                        </div>
                    </div>

                </div>

            </section>


            <section className="section_mobile_product_carousel block md:hidden ">

                <div className="text-center">
                    <h2 className="text-4xl font-extrabold"> UltraE Blog</h2>
                </div>
                <div>
                    <HeroCarousel />
                </div>

            </section>
        
          


        </div>
    )
}
