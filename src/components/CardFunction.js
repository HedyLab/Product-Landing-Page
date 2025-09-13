import React from 'react'

function CardFunction({ item, index,lastNum },borderR) {  
    
    return (
        // <div key={index} className={`${item.num ? '' : '' } ${borderR? 'border-r border-grayDeep sm:border-0' : '' }  flex flex-col flex-1 text-center items-center justify-center sm:max-w-none sm:mt-[21.5px] sm:pb-[21.5px] `}>
        //     <div className={`${item.num ? 'sm:h-[55.37px] sm:w-[55.37px] sm:h-[55.37px] sm:w-[55.37px]' : 'sm:h-[111px] sm:w-[111px]'}  mb-[20px] sm:mb-0 `} >
        //         <img className=' w-full h-full object-fill' src={`/images/${item.img}.svg`} alt="" />
        //     </div>
        //     {
        //         item.num ? (<div className='text-[1.75rem] text-[#1A374D] font-bold mb-[18px] sm:text-[18px]'>{item.num}%</div>) : null
        //     }
        //     <div className={`${item.num ? '':''}text-[20px] text-[#1A374D] font-bold mt-[10px] mb-[20px] sm:text-[18px] `}>{item.title} </div>
        //     <div className='text-base text-grayDeep font-bold max-w-[177px] min-h-[90px] leading-[30px] tracking-wide sm:max-w-none sm:text-[14px] sm:w-[50%] sm:min-h-none'>{item.content}</div>
        // </div>
        <div key={index} className={`${item.num ? '' : '' } ${borderR? 'border-r border-grayDeep sm:border-0' : '' }  flex flex-col flex-1 text-center items-center justify-center sm:max-w-none sm:mt-[21.5px] sm:pb-[21.5px] `}>
            <div className={`${item.num ? 'sm:h-[55.37px] sm:w-[55.37px]' : 'sm:h-[111px] sm:w-[111px]'}  mb-[18px] sm:mb-1 `} >
                <img className=' w-full h-full object-fill' src={`/images/${item.img}.svg`} alt="" />
            </div>
            {
                item.num ? (<div className='text-[1.75rem] text-[#1A374D] font-bold mb-[18px] sm:text-[18px] sm:mb-0'>{item.num}%</div>) : null
            }
            <div className={`${item.num ? 'mb-[23px] sm:my-1 ':'mb-[20px]  '}text-[20px] text-[#1A374D] font-bold mt-[10px] sm:text-[18px]`}>{item.title} </div>
            <div className={`${item.num ? 'sm:w-[100%] ':'sm:w-[50%] min-h-[90px] '}text-base text-grayDeep font-bold w-[70%] min-w-[177px] leading-[30px] tracking-wide sm:max-w-none sm:text-[14px] text-justify-center`}>{item.content}</div>
        </div>
    )
}

export default CardFunction