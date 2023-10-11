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
import Tooltip from "../../../components/Tooltip"
import './ultrae.scss'
import Image from 'next/image'
import Img01 from '../../../public/images/wix.jpg'
import Img02 from '../../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../../components/Application/ApplicateCard'
import CardHover from '../../../components/CardHover'
import Cards from '../../../components/Cards/Cards'
import SwiperCard1 from '../../../components/SwiperCarousel/SwiperCardAbout'
import { properties } from "../../../constants/data";
// import TabComponent from "../../components/Tabs/TabComponent";
// import tabs from "../../components/Tabs/tabs";
import '../../../styles/additional-styles/tab.css'
// import '../../public/images/demo.png'



export default async function Home() {




    return (
        <div className="dark:bg-black">


            <section className="Bg-img w-full h-[80vh] bg-cover  bg-center bg-no-repeat  ">
                <div className="Container">
                    <div className="txt border border-white flex justify-center py-10">
                        <div>
                            <h1 className="text-white ">AnkerMake V6 Color Engine</h1>
                            <p className="text-slate-300 text-center">Multi-Color and Multi-Material Kit
                                For M Series Printers</p>
                            <div className="btn-wrap">
                                <a href="">BTN01</a>
                                <a href="/en/index">BTN03</a>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure explicabo, odit placeat animi laboriosam excepturi, voluptatibus quisquam maxime nemo sapiente quibusdam officia necessitatibus velit minus dolorum in commodi veritatis eaque.</p> */}

                            </div>




                        </div>

                    </div>

                </div>
            </section>
            <div className="row mt-20">
                <div className="grid grid-cols-1  md:grid-cols-2 border border-red">
                    <div className="px-5  overflow-hidden rounded-3xl p-2">
                        <div className="bg-center rounded-2xl bg-cover bg-no-repeat marker:border border-black h-full w-full ImgWrap bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_12879972_2878x.png?v=1693466249')]">
                            
                        </div>
                       
                    </div>
                    <div>

                         <SwiperCard1 />
                    </div>
                
                </div>
            </div>
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

                            <div className="grid grid-cols-2">
                                <div className="border border-white">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt totam architecto vitae blanditiis deleniti libero consectetur quasi repudiandae?</p>

                                </div>
                                <div className="border border-white">
                                    <img src="https://cdn.shopify.com/s/files/1/0569/5147/2268/files/5-2-img_2x_b8a64d9e-b3c0-4e60-81e2-11c5a0152907_3838x.jpg?v=1692613365" className="w-full" alt="" />

                                </div>

                            </div>




                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-banner bg-cotain h-screen">
                <div className="Container relative border border-white h-full">

                    <div className="row mt-20 pl-20  top-28">
                        <div className="container">
                            <h3 className="dark:text-white font-medium text-5xl w-1/2">Precise 0.1 mm
                                lore
                                Detailr</h3>                 <p className="text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit.</p>




                        </div>
                    </div>

                </div>
            </section>
            <section className="section_carousel">

            </section>


        </div>
    )
}
