import React from 'react'
import CardServe from '../CardServe'

const CardServeArr = [
  { title: '圖文設計', img: 'rulerPen' },
  { title: '廣告行銷', img: 'rollPaper' },
  { title: '後台代管', img: 'rise' },
]

function SolutionItem() {

  const CardServeDisplay = CardServeArr.map((item) => {
    return CardServe(item)
  })

  return (
    <div className='flex flex-col items-center bg-[#F3F5F8] p-[70px] sm:p-[5.12%] sm:text-center'>
      <div className='text-blueDeep text-[1.75rem] mb-[20px] sm:text-lg sm:mb-[2px]'>服務項目</div>
      <div className='text-grayDeep text-xl mb-[40px] sm:text-sm sm:mb-[31px] sm:px-[5%]'>請注意！以下方案皆適用於簽訂 MasterBusiness任一開店方案之用戶</div>
      <div className='flex space-x-[151px] sm:space-x-0 sm:justify-between sm:w-full'>
        {CardServeDisplay}
      </div>
    </div>
  )
}

export default SolutionItem


