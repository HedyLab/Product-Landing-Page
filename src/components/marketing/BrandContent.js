import React from 'react'

const BrandContentArr = [
    {
        title: '品牌健診報告',
        content: '系統式針對品牌核心價值、產業、市場等全方面分析優劣勢，檢視品牌體質並提出報 告，釐清現況及發展方向是否正確。',
        img: 'SolutionDesign4'
    },
    {
        title: 'C.I.S 企業識別設計',
        content: '系統式針對品牌核心價值、產業、市場等全方面分析優劣勢，檢視品牌體質並提出報 告，釐清現況及發展方向是 LOGO設計:將核心理念與企業文化，昇華為容易記憶的視覺形象。從圖像視覺、標準色、標準 字、直橫式應用，迅捷樹立企業品牌識別度。',
        img: 'SolutionDesign5'
    },
    {
        title: '品牌官網優化',
        content: '網站身為品牌曝光不可或缺的行銷要角，必當樹立品牌特色的第一步， MasterApp將為品牌提供符合形象的首頁、輪播圖、最新消息、商品圖等內容設計概念套版。 品牌形象概念片:腳本發想、分鏡設計、影片剪輯。',
        img: 'SolutionDesign3'
    }
]

function BrandContent() {

    const BrandContentArrDisplay = BrandContentArr.map((item, index) => {

        return (
            <div className='flex  w-full px-[8%] mb-[66px]' key={index}>
                <div className={`${(index + 1) % 2 === 1 ? '' : 'order-1'} flex justify-center items-center min-w-[50%] py-[2%] bg-[#F3F5F8] rounded-[5px] shadow-[0_2px_2px_rgba(0,0,0,0.25)] `}>
                    <img className='max-w-[80%] h-[80%] object-fill' src={`/images/${item.img}.svg`} alt="" />
                </div>
                <div className='flex flex-col w-full py-[71px] px-[86px] text-blueDeep text-xl rounded-[5px] shadow-[0_2px_2px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center mb-[38px] '>
                        <img className='h-[20px] w-[20px] mr-[25px]' src="/images/spotPink.svg" alt="" />
                        <div>{item.title}</div>
                    </div>
                    <div className='' >{item.content}</div>
                </div>
            </div>
        )
    })

    return (
        <div className=''>
            {BrandContentArrDisplay}
        </div>
    )
}

export default BrandContent