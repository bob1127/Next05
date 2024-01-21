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
        
        <div className="dark:bg-black">
          
        
            <section className="section_HeroVideo relative" >
                
                <video className="w-full" src="https://www.ultraehp.com/video/hero-video%20-%20HD%201080p.mov" type="video/mov"  lazy-video="" data-video-responsive="" muted=""  playsinline="" prop="" loop="true" autoplay="">
                </video>
                <div className="HeroTitle top-[31%] w-1/3 left-[6%] absolute  border border-rose-500 z-50">
                    <span className="text-sm text-white ">Watch this space.

</span>
                    <h1 className="text-white">Revolution, built-in</h1>
                    <p className="text-white">The VanMoof S5 & A5 will just keep getting better. And better. Via over-the-air updates, we can continuously improve your bike long after your first ride. From the Halo Ring Interface to Hi-Vis Lights, this bike has revolution, built in.</p>
                    <div className="btn-wrap flex">
                        <a className="btn w-[200px] p-8 border-3 border-white bg-rose-500 ">Expolore UP100</a>
                        <a className="btn "></a>
                        
                    </div>
                </div>
            </section>


            <section className="Bg-img w-full h-[80vh] bg-cover  bg-center bg-no-repeat  ">
                <div className="Container">
                    <div className="txt border border-white flex justify-center py-10">
                        <div>
                        

                            
                            {/* <h1 className="text-white ">AnkerMake V6 Color Engine</h1>
                            <p className="text-slate-300 text-center">Multi-Color and Multi-Material Kit
                                For M Series Printers</p> */}
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
                <div className="grid grid-cols-1 border  m-10 bg-slate-100 rounded-2xl p-20 md:grid-cols-2 border border-red ">
                    <div className="px-5  overflow-hidden rounded-3xl p-2">
                        <div className="bg-center rounded-2xl bg-cover bg-no-repeat marker:border border-black h-full w-full ImgWrap bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_12879972_2878x.png?v=1693466249')]">
                            
                        </div>
                       
                    </div>
                    <div >

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
                            {/* <p className="text-slate-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis praesentium ipsa eos iste voluptas dolore quibusdam soluta. Enim voluptatem nostrum nisi eos accusamus et modi laborum, dolor architecto iure!</p> */}
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
            </section>
        
          


        </div>
    )
}
