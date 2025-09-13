import React, { useState } from 'react'

const retailImgArr = [
    'MarketingCase1', 'MarketingCase2', 'MarketingCase3', 'MarketingCase1', 'MarketingCase2', 'MarketingCase3',
]
const foodImgArr = [
    'MarketingCase2', 'MarketingCase2', 'MarketingCase2', 'MarketingCase2',
]

function MarketingCase() {
    const [state, setState] = useState(true)

    const retail = retailImgArr.map((item, index) => {
        return (<img className=' w-[30%] h-[160px] mx-[1.5%] ' src={`/images/${item}.svg`} alt="" key={index} />
        )
    })
    const food = foodImgArr.map((item, index) => {
        return (<img className=' w-[30%] h-[160px] mx-[1.5%] ' src={`/images/${item}.svg`} alt="" key={index} />
        )
    })

    return (
        <div className='truncate flex flex-col items-center px-[8%] py-[4%] mb-[77px] text-blueDeep'>
            <div className=' text-[1.75rem] mb-[13px]'>我們的成功案例</div>
            <div className='w-[195px] h-[3px] bg-[#FFC9AE] mb-[40px]'></div>
            <div className='flex justify-center w-[414px]  text-xl   '>
                <div className='flex flex-col justify-between px-[23px] h-[40px] cursor-pointer' onClick={() => { setState(true) }}>
                    <div className=''>零售業</div>
                    <div className={`${state ? 'block' : 'hidden'} w-[60px] h-[3px] bg-[#FFC9AE]`}></div>
                </div>
                <div className='flex flex-col justify-between px-[23px] h-[40px]  cursor-pointer' onClick={() => { setState(false) }}>
                    <div className=''>餐飲業</div>
                    <div className={`${state ? 'hidden' : 'block'} w-[60px] h-[3px] bg-[#FFC9AE]`}></div>
                </div>
            </div>
            <div className='h-[3px] bg-[#737373] w-[414px] mb-[37px]'></div>
            <div className='flex flex-wrap '>
                {state ? retail : food}
            </div>
        </div>
    )
}

export default MarketingCase