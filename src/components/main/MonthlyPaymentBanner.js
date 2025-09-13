import React from 'react'
import Slider from "react-slick";


function MonthlyPaymentBanner() {

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
      <Slider
        className=''
        {...settings}
      >
        <div>
          <div className='flex flex-col items-center pt-[89px] text-blueDeep p-[40px] bg-blue h-screen sm:p-[4%] sm:pt-0 sm:justify-center'>
            <div className=' text-[1.75rem] mb-[25px] sm:text-xl'>一次性收費令你壓力山大？</div>
            <div className=' text-[1.75rem] mb-[37px] sm:text-xl sm:mb-0'>好想線上開店，卻只差臨門一腳？</div>
            <div className=' h-[50vh] w-[56vw] mb-[36px] sm:w-full sm:h-[174px]' >
              <img className=' w-full h-full object-content' src='/images/CarouselMain.svg' alt="" />
            </div>
            <div className=' text-[1.75rem] mb-[37px] sm:text-sm'>免利息·０壓力·無痛轉型，首次開通只需最低 $12,418 起</div>
          </div>
        </div>
      </Slider>
  )
}

export default MonthlyPaymentBanner


