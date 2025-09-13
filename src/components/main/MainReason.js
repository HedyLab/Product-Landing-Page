import React from 'react'


const list1 = [
    { reasonTitle: '為何需要專屬購物網頁?', reasonAnswer: '透過社群媒體及廣告等等宣傳，消費者容易得知您 的網站連結並進入網站，進行第一次消費' },
    { reasonTitle: '為何需要專屬專屬手機APP?', reasonAnswer: '以鼓勵優惠吸引消費者下載店家APP，並利用推送 通知，隨時發送優惠消息(發送不需成本)，吸引消費者再次購物。' },
]
const list2 = ['SEO 搜尋引擎優化','社群平台導流','吸引「首次消費」','優惠折扣工具','APP 一鍵購物','推送通知提升黏著度','鼓勵「二次消費」']

const list3 = [
    { title: '客戶流失率', url:'arrDownRight' },
    { title: '訂單量',url:'arrTopRight' },
    { title: '營業額',url:'arrTopRight' },
]

function ReasonFn({data}) {  
      return (
          <>
            <div className='text-blueDeep text-[1.75rem] mb-[28px] sm:mb-[13px] sm:text-lg '>{data.reasonTitle}</div>
            <div className='flex items-start justify-start'>
                <div className=' min-h-[14px] min-w-[14px] mt-[8px] mr-[15px] rounded-[50%] bg-[#1A374D] sm:hidden'></div>
                <div className='max-w-[398px] text-grayDeep text-xl mb-[22px] leading-[30px] text-justify sm:text-center sm:text-sm sm:leading-7 sm:mb-[73px] '>{data.reasonAnswer}</div>
            </div>
          </>
      )
    }
    
    const list = [1,2,3,4,5]; 
function MainReason(props, ref) {
    return (
        // <div className='flex justify-between [padding:127.5px_110px__75px] font-bold sm:pt-[75px] sm:px-[5.6%] sm:flex-wrap sm:pb-[55px]' id='MainReason#' ref={ref}>
        <div className='flex justify-between [padding:127.5px_110px__75px] font-bold sm:pt-[75px] sm:px-[5.6%] sm:flex-wrap sm:pb-[55px]' id='MainReason#' >
            <div className='flex flex-col w-[49%] sm:w-[100%] sm:items-center'>
                {list1 && list1.map((item,index) => {
                        return (<ReasonFn key={index} data={item} />)
                })}
                <div className='text-blueLight text-[18px] mb-[24px] sm:text-lg sm:mt-[-25px]'>Bundle Online Business</div>
                <div className='text-blueDeep text-[18px] mb-[28px] sm:text-lg'>網頁 + APP = 拓展無限客源</div>
                    <div className='w-full flex flex-col justify-start items-start flex-wrap h-[150px] mr-[30px] mb-[24px] text-grayDeep  truncate sm:flex-nowrap sm:mb-[15px] sm:w-fit sm:h-fit sm:ml-[50px] sm:pl-0 sm:text-sm sm:m-0 sm:mb-[26px]'>
                        {list2 && list2.map((item,index) => {
                            return (
                            <div key={index}  className='flex h-[25%] w-[50%] items-center mt-0 mr-8 sm:h-fit  sm:w-fit sm:mb-[18px]'>
                                <div className='w-[14px] h-[14px] pt-[4px] mr-[14px] rounded-[50%] bg-[#666666]'></div>
                                <div>{item}</div>
                            </div>
                            )
                        })}
                    </div>
                <div className='flex flex-row items-center sm:flex-col sm:flex-wrap sm:justify-center sm:space-y-[20px]'>
                    {list3 && list3.map((item,index) => {
                            return (
                                <div key={index} className='flex items-center mr-[15px] sm:mr-0'>
                                    <div className='btn3 cursor-default mr-[15px] sm:text-[14px]'>{item.title}</div>
                                    <div className=' min-h-[22px] min-w-[22px] mr-[20px] sm:mr-0' >
                                        <img className=' w-full h-full object-content' src={`/images/${item.url}.svg`} alt="" />
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>
            <div className=' h-[534px] w-[640px] self-end mb-[38px] sm:h-[50%] sm:mt-[24px] sm:px-[20px]' >
                <img className=' w-full h-full object-content' src='/images/MainReason.svg' alt="" />
            </div>
        </div>
    )
}

export default React.forwardRef(MainReason)