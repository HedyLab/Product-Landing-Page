import React from 'react'

function BrandMain() {
    return (
        <div className='h-[425px] overflow-hidden  px-[8%]'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col pt-[121px]'>
                    <div className='text-blueDeep text-[1.75rem] mb-[13px]'>社群行銷經營</div>
                    <div className='w-[165px] h-[3px] bg-[#FFC9AE] mb-[26px]'></div>
                    <div className='text-grayDeep text-sm mb-[25px]'>專業系統顧問，品牌行銷與實用功能整合！！</div>
                    <div className='text-blueDeep text-xl'>建立與消費者的長期溝通橋樑，塑造品牌形象，打造品牌知名度。</div>
                </div>
                <div className='max-w-[50%]'>
                    <img className='w-full h-full object-fill' src="/images/iphone.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default BrandMain