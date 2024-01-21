import React from "react";
import { CldVideoPlayer } from 'next-cloudinary';
import { Tabs, Tab, Card, CardBody, CardFooter, CardHeader, Image, Button } from "@nextui-org/react";


export default function App() {
    return (
        <div>
            <div className="grid grid-cols-1  lg:grid-cols-2">


                <div>
                    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                        <Card className="col-span-12 sm:col-span-4 h-[300px]">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="https://www.ultraehp.com/images/SG01-Camera.png"
                            />
                        </Card>
                        <Card className="col-span-12 sm:col-span-4 h-[300px]">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
                                <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/A9129111_TD03_V1-1280x1280_2878x.jpg?v=1696753050"
                            />
                        </Card>
                        <Card className="col-span-12 sm:col-span-4 h-[300px]">
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
                                <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/A9129111_TD02_V1-1280x1280_2878x.jpg?v=1696753050"
                            />
                        </Card>
                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                             

                                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                                <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                         
                            </CardHeader>

                            <div className="relative flex-col pl-20 flex justify-center mb-8 aos-init aos-animate" data-aos="zoom-in-up" data-aos-delay="450">
                            <Image
                                removeWrapper
                                alt="Card example background"
                                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/A1289011_TD03_V1_4e2cb9bf-58f8-4dc3-81b2-4d6cf73f1683_2878x.jpg?v=1683699565"
                            />
                            </div>


                            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                <div>
                                    <p className="text-black text-tiny">Available soon.</p>
                                    <p className="text-black text-tiny">Get notified.</p>
                                </div>
                                <Button className="text-tiny" color="primary" radius="full" size="sm">
                                    Notify Me
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Relaxing app background"
                                className="z-0 w-full h-full object-cover"
                                src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/A1289011_TD05_V1_35bed047-d425-4ab9-bb1a-624e83c4b96d_2878x.jpg?v=1683699565"
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                    <Image
                                        alt="Breathing app icon"
                                        className="rounded-full w-10 h-11 bg-black"
                                        src="/images/breathing-app-icon.jpeg"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-tiny text-white/60">Breathing App</p>
                                        <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                                    </div>
                                </div>
                                <Button radius="full" size="sm">Get App</Button>
                            </CardFooter>
                        </Card>
                    </div>

                </div>
                <div className="mt-20 md:mt-0">
                  
                    <div className="flex w-full justify-center items-center align-middle flex-col border rounded-2xl bg-white dark:bg-black  p-5 lg:p-10">
                        <div className="txt mb-20 flex flex-col item-center align-middle  justify-center">
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl dark:text-white font-normal">
                                極安檢測與13C尿素呼吸檢測法有什麼不同？


                            </h2>
                            <h2 className="text-4xl dark:text-white   font-medium">
                                Workout
                            </h2>
                            <p className="dark:text-slate-200">胃部感染胃幽門螺旋桿菌時，當我們服用尿素溶液後，胃幽門螺旋桿菌上的尿素酶會將尿素分解成二氧化碳和氨氣。我們通過檢測從呼吸中排出的氨氣，對比服用尿素前的背景數值，從而確定是否感染胃幽門螺旋桿菌。

</p>
                        </div>
                        <Tabs aria-label="mt-40 flex justify-center  Options">
                         
                            <Tab key="music" className="border-none bg-transparent" title="專業版">
                                <Card className="border-none bg-transparent">

                                    <CardBody>
                                        <div className="grid  grid-cols-1  md:grid-cols-2 gap-2">
                                            <disv className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-duration='4000' data-aos-delay="50">
                                                <div className="border rounded-2xl">
                                                    <img src='https://ultraehp.com/images/UP100/A2343211_TD03_V1_3078x.png' className="w-full h-full rounded-2xl" alt="" />

                                                </div>
                                            </disv>
                                            <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                                                <div className="border rounded-2xl  p-5">

                                                    <h2 className="dark:text-white  text-2xl font-normal">
                                                        專業版本

                                                    </h2>
                                                    <p className="text-m dark:text-white ">無需送樣品去檢驗中心，30分鐘現場即可讀取報告</p>
                                                    {/* <img src={img01} alt="" className="w-full " /> */}
                                                    <span className="text-5xl after:content-['min '] text-orange-500">
                                                        30
                                                    </span>




                                                </div>
                                            </div>


                                        </div>

                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="
                            " className=" text-white" title="家用版
                            ">
                                <Card>
                                    <CardBody>
                                        <div className="grid  grid-cols-1  lg:grid-cols-2 gap-2">
                                            <disv className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-duration='4000' data-aos-delay="50">
                                            <div className="border rounded-2xl">
                                                    <img src='https://ultraehp.com/images/Black-03_f9884945-38e0-49fe-91b5-dba4449b9152_3078x.jpg.png' className="w-full rounded-2xl" alt="" />
                                                
                                            </div>
                                            </disv>
                                           <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                                            <div className="border rounded-2xl  p-5">

                                                <h2 className="dark:text-white  text-2xl font-normal">
                                                    家用版本

                                                </h2>
                                                <p className="text-m dark:text-white ">無需送樣品去檢驗中心，30分鐘現場即可讀取報告</p>
                                                <img src="
                                                " alt="" />
                                                <span className="text-5xl after:content-['min '] text-orange-500">
                                                    30
                                                </span>
                                             

                                                

                                            </div>
                                            </div>

                                            
                                        </div>
                                       
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
