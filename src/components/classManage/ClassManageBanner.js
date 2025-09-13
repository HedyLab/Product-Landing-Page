import React from 'react'
import Image from 'next/image'

function ClassManageBanner() {
    return (
        <div className='mainPaddingX flex justify-center items-center bg-[#DCDFEE] h-screen sm:h-auto sm:pt-[161px] sm:pb-[65px]'>
            <div className='flex flex-col text-blueDeep w-[50%] space-y-[25px] sm:w-full sm:text-center sm:space-y-0 sm:pl-0  sm:items-center'>
                <div className='text-[28px] sm:text-[20px] sm:mb-[10px] '>I’m Master 智慧課程管理</div>
                <div className='text-[20px] sm:text-[18px] text-justify sm:!mb-[21px] sm:tracking-tighter'> 不再需要傳統紙本紀錄！效率、智慧場館經營</div>
                <div className='text-[18px]  sm:text-[14px] text-grayDeep text-justify sm:pb-[20px]'>線上預約課程、請假、購物系統、數據分析，一應俱全， 從運動場館、教育課輔班、美容工作室都適用！</div>
                <div className='Btn1'>註冊</div>

                {/* <div className='text-base leading-[16px] py-[6px] px-[34px] rounded-[7px] [border:1px_solid_#1A374D] max-w-max cursor-pointer sm:text-xl sm:py-[10px] sm:px-[22px] sm:bg-blueDeep sm:text-white'>註冊</div> */}
            </div>
            <div className='max-w-[50%] ml-[5%] self-end sm:hidden'>
                {/* <Image
                    src='/images/ClassManageBanner.svg'
                    width={666}
                    height={508}
                    objectFit="cover"
                    className='cursor-pointer'
                    alt='Image' 
                /> */}
                {/* <div className='max-w-[50%] ml-[5%] self-end sm:hidden'> */}
                <img className='w-full h-full' src="/images/ClassManageBanner.svg" alt="" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default ClassManageBanner