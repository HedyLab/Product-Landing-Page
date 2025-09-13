import React from 'react'


function SolutionBanner() {

  return (
    <div className='min-h-screen  bg-blue [padding:123px_13vw_70px] sm:text-center sm:[padding:123px_5%_70px]'>
      <div className='flex justify-center mb-[91px] sm:flex-col sm:items-center sm:mb-[29px]'>
        <div className='min-w-[227px] h-[159px] mr-[5%] w-[34%] sm:mr-0 sm:mb-[27px] sm:min-w-0 sm:w-[40vw]'>
          <img className='w-full h-full object-fill' src="/images/SolutionBannerTop.svg" alt="" />
        </div>
        <div className='flex flex-col text-blueDeep space-y-[19px] w-full sm:space-y-0 sm:mb-[6px] sm:items-center'>
          <div className='text-[1.75rem] sm:text-lg sm:mb-[28px]'>全方位代運營服務</div>
          <div className='text-xl sm:text-sm sm:!mb-[23px]'>找不到理想的社群小編、後台管理的團隊？人力不足？</div>
          <div className='text-xl sm:text-sm sm:w-[228px] sm:leading-[24px] '>MasterBusiness 推出代運營服務，讓您只需要負責接單 、包裝、出貨！</div>
        </div>
      </div>
      <div className='flex justify-center items-center sm:flex-col sm:items-center'>
        <div className='min-w-[227px] h-[159px] mr-[5%] w-[34%]  sm:mr-0 sm:mb-[31px]'>
          <img className='w-full h-full object-fill' src="/images/SolutionBannerBottom.svg" alt="" />
        </div>
        <div className='flex flex-col text-blueDeep w-full sm:items-center'>
          <div className='text-[1.75rem] mb-[17px] sm:text-lg sm:mb-[28px]'>給予您最精準的行銷方案！</div>
          <div className='text-xl mb-[29px] sm:text-sm sm:mb-[37px]'>除了優良的網站，您還需要廣告行銷抓取更多有效流量！</div>
          <div className='flex mb-[23px] sm:mb-[17px]'>
            <img className='w-[25px]] h-[25px] object-fill mr-[15px]' src="/images/select.svg" alt="" />
            <div className='text-grayDeep text-xl sm:text-sm'>Google Trends關鍵字分析</div>
          </div>
          <div className='flex mb-[23px] sm:mb-[17px]'>
            <img className='w-[25px]] h-[25px] object-fill mr-[15px]' src="/images/select.svg" alt="" />
            <div className='text-grayDeep text-xl sm:text-sm' >Google Search Console網站數據分析</div>
          </div>
          <div className='flex mb-[23px] sm:mb-[17px]'>
            <img className='w-[25px]] h-[25px] object-fill mr-[15px]' src="/images/select.svg" alt="" />
            <div className='text-grayDeep text-xl sm:text-sm'>抓取最適合您產品的SEO關鍵字</div>
          </div>
          <div className='flex mb-[23px] sm:mb-[17px]'>
            <img className='w-[25px]] h-[25px] object-fill mr-[15px]' src="/images/select.svg" alt="" />
            <div className='text-grayDeep text-xl sm:text-sm'>各項數據對比分析 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionBanner


