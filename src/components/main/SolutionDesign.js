import React from 'react'
import SolutionDesignItem from './SolutionDesignItem'

const SolutionDesignArr = [
    {
        title: '圖文設計',
        child: [
            {
                title: '訂閱社群圖文方案',
                content: '訂閱社群圖文方案，我們將提供每個月 8 次委託作圖使用權給訂閱者。',
                function: ['根據主頁版面設計網站形象圖片', '輪播圖片製作', '優惠圖片製作', '活動商品圖片製作', '社群圖片製作'],
                illustrate: '每個月可以使用次數最高上限 #8# 次， 可製作以上類型設計圖。',
                way: '每一次委託作圖需提供文案、想法、 風格範例，與設計師討論確定後， 開始製作後，可微調整圖片 #1# 次 (一但開始製作，無法改變風格範例)。',
                img: 'SolutionDesign1'
            },
            {
                title: '優惠活動圖文設計方案',
                content: '使用優惠活動圖文設計，購買一次方案可享有所有類型委託作圖使用權。 1 次。',
                function: ['社群圖文製作', '輪播圖片製作', '優惠圖片製作', '活動商品圖片製作', '以上圖片類型一次全包'],
                illustrate: '使用一次合約，可製作一次活動檔期所需的上述任何類型委託作圖。',
                way: '客戶需提供文案、想法、風格範例，與設計師討論確定後，開始製作 後，可微調整圖片# 1 #次(一但開始製作，無法改變風格範例)。',
                img: 'SolutionDesign2'
            }
        ]
    },
    {
        title: '廣告行銷',
        child: [
            {
                title: '廣告投放代操服務方案',
                content: '不知道該如何宣傳您的網站嗎？對廣告投放毫無頭緒？您可以選擇 此 MasterBusiness廣告投放代操服務 解決您的煩惱！',
                function: ['Facebook/Google廣告投放平台', '依商品性質篩選並分析廣告受眾', '創建帳號並埋入追蹤碼', '文案撰寫、抓取關鍵字', '每月提供投放數據報告，可與專員進行 1 小時線上會議'],
                illustrate: '廣告投放以# 30 #天為單位，一天至少投放# 600 #元台幣。',
                way: '每一次委託投放廣告需與廣告行銷業務討論方向並提供廣告內容。 此服務將加收投放廣告金額的# 5% #為服務費。',
                img: 'SolutionDesign3'
            },
            {
                title: '社群小編方案',
                content: '找不到適合人選管理您的商家粉絲專頁嗎？讓我們來當您的社群小編！',
                function: ['Facebook/IG 粉絲專頁管理', '貼文文案撰寫', '貼文資料收集', '工作日，回覆粉絲專頁留言', '每月提供投放數據報告，可與專員進行 1 小時線上會議'],
                illustrate: '方案期限以#月#為單位。',
                way: '需與社群小編討論粉絲專頁管理方向及貼文規範，確認走向後，每一 次發文的圖文內容只可微調# 1 #次。',
                img: 'SolutionDesign4'
            },
        ]
    },
    {
        title: '後台代管',
        child: [
            {
                title: '零煩惱計畫方案',
                content: '取得MasterBusiness後台卻沒時間上架商品，零煩惱計畫讓您快速入門！',
                function: ['設定產品資料 (50件)，共 1 次', '圖文設計(微改1次)，共 3 張', '廣告投放、追蹤廣告效益，共 1 次', '金物流設定', '專屬Line群組，工作日快速回覆', '後台應用教學'],
                illustrate: '方案期限單位為#月#計算，以上敘述為#一個月#的服務內容。',
                way: '每一次委託作圖需提供文案、想法、風格範例，與設計師討論 確定後，開始製作後，可微調整圖片# 1 #次。',
                img: 'SolutionDesign5'
            },
            {
                title: '後台代管方案',
                content: '沒有時間與人力管理後台嗎？您可以選擇此方案，從此只需接收訂 單與出貨！',
                function: ['設定產品資料(上限為 80 件)', '設定優惠活動折扣', '主頁版面設定', '後台數據整理', '金物流設定'],
                illustrate: '方案期限單位為#月#計算，以上敘述為#一個月#的服務內容。',
                way: '設定任何資料前，需與後台代管者討論規則，確定後，微調整所有設定# 1 次#。',
                img: 'SolutionDesign6'
            },
        ]
    }
]

function SolutionDesign() {

    return (
        <div className='flex flex-col items-center [padding:57px_8.5%] sm:[padding:75px_5%]'>
            {SolutionDesignItem(SolutionDesignArr)}
        </div>
    )
}

export default SolutionDesign