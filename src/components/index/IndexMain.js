import React from 'react'

function IndexMain() {
    return (
        <div className='flex flex-between  [padding:119px_78px_75px_110px] text-[#1A374D] font-bold sm:flex-col sm:items-center sm:[padding:75px_21px_0px] sm:max-h-max' id='LoginMain'>
            <div className='w-[70%] mb-[42px] hidden sm:block'>
                <img className='w-full h-full object-fill' src='/images/LoginMainLine.svg' alt="" />
            </div>
            <div className='  min-w-[49%] sm:w-[35.1%] sm:mb-[21px]'>
                <img className='w-full h-full object-content' src='/images/LoginMain.svg' alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[4.3%] sm:items-center sm:pl-0 sm:mb-[85px]'>
                <div className='w-[70%] mb-[42px] sm:hidden '>
                    <img className='w-full h-full object-fill' src='/images/LoginMainLine.svg' alt="" />
                </div>
                <div className='text-[1.75rem] mb-[18px] sm:text-[18px]'>一鍵註冊，專人輕鬆搞定您的Business</div>
                <div className='text-base text-grayDeep w-full mb-[30px] sm:text-[14px] text-justify'>只要註冊MasterApp 後台，即有專人立即聯繫，針對品牌想打造的方向與營運規劃，協助評 估開通最適合品牌的系統功能。</div>
                <div className='Btn4 max-w-max'>了解更多</div>
            </div>
        </div>
    )
}

export default IndexMain