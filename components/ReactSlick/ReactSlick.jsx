import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import { dataDigitalBestSeller } from './data';
// import imgGirl from '../public/images/defaultImage.jpg';
import imgGirl from '../../public/images/wix.jpg'

function ReactSlick() {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: imgGirl,
        }));
    };

    return (
        <div className="App">
            <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                    <div className="card bg-gray-200">
                        <div className="card-top">
                            <img
                                src={
                                    defaultImage[item.title] === item.title
                                        ? defaultImage.linkDefault
                                        : item.linkImg
                                }
                                alt={item.title}
                                onError={handleErrorImage}
                            />
                            <h1>{item.title}</h1>
                            <h1>{item.content}</h1>
                        </div>
                        <div className="card-bottom flex justify-center flex-col items-center">
                            <h3 className='h-full w-full bg-gray-100   rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg text-center border border-slate-100
'>{item.Link}</h3>
                            <span className="category">{item.category}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ReactSlick;
