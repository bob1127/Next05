"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'


import { Table } from "@nextui-org/react";
import { useState } from "react";
import Head from "next/head";
import CarouselThumbs from "../../../../components/CarouselThumbs";
import ProductImage from "../../../../components/ProductImage";



import Carousel from "../../../../components/Products/ProductCarousel";
import Navigation from "../../../../components/Products/Navigation";

import styles from '../../../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../../../components/two-colum/data';

import Double from '../../../../components/two-colum/Double';
import ModalBrn from "../../../../components/ModalBtn"
import { Cloudinary } from "@cloudinary/url-gen";



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
            "https://blenderartists.org/uploads/default/original/4X/5/4/f/54f2cbb9c456be76911967e686ca5898ac6a065d.jpeg",
        caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
        image:
            "https://cdn.artstation.com/p/thumbnails/001/142/295/thumb.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://t3.ftcdn.net/jpg/05/34/83/84/360_F_534838467_DTE9QWKuWpXXgJMxzcfh6WVfimYWcNdO.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902892_1280.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://img.freepik.com/premium-psd/psd-cartoon-character-3d-render-illustration_493627-96.jpg?w=2000",
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
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <Navigation />
        <div className='fullscreen'>

            <div className='product  flex-col md:flex-row border py-9'>
               
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
                <div className='product-details'>
                    <motion.div variants={stagger} className='inner w-full pl-5 pr-2'>
                        <Link href='../products'>
                            {/* <motion.div variants={fadeInUp}>
                                Back to products
                            </motion.div> */}
                        </Link>
                        <motion.div variants={fadeInUp}>
                            <span className='category'>Humming Probe UX200</span>
                            <Link href='../Products/product01'>CN</Link>
                        </motion.div>
                        <motion.h1 variants={fadeInUp}>UX200｜Acid/Base Trend Detector</motion.h1>
                        <motion.p variants={fadeInUp}>

                            ・pH chart <br></br>
                            ・7.0" Color Touch Screen<br></br>
                            ・Automatic Terminal Determination by Algorithm<br></br>
                            ・Waterproof and dustproof grade



                        </motion.p>
                        <motion.div variants={fadeInUp} className='additonals'>
                            <span>Soy Free</span>
                            <span>Gluten Free</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} className='qty-price'>
                            <div className='qty'>
                                <div className='minus'>-</div>
                                <div className='amount'>1</div>
                                <div className='add'>+</div>
                            </div>
                            <span className='price'></span>
                        </motion.div>
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
        <section className="w-full section-about border border-b-orange-700 ">
            <div class="Container items-center flex justify-center w-full	pt-10">
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
                        > About Helicobacter pylori</motion.h2>


                    </motion.div>
                </div>
            </div>
        </section>
        <section>
            <div className="Container px-20">
                <div className="grid grid-cols-1">
                    <div className="row">
                        <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  mt-5 lg:text-4xl dark:text-white text-center">What's in the Box</h3>
                    </div>
                    <div className="row">
                        <img className="w-full" src="https://cdn.shopify.com/s/files/1/0569/5147/2268/files/sku_11cf0b03-96ed-499a-b4ff-8bc4f13ace87_3838x.jpg?v=1690807720" alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
        <section>
            <div className="Container px-20 mt-20">
                
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
                        <p>When the stomach is infected with Helicobacter pylori. The orally given urea is hydrolysed by the enzyme urease of H. pylori and carbon dioxide and ammonia gas is expired in breath . By analyzing the concentration of ammonia gas expired through breath and comparing it with the baseline value before drinking urea. It can help to determine the presence of Helicobacter pylori infection.</p>
                        </div>
                    </div>
                    <div className="row">
                        <img className="w-full" src="https://www.handz.design/assets/images/image12.jpg?v=30d56a76" alt="" />

                    </div>
                </div>
            </div>
        </section>
        <section className="w-full section-about border border-b-orange-700 ">
            <div class="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">
                    {/* Section header */}
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                    <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                            <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">What is Helicobacter pylori?</h3>
                            <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal  text-left md:text-center   dark:text-gray-400">Helicobacter pylori is a type of tiny Gram-negative bacterium. It has a spiral shape and flagella, which allows it to move around in the gastric mucosa. The adhesive molecules on its surface can bind to receptors on the surface of gastric mucosal cells, helping them to attach to the gastric mucosa and avoid being washed away. These characteristics enable Helicobacter pylori to survive and colonize in the stomach environment, leading to infections and related stomach problems.</p>

                    </div>
                    </div>

              



                     


                </div>
             


            </div>
        </section>
        <section className="w-full section-global border border-b-orange-700 ">
            <div class="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">

                    {/* Section header */}
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                            <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Almost half of the world's population is infected with Helicobacter pylori.</h3>
                            <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal text-left md:text-center   dark:text-gray-400">The primary modes of transmission for Helicobacter pylori infection are through diet and oral contact. This bacterium can be present in the saliva, oral cavity, vomit, or feces of infected individuals. It can spread through direct contact, sharing utensils, consuming contaminated food or water, and more. Additionally, infection can occur through contact with the vomit or feces of an infected person.</p>

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




        <section className="section-table">
            <div className="container">
                <div className="table-wrap border  mt-20">

                    <div class="w-4/5 mx-auto">
                        <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        {/* Section header */}
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                                <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Comparison of diagnostic modalities for gastric Helicobacter pylori infection</h3>
                         

                        </div>
                        </div>


                        <div class="flex flex-col">
                            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                                <div class="inline-block min-w-full align-middle">
                                    <div class="overflow-hidden ">
                                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                            <thead class="bg-gray-800 text-gray-100 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" class="p-4">
                                                        <div class="flex items-center">

                                                            <label for="checkbox-all" class="sr-only">checkbox</label>
                                                        </div>
                                                    </th>
                                                    <th scope="col" rowSpan={2} class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        Intrusive / Non-Invasive
                                                    </th>
                                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        intrusive
                                                    </th>
                                                    <th scope="col" colSpan={4} class="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-100  uppercase dark:text-gray-400">
                                                        non-intrusive
                                                    </th>
                                                    {/* <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        非侵入式
                                                    </th>
                                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        非侵入式
                                                    </th>
                                                    <th scope="col" class="p-4">
                                                        <span class="sr-only">Edit</span>
                                                    </th> */}
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="p-4 w-4">
                                                        <div class="flex items-center">

                                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <Image />
                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"> </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"></td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                                                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">

                                                    </td>

                                                </tr>
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="p-4 w-4">

                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Detection Methods</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Gastroscopy	</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Stool Antigen Test	</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Serologic test</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">13C Urea breath test	</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">快速尿素呼吸法-UBT</a>
                                                    </td>

                                                </tr>
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="p-4 w-4">
                                                        <div class="flex items-center">

                                                            <label for="checkbox-table-2" class="sr-only">樣品型態</label>
                                                        </div>
                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">樣品型態</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">胃部組織</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">糞便</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">血液</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">呼出氣體</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">呼出氣體</td>

                                                </tr>
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="p-4 w-4">

                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">檢測時間</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1-2 hr</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">⌃ 1 hr </td>

                                                </tr>
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="p-4 w-4">

                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">費用/NT</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">低</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">中</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">中</td>

                                                </tr>
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="p-4 w-4">

                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">優缺點</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不舒服</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不能評估治療前後的療效，只能判斷是否曾經感染過HP</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>

                                                </tr>
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="p-4 w-4">

                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">準確度</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">低</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">高</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>

                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <p class="mt-5">This table component is part of a larger, open-source library of Tailwind CSS components. Learn
                            more
                            by going to the official <a class="text-blue-600 hover:underline"
                                href="#" target="_blank">Flowbite Documentation</a>.
                        </p>

                    </div>
                </div>
            </div>
        </section>
        <section className="w-full section-about border border-b-orange-700 ">
            <div class="Container items-center flex flex-col ">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        {/* Section header */}
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                            <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Two versions of the Quick BUT Inspection Kit to meet different user needs.</h3>


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


    </motion.div>

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
