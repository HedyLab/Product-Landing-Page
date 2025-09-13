import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import Carousel1 from '../../../public/images/Carousel1.svg'
import Carousel2 from '../../../public/images/Carousel2.svg'
import Carousel3 from '../../../public/images/Carousel3.svg'



function LoginBanner() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <div className='relative' id='LoginBanner'>
      <Slider
        className=''
        {...settings}
      >
        <div className='bg-[#DCDFEE] h-screen '>
          <div className='pt-[21vh] pl-[-0.04vw] sm:pl-0'>
            <Image
              src='/images/Carousel2.svg'
              width={836}
              height={558}
              className=''
              objectFit="cover"
              alt='Image'
            />
          </div>
        </div>
        <div className='bg-[#F8D4B1] h-screen relative'>
          <div className=' pl-[-0.04vw] absolute bottom-[-6px] sm:bottom-0 sm:top-[20%]  sm:pl-12 sm:pr-12 '>
            <Image
              src='/images/Carousel3.svg'
              width={760}
              height={760}
              className=''
              objectFit="cover"
              alt='Image'
            />
          </div>
        </div>
      </Slider>
      <div className='absolute top-[44%] right-[10%]  h-[160px]  text-[#434343] font-bold sm:flex sm:flex-col sm:items-center sm:top-[60%] sm:right-0 sm:w-full'>
        <div className='flex items-center box-border mb-[25px] sm:justify-center sm:mb-[10px]'>
          <div className='Btn0 mr-[30px] sm:hidden'>註冊</div>
          <div className='text-[1.75rem] sm:text-[20px]'>享受網頁設計的樂趣</div>
        </div>
        <div className='text-xl sm:text-[18px] sm:mb-[17px]'>按下一個鍵開啟你的Business Trip</div>
        <div className='Btn1 hidden sm:block'>註冊</div>
      </div>
    </div>
  )

}

export default LoginBanner


