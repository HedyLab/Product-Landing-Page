import React from 'react'

const BrandListArr = [
    {
        title: '解決方案',
        content: '是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字',
        img: 'MarketingBrandTag1'
    },
    {
        title: '活動節慶型貼文',
        content: '是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字',
        img: 'MarketingBrandTag2'
    },
    {
        title: '折扣優惠型貼文',
        content: '是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字',
        img: 'MarketingBrandTag3'
    },
    {
        title: '解決方案',
        content: '是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字',
        img: 'MarketingBrandTag4'
    },
]

function BrandList() {
    const BrandListArrDisplay = BrandListArr.map((item, index) => {
        return (
            <div className='flex flex-col  mb-[27px] w-[33.33%] px-[5%]' key={index}>
                <div className='flex items-center mb-[32px]'>
                    <img className='max-w-48 max-h-48 object-fill mr-[15px]' src={`/images/${item.img}.svg`} alt="" />
                    <div className='text-xl'> {item.title}</div>
                </div>
                <div className='text-sm mb-[9px] leading-[30px]'>{item.content} </div>
                <div className='text-sm text-[#FFC9AE] self-start cursor-pointer'>了解更多 </div>
            </div>
        )
    })

    return (
        <div className='px-[8%] py-[4%] flex flex-col items-center text-blueDeep'>
            <div className='text-[1.75rem]'>數位行銷操作</div>
            <div className='h-[3px] w-[165px] bg-[#FFC9AE] mb-[26px]'></div>
            <div className='text-sm mb-[25px]'>專業系統顧問，品牌行銷與實用功能整合！！</div>
            <div className='text-xl max-w-[60%] text-center mb-[80px]'>超過四分之一的 16 至 64 歲互聯網用戶通過 社交媒體廣告發現新品牌、產品和服務。 挖掘淺在客戶的最佳手段</div>
            <div className='flex flex-wrap '>
                {BrandListArrDisplay}
            </div>
        </div>
    )
}

export default BrandList