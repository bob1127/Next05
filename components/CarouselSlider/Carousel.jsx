
"use client"
import { useEffect } from "react";
import { useState } from "react";
import './Carousel.css'
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import  Image  from "next/image";


const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }

}
function Carousel({ images}) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut =
            autoPlay &&
            setTimeout(() => {
                slideRight();
            }, 4500);
    });

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
    console.log(current);
    return (
        <div
            className="carousel px-20 border border-black relative"
            onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
                setAutoPlay(true);
            }}
        >
            <div className="rightUi">
                
            </div>
           
            <div className="carousel_wrapper  border border-r-emerald-400">
              
                
                {images.map((image, index) => {
                    return (

                        <a href={image.url}>
                            <div
                                key={index}
                                className={
                                    index == current
                                        ? "carousel_card carousel_card-active"
                                        : "carousel_card"
                                }
                            >
                                {/* <div className="card-text-wrap flex justify-center flex-col align-middle">
                                <h3>LOREM</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit dolores nihil tempora totam? Rerum et quaerat aspernatur provident officia sint quidem quibusdam ab cumque fuga, corporis ducimus veniam quam maxime adipisci ipsam ipsa non sed explicabo numquam, blanditiis quas ad!</p>
                            </div> */}


                            

                                <Image quality={100} placeholder="empty" priority='true' alt="running people" src={image.image} width={1000} height={500} className="card_image" />


                                <div className="card_overlay">
                                    <h2 className="card_title">{image.title}</h2>




                                </div>
                            </div></a>
                    );
                })}
                <div className="carousel_arrow_left" onClick={slideLeft}>
                    &lsaquo;
                </div>
                <div className="carousel_arrow_right" onClick={slideRight}>
                    &rsaquo;
                </div>
                <div className="carousel_pagination">
                    {images.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index == current
                                        ? "pagination_dot pagination_dot-active"
                                        : "pagination_dot"
                                }
                                onClick={() => setCurrent(index)}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Carousel;