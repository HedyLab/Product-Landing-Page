import React from 'react'

function CardAnnualPayment(item,index,color,mobileState) {
    return (
        <div className={` ${mobileState === index ? '' : 'sm:hidden' }  bg-${color} flex flex-col items-center min-h-[262px] w-full [padding:36px_32px]  shadow-md`} key={index}>
            <div className=' h-[34px] w-[40px] mb-[13px] sm-[18.3px]' >
                <img className=' w-full h-full object-content' src={`/images/${item.img}.svg`} alt="" />
            </div>
            <div className='text-3xl text-blueDeep sm:text-[25px] sm:mb-[2px]'>{item.title}</div>
            <div className='text-[15px] text-[#484848] mb-[28px] sm:text-[15px] sm:mb-[28px]'>{item.tips}</div>
            <div className='text-xl text-blueDeep sm:text-base text-center'>TWD{item.value} /年（每月平均</div>
        </div>
    )
}

export default CardAnnualPayment