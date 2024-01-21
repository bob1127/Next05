
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
        <div>
            <div className="row ">
                <div className="Container m-4 grid grid-cols-2">

                    <div className="txt">
                        <h3 className='dark text-4xl text-black '>TITLE </h3>
                        <a className='bg-black  dark:text-black rounded-xl w-[140px] px-4' href="">others</a>
                        <p className='  text-xs font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eos voluptatem amet excepturi tempore exercitationem eaque saepe enim, quas a sint quae vero dolores, sapiente corrupti quod doloribus ullam aperiam.</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Swiper
               
                // install Swiper modules
                breakpoints={{
                    0: {
                      
                        slidesPerView: 1,
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

                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide >


                    <li
                        className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://www.ultraehp.com/images/Products-Detail-Img/UP100/UP100-08.png')] bg-cover bg-no-repeat  bg-[url('https://www.ultraehp.com/images/Products-Detail-Img/UP100/UP100-08.png')] bg-cover bg-no-repeat p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none h-[400px]"
                        style={{
                            boxShadow:
                                "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                        }}
                    >
                        <div className="flex flex-1 flex-col pb-[50px]  ">
                            <div className="content flex flex-col shrink-0">

                                <h2 className="text-xl  text-gray-12">

                                </h2>

                            </div>

                        </div>

                    </li>

                </SwiperSlide>
                <SwiperSlide><li
                    className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://www.ultraehp.com/images/Products-Detail-Img/UP100/SG01-Camera.png')] h-[400px] bg-cover bg-no-repeat  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1340011_TD05_V1_3078x.jpg?v=1690893726')]  f p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">

                            <h2 className="text-xl  text-gray-12">

                            </h2>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide><li
                    className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1340011_TD05_V1_3078x.jpg?v=1690893726')] h-[400px] p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">

                            <h2 className="text-xl  text-gray-12">

                            </h2>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide><li
                    className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1340011_TD05_V1_3078x.jpg?v=1690893726')] h-[400px] p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">

                            <h2 className="text-xl  text-gray-12">

                            </h2>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide><li
                    className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1340011_TD05_V1_3078x.jpg?v=1690893726')] h-[400px] p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">

                            <h2 className="text-xl  text-gray-12">

                            </h2>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide><li
                    className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1340011_TD05_V1_3078x.jpg?v=1690893726')] h-[400px] p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px] ">
                        <div className="content flex flex-col shrink-0">

                            <h2 className="text-xl  text-gray-12">

                            </h2>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide><li
                    className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1340011_TD05_V1_3078x.jpg?v=1690893726')] h-[400px] p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">

                            <h2 className="text-xl  text-gray-12">

                            </h2>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide><li
                    className="border border-stone-200 bg-cover bg-no-repeat  bg-[url('https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1340011_TD05_V1_3078x.jpg?v=1690893726')] h-[400px] p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">

                            <h2 className="text-xl  text-gray-12">

                            </h2>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                ...
            </Swiper>
        </div>


        
    );
};