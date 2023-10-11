
"use client"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <div className='flex flex-col'>
            <div className="row grid grid-cols-2">
                <div>
                    <div className="txt pr-4 py-5">
                        <h3 className='text-black text-3xl font-extrabold'>
                            Product-01

                        </h3>
                        <p className='font-medium text-xs text-slate-900 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis fuga minima veniam totam. Ullam error quos provident beatae numquam esse sunt fugit, vero, veritatis, aperiam voluptate excepturi quod cumque.</p>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
               
            </div>
            <Swiper
                 className='border border-black w-full'
                // install Swiper modules
                breakpoints={{
                    0: {
                        width: 0,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 4,
                    },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                // slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide>

                    
                    <li
                        className="h-[400px] p-4 border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Golden-02_3078x.jpg?v=1692327357')] bg-cover bg-no-repeat bg-center"
                        style={{
                            boxShadow:
                                "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                        }}
                    >
                        <div className="flex flex-1 flex-col   ">
                            <div className=" relative h-full border boder-white content flex flex-col shrink-0">


                                <div className="absolute bottom-[15px] button w-full bg-white rounded-full border p-3 border-slate-300">
                                    <a href='#' className="txt text-center ">
                                        BUTTON CLICK

                                    </a>

                                </div>
                            </div>

                        </div>

                    </li>

                </SwiperSlide>
                <SwiperSlide>
                    
                    <li
                        className="h-[400px] p-4 border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Golden-02_3078x.jpg?v=1692327357')] bg-cover bg-no-repeat bg-center"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col   ">
                        <div className=" relative h-full border boder-white content flex flex-col shrink-0">

                           
                            <a className="absolute bottom-[15px] button w-full bg-white rounded-full border p-3 border-slate-300">
                                    <a href='#' className="txt text-center ">
                                    BUTTON CLICK
                                    
                                </a>
                              
                            </a>
                        </div>

                    </div>
                   
                </li>
                </SwiperSlide>
                <SwiperSlide> <li
                    className="h-[400px] p-4 border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Golden-02_3078x.jpg?v=1692327357')] bg-cover bg-no-repeat bg-center"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col   ">
                        <div className=" relative h-full border boder-white content flex flex-col shrink-0">


                            <a className="absolute bottom-[15px] button w-full bg-white rounded-full border p-3 border-slate-300">
                                <a href='#' className="txt text-center ">
                                    BUTTON CLICK

                                </a>

                            </a>
                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide> <li
                    className="h-[400px] p-4 border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Golden-02_3078x.jpg?v=1692327357')] bg-cover bg-no-repeat bg-center"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col   ">
                        <div className=" relative h-full border boder-white content flex flex-col shrink-0">


                            <a className="absolute bottom-[15px] button w-full bg-white rounded-full border p-3 border-slate-300">
                                <a href='#' className="txt text-center ">
                                    BUTTON CLICK

                                </a>

                            </a>
                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide> <li
                    className="h-[400px] p-4 border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Golden-05_2878x.jpg?v=1692327357')] bg-cover bg-no-repeat bg-center"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col   ">
                        <div className=" relative h-full border boder-white content flex flex-col shrink-0">


                            <a className="absolute bottom-[15px] button w-full bg-white rounded-full border p-3 border-slate-300">
                                <a href='#' className="txt text-center ">
                                    BUTTON CLICK

                                </a>

                            </a>
                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide> <li
                    className="h-[400px] p-4 border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Golden-06_2878x.jpg?v=1692327357')] bg-cover bg-no-repeat bg-center"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col   ">
                        <div className=" relative h-full border boder-white content flex flex-col shrink-0">


                            <a className="absolute bottom-[15px] button w-full bg-white rounded-full border p-3 border-slate-300">
                                <a href='#' className="txt text-center ">
                                    BUTTON CLICK

                                </a>

                            </a>
                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide> <li
                    className="h-[400px] p-4 border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Golden-04_2878x.jpg?v=1692327357')] bg-cover bg-no-repeat bg-center"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col   ">
                        <div className=" relative h-full border boder-white content flex flex-col shrink-0">


                            <a className="absolute bottom-[15px] button w-full bg-white rounded-full border p-3 border-slate-300">
                                <a href='#' className="txt text-center ">
                                    BUTTON CLICK

                                </a>

                            </a>
                        </div>

                    </div>

                </li>
                </SwiperSlide>
                
            </Swiper>
        </div>


        
    );
};