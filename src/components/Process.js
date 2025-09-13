import React from 'react'
import StepFunctionList from './StepFunctionList'
import ButtonBorderLg from './ButtonBorderLg'

function Process(props) {
    return (
        <div className='relative flex flex-col items-center font-bold h-[1521px] overflow-hidden space-y-[57px] sm:h-fit sm:mb-[75px] sm:space-y-0' id='LoginProcess'>
            <div className='absolute text-[1.75rem] text-blueDeep left-[calc(50%-268px)] top-0 sm:left-[calc(50%-172.5px)] sm:static sm:text-lg sm:ml-0 sm:text-center sm:mb-[20px]'>一對一專人諮詢，註冊即開啟你的Business</div>

            {/* 內容 */}
            <div className='absolute h-[1161px] w-[67.57vw] top-[90px] left-[calc(50vw-33.78%)] sm:hidden' >
                <img className='absolute top-0 left-0 w-full h-full object-content' src='/images/ProcessLine.svg' alt="" />
            </div>
            <div className='hidden sm:block flex flex-col items-center text-[#1A374D] font-bold px-[10%] sm:px-[20%] ' id='LoginContent'>
            <StepFunctionList/>
            </div>

            {/* 左右斑點 */}
            <div className='absolute h-[318px] w-[15%] top-[378px] left-[-60px] sm:h-[110px] sm:top-[55px] sm:left-[0px]' >
                <img className='absolute top-0 left-0 w-full h-full object-content' src={props.color ? `/images/ProcessSpotLeft${props.color}.svg` : '/images/ProcessSpotLeft.svg'} alt="" />
            </div>
            <div className='absolute h-[318px] w-[15%] top-[1074px] right-[-60px] sm:h-[110px] sm:top-[560px] sm:right-[0px]' >
                <img className='absolute top-0 left-0 w-full h-full object-content' src={props.color ? `/images/ProcessSpotRight${props.color}.svg` : '/images/ProcessSpotRight.svg'} alt="" />
            </div>
            <div className='absolute  bottom-[80px] sm:static sm:bottom-0 sm:pt-[20px]' style={{ left: `calc(50vw - 51px)` }}>
                {/* <div className='Btn4'>立即註冊</div> */}
                <ButtonBorderLg txt='立即註冊'></ButtonBorderLg>
            </div>
        </div>
    )
}

export default Process
