
"use client"
// import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Carousel from './CarouselSlider/Carousel'
import { countries } from "./CarouselSlider/Data";
import React from "react";
import Link from 'next/link'
import { Button } from "@nextui-org/react";
export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="w-full  mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="dark:text-white  text-4xl md:text-5xl font-black leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">我們的核心技術-<span className="  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">PotentioStrip </span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="dark:text-slate-300  text-gray-700 text-xl mb-8" data-aos="zoom-y-out" data-aos-delay="150">我們讓試片長出自己的電路系統</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Button radius="full" className="bg-gradient-to-tr from-cyan-600 to-sky-400 text-white shadow-lg">
                  <Link href="/en/Products">關於極安檢測</Link>
                </Button>
                {/* <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="/UltraE">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="relative flex justify-center mb-8" data-aos="fade-down" data-aos-delay="450">
          <Carousel images={countries} />
          </div>

          {/* Hero image */}
          {/* <ModalVideo
          
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="https://youtu.be/Rs-dJQVwhyc"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

      </div>
    </section>
  )
}