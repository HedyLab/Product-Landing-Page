import React from 'react'
import Link from 'next/link'

function CardServer({ item, index }) {
    const { img, titleEn, title, url } = item;

    return (
        <Link href={url} key={index}>
            <div className='cursor-pointer flex flex-col text-center items-center justify-center bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[6px] w-[259px] px-[25px] py-[30px] sm:mb-[20px] max-h-max sm:w-[173px]' key={index}>
                <div className=' w-[114px] h-[114px mb-[29px] sm:w-[66.6px] sm:h-[66.6px] mb-[16px] sm:mb-[10px] ' >
                    <img className='w-full h-full' src={`/images/${img}.png`} alt="" />
                </div>
                <div className='text-[16px]'>{titleEn}</div>
                <div className='text-[16px] text-[#1A374D] mt-2 font-bold sm:text-[14px] sm:mt-2'>{title} </div>
            </div>
        </Link>
    )
}

export default CardServer