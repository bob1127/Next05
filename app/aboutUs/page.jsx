// export const metadata = {
//     title: 'UltraeHP-HommingProbe',
//     description: 'This is our description',
//     openGraph: {
//         title: 'Next.js',
//         description: 'The React Framework for the Web',
//         url: 'https://nextjs.org',
//         siteName: 'Next.js',
//         images: [



//             {
//                 url: 'https://nextjs.org/og.png',
//                 width: 800,
//                 height: 600,
//             },
//             {
//                 url: 'https://nextjs.org/og-alt.png',
//                 width: 1800,
//                 height: 1600,
//                 alt: 'My custom alt',
//             },
//         ],
//         locale: 'en_US',
//         type: 'website',
//     },
// }
"use client"

import Tooltip from "../../components/Tooltip"
import './ultrae.scss'



import Image from 'next/image'
// import Img01 from '../../public/images/wix.jpg'
// import Img02 from '../../public/images/up100-banner01.png'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../components/Application/ApplicateCard'
import CardHover from '../../components/CardHover'
import Cards from '../../components/Cards/Cards'
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { properties } from "../../constants/data";
import TabWrap from '../../components/Tabs/Tabs'
import scan from '../../public/images/scan.png'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from 'next/link'
import CardPage from '../../components/CardParallax/CardPage'




import '../../styles/additional-styles/tab.css'




