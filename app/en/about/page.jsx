"use client"
// import fetch from "isomorphic-unfetch";
import { CldVideoPlayer } from "next-cloudinary";


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



// const data = [
//     {
//         image:
//             "https://blenderartists.org/uploads/default/original/4X/5/4/f/54f2cbb9c456be76911967e686ca5898ac6a065d.jpeg",
//         caption: `<div>
//         San Francisco<br/><span>Next line</span>
//       </div>`,
//     },
//     {
//         image:
//             "https://cdn.artstation.com/p/thumbnails/001/142/295/thumb.jpg",
//         caption: "<div>San Francisco</div>",
//     },
//     {
//         image:
//             "https://t3.ftcdn.net/jpg/05/34/83/84/360_F_534838467_DTE9QWKuWpXXgJMxzcfh6WVfimYWcNdO.jpg",
//         caption: "<div>San Francisco</div>",
//     },
//     {
//         image:
//             "https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp",
//         caption: "<div>San Francisco</div>",
//     },
//     {
//         image:
//             "https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902892_1280.jpg",
//         caption: "<div>San Francisco</div>",
//     },
//     {
//         image:
//             "https://img.freepik.com/premium-psd/psd-cartoon-character-3d-render-illustration_493627-96.jpg?w=2000",
//         caption: "Darjeeling",
//     },


// ];

// const captionStyle = {
//     fontSize: "2em",
//     fontWeight: "bold",
// };
// const slideNumberStyle = {
//     fontSize: "20px",
//     fontWeight: "bold",
// };
const Product = props => (



    <>

          <div className="top-wrap bg-DBlue h-[2000px]">
            <div className="row w-full border-b-1 border-white-400 py-20">
                <h1 className="text-center text-white font-medium">ABout ULtra</h1>
            </div>
            <div className="px-[90px]">
                <div className="grid grid-cols-3  pt-3">
                    <div className="border border-spacing-1 ">
                        <span className="text-white font-bold text-normal">MoveMentor</span>
                    </div>
                    <div className="border border-spacing-1 flex justify-center">
                        <span className="text-white font-bold text-normal mx-auto">MoveMentor</span>
                    </div>
                    <div className="border border-spacing-1 flex justify-end ">
                        <span className="text-white font-bold text-normal text-right ">MoveMentor</span>
                    </div>



                </div>
                <div className="grid grid-cols-3 gap-3 p-7">
                    <div className="col-span-2 h-[600px] bg-LBlue rounded-lg rounded-2xl relative">
                        <div className="ab-img absolute top-0 left-0 z-1">
                            <img className="w-full" src="" alt="" />
                        </div>

                        <div className="z-99 grid grid-cols-3 border pt-4 px-2">
                            <div className="border border-black">
                                <a href="" className="rounded-2xl border border-white w-[100px] px-2 py-1 text-white"> healthy</a>
                            </div>
                            <div className="border flex justify-center border-black">
                                <a href="" className="rounded-2xl border border-white w-[100px] px-2 py-1 text-white"> sport </a>
                            </div>
                            <div className="border border-black">

                            </div>
  
                        </div>
                        <div className="grid grid-cols-1 flex items-center ">
                            <div className="top border border-white flex justify-center flex-col align-middle items-center">
                               
                                    <img className="w-2/4" src="https://www.ultraehp.com/images/favpng_logo-brand-white.png" alt="" />

                                <div className="txt">
                                
                                    <h4 className="text-4xl text-white font-medium ">MoveUltra</h4>
                                </div>
                                <div className="txt flex justify-around w-full px-20">
                                    <p className="text-2xl text-white font-thin">JUMP</p>
                                    <span className="text-3xl text-white">→</span>
                                    <p className="text-2xl text-white font-thin">RUN</p>
                                    <span className="text-3xl text-white">→</span>
                                    <p className="text-2xl text-white font-thin">MOVE</p>
                                </div>


                            </div>
                            <div className="middle">
                             
                                
                            </div>
                            <div className="bottom">

                            </div>
                        </div>

                    </div>
                    <div cla sName="border border-whites relatve">
                        <img className="w-full top-0" src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/3-tuya_2878x.jpg?v=1681369404" alt="" />
                        <div className="txt absolute z-99 top-0 w-full">
                            <p className="text-2xl text-white">Lorem ipsum dolor. </p>
                            <p className="text-normal text-white">Lorem ipsum dolor. </p>

                            
                        </div>
                    </div>
                 
                  
                    
                </div>

            </div>
            
          </div>



         <div>
            {/* <iframe
                src="https://player.cloudinary.com/embed/?public_id=shoes_video&cloud_name=demo"
                width="640"
                height="360"
                // style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                frameborder="0"
            ></iframe> */}
         </div>
         {/* <div className="bottom-wrap bg-gray-900 h-screen">
          
         </div>
    */}


    
    </>

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
