import React, { useState } from 'react'

const turnRedFont = (n) => {
    let arr = []
    arr = n.split('#')

    if (arr.length > 2) {
        let res
        res = arr.map((item, index) => {
            return (<span className={`${(index + 1) % 2 === 0 && 'text-[#FF5E58]'}`} key={index}>{item}</span>)
        })
        return res
    }
    return n
}

function SolutionDesignItem(arr) {
    const [mobileState, setMobileState] = useState('廣告行銷')

    let flag = true

    return (
        <>
            <div className='hidden  sm:flex justify-center items-center w-[337px] h-[51px] bg-blue rounded-[25px] text-center mb-[34px]'>
                <div className={`${mobileState === '圖文設計' ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]' : 'text-white'} text-[17px]  w-full`} onClick={() => { setMobileState('圖文設計') }}>圖文設計</div>
                <div className={`${mobileState === '廣告行銷' ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]' : 'text-white'} text-[17px]  w-full`} onClick={() => { setMobileState('廣告行銷') }}>廣告行銷</div>
                <div className={`${mobileState === '後台代管' ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]' : 'text-white'} text-[17px]  w-full`} onClick={() => { setMobileState('後台代管') }}>後台代管</div>
            </div>
            {
                arr.map((item) => {
                    return (
                        <div className='flex flex-col ' key={item.title} >
                            <div className='flex flex-col items-center mt-[10px] sm:hidden'>
                                <div className='py-[18px] text-[1.75rem] text-blueDeep text-center'>{item.title}</div>
                                <div className='w-[110px] h-[3px] bg-blue mb-[45px]'></div>
                            </div>

                            {item.child.map((item2, index2) => {
                                flag = !flag
                                return (
                                    <div className={`${mobileState === item.title ? '' : 'sm:hidden'} flex justify-between w-full mb-[65px] sm:justify-center sm:flex-col sm:shadow-lg sm:p-[11%] sm:mb-[5%]`} key={item2.title}>
                                        <div className={`${flag ? 'order-2 pl-[5%] sm:order-none sm:pl-0' : 'pr-[5%] sm:pr-0'}  min-w-[49%] sm:w-full sm:mb-[26px]`}  >
                                            <img className='w-full h-full object-fill' src={`/images/${item2.img}.svg`} alt="" />
                                        </div>
                                        <div className='flex flex-col w-full space-y-[15px] sm:space-y-[16px]'>
                                            <div className='text-blueDeep text-xl sm:text-[25px] sm:mb-[3px] sm:text-center sm:text-blueLight'>{item2.title}</div>
                                            <div className='text-blueDeep text-base sm:text-[17px] sm:mb-[12px] sm:text-center sm:text-gray'>{item2.content}</div>
                                            {
                                                item2.function.map((item3) => {
                                                    return (
                                                        <div className='flex' key={item3}>
                                                            <img className='h-[25px] w-[25px] mr-[20px] sm:h-[20px] sm:w-[20px]' src="/images/selectBlue.svg" alt="" />
                                                            <div className='text-grayDeep text-base sm:text-[17px]'>{item3}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div className='text-white bg-blue rounded-[13.5px] [padding:4px_12px] max-w-max sm:text-xl'>方案說明</div>
                                            <div className=' text-grayDeep sm:text-xl'>{turnRedFont(item2.illustrate)}</div>
                                            <div className='text-white bg-blue rounded-[13.5px] [padding:4px_12px] max-w-max sm:text-xl'>使用方式</div>
                                            <div className=' text-grayDeep sm:text-xl'>{turnRedFont(item2.way)}</div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    )
                })
            }
        </>
    )
}

export default SolutionDesignItem

