import React from 'react'

const cardColor = {
    0: 'grayLight',
    1: 'white',
    2: 'blue'
}

function AnnualPaymentTagList(item, color, mobileState) {
    return (
        <div className='flex flex-col w-full' key={item.type}> 
            <div className='flex justify-between [padding:25px_19px] [borderBottom:1px_solid_#9AA7B9]'>
                <div className='flex'>
                    <img className='min-w-[28px] min-h-[25px] mr-[9.9px]' src={`/images/${item.img}.svg`} alt="" />
                    <div className='text-xl text-[#203C62]'>{item.type}</div>
                </div>
                <div className='flex sm:hidden'>
                    <img className='min-w-[28px] min-h-[25px] mr-[9.9px]' src="/images/search.svg" alt="" />
                    <div className='text-xl text-[#203C62] '>點開看詳情</div>
                </div>
            </div>
            <div className='flex justify-between w-full text-xl text-[#203C62] sm:text-lg'>
                <ul className={`${mobileState === 0 ? "" : "sm:hidden"} [padding:39px_0_37px_43px] mb-[26px] space-y-[26px] bg-${cardColor[0]} w-full`}>
                    {
                        item.base.map((item2, index) => <li className='cursor-pointer' key={index}>{item2}</li>)
                    }
                </ul>
                <ul className={`${mobileState === 1 ? "" : "sm:hidden"} [padding:39px_0_37px_43px] mb-[26px] space-y-[26px] bg-${cardColor[1]}  w-full`}>
                    {
                        item.normal.map((item2, index) => <li className='cursor-pointer' key={index}>{item2}</li>)
                    }
                </ul>
                <ul className={`${mobileState === 2 ? "" : "sm:hidden"} [padding:39px_0_37px_43px] mb-[26px] space-y-[26px] bg-${cardColor[2]}  w-full`}>
                    {
                        item.hard.map((item2, index) => <li className='cursor-pointer' key={index}>{item2}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default AnnualPaymentTagList