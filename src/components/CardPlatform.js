import React from 'react'

function CardPlatform(item, index, color, mobileState) {
    return (
        <div className={` ${mobileState === index ? 'black' : 'sm:hidden'} bg-${color} flex flex-col items-center w-full`} key={index}>
            <div className='flex flex-col items-center justify-center h-[242px] w-full [padding:50px_32px_33px] [borderBottom:1px_solid_#9AA7B9] sm:h-[180px] sm[padding:50px_32px_45px]'>
                <div className=' min-h-[57px] min-w-[88px] max-w-[166px] mb-[15.9px]'>
                    <img className='w-full h-full object-content' src={`/images/${item.img}.svg`} alt="" />
                </div>
                <div className='text-blueDeep text-[17px]'>{item.title}</div>
                <div className='text-blueDeep text-[17px]'>{item.tips && item.tips}</div>
            </div>

            <div className='text-[15px] text-[#203C62] p-[14px]'>＊需收取一次性開辦費 TWD{item.value}</div>
        </div>
    )
}

export default CardPlatform