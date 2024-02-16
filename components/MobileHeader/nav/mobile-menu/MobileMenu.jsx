import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MonitorMobileIcon } from "./MonitorMobileIcon";
import { ShieldSecurityIcon } from "./ShieldSecurityIcon";
import { InfoIcon } from "./InfoIcon";
import { InvalidCardIcon } from "./InvalidCardIcon";
import Image from "next/image";

export default function App() {
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
    };

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <Accordion
            showDivider={false}
            className=" h-full px-2 pt-[70px] flex flex-col gap-1 w-full  mt-[-40px] border  z-[999] fixed"
            variant="shadow"
            itemClasses={itemClasses}
        >
            <AccordionItem
                key="1"
                aria-label="我門的產品"
                startContent={<MonitorMobileIcon className="text-primary" />}
                subtitle={
                    <p className="flex">
                        8 kinds of <p className="text-primary ml-1">Products</p>
                    </p>
                }
                title="我們的產品"
            >

                <Image quality={100} placeholder="empty" loading="lazy" alt="running people" src='/ultraP-logo-banner_ajviez.webp' width={100} height={50} className="" />

                <ul className="link-item mt-4">
                    <li className="my-4">
                         <a href="" className="text-black text-normal dark:text-white">UBTiw-Pro|快速胃幽門螺旋桿菌檢測組(專業版)</a>
                    </li>
                    <li className="my-4">
                           
                        <a href="" className="text-black text-normal dark:text-white">UBTiw-Home|快速胃幽門螺旋桿菌檢測組(家用版)</a>
                    </li>
                
                
                </ul>

                <Image quality={100} placeholder="empty" loading="lazy" alt="running people" src='/company-logo-mobile_ec3odl.webp' width={120} height={50} className="" />

                <ul className="link-item mt-4">
                    <li className="my-4">
                        <a href="" className="text-black text-normal dark:text-white">UX100丨酸鹼檢測儀</a>
                    </li>
                    <li className="my-4">

                        <a href="" className="text-black text-normal dark:text-white">UX200丨酸鹼趨勢檢測儀</a>
                    </li>
                    <li className="my-4">

                        <a href="" className="text-black text-normal dark:text-white">CS200丨磁石變頻攪拌器</a>
                    </li>
                    <li className="my-4">

                        <a href="" className="text-black text-normal dark:text-white">UH1｜酸鹼試片電極</a>
                    </li>
                    <li className="my-4">

                        <a href="" className="text-black text-normal dark:text-white">UH2｜超微量酸鹼試片電極</a>
                    </li>
                    <li className="my-4">

                        <a href="" className="text-black text-normal dark:text-white">UH2-Gas丨氣體酸鹼試片電極</a>
                    </li>


                </ul>


              
                    
            





             

              
            </AccordionItem>
            <AccordionItem
                key="2"
                aria-label="Apps Permissions"
                startContent={<ShieldSecurityIcon />}
                subtitle="3 items "
                title="服務"
            >
                <ul className="link-item mt-4">
                    <li className="my-4">
                        <a href="" className="text-black text-normal dark:text-white">隱私權政策</a>
                    </li>
                    <li className="my-4">

                        <a href="" className="text-black text-normal dark:text-white">Blog</a>
                    </li>
                    <li className="my-4">

                        <a href="" className="text-black text-normal dark:text-white">下載項目</a>
                    </li>
             


                </ul>

              
            </AccordionItem>
            <AccordionItem
                key="3"
                aria-label="Pending tasks"
                classNames={{ subtitle: "text-warning" }}
               
                subtitle="Complete your profile"
                title="關於我們"
            >
              
            </AccordionItem>
            <AccordionItem
                key="4"
                aria-label="Card expired"
                classNames={{ subtitle: "text-danger" }}
               
                subtitle="Please, update now"
                title='聯絡我們'
            >
            
            </AccordionItem>
        </Accordion>
    );
}
