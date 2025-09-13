import React from 'react'
import { useState } from 'react'


function MonthlyPaymentMain() {

  const [isNormal, setIsNormal] = useState(true)

  return (
    <div className='[padding:75px_71px] sm:[padding:75px_8%]'>
      <div className='flex justify-center h-[57px] w-full text-center text-xl cursor-pointer sm:text-lg sm:rounded-[30px] sm:bg-blueLight'>
        <div
          className={`${isNormal ? 'bg-blue text-blueDeep sm:text-blueDeep sm:bg-grayLight' : 'bg-[#F3F5F8] text-blueDeep sm:bg-blueLight'} w-full [padding:17.32px] sm:[padding:13px_20px] sm:rounded-[30px]`}
          onClick={() => { setIsNormal(true) }}
        >
          商務網店計畫
        </div>
        <div
          className={`${isNormal ? 'bg-[#F3F5F8] text-grayDeep sm:bg-blueLight' : 'bg-blue text-blueDeep sm:bg-grayLight '} w-full [padding:17.32px] sm:[padding:13px_20px] sm:rounded-[30px]`}
          onClick={() => { setIsNormal(false) }}
        >
          BOB多元通路
        </div>
      </div>

      <div className='shadow-md text-xl sm:text-sm'>
        <div className=' [padding:33px_34px] [borderBottom:1px_solid_#C4C4C4] sm:[padding:34px_11px_27px]'>
          <div className='flex justify-between'>
            <div className='text-blueDeep mb-[14.32px]'>商務網店計畫</div>
            <div>$49,680</div>
          </div>
          <div className='text-blueDeep text-xs'>首期 - 收取費用(開辦費+方案首期+末期)</div>
        </div>
        <div className=' [padding:33px_34px] [borderBottom:1px_solid_#C4C4C4] space-y-[7px] sm:[padding:14px_11px_20px] sm:space-y-[15px]'>
          <div className='flex justify-between text-[#A8A8A8]'>
            <div >開辦費</div>
            <div>$8,250</div>
          </div>
          <div className='flex justify-between text-[#A8A8A8]'>
            <div >首期費用 ($49,680/12個月)</div>
            <div>$4,140</div>
          </div>
          <div className='flex justify-between text-[#A8A8A8]'>
            <div >末期費用 [押金] ($49,680/12個月)</div>
            <div>$4,140</div>
          </div>
          <div className='flex justify-between'>
            <div className=' mb-[14.32px] text-[#333333] sm:mb-0'>首次開通需支付費用共</div>
            <div className='text-[#F94B23]'>$16,530</div>
          </div>
        </div>
        <div className=' [padding:33px_34px] [borderBottom:1px_solid_#C4C4C4] sm:[padding:17px_11px_22px] '>
          <div className='flex justify-between text-[#BADBEE]'>
            <div className=''>續期餘款 - 每月分期</div>
            <div className='flex items-center'>
              <img className='w-[18.2px] h-[18.2px] mr-[9px]' src="/images/searchBlueLight.svg" alt="" />
              <div>點開看詳情</div>
            </div>
          </div>
        </div>
        <div className=' [padding:33px_34px] sm:[padding:14px_11px_34px]'>
          <div className='flex justify-between mb-[7px]'>
            <div className='flex'>
              <div className='text-[#333] mr-[4px]'>剩餘10期費用</div>
              <div className='text-[#A8A8A8]'> ($49,680/12個月*10期)</div>
            </div>
            <div className='text-[#333]'>$41,400</div>
          </div>
          <div className='flex justify-between text-[#F94B23]'>
            <div >Total</div>
            <div >$57,930</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyPaymentMain


