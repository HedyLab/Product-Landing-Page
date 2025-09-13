import React, { useRef,useEffect } from 'react'
import Slider from "react-slick";


function MainBanner(props,ref) {

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
    <div className='relative h-screen' id='MainBanner' ref={ref}>
      {/* <Slider
        className=''
        {...settings}
      >
        <div>
          <div className='bg-blue h-screen relative '>
            <div className='absolute h-[50vh] w-[56vw] top-[37vh] right-[5vw] sm:w-full sm:h-[40vh] sm:top-[45vh] sm:right-auto' >
              <img className=' w-full h-full object-content' src='/images/CarouselMain.svg' alt="" />
            </div>
          </div>
          <div className='absolute top-[40%] mainPositionleft h-[160px] text-blueDeep font-bold sm:flex sm:flex-col sm:items-center sm:justify-start sm:top-0 sm:left-0 sm:w-full sm:h-full sm:pt-[40.6%] sm:space-y-[9px]' >
          <div className=' text-[28px] mb-[25px] sm:mb-0 sm:text-[20px]'>新型態收費模式</div>
          <div className='text-[20px] mb-[25px] sm:text-[18px]'>免利息、0壓力、無痛轉型</div>
          <div className='text-[20px] mb-[25px] sm:text-[16px] text-[#666] sm:text-base'>首次開通只需最低＄12,418起</div>
          <div className='Btn3'>了解更多</div>
      </div>
        </div>

      </Slider> */}

        <div className='mainPaddingX h-screen bg-blue flex flex-row justify-center items-center truncate sm:flex-col '>
          <div className=' w-[50vw] text-blueDeep font-bold sm:flex sm:flex-col sm:items-center sm:justify-start' >
            <div className='text-[28px] mb-[25px] sm:mb-[9px] sm:text-[20px]'>新型態收費模式</div>
            <div className='text-[20px] mb-[25px] sm:mb-[9px] sm:text-[18px]'>免利息、0壓力、無痛轉型</div>
            <div className='text-[20px] mb-[25px] sm:text-[16px] text-[#666] sm:text-base'>首次開通只需最低＄12,418起</div>
            <div className='Btn2'>了解更多</div>
          </div>
          <div className='flex flex-col justify-center items-center sm:w-full'>
            <div className='h-[386px] sm:w-full sm:h-[40vh]' >
                <img className=' w-full h-full' src='/images/CarouselMain.svg' alt="" />
            </div>
            <div className='bg-white px-[126px] py-[20px] mt-[-75px] rounded-full text-[25px] text-blueDeep sm:text-[18px] sm:px-[18px] sm:py-[5.5px] mt-[-85px]'>開通費用：開辦費 + 方案首期 + 末期</div>
          </div>
        </div>
    </div>
  )

}

export default React.forwardRef(MainBanner)


