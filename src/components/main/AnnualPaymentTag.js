import React, { useState } from 'react'
import CardAnnualPayment from './CardAnnualPayment'
import CardPlatform from '../CardPlatform'
import AnnualPaymentTagList from './AnnualPaymentTagList'

const cardAnnualPaymentArr = [
    { img: 'shopGray', title: '新手網店計畫', tips: '快速上手線上生意', value: '25,000' },
    { img: 'shopGray', title: '網店起始計畫', tips: '開店營運，功能齊全', value: '49,680' },
    { img: 'navBarShop', title: 'BOB多元通路', tips: '網頁、APP，銷售通路一網打盡', value: '72,000' },
]
const cardPlatformArr = [
    { img: 'computer', title: '專屬響應式購物網站', value: '7,500' },
    { img: 'computer', title: '專屬響應式購物網站', value: '7,500' },
    { img: 'equipmentPlatform', title: '專屬響應式購物網站', tips: '專屬 iOS / Android 店家APP', value: '25,800' },
]
const annualPaymentTagListArr = [
    {
        type: '基礎網店功能',
        img: 'shoppingCart',
        base: ['商店前台', '物流服務', '金流服務', '網站設計', '優惠模組'],
        normal: ['商店前台', '物流服務', '金流服務', '網站設計', '優惠模組'],
        hard: ['商店前台', '物流服務', '金流服務', '網站設計', '優惠模組'],
    },
    {
        type: '後台營運功能詳情',
        img: 'computerBackend',
        base: ['商品管理', '數據統計', '訂單管理'],
        normal: ['商品管理', '數據統計', '訂單管理'],
        hard: ['商品管理', '數據統計', '訂單管理'],
    },
    {
        type: '進階功能',
        img: 'wrench',
        base: [],
        normal: ['預約功能', '會員管理'],
        hard: ['預約功能', '會員管理', '推播通知'],
    },
    {
        type: '其他支援',
        img: 'lightbulb',
        base: [],
        normal: ['代碼管理及廣告追蹤工具', '權限與其他'],
        hard: ['代碼管理及廣告追蹤工具', '權限與其他'],
    },
]

const cardColor = {
    0: 'grayLight',
    1: 'white',
    2: 'blue'
}

function AnnualPaymentTag() {
    const [mobileState, setMobileState] = useState(1)

    const CardAnnualPaymentDisplay = cardAnnualPaymentArr.map((item, index) => {
        return (
            CardAnnualPayment(item, index, cardColor[index],mobileState)
        )
    })
    const CardPlatformDisplay = cardPlatformArr.map((item, index) => {
        return (
            CardPlatform(item, index, cardColor[index],mobileState)
        )
    })
    const ListDisplay = annualPaymentTagListArr.map((item, index) => {
        const ListChild = AnnualPaymentTagList(item,cardColor[index],mobileState)
        return ListChild
    })

    return (
        <div className='flex flex-col items-center [padding:79px_83px] sm:[padding:75px_8%_14px] '>
            <div className='hidden  sm:flex justify-center items-center w-[337px] h-[51px] bg-blue rounded-[25px] text-center mb-[34px]'>
                <div className={`${mobileState === 0 ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]': 'text-white'} text-[17px]  w-full`} onClick={()=>{setMobileState(0)}}>新手計畫</div>
                <div className={`${mobileState === 1 ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]': 'text-white'} text-[17px]  w-full`} onClick={()=>{setMobileState(1)}}>網店起始</div>
                <div className={`${mobileState === 2 ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]': 'text-white'} text-[17px]  w-full`} onClick={()=>{setMobileState(2)}}>多元通路</div>
            </div>
            <div className='flex w-full mb-[14.5px]'>
                {CardAnnualPaymentDisplay}
            </div>
            <div className='text-xl text-white bg-blueDeep  w-full [padding:17.5px_45.5px_12.5px] sm:text-xl'>支援平台</div>
            <div className='flex w-full mb-[14.5px]'>
                {CardPlatformDisplay}
            </div>
            {ListDisplay}
        </div>
    )
}

export default AnnualPaymentTag