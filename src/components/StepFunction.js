import React from 'react'

function StepFunction({ item, index}) {
    return (
        <div className='flex flex-col text-center items-center justify-center max-w-[397px] sm:max-w-none sm:mt-[17px] sm:pb-[13px]' key={index}>
        <div className='w-full flex items-center justify-center'>
            <img className='w-[62px] ' src={`/images/${item.img}.svg`} alt="" />
        </div>
        <p className='sm:text-center sm:text-[18px] sm:mt-4 sm:mb-2'>{item.title}</p>
        <p className='text-center text-[#666666] font-bold  sm:max-w-none sm:text-[14px] sm:w-full sm:leading-6'>{item.content}</p>
        </div>
    )
}

export default StepFunction