import React from 'react'


function StepFunction({ item, index}) {
    const contentArrary = item.content.map((item, i) => {
        return (
            <div className='pr-4 max-w-[110px] font-light mt-4 leading-5' key={i}>{item}</div>
        )
    })
    return (
        <div key={index} className='flex flex-col mb-[32px]'>
            <div constent={item.constent} className='text-xl mb-[8px]'>{item.title}</div>
                <div className='flex flex-wrap text-[15px] text-white'>
                {contentArrary}
            </div>
        </div>
    )
}

export default StepFunction