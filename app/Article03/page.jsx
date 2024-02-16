

import Hero from '@/components/hero'

import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'

export default function Home() {
    return (
        <div className='flex justify-center items-center border border-blue-600 dark:bg-gray-200'>
            <div className='max-w-[1200px] w-[90%] md:w-[95%] lg:w-full '>

         

          <div className="article-title text-center">
                <h1 className='text-3xl text-gray-800  py-8   font-bold'>能斯特方程式(Nernst equation)<br></br>與酸鹼度計(pH Meter)關係</h1>
          </div>
          <div className='flex justify-center'>

            
                <Image src='/brazil_posn7a.png' width={1000} height={600} className='rounded-3xl'></Image>
          </div>
          <div className="article-content px-20 border border-black mt-20">
            <div className="row">
                    <h2 className='text-3xl font-bold mb-5'>玻璃電極 pH Meter </h2>
                    <Image src='/010_yg2bul.png' width={900} height={900}></Image>
            </div>

            <div className="wrap mt-5">
                    <p>根據能斯特方程式，在化學反應中</p>
                    <Image src='/001_x6yqfy.png' width={360} height={140}></Image>
            </div>
                <div className="wrap mt-5">
                    <p>電位與反應平衡狀態關係為</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={360} height={140}></Image>
                </div>
                <div className="wrap mt-5">
                    <p>pH meter玻璃電極的方程式可表示為：</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={560} height={200}></Image>
                </div>
                <div className="wrap mt-5">
                    <p>其中玻璃電極內外層分別與玻璃電極內部及外部溶液進行氫離子交換，並量測其電位E1 & E2</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={560} height={300}></Image>
                </div>
                <div className="wrap mt-5">
                    <p>透過量測內外玻璃膜電位差(Eb)與pH值作圖，可得以下關係式：</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={660} height={380}></Image>
                </div>

                <div className="wrap mt-5">
                    <p>過程中即固定，而玻璃電極內部氫離子濃度[H+]2通常不會改變，以上項次接為常數，故可表示為</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={360} height={180}></Image>
                </div>

                <div className="wrap mt-5">
                    <p>由於玻璃薄膜使用後表面可交換氫離子含量發生變化，以及內部溶液氫離子濃度改變，<br></br>方程式中𝐸𝑘′數值會改變，進而產生誤差，因此玻璃電極使用前皆須進行校正</p>
                  
                </div>


                <div className="wrap">
                    <h2 className='text-3xl font-bold mt-5 mb-2'>免校正酸鹼試片</h2>
                </div>
                <div className="wrap mt-5">
                    <p> 依照能斯特方程式，在化學反應中</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={360} height={160}></Image>
                </div>
                <div className="wrap mt-5">
                    <p> 電位與反應平衡狀態關係為</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={360} height={160}></Image>
                </div>

                <div className="wrap mt-5">
                    <p> Humming Probe酸鹼檢測試片將氫離子吸附薄膜修飾於試片表面，其薄膜與溶液中氫離子發生氧化還原反應，方程式可表示為：</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={360} height={160}></Image>
                </div>

                <div className="wrap mt-5">
                    <p>根據能斯特方程式，可將電位表示為</p>
                    <Image src='https://www.ultraehp.com/images/能斯特方程式截圖/010.png' width={360} height={160}></Image>
                    <p> 透過試片生產之一致性，使𝐸0在生產時即固定且一致，如此可達到免校正之使用模式。</p>
                </div>






               
          </div>
          

        </div>
        </div>
    )
}
