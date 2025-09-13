import React from 'react'
import Image from 'next/image'

function FunctionFoot() {
    return (
        <div className='flex justify-center bg-[#DCDFEE] min-h-[460px] [padding:70px_9vw]  sm:flex-col sm:[padding:60px_10%]'>
            <div className='flex flex-col text-blueDeep w-[60%] pr-[5%] space-y-[10px] sm:w-full  sm:text-center sm:mb-[20px] sm:pr-0'>
                <div className='text-xl sm:text-lg'>迎接智慧5G時代-預約課程更便捷</div>
                <div className='text-xl sm:text-lg'>超乎你的想像，立即加入ImMaster，成為智慧場館營運先驅。</div>
                <div className='text-xl sm:text-lg'>讓您的場館更具競爭力的所有需求：</div>
                <div className='text-base text-grayDeep sm:text-sm'>＃多方課程管理      </div>
                <div className='text-base text-grayDeep sm:text-sm'>＃後台操作直覺簡易    </div>
                <div className='text-base text-grayDeep sm:text-sm'>＃請假、預約、簽到一應俱全</div>
                <div className='text-base text-grayDeep sm:text-sm'>＃專屬電子錢包儲值    </div>
            </div>
            <div className=' max-w-[30%]  sm:max-w-max sm:order-0 sm:w-[261px] self-center'>
                <Image
                    src='/images/FunctionFoot.svg'
                    width={340}
                    height={283}
                    objectFit="cover"
                    className='cursor-pointer'
                    alt='Image'
                />
            </div>
        </div>
    )
}

export default FunctionFoot