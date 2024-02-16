"use client"
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Link from 'next/link'
// import { ThemeSwitcher } from "./ThemeSwitcher.js";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from 'next-themes';
import Switcher from '../Switcher.js';
import Image from 'next/image';
import MobileMenu from '../MobileHeader/index.jsx';
// import { ThemeSwitcher } from '@/app/ThemeSwitcher';
// import Switchers from '../Switcher.js/index.js'

// import MobileMenu from "../../components/Navbar/mobile-menu/MobileMenu.jsx";

export default function App() {


    const [open, setOpen] = useState(false);

    const isOpen = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;


    //lets start animation
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    }


    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    return (
<>
          
            <div className="block   bg-rose-600	 py-4 w-full text-white text-center ">
                我們讓試片長出了自己的電路系統
            </div>

        <Navbar className='nav  z-50 border border-rose-600 '>

            
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>


            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4 border border-orange-500" justify="center">


                <Dropdown className='  py-10 md:px-10 lg:px-16 h-[90vh] overflow-y-scroll dark:bg-grey-800  border border-gray-400  w-[96vw] lg:w-[98vw]'>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                極安簡測產品
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu

                        aria-label="ACME features"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-[100%] dropdown data-aos='zoom-y-out'"
                        itemClasses={{

                            base: "gap-4",
                        }}
                    >


                        <DropdownItem
                            className='border dark:border-slate-600 border-black p-5'
                            key="autoscaling"
                        // description="ACME scales apps to meet user demand, automagically, based on load."
                        // startContent={icons.scale}
                        >
                            <div className="grid grid-cols-2">
                                <div className=''>
                                    <b className='text-lg dark:text-slate-100'>UBT- Professional</b>
                                    <ul><li className='dark:text-slate-300'>幽門螺旋桿菌快速測試</li><li className='dark:text-slate-300'>適用於醫療機構</li><li className='dark:text-slate-300'>自動獲取結果</li></ul>
                                </div>
                                <div className='  '>
                                    <img src="http://localhost:3000/_next/image?url=%2Fimages%2FUntitled-Camera%E6%8B%B7%E8%B2%9D.png&w=1080&q=75" alt="" className='w-[250px] rounded-lg' />

                                </div>
                            </div>



                        </DropdownItem>
                        <DropdownItem
                            className='border dark:border-slate-600 border-black p-5'
                            key="autoscaling"
                        // description="ACME scales apps to meet user demand, automagically, based on load."
                        // startContent={icons.scale}
                        >
                            <Link href='/en/Products/product01'>
                                <div className="grid grid-cols-2">
                                    <div className=''>
                                        <b className='text-lg dark:text-slate-100'>UBT- Professional</b>
                                        <ul><li className='dark:text-slate-300'>幽門螺旋桿菌快速測試</li><li className='dark:text-slate-300'>適用於醫療機構</li><li className='dark:text-slate-300'>自動獲取結果</li></ul>
                                    </div>
                                    <div className='  '>
                                        <img src="https://ultraehp.com/images/Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png" alt="" className='w-[250px] rounded-lg' />

                                    </div>
                                </div>

                            </Link>

                        </DropdownItem>
                        <DropdownItem
                            className='border dark:border-slate-600 border-black p-5'
                            key="autoscaling"
                        // description="ACME scales apps to meet user demand, automagically, based on load."
                        // startContent={icons.scale}
                        >
                            <a href="https://zensor.com.tw/ECWP100C.html">
                                <div className="grid grid-cols-2">
                                    <div className=''>
                                        <b className='font-extrabold text-normal break-all dark:text-slate-100 '>業界最小的⌜無線⌟<br></br>電化學分析儀<br></br>
                                            (恒電位儀/電化學工作站)</b>
                                        <ul><li className='dark:text-slate-300'>只有手指大小</li><li className='dark:text-slate-300'>無線連接，即插即用</li><li className='dark:text-slate-300'>可擴增到8通道</li></ul>
                                    </div>
                                    <div className='  '>
                                        <img src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/業界最小的_無線_電化學分析儀-實擬功能.webp" alt="" className='w-[250px] rounded-lg' />

                                    </div>
                                </div>
                            </a>


                        </DropdownItem>

                        <DropdownItem
                            className='border dark:border-slate-600 border-black p-5'
                            key="autoscaling"
                        // description="ACME scales apps to meet user demand, automagically, based on load."
                        // startContent={icons.scale}
                        >
                            <a href='https://www.ultrae.com.tw/UX200.html '>
                                <div className="grid grid-cols-2">
                                    <div className=''>
                                        <b className='text-lg dark:text-slate-100'>免校正酸鹼檢測儀</b>
                                        <ul><li className='dark:text-slate-300'>pH chart 曲線圖</li><li className='dark:text-slate-300'>7.0”彩色觸控屏幕</li><li className='dark:text-slate-300'>演算法自動終點判斷</li></ul>
                                    </div>
                                    <div className='  '>
                                        <img src="https://www.ultraehp.com/images/Products-Detail-Img/UX200/UX200.png" alt="" className='w-[250px] rounded-lg' />

                                    </div>
                                </div>
                            </a>


                        </DropdownItem>



                    </DropdownMenu>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe officia voluptates vel sit corporis. Pariatur, placeat maxime deleniti eligendi officiis eaque reprehenderit aut eveniet, perspiciatis error architecto autem?</p>







                </Dropdown>

                    <Dropdown className='  py-10 md:px-10 lg:px-16 h-[90vh] overflow-y-scroll dark:bg-grey-800  border border-gray-400  w-[96vw] lg:w-[98vw]'>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={icons.chevron}
                                    radius="sm"
                                    variant="light"
                                >
                                    超極生技產品
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu

                            aria-label="ACME features"
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-[100%] dropdown data-aos='zoom-y-out'"
                            itemClasses={{

                                base: "gap-4",
                            }}
                        >


                            <DropdownItem
                                className='border dark:border-slate-600 border-black p-5'
                                key="autoscaling"
                            // description="ACME scales apps to meet user demand, automagically, based on load."
                            // startContent={icons.scale}
                            >
                                <div className="grid grid-cols-2">
                                    <div className=''>
                                        <b className='text-base dark:text-slate-100'>UX100｜酸鹼檢測儀</b>
                                        <ul><li className='dark:text-slate-300'>4.3”彩色觸控屏幕</li><li className='dark:text-slate-300'>防水防塵</li><li className='dark:text-slate-300'>雙模式檢測片連結器</li></ul>
                                    </div>
                                    <div className=' px-5 '>
                                        <img src="http://localhost:3000/_next/image?url=%2Fimages%2FUntitled-Camera%E6%8B%B7%E8%B2%9D.png&w=1080&q=75" alt="" className='w-[250px] rounded-lg' />

                                    </div>
                                </div>



                            </DropdownItem>
                            <DropdownItem
                                className='border dark:border-slate-600 border-black p-5'
                                key="autoscaling"
                            // description="ACME scales apps to meet user demand, automagically, based on load."
                            // startContent={icons.scale}
                            >
                                <Link href='/en/Products/product01'>
                                    <div className="grid grid-cols-2">
                                        <div className='px-2'>
                                            <b className='text-base dark:text-slate-100'>UX200｜酸鹼趨勢檢測儀</b>
                                            <ul><li className='dark:text-slate-300'>pH chart 曲線圖</li><li className='dark:text-slate-300'>7”彩色觸控屏幕</li><li className='dark:text-slate-300'>防水防塵</li><li className='dark:text-slate-300'>雙模式檢測片連接器</li></ul>
                                        </div>
                                        <div className=' px-5 '>
                                            <img src="https://ultraehp.com/images/Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png" alt="" className='w-[250px] rounded-lg' />

                                        </div>
                                    </div>

                                </Link>

                            </DropdownItem>
                            <DropdownItem
                                className='border dark:border-slate-600 border-black p-5'
                                key="autoscaling"
                            // description="ACME scales apps to meet user demand, automagically, based on load."
                            // startContent={icons.scale}
                            >
                                <a href="https://zensor.com.tw/ECWP100C.html">
                                    <div className="grid grid-cols-2">
                                        <div className=''>
                                            <b className='text-base dark:text-slate-100'>CS200｜磁石變頻攪拌器</b>
                                            <ul><li className='dark:text-slate-300'>恆溫控制 (20 ~ 40°C)</li><li className='dark:text-slate-300'>變頻恆速</li><li className='dark:text-slate-300'>磁石正反轉設計</li></ul>
                                        </div>
                                        <div className=' px-5 '>
                                            <img src="https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/業界最小的_無線_電化學分析儀-實擬功能.webp" alt="" className='w-[250px] rounded-lg' />

                                        </div>
                                    </div>
                                </a>


                            </DropdownItem>

                            <DropdownItem
                                className='border dark:border-slate-600 border-black p-5'
                                key="autoscaling"
                            // description="ACME scales apps to meet user demand, automagically, based on load."
                            // startContent={icons.scale}
                            >
                                <a href='https://www.ultrae.com.tw/UX200.html '>
                                    <div className="grid grid-cols-2">
                                        <div className=''>
                                            <b className='text-base dark:text-slate-100'>UH1｜酸鹼試片電極</b>
                                            <ul><li className='dark:text-slate-300'>即開即用免校正</li><li className='dark:text-slate-300'>樣品使用量最少(10~20μL)</li><li className='dark:text-slate-300'>拋棄式無交叉汙染</li></ul>
                                        </div>
                                        <div className=' px-5 '>
                                            <img src="https://www.ultraehp.com/images/Products-Detail-Img/UX200/UX200.png" alt="" className='w-[250px] rounded-lg' />

                                        </div>
                                    </div>
                                </a>


                            </DropdownItem>
                            <DropdownItem
                                className='border dark:border-slate-600 border-black p-5'
                                key="autoscaling"
                            // description="ACME scales apps to meet user demand, automagically, based on load."
                            // startContent={icons.scale}
                            >
                                <a href='https://www.ultrae.com.tw/UX200.html '>
                                    <div className="grid grid-cols-2">
                                        <div className=''>
                                            <b className='text-base dark:text-slate-100'>UH2｜超微量酸鹼試片電極</b>
                                            <ul><li className='dark:text-slate-300'>即開即用免校正</li><li className='dark:text-slate-300'>樣品使用量最少(1~2μL)</li><li className='dark:text-slate-300'>拋棄式無交叉汙染</li></ul>
                                        </div>
                                        <div className=' px-5 '>
                                            <img src="https://www.ultraehp.com/images/Products-Detail-Img/UX200/UX200.png" alt="" className='w-[250px] rounded-lg' />

                                        </div>
                                    </div>
                                </a>


                            </DropdownItem>

                            <DropdownItem
                                className='border dark:border-slate-600 border-black p-5'
                                key="autoscaling"
                            // description="ACME scales apps to meet user demand, automagically, based on load."
                            // startContent={icons.scale}
                            >
                                <a href='https://www.ultrae.com.tw/UX200.html '>
                                    <div className="grid grid-cols-2">
                                        <div className=''>
                                            <b className='text-base dark:text-slate-100'>UH2-Gas｜氣體酸鹼試片電極</b>
                                            <ul><li className='dark:text-slate-300'><li>即開即用免校正</li></li><li className='dark:text-slate-300'>適用於氣體樣品</li><li className='dark:text-slate-300'>拋棄式無交叉汙染</li></ul>
                                        </div>
                                        <div className=' px-5 '>
                                            <img src="https://www.ultraehp.com/images/Products-Detail-Img/UX200/UX200.png" alt="" className='w-[250px] rounded-lg' />

                                        </div>
                                    </div>
                                </a>


                            </DropdownItem>




                        </DropdownMenu>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe officia voluptates vel sit corporis. Pariatur, placeat maxime deleniti eligendi officiis eaque reprehenderit aut eveniet, perspiciatis error architecto autem?</p>







                    </Dropdown>
                
                <NavbarItem>
                    <Link  className='dark:text-white' color="foreground" href="/UltraE">
                        關於我們
                    </Link>
                </NavbarItem>
                <NavbarItem>
                        <Link color="foreground" className='dark:text-white' href="#">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                        <Link color="foreground" className='dark:text-white' href="#">
                        聯絡我們
                    </Link>
                </NavbarItem>

            </NavbarContent>

            <Switcher />
                <MobileMenu />
          
            
        </Navbar>
        </>
    );
}
