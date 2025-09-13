import React from 'react'
import Image from 'next/image'

function BrandBanner() {
    return (
        <div className=' flex flex-col items-center text-blueDeep  pt-[135px] px-[4%]'>
            <div className='text-[1.75rem] mb-[13px]'>品牌形象建立</div>
            <div className="w-[165px] h-[3px] mb-[26px] bg-[#FFC9AE]"></div>
            <div className='text-grayDeep mb-[25px]'>專業系統顧問，品牌行銷與實用功能整合！！</div>
            <div className='text-xl'>系統式針對品牌核心價值、產業、市場等全方面分析優劣勢，</div>
            <div className='text-xl mb-[75px]'>檢視品牌體質並提出報 告，釐清現況及發展方向是否正確</div>
            <div className='relative max-w-[392px] max-h-[271px] self-end'>
                <Image
                    src='/images/MarketingBrandBanner.svg'
                    alt='Image'
                />
            </div>
        </div>
    )
}

export default BrandBanner