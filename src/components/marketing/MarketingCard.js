import React from 'react'
import Image from 'next/image'
import MarketingBannerImg from '../../../public/images/MarketingBanner.svg'

const CardArr = [
    { title: '讓你操作執行更順暢', content: '客戶體驗更優化', tips: '績效表現更出色' },
    { title: '讓你操作執行更順暢', content: '客戶體驗更優化', tips: '績效表現更出色' },
    { title: '讓你操作執行更順暢', content: '客戶體驗更優化', tips: '績效表現更出色' },
]

const Card = (item, index) => {
    return (
        <div
            className='truncate flex flex-col items-center px-[35px] py-[14px] h-[298px] w-[250px] rounded-[4px] shadow-lg cursor-pointershadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.25),1px_1px_4px_2px_#FFC9AE] '
            key={index}
        >
            <img className='w-[114px] h-[114px] mb-[21px]' src='/images/MarketingCard.svg' alt="" />
            <div className='text-xl text-blueDeep mb-[4px]'>{item.title}</div>
            <div className='text-xl text-blueDeep mb-[4px]'>{item.content}</div>
            <div className='text-xl text-blueDeep mb-[20px]'>{item.tips}</div>
            <div className='text-[#F8D4B1] text-base'>瞭解更多</div>
        </div>
    )
}

function MarketingCard() {
    const CardDisplay = CardArr.map((item, index) => {
        return Card(item, index)
    })

    return (
        <div className='mainPaddingX py-[75px] text-center'>
            <div className='text-[28px] text-blueDeep mb-[56px]  underline underline-offset-[13px] decoration-[3px] decoration-[#F8D4B1]'>行銷方案</div>
            <div className='flex justify-between w-full sm:flex-col sm:items-center'>
                {CardDisplay}
            </div>
        </div>
    )
}

export default MarketingCard