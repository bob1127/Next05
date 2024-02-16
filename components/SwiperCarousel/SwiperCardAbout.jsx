
"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    // const sliderRef = useRef(null);
    // const handlePrev = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slidePrev();
    // }, []);

    // const handleNext = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slideNext();
    // }, []);

    return (
        <div className='w-full'>
            <div className="row">
                <div className="Container m-4 grid grid-cols-2">

                    <div className="txt">
                        <h3 className='dark text-4xl text-black '>什麼是蜂鳥探針? </h3>
                        <a className='bg-black  dark:text-black rounded-xl w-[140px] px-4' href="">others</a>
                        <p className='  text-xs font-normal'>蜂鳥探針pH檢測電極UH1除了免校正外還有有什麼特別之處？</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Swiper

               
               
                // install Swiper modules
                breakpoints={{
                    0: {
                      
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={1}

                navigation
                pagination={{ clickable: false }}
                scrollbar={{ draggable: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide className='m-3'><li
                    className="border border-stone-200  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[180px] overflow-y-scroll">
                                    <p className="text-tiny uppercase font-bold">Article12</p>
                                    <h4 className="text-xl text-black font-extrabold mb-3
                                       ">無需pH校正標準液-即開即用</h4>
                                    <samll className="text-base text-gray-800">傳統的酸鹼度計玻璃薄膜使用後，薄膜表面可交換氫離子含量發生變化(阻塞，磨損)，以及內部溶液氫離子濃度改變(內參考液濃度及壓力改變)，進而產生誤差，因此玻璃電極在精確測量前皆須進行校正後才能使用。蜂鳥探針的每一片試片都已經為您預先校正完畢，讓您即開即用。</samll>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="/無需pH校正標準液_oygpew.webp"
                                        width={500}
                                        height={300}
                                        
                                    />
                                </CardBody>
                            </Card>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='m-3'><li
                    className="border border-stone-200  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[180px] overflow-y-scroll">
                                    <p className="text-tiny uppercase font-bold">Article12</p>
                                    <h4 className="text-xl text-black font-extrabold mb-3
                                       ">每次使用全新的拋棄式電極
                                        -不怕污染</h4>
                                    <samll className="text-base text-gray-800">玻璃電極的損耗，常來自於玻璃膜孔洞的堵塞，或者因清洗造成表面磨損。蜂鳥探針的拋棄式設計，特別適用於會和內參比液反應的蛋白質樣品，很難清潔的粘稠樣品，以及需要戶外長途攜帶的需求。</samll>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="/UH1-18-不怕汙染720x540-2_sxu8o0.webp"
                                        width={500}
                                        height={300}
                                        loading='lazy'
                                    />
                                </CardBody>
                            </Card>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='m-3'><li
                    className="border border-stone-200  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[180px] overflow-y-scroll">
                                    <p className="text-tiny uppercase font-bold">Article12</p>
                                    <h4 className="text-xl text-black font-extrabold mb-3
                                       ">每一片都有溫度感測元件，
                                        精確校正</h4>
                                    <samll className="text-base text-gray-800">溫度補償的原因是因為不同溫度時，同一個pH的液體會因為解離常數改變造成pH讀值改變，所以透過溫度補償的模式把不同溫度校正回25度的pH值。蜂鳥探針每一片都有獨立的溫度感應元件，精確測定樣品溫度，並做智慧型數據補償，精準顯示樣品pH值。</samll>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="/免校正微量拋棄式pH酸鹼電極_pabfvi.webp"
                                        width={500}
                                        height={300}
                                        loading='lazy'
                                    />
                                </CardBody>
                            </Card>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='m-3'><li
                    className="border border-stone-200  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[180px] overflow-y-scroll">
                                    <p className="text-tiny uppercase font-bold">Article12</p>
                                    <h4 className="text-xl text-black font-extrabold mb-3
                                       ">無需pH校正標準液-即開即用</h4>
                                    <samll className="text-base text-gray-800">傳統的酸鹼度計玻璃薄膜使用後，薄膜表面可交換氫離子含量發生變化(阻塞，磨損)，以及內部溶液氫離子濃度改變(內參考液濃度及壓力改變)，進而產生誤差，因此玻璃電極在精確測量前皆須進行校正後才能使用。蜂鳥探針的每一片試片都已經為您預先校正完畢，讓您即開即用。</samll>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="/無需pH電極保存液_iuicax.webp"
                                        width={500}
                                        height={300}
                                        loading='lazy'
                                    />
                                </CardBody>
                            </Card>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='m-3'><li
                    className="border border-stone-200  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[180px] overflow-y-scroll">
                                    <p className="text-tiny uppercase font-bold">Article12</p>
                                    <h4 className="text-xl text-black font-extrabold mb-3
                                       ">無需pH校正標準液-即開即用</h4>
                                    <samll className="text-base text-gray-800">傳統的酸鹼度計玻璃薄膜使用後，薄膜表面可交換氫離子含量發生變化(阻塞，磨損)，以及內部溶液氫離子濃度改變(內參考液濃度及壓力改變)，進而產生誤差，因此玻璃電極在精確測量前皆須進行校正後才能使用。蜂鳥探針的每一片試片都已經為您預先校正完畢，讓您即開即用。</samll>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="/SGS_ISO9001品質管理系統認證_zdl1ho.webp"
                                        width={500}
                                        height={300}
                                        loading='lazy'
                                    />
                                </CardBody>
                            </Card>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='ml-3 '><li
                    className="border border-stone-200  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[180px] overflow-y-scroll">
                                    <p className="text-tiny uppercase font-bold">Article12</p>
                                    <h4 className="text-xl text-black font-extrabold mb-3
                                       ">無需pH校正標準液-即開即用</h4>
                                    <samll className="text-base text-gray-800">傳統的酸鹼度計玻璃薄膜使用後，薄膜表面可交換氫離子含量發生變化(阻塞，磨損)，以及內部溶液氫離子濃度改變(內參考液濃度及壓力改變)，進而產生誤差，因此玻璃電極在精確測量前皆須進行校正後才能使用。蜂鳥探針的每一片試片都已經為您預先校正完畢，讓您即開即用。</samll>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="/一滴可量測_jtjakl.webp"
                                        width={500}
                                        height={300}
                                        loading='lazy'
                                    />
                                </CardBody>
                            </Card>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                
                ...
         
            </Swiper>
            {/* <div className="prev-arrow" onClick={handlePrev} />
            <div className="next-arrow" onClick={handleNext} /> */}
        </div>


        
    );
};