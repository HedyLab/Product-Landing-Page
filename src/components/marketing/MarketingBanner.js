import React, { useState,useEffect } from 'react'
import Image from 'next/image'
// import MarketingBannerImg from '/images/MarketingBanner.svg'

function MarketingBanner() {
    const [state, setState] = useState(0)
    console.log(state);
    const spotIcon = new Array(1).fill('').map((x, index) => {
        return (
            <div
                key={index}
                className={`absolute top-[${(index * 51)}px] left-[4px] w-[200px] flex items-center mt-[10.35px]` }
                onClick={() => {setState(index)}}
            >
                {/* <span className={`w-[13px] h-[13px] bg-[#F8D4B1] rounded-[7.5px] cursor-pointer opacity-[${state === index ? '1' : '0'}]`}></span> */}
                <span className={`w-[13px] h-[13px] bg-[#F8D4B1] rounded-[7.5px] cursor-pointer opacity-1`}></span>
                {state === index ? <>
                    <div className='w-[22.5px] h-[1px] bg-[#F8D4B1] ml-[10px] mr-[16.5px] sm:w-[68px]'></div>
                    <sapn className='text-[#F8D4B1]'>品牌形象建立</sapn></> : ''}
            </div>
        )
    })
    return (
        <div className='relative w-full h-screen'>
        {/* <div className='relative flex flex-col items-center justify-center h-screen truncate bg-cover bg-center bg-[url("/images/MarketingBanner.svg")]'> */}
            <div className='h-screen p-0 m-0' ><img className='h-[100vh] m-0 p-0 object-cover' src='/images/MarketingBanner.svg' alt="MarketingBanner" /></div>
            <div className='absolute top-[27.5%] mainPositionleft h-[310px] w-[21px] sm:hidden'>
                <img className=' absolute ' src="/images/MarketingBannerLine.svg" alt="" />
                {spotIcon}
            </div>
            <div className='flex flex-col items-center justify-center absolute top-0 w-full h-full'>
                <div className='mainPaddingX text-[#F8D4B1] text-[28px] mb-[36px] text-center leading-[60px]'>MasterApp <br className='sm:hidden'/>
                    專業行銷顧問群，<br className='sm:hidden'/>
                    打造成功品牌形象，<br className='sm:hidden'/>
                    提升銷售業績免煩惱
                </div>
                <div className=' flex text-[#434343]  text-sm f-full z-[1]'>
                    <div className='Btn4 bg-[#F8D4B1] text-[#434343] mr-[35px] sm:mr-[30px]'>專人聯繫</div>
                    <div className='Btn4 bg-[#F8D4B1] text-[#434343]'>後台註冊</div>
                </div>
                <div className='hidden sm:flex mt-[30px] flex-col items-center text-[#434343] text-sm f-full z-[1] text-center'>
                    <img className='w-[23px] h-[40px]' src="/images/MarketingScrollDown.svg" alt="" />
                    <div className='text-[#F8D4B1] mt-[7px]'>Scroll<br/>Down</div>
                </div>
            </div>

        </div>
    )
}

export default MarketingBanner