import React from 'react'
import Image from 'next/image'

function FunctionBanner() {

    return (
        <div className='flex justify-center bg-[#DCDFEE] min-h-[460px] [padding:147px_9vw_70px] sm:[padding:162px_3%_56px]'>
            <div className='max-w-[45%] mr-[5%] sm:hidden '>
                <Image
                    src='/images/FunctionBanner.svg'
                    width={416}
                    height={255}
                    objectFit="cover"
                    className='cursor-pointer'
                    alt='Image'
                />
            </div>
            <div className='flex flex-col text-blueDeep w-[45%] pl-[5%] sm:w-full sm:text-center sm:items-center sm:pl-0'>
                <div className=' text-[1.75rem] mb-[25px] sm:text-xl sm:mb-[10px]'>強大產品功能</div>
                <div className='text-xl mb-[10px] sm:text-lg sm:mb-[10px]'>想了解直覺流暢後台操作，更輕鬆的管理用戶預約、課程訂單等等 功能嗎？</div>
                <div className='text-base text-grayDeep mb-[14px] sm:text-sm sm:mb-[20px]'>立即體驗或聯繫專員，你將會發現新世界！</div>
                <div className='text-base leading-[16px] py-[6px] px-[34px] rounded-[16px] [border:1px_solid_#1A374D] max-w-max cursor-pointer'>立即體驗</div>
            </div>
        </div>
    )
}

export default FunctionBanner