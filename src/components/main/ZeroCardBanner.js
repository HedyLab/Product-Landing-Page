import React from 'react'

function zeroCardBanner() {
    return (
        <div className='h-[480px] bg-blue relative flex flex-col  items-center space-y-[20px] sm:space-y-[22px] sm:text-center sm:px-[5%] sm:h-full'>
            <img className='absolute top-[113px] left-[8vw] h-[84px] w-[137px] sm:hidden' src="/images/zeroCardAirplane.svg" alt="" />
            <img className='absolute top-[290px] left-[8vw] h-[49px] w-[49px] sm:hidden' src="/images/zeroCardMoney.svg" alt="" />
            <img className='absolute top-[370px] left-[15vw] h-[56px] w-[99px] sm:hidden' src="/images/zeroCardCloud.svg" alt="" />
            <img className='absolute top-[135px] right-[8vw] h-[88px] w-[155px] sm:hidden' src="/images/zeroCardCloud.svg" alt="" />
            <img className='absolute top-[300px] right-[18vw] h-[72px] w-[72px] sm:hidden' src="/images/zeroCardMoneyGold.svg" alt="" />
            <img className='absolute top-[340px] right-[8vw] h-[49px] w-[49px] sm:hidden' src="/images/zeroCardMoney.svg" alt="" />
            <img className='absolute top-[400px] right-[15vw] h-[37px] w-[37px] sm:hidden' src="/images/zeroCardMoney.svg" alt="" />

            <div className='text-[1.75rem] text-blueDeep pt-[90px]  sm:text-lg '>沒有信用卡也可以分期開店！</div>
            <div className='text-xl text-grayDeep  sm:text-sm '>還在煩惱額度不夠嗎？因為無法分期繳款，導致你網路開店計畫延後嗎？</div>
            <div className='text-xl text-grayDeep  sm:text-sm'>中租零卡分期讓你選擇方案更划算！</div>
            <div className='text-blueDeep text-base leading-[19px] font-bold bg-white px-[57px] py-[11px] rounded-[20px] mt-[36px] cursor-pointer shadow-md sm:text-sm sm:py-[6px] sm:!mb-[51px]'>聯繫專員</div>
        </div>
    )
}

export default zeroCardBanner