import React from 'react'

const list = ['品牌形象建立','活動節慶型貼文','品牌官網優化','社群行銷經營']

function MarketingOurServe() {
    return (
        <div className='mainPaddingX flex justify-between h-max overflow-hidden px-[8%] py-[4%] text-base sm:flex-col sm:items-center sm:pt-[75px] sm:min-h-fit'>
            <div className='flex flex-col items-center justify-center sm:mb-[25px]'>
                <div className='text-blueDeep text-[28px] mb-[45px] underline underline-offset-[13px] decoration-[3px] decoration-[#F8D4B1] sm:text-[20px]'>我們的服務</div>
                <div className='text-[20px] text-center mb-[35px] sm:mb-[19px] sm:text-[16px]'>品牌形象建立、社群行銷經營、數位行銷操作</div>
                <div className='text-[20px] text-center leading-[30px] sm:text-[16px]'>讓你操作執行更順暢，客戶體驗更優化，績效表現更出色。</div>
            </div>
            {/* <div className="relative bg-[url('/images/MarketingOurServe.svg')]  min-w-[46%] min-h-[81%] bg-contain bg-no-repeat text-[#1A374D] sm:aspect-square sm:flex sm:flex-wrap sm:bg-[url('')] sm:w-[90%]">
                <div className='absolute w-[31.5%] h-[21.5%] left-[19.3%] top-[0.5%] sm:static sm:w-[50%] sm:h-[50%]'><img className='object-cover' src='/images/MarketingOurServeGroup1.svg' alt="" /></div>        
                <div className='absolute w-[31.5%] h-[21.5%] right-[16.6%] top-[21.8%] sm:static sm:w-[50%] sm:h-[50%]'><img className='object-cover' src='/images/MarketingOurServeGroup2.svg' alt="" /></div> 
                <div className='absolute w-[31.5%] h-[21.5%] left-[19.3%] top-[43.6%]  sm:static sm:w-[50%] sm:h-[50%]'><img className='object-cover' src='/images/MarketingOurServeGroup3.svg' alt="" /></div> 
                <div className='absolute w-[31.5%] h-[21.5%] right-[16.6%] top-[65.1%] sm:static sm:w-[50%] sm:h-[50%]'><img className='object-cover' src='/images/MarketingOurServeGroup4.svg' alt="" /></div> 
            </div> */}
            <div className="relative min-w-[46%] h-max bg-contain bg-no-repeat text-[#1A374D] sm:aspect-square sm:flex sm:flex-wrap sm:w-[90%]">
                <img className='object-cover z-10' src='/images/MarketingOurServe.svg' alt="" />
                <div className='absolute top-0 w-full h-full ml-[115px] mt-[.1%]'>
                    {list.map((item,index)=>{
                        // return  (<div className={`w-[32%] h-[21.4%] mt-[.45%] flex justify-center items-center bg-[url("/images/MarketingOurServeGroup${index+1}.svg")] bg-no-repeat object-fit sm:aspect-square `} key={index}>
                        return  (<div className={`relative w-[32%] h-[21.4%] mt-[.45%] flex justify-center items-center truncate bg-[url("/images/MarketingOurServeGroup${index+1}.svg")] bg-no-repeat object-fit sm:aspect-square `} key={index}>
                                    <img className='w-full full' src={`/images/MarketingOurServeGroup${index+1}.svg`} alt="" />
                                    <div className='absolute m-0 p-0 w-full h-full text-center flex justify-center items-center  text-[16px] bg-blue'><div className='w-fit h-fit'>{item}</div></div>
                                </div>        
                        )
                    })}
                </div>
                {/* <div className='w-[31.5%] sm:aspect-square'><img className='object-cover' src='/images/MarketingOurServeGroup1.svg' alt="" /></div>        
                    <div className='w-[31.5%] sm:aspect-square'><img className='object-cover' src='/images/MarketingOurServeGroup2.svg' alt="" /></div> 
                    <div className='w-[31.5%] sm:aspect-square'><img className='object-cover' src='/images/MarketingOurServeGroup3.svg' alt="" /></div> 
                    <div className='w-[31.5%] sm:aspect-square'><img className='object-cover' src='/images/MarketingOurServeGroup4.svg' alt="" /></div> 
                 */}
            </div>
        </div>
    )
}

export default MarketingOurServe