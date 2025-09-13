import React from 'react'

const BrandTagArr = [
    { title: '知識型貼文', content: '產業相關知識、教育、懶人包', img: 'MarketingBrandTag1' },
    { title: '活動節慶型貼文', content: '各大相關產業節慶', img: 'MarketingBrandTag2' },
    { title: '折扣優惠型貼文', content: '品牌週年慶、優惠等活動', img: 'MarketingBrandTag3' },
    { title: '時事快閃型貼文', content: '搭上時夏流行風潮，創照話題', img: 'MarketingBrandTag4' },
    { title: '產品\環境介紹貼文', content: '品牌特色、環境介紹', img: 'MarketingBrandTag5' },
    { title: '會員經營型貼文', content: '產業相關知識、教育、懶人包', img: 'MarketingBrandTag6' },
]

function BrandTag() {
    const BrandTagArrDisplay = BrandTagArr.map((item, index) => {
        return (
            <div className='flex bg-[#F3F5F8] w-[33.33%] px-[5%] py-[40px]' key={index}>
                <div className='flex w-[48px] h-[48px] mr-[9px]'>
                    <img className='w-full h-full object-fill' src={`/images/${item.img}.svg`} alt="" />
                </div>
                <div className='flex flex-col '>
                    <div className='text-xl text-blueDeep'>{item.title}</div>
                    <div className='text-sm text-grayDeep'>{item.content}</div>
                </div>
            </div>
        )
    })

    return (
        <div className=' px-[8%] py-[75px] '>
            <div className='flex flex-wrap shadow-xl'>
                {BrandTagArrDisplay}
            </div>

        </div>
    )
}

export default BrandTag