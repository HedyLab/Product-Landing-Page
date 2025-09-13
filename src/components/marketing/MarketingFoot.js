import React from 'react'

function MarketingFoot() {
  return (
    <div className='truncate relative flex justify-center px-[41px] py-[41px] h-[358px] bg-[#F8D4B1] '>
        <img className='absolute top-[3.9%] left-[3.1%]' src="/images/triangleLeft.svg" alt="" />
        <img className='absolute top-[3.9%] left-[3.1%] w-[94px] h-[94px]' src="/images/triangleLeft.svg" alt="" />
        <img className='absolute top-[69.5%] right-[3.1%] w-[94px] h-[94px]' src="/images/triangleRight.svg" alt="" />

        <div className='flex flex-col items-center justify-center text-[1.75rem] text-blueDeep space-y-[27px] w-full z-[1]'>
            <div>立即開始與</div>
            <div>Ｍaster APP 合作擴展業務</div>
            <div className='btn2'>專人聯繫</div>
        </div>
        <div className=' w-[49%] mr-[5%] z-[1] '>
            <img className='w-full h-[276px] ' src="/images/MarketingFoot.svg" alt="" />
        </div>
        <div className='absolute top-0 right-[10%] bg-[#FCEAD8] h-[358px] w-[358px] rounded-[50%]'></div>

    </div>
  )
}

export default MarketingFoot