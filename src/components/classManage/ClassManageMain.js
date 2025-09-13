import React from 'react'
import Image from 'next/image'

function classManageMain() {
    return (
        <div className='mainPaddingX h-[550px] flex flex-col justify-between flex-col-wrap truncate sm:flex-nowrap sm:items-center py-[138px] sm:py-0 sm:flex-col sm:h-fit'>
            <div className='w-[40%] flex items-center text-sm leading-[14px] mb-[37px] sm:w-full sm:px-[18px] sm:mb-[50px]'>
                <div className='h-[3px] w-full  bg-[#AAB0BB]'></div>
                <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>01</div>
                <div className='h-[3px] w-[20%]  bg-[#AAB0BB]'></div><span className='h-[3px] w-[80%]  bg-blueDeep z-10'></span>
                <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#1A374D] py-[5px] px-[3px] text-1A374D'>02</div>
                <div className='h-[3px] w-[80%]  bg-blueDeep'></div><span className='h-[3px] w-[20%]  bg-[#AAB0BB] z-10'></span>
                <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>03</div>
                <div className='h-[3px] w-full  bg-[#AAB0BB]'></div>
                <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>04</div>
                <div className='h-[3px] w-full  bg-[#AAB0BB]'></div>
            </div>
            <div className='w-[50%] flex flex-col sm:w-full sm:items-center sm:order-last sm:pb-[75px]'>
                <div className='text-[28px] text-blueDeep sm:text-[18px]'>課程線上預約</div>
                <div className='flex items-center'>
                    <div className="w-[14px] h-[14px] pt-[4px] mr-[14px] rounded-[50%] bg-[#666666] sm:hidden"></div>
                    <div className='py-[40px] text-[16px] text-grayDeep leading-[30px] sm:py-[20px] sm:text-[14px] sm:w-full sm:text-center sm:whitespace-normal'>在你的網站上陳列你的所有課程用戶直接訂課、排課、支付費用！</div>
                </div>
                <div className='Btn3 sm:Btn4 sm:self-center'>下一個</div>
            </div>
            <div className='w-[60%] sm:w-full sm:w-[80%] text-center sm:pb-[20px]'>
                <Image
                    src='/images/classManageMain.svg'
                    width={410}
                    height={268}
                    objectFit="cover"
                    className='cursor-pointer'
                    alt='Image'
                />
            </div>
        </div>
    )
}

export default classManageMain