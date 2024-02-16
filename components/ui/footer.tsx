import Logo from './logo'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className=''>
      <div className="top bg-[#2e3033]  dark:bg-rose-500">
        <div className="container w-3/4 p-10">
          <ul className='flex-col md:flex'>
            <li className='flex'>
              <div className="icon">
                <div className="img rounded-full w-[30px] h-[30px] border-white border"></div>
              </div>
              <div className="txt flex flex-col pl-0 md:pl-2">
                <b className='text-white text-sm'>Free returns, no questions asked</b>
                <a className='text-gray-500 text-sm'>Learn more</a>
              </div>
            </li>
            <li className='flex pl-5'>
              <div className="icon">
                <div className="img rounded-full w-[30px] h-[30px] border-white border"></div>
              </div>
              <div className="txt flex flex-col pl-0 md:pl-2">
                <b className='text-white text-sm'>Need help? We're here for you
               
</b>
                {/* <a className='text-gray-500 text-sm'>   Contact us</a> */}
              </div>
            </li>
            <li className='flex pl-5'>
              <div className="icon">
                <div className="img rounded-full w-[30px] h-[30px] border-white border"></div>
              </div>
              <div className="txt flex flex-col pl-0 md:pl-2">
                <b className='text-white text-sm'>"The S4 is the one to buy" - The Verge</b>
                {/* <a className='text-gray-500 text-sm'>Read article</a> */}
              </div>
            </li>
          </ul>


        </div>

      </div>
      <div className="middle bg-[#1a1c1f] dark:bg-neutral-300">
        <div className="container flex-col md:flex w-3/4 p-10">
          <div className="left md:w-1/4 w-full">
            <div className="txt">
              <h3 className='text-white text-3xl font-normal'>
                訂閱且關注我們的最新動態
              </h3>
              
              <p className='text-gray-500  text-sm'>Sign up for our newsletter to get updates straight to your inbox</p>
              <div className="submit-wrap border border-white">
                <input type="text" className='bg-[#3f4246] w-full mt-5 p-5 rounded-full' placeholder='name@email.com' />
              </div>
              <div className="check-wrap mt-4">
                <p className='text-sm'> <span className='text-gray-500'>I agree to the  </span><a href='#' className=' border-b-1 text-white'>privacy policy</a></p>
              </div>
            </div>
          </div>
          <div className="right w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className='border border-white '>
                <ul className=''>
                  <b className='text-white text-'>聯絡我們</b>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>VanMoof S5</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>VanMoof S5</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                </ul>
                
              </div>
              <div className='border border-white '>
                <ul >
                  <b className='text-white text-'>聯絡我們</b>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>VanMoof S5</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>VanMoof S5</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                </ul>
              </div>
              <div className='border border-white '>
                <ul >
                  <b className='text-white text-'>聯絡我們</b>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>VanMoof S5</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>VanMoof S5</a>
                  </li>
                  <li className='mt-2'>
                    <a href="" className='text-gray-400 hover:text-white'>Electric bikes</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
           

        </div>

      </div>
      <div className="bottom bg-[#1a1c1f]  dark:bg-neutral-300 pt-14 pb-4">
        <div className="socialMedia">
          <div className="container flex w-3/4 p-10 border-b-2 border-gray-700">
            <div className="grid grid-cols-2 ">
              <div >
                <ul className='flex'>
                  <li className=''>
                    <div className='border border-white rounded-full w-[30px] h-[30px] mx-2 bg-white'></div>
                  
                    
                  </li>
                  <li className=''>
                    <div className='border border-white rounded-full w-[30px] h-[30px] mx-2 bg-white'></div>


                  </li>
                  <li className=''>
                    <div className='border border-white rounded-full w-[30px] h-[30px] mx-2 bg-white'></div>


                  </li>
                  <li className=''>
                    <div className='border border-white rounded-full w-[30px] h-[30px] mx-2 bg-white'></div>


                  </li>
                </ul>
              </div>
              <div ></div>
           

            </div>
          </div>
        </div>

      </div>
      <div className="announce bg-[#1a1c1f]  pt-8 pb-4">
        <div className="container flex w-3/4">
          <div className="left w-1/2">
            
          </div>
          <div className="right w-1/2 flex justify-end">
            <ul className='flex'>
              <li className='ml-3'>
                <a href="" className='text-gray-400 hover:text-gray-200 text-sm'>Privacy Policy
</a>

              </li>
              <li className='ml-3'> <a href="" className='text-gray-400 hover:text-gray-200 text-sm'>Terms & Conditions

              </a></li>
              <li className='ml-3'> <a href="" className='text-gray-400 hover:text-gray-200 text-sm'>Cookie Policy

</a></li>
              <li className='ml-3'> <a href="" className='text-gray-400 hover:text-gray-200 text-sm'>Recruitment Privacy
                
</a></li>
              <li className='ml-3'> <a href="" className='text-gray-400 hover:text-gray-200 text-sm'>Impressum
</a></li>
            </ul>
          </div>
          
        </div>
      </div>
     
    </footer>
  )
}
