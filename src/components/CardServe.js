import React from 'react'

function CardServe(item) {
    return (
        <div className='flex flex-col items-center' key={item.title}>
            <div className='w-[111px] h-[111px] shadow-md rounded-[50%] mb-[51px] sm:w-[25vw] sm:mb-[23.2px]'>
                <img className='w-full h-full object-fill' src={`/images/${item.img}.svg`} alt="" />
            </div>
            <div className='text-xl text-blueDeep'>{item.title}</div>
        </div>
    )
}

export default CardServe