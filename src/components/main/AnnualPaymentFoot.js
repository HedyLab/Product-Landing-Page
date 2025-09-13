import React from 'react'

function AnnualPaymentFoot() {
  return (
    <div className='sm:[padding:8%_7%_96px]'>
      <div className='flex justify-center items-center h-[411px] bg-blue px-[84px]  sm:h-[270px] sm:[padding:54px_8%_50px]'>
        <div className='h-[327px] w-[315px] mr-[7%] sm:hidden'>
          <img className='h-full w-full object-fill' src="/images/AnnualPaymentFoot.svg" alt="" />
        </div>
        <div className='flex flex-col max-w-[49%] sm:max-w-full sm:items-center'>
          <div className='text-[1.75rem] text-[#333333] mb-[12px] sm:text-lg'>找不到你想要的功能嗎？</div>
          <div className='text-[1.75rem] text-[#333333] mb-[16px] sm:text-lg'>你需要量身打造計畫！</div>
          <div className='text-xl text-[#484848] mb-[22px] sm:text-sm'>依據你的功能需求，客製化專屬網站、APP！</div>
          <div className='btn5 rounded-[30px] font-normal sm:text-sm '>立即聯繫專員取得報價</div>
        </div>
      </div>
    </div>

  )
}

export default AnnualPaymentFoot