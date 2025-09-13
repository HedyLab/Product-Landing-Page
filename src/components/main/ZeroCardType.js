import React, { useState } from 'react'

const ZeroCardTypeObj = {
    base: {
        title: '商務網店計畫',
        titleNotes: '（完整購物網站）',
        yearPay: 1111,
        oncePay: 11
    },
    BOB: {
        title: 'BOB多元通路',
        titleNotes: '（含網站及APP）',
        yearPay: 2222,
        oncePay: 22
    },
    BOBThreeYear: {
        title: 'BOB多元通路',
        titleNotes: '（含網站及APP）',
        titleYear: '三年方案',
        yearPay: 3333,
        oncePay: 33
    },
}
const periodArr = [3, 6, 12, 18, 24]


function ZeroCardType() {
    const [state, setState] = useState('base')

    const projectType = []
    Object.keys(ZeroCardTypeObj).forEach((key) => {
        projectType.push(
            <div
                className={`${state === key ? 'bg-[#BADBEE] text-white' : ''} flex flex-col items-center text-blueDeep shadow-xl w-[33%] py-[13px] cursor-pointer`}
                key={key}
                onClick={() => { setState(key) }}
            >
                {ZeroCardTypeObj[key].titleYear && <div className='text-base'>{ZeroCardTypeObj[key].titleYear}</div>}
                <div className='text-xl'>{ZeroCardTypeObj[key].title}</div>
                <div className='text-base'>{ZeroCardTypeObj[key].titleNotes}</div>
            </div >
        )
    })
    const period = periodArr.map((item, index) => {
        return <div className='w-[18%] rounded-[6px] [border:2px_solid_#A8A8A8] pt-[6px] pb-[7px] cursor-pointer sm:w-full sm:pt-[13px] sm:pb-[14px] sm:mb-[10.5px] sm:[border:1px_solid_#BEBEBE]' key={index}>{item}期</div>
    })

    return (
        <div className=' py-[75px] px-[108px] flex flex-col sm:px-[5%]'>
            <div className='text-white text-center text-xl bg-blueLight pt-[16px] pb-[8px]'>方案試算</div>
            <div className='[padding:59px_117px] shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] flex flex-col sm:[padding:32px_5%]'>
                <div className='text-[19px] text-[#777] mb-[7px] sm:hidden'>請選擇方案 -</div>
                <div className='flex space-x-[23px] mb-[33px] sm:hidden'>
                    {projectType}
                </div>
                <div className='flex justify-between items-center mb-[35px] sm:mb-[16px]'>
                    <div className='text-[17px] text-[#777] sm:text-[15px]'> 方案年費 -  </div>
                    <div className='text-[17px] text-[#333] sm:text-[18px]'>TWD {ZeroCardTypeObj[state].yearPay} </div>
                </div>
                <div className='flex justify-between items-center mb-[35px] sm:mb-[16px]'>
                    <div className='text-[17px] text-[#777]'>一次性開辦費 - </div>
                    <div className='text-[17px] text-[#333]'>TWD {ZeroCardTypeObj[state].oncePay} </div>
                </div>
                <div className='mb-[30px]'>
                    <div className='text-[17px] text-[#777]'>請選擇分期期數 -</div>
                </div>
                <div className='flex justify-between text-[#777] text-center mb-[43px] sm:flex-col'>
                    {period}
                </div>
                <div className='h-[1px] bg-[#BEBEBE] mb-[23px]'></div>
                <div className='flex flex-col items-end  text-[#777] space-y-[3px] sm:space-y-[11px]'>
                    <div className='flex justify-between w-[47%] sm:w-full'>
                        <div>方案 -</div>
                        <div>新手網店計畫</div>
                    </div>
                    <div className='flex justify-between w-[47%] sm:w-full'>
                        <div>分期期數 -</div>
                        <div>3期-利率為2.6%</div>
                    </div>
                    <div className='flex justify-between w-[47%] sm:w-full'>
                        <div>試算結果 -</div>
                        <div className='text-[#1E6EFF] sm:w-[50%] break-words'>平均一個月 TWD 2,200</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZeroCardType

