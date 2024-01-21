
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
        <Swiper
            // install Swiper modules
            breakpoints={{
                0: {
                    width: 0,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 1,
                },
                1200: {
                    width: 1200,
                    slidesPerView: 2,
                },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            // slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <li
                    className="border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none max-w-[85vw] max-w-[100%] md:max-w-[70vw] h-[300px] overflow-hidden xl:h-[300px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="lg:flex  flex-col flex-1 pb-[50px] px-[50px] justify-between">
                        <div className="content w-1/2 lg:w-full flex flex-col shrink-0">
                            <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                                We help you
                            </h1>
                            <h2 className="text-2xl  text-gray-12">
                                快速幽門螺旋桿菌

                            </h2>
                            <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">

                                胃幽門螺旋桿菌（Helicobacter pylori）是一種微小的革蘭氏陰性菌。胃幽門螺旋桿菌是螺旋狀且具有纖毛，這種形狀使得它能夠在胃部黏膜中穿梭移動。它表面的黏附分子能夠與胃部黏膜細胞表

                            </div>
                        </div>

                    </div>
                    <div className="rounded-2xl overflow-hidden static lg:relative flex-1 ">
                        <img
                            draggable="false"
                            alt="Investing"
                            className="absolute w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png"
                        />
                    </div>
                </li>

            </SwiperSlide>
            <SwiperSlide><li
                className="border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none max-w-[85vw] md:max-w-[70vw]"
                style={{
                    boxShadow:
                        "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                }}
            >
                <div className="flex flex-1 flex-col pb-[50px] px-[50px] justify-between">
                    <div className="content flex flex-col shrink-0">
                        <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                            We help you
                        </h1>
                        <h2 className="text-2xl  text-gray-12">
                            diversify your investments
                        </h2>
                        <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">
                            We’ll help you build an endowment-quality portfolio containing public
                            investments and private opportunities across real estate, venture
                            capital, and fixed credit.

                        </div>
                    </div>

                </div>
                <div className="relative flex-1 ">
                    <img
                        draggable="false"
                        alt="Investing"
                        className="absolute w-full h-full right-0 top-0 object-cover object-left-top"
                        src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/A2669111_TD03_V1_3078x.jpg.png"
                    />
                </div>
            </li>
</SwiperSlide>
            <SwiperSlide><li
                className="border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none max-w-[85vw] md:max-w-[70vw]"
                style={{
                    boxShadow:
                        "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                }}
            >
                <div className="flex flex-1 flex-col pb-[50px] px-[50px] justify-between">
                    <div className="content flex flex-col shrink-0">
                        <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                            We help you
                        </h1>
                        <h2 className="text-2xl  text-gray-12">
                            diversify your investments
                        </h2>
                        <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">
                            We’ll help you build an endowment-quality portfolio containing public
                            investments and private opportunities across real estate, venture
                            capital, and fixed credit.
                           
                        </div>
                    </div>
                   
                </div>
                <div className="relative flex-1 ">
                    <img
                        draggable="false"
                        alt="Investing"
                        className="absolute w-full h-full right-0 top-0 object-cover object-left-top"
                        src="https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1336011_TD02_V1_3078x.jpg?v=1690893998"
                    />
                </div>
            </li>
</SwiperSlide>
            <SwiperSlide><li
                className="border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none max-w-[85vw] md:max-w-[70vw]"
                style={{
                    boxShadow:
                        "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                }}
            >
                <div className="flex flex-1 flex-col pb-[50px] px-[50px] justify-between">
                    <div className="content flex flex-col shrink-0">
                        <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                            We help you
                        </h1>
                        <h2 className="text-2xl  text-gray-12">
                            diversify your investments
                        </h2>
                        <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">
                            We’ll help you build an endowment-quality portfolio containing public
                            investments and private opportunities across real estate, venture
                            capital, and fixed credit.

                        </div>
                    </div>

                </div>
                <div className="relative flex-1 ">
                    <img
                        draggable="false"
                        alt="Investing"
                        className="absolute w-full h-full right-0 top-0 object-cover object-left-top"
                        src="https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1336011_TD02_V1_3078x.jpg?v=1690893998"
                    />
                </div>
            </li>
</SwiperSlide>
            ...
        </Swiper>
    );
};