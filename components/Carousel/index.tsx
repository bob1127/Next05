import type { NextPage } from 'next';
import Head from 'next/head';
// import Header from '../components/Header';
import Carousel from './Carousel';

import Image from 'next/image';


import card2 from '../../public/card2.svg';
import card3 from '../../public/card3.svg';
import card4 from '../../public/card4.svg';

const imagesItems = [
    <Image width={700} height={550} src='/A2343211_TD03_V1_3078x-2_dvhoa5.webp' alt="teste" />,
    <Image width={700} height={550} src='/banner01_hox7to.png' alt="teste" />,
    <Image width={700} height={550} src='/A2343211_TD03_V1_3078x-2_dvhoa5.webp' alt="teste" />,
    <Image width={700} height={550} src='/banner01_hox7to.png' alt="teste" />,
];



const Home: NextPage = () => {
    return (
        <div className="h-screen w-screen overflow-hidden bg-bg text-white">
           
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <div className="mb-10 flex flex-col  justify-center space-y-6">
                    <h1 className="text-4xl font-bold md:text-5xl">Beautiful animated gradients</h1>
                    <p className="text-center text-xs opacity-75">
                        Explore, generate and use seamless animation gradients for your next projects
                    </p>
                </div>
                <Carousel items={imagesItems} />
            </main>
        </div>
    );
};

export default Home;