export default async function Home() {




    return (
        <div className="dark:bg-black bg-slate-100 border border-blue-500 mx-auto ">
           


            <section className="Bg-img w-full h-[80vh] bg-cover  bg-center bg-no-repeat  ">
                {/* <CardParallax /> */}
                <div className="Container">
                    <div className="txt border border-white flex justify-center py-10">
                        <div>
                            <h1 className="text-black ">AnkerMake V6 Color Engine</h1>
                            <p className="text-slate-300 text-center">Multi-Color and Multi-Material Kit
                                For M Series Printers</p>
                            <div className="btn-wrap">
                                <a href="">BTN01</a>
                                <Link href="/en/index">Post 1</Link>
                                <a href="">BTN03</a>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure explicabo, odit placeat animi laboriosam excepturi, voluptatibus quisquam maxime nemo sapiente quibusdam officia necessitatibus velit minus dolorum in commodi veritatis eaque.</p> */}

                            </div>




                        </div>

                    </div>

                </div>
            </section>

            <section className="hero-title">
                <div className="row">
                    <div className="Container">
                        <div className="grid grid-cols-2 px-20 border border-slate-300">
                            <div>
                                <div className="txt border border-slate-300 pl-10 w-3/4">



                                    <h1 className="text-slate-900 text-4xl">為什麼選擇蜂鳥探針檢測pH值?</h1>
                                    <p className="text-m text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis ipsa tempora ullam amet aliquam, sunt, iure eius consequatur ducimus animi quaerat reprehenderit, provident exercitationem vel commodi voluptatem atque perferendis!</p>
                                    <img src="../" alt="" />
                                </div>
                                
                            </div>
                            <div>
                            
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="row border border-vlack ">
                   <div className="Container">
                    <div className="row">
                        <h3 className="text-6xl mx-auto  dark:text-slate-200 ">lorem</h3>
                        
                    </div>
                    <div className="grid grid-cols-1 py-20 flex justify-center lg:grid-cols-2 ">

                            <img className="w-[1900px]" src="https://www.ultraehp.com/images/Products-Detail-Img/UP100/up100000.png
                        " alt="" />


                        
                        
                    </div>
                   </div>
                </div>
                <div className="row">
                    <div className="Container px-20">
                        <div className="video-wrap  p-5 mt-10 grid grid-cols-3  rounded-full border border-slate-400 w-[400px ]">
                            <div>

                                <div className="rounded-full bg-slate-400 bg-black bg-slate-400 box-shadow-xl  w-[50px] h-[50px] img bg-[url('https://static-cdn.icons8.com/l/3d/images/cu1_with_coffee_man_2__close-up.webp')]"></div>
                            </div>
                            <div>
                                <p className="text-xs text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia tempora nisi aliquid saepe, quasi illo labore voluptate porro aliquam placeat ducimus eum officia cupiditate accusamus nemo cumque libero? Voluptate.

                                </p>
                            </div>
                            <div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_featureProduct mt-20  bg-cyan-300	p-10">
                <div className="row">
                    <h1 className="text-center font-semibold text-5xl">
                        Frature Products
                    </h1>
                </div>
                <div className="row">
                    <div className="Container  ">
                        <div className="grid grid-cols-2 px-20 pr-10">
                            <div>
                                <h5 className="text-3xl">Smooth Juci Bottle</h5>
                                <p className="text-m text-slate-800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci pariatur temporibus sunt debitis fugit ut. Quibusdam culpa ea repudiandae? Unde labore hic inventore! Id quisquam vero reiciendis tenetur beatae?
                                </p>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="txt mt-6">
                                            <h5 className="text-black text-m">title01</h5>
                                            <p className="text-xs font-normal">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="txt mt-6">
                                            <h5 className="text-black text-m">title01</h5>
                                            <p className="text-xs font-normal">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="txt mt-6">
                                            <h5 className="text-black text-m">title01</h5>
                                            <p className="text-xs font-normal">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="txt mt-6">
                                            <h5 className="text-black text-m">title01</h5>
                                            <p className="text-xs font-normal">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div>
                                <img src="https://www." alt="" />
                                <img src="https://www.com" alt="" />
                            </div>


                            
                        </div>
                    </div>
                </div>

            </section>


            <section className="">
                <div className="Container relative border border-white h-full">
                    <div className="row">
                        <div className="txt w-3/5">
                            <h2 className='text-white text-6xl font-medium'>See the Results

                            </h2>
                            <p className="text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis praesentium ipsa eos iste voluptas dolore quibusdam soluta. Enim voluptatem nostrum nisi eos accusamus et modi laborum, dolor architecto iure!</p>
                        </div>
                    </div>
                    <div className="row mt-20 pl-20   top-28">
                        <div className="container">

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="border border-white">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt totam architecto vitae blanditiis deleniti libero consectetur quasi repudiandae?</p>

                                </div>
                                <div className="border border-white">
                                 
                                    <img src="../../public/images/up100-banner01.png" className="w-[300px]" alt="" />

                                </div>

                            </div>




                        </div>
                    </div>

                </div>
            </section>
            {/* <section>
                <div className="row">
                    <div className="grid grid-cols-2 ">
                        <div>
                            <img className="w-full " src="https://www.zensor.com.tw/images/nextTest/up100-12.png"
 alt="" />
                          
                        </div>
                        <div className="pl-10 pr-20 ">
                            <div className="txt ">
                                <h2 className="text-4xl">
                                    UP100
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt inventore ipsa possimus architecto quod corrupti aliquid aperiam, tempore ex quisquam? Voluptatibus sequi dolores repellat laboriosam facere? Cupiditate, dicta reiciendis!
                                    
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            */}

            <iframe src='https://www.ultraehp.com/splineIframe.html' frameborder='0' width='100%' height='600'></iframe>
           <section>
            <div className="section_banner02">
                    <div className="row border border-black  bg-cover bg-no-repeat bg-right md:bg-center bg-[url('https://www.zensor.com.tw/images/nextTest/up100-banner01.png')] h-[500px] w-full">
                       <div className="grid grid-cols-2 h-full flex items-center justify-center">
                        <div className="border border-white">
                                <div className="txt  flex items-center flex-col  justify-center">

                         <div className="relative flex-col hidden md:block pl-20  flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                                        <h2 className="text-white dark:text-rose-500 w-2/3 text-5xl "> 簡單易用 </h2>
                                        <h3 className="dark:text-slate-100 ">
                                             功能按鍵 一件啟動
                                        </h3>
                                        <p className="text-slate-200 font-normal">胃部感染胃幽門螺旋桿菌時，當我們服用尿素溶液後，胃幽門螺旋桿菌上的尿素酶會將尿素分解成二氧化碳和氨氣。我們通過檢測從呼吸中排出的氨氣，對比服用尿素前的背景數值，從而確定是否感染胃幽門螺旋桿菌。

</p>
                               

                         </div>
                            </div>
                        </div>
                        <div className="border border-white"></div>
                        
                       </div>
                </div>
            </div>
           </section>
            <section className="section_showcase w-full px-5 py-14 md:px-10 lg:px-20">
                <div className="row">
                    <div className="cintaiber">
                        <div className="txt mt-20">
                           
                            <h2 className=" lg:text-4xl text-3xl xl:text-5xl text-center dark:text-rose-500  font-bold text-slate-800">


                                
                                快速幽門螺旋桿菌尿素呼吸檢測組</h2>
                         
                            <p className="text-m mx-auto text-center  w-full  md:w-3/4 lg:w-2/4 dark:text-slate-200">胃部感染胃幽門螺旋桿菌時，當我們服用尿素溶液後，胃幽門螺旋桿菌上的尿素酶會將尿素分解成二氧化碳和氨氣。我們通過檢測從呼吸中排出的氨氣，對比服用尿素前的背景數值，從而確定是否感染胃幽門螺旋桿菌。

</p>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                   
                </div>


                <div className="row">
                

                   
                    <div className="flex w-full pt-20 flex-col">
                        <TabWrap/>
            
                    </div>  
                </div>

            </section>
            <section className="section_cardparallax">
                <div className="row">
                    <div className="txt text-center">
                        <h1 className=" text-5xl font-semibold">
                            Card Parallax
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <CardPage />
                </div>
                
            </section>


        </div>
    )
}
