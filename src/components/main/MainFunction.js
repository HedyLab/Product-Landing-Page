import React from 'react'


// function StepFn({ item, index },) {  
    
//   return (
//       <>
//         <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>{item}</div>
//         <div className='h-[3px] w-full  bg-gray'></div>
//       </>
//   )
// }

// const list = [1,2,3,4,5]; 


function MainFunction(props, ref) {
  return (
    <div className='[padding:126px_108px__75px] font-bold sm:[padding:76px_8%]' id='MainFunction' ref={ref}>
      <div className='flex flex-col justify-center items-center mb-[61px] sm:text-center sm:mb-[34px]'>
        <div className='text-[1.75rem] text-blueDeep mb-[20px] sm:text-lg'>MasterBusiness 5大最強功能</div>
        <div className='text-xl text-grayDeep mb-[20px] sm:text-sm'>MasterBusiness 功能完善，符合各行各業需求，拓展銷售通路， </div>
        <div className='text-xl text-grayDeep  sm:text-sm'>刺激客戶消費，建立企業忠實客戶群。 </div>
      </div>
      <div className='flex justify-between sm:flex-col sm:items-center'>
        <div className='flex flex-col mr-[10px] w-[46%] sm:w-full sm:mr-0 sm:items-center'>
          <div className='flex items-center text-sm leading-[14px] mb-[37px] sm:w-full'>
            <div className='h-[3px] w-full  bg-[#ACD4F7]'></div>
            <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#ACD4F7] py-[5px] px-[3px] text-1A374D'>01</div>
            <div className='h-[3px] w-[70%]  bg-[#ACD4F7]'></div> <span className='h-[3px] w-[30%]  bg-gray z-10'></span>
            <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>02</div>
            <div className='h-[3px] w-full  bg-gray'></div>
            <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>03</div>
            <div className='h-[3px] w-full  bg-gray'></div>
            <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>04</div>
            <div className='h-[3px] w-full  bg-gray'></div>
            <div className='max-w-max max-h-max rounded-[50%] [border:3px_solid_#AAB0BB] py-[5px] px-[3px] text-1A374D'>05</div>
            <div className='h-[3px] w-full  bg-gray'></div>
          </div>
          <div className='w-full hidden sm:block sm:mb-[43px]'>
            <img className=' w-full h-[100%] object-content ' src='/images/MainFunction.svg' alt="" />
          </div>
          <div className='text-[1.75rem] text-blueDeep mb-[35px] sm:text-center sm:text-lg sm:mb-[20px]'>購物系統</div>
          <div className='flex mb-[16px] sm:mb-[30px]'>
            <img className=' w-[24px] h-[24px] object-content mr-[12px] sm:hidden' src='/images/MainFunctionSpot.svg' alt="" />
            <div className='text-grayDeep sm:text-[14px] text-justify leading-[30px]'>MasterBusiness 提供完善及多元化的購物系統。透過設定商品分類，您可以更有系統地展示各類不同商品，方便顧客購物。商品詳情可自行設定，當中包括商品價錢、大小、顏色等等。簡易的付款流程可縮減顧客購物步驟，大大減低因購買手續繁複而流失客人的機會。</div>
          </div>
          <div className='Btn3 ml-[36px] sm:ml-0'>下一個</div>
        </div>
        <div className='w-[50%] sm:hidden'>
          <img className=' w-full h-[100%] object-content ' src='/images/MainFunction.svg' alt="" />
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(MainFunction)


