import React from 'react'
import Slider from "react-slick";


function MainAnnualPaymentBanner() {

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
    <div className='relative '>
      <Slider
        className=''
        {...settings}
      >
        <div className='bg-blue h-screen relative '>
          <div className='absolute h-[50vh] w-[56vw] top-[37vh] right-[0.9vw] sm:top-[53.6%] sm:w-[85.3%] sm:h-[201px] sm:right-[calc(50%-166px)] ' >
            <img className=' w-full h-full object-content' src='/images/MainAnnualPaymentBanner.svg' alt="" />
          </div>
        </div>
      </Slider>
      <div className='absolute top-[44%] left-[8.7%]  h-[160px] text-blueDeep font-bold  sm:top-[25.6%] sm:text-center sm:left-[calc(50%-135px)] sm:flex sm:flex-col sm:items-center '>
        <div className=' text-[1.75rem] mb-[25px] sm:text-xl'>所有計畫方案</div>
        <div className='text-xl mb-[25px] sm:text-lg'>多元銷售通路，一次擁有獨立網站</div>
        <div className='text-xl mb-[25px] text-[#666] sm:text-lg'>及專屬APP，接單更迅速</div>
        <div className='btn3 bg-[#FFEFDC] text-blueDeep  shadow-lg sm:text-lg sm:py-[5px] px-[30px]'>了解更多</div>
      </div>
    </div>
  )

}

export default MainAnnualPaymentBanner


