import React from 'react'
import Image from 'next/image'

const functionMainArr = [
    {
        name: '課程預約',
        img: 'functionMainClass',
        child: ['課程多方管理', '用戶預約管理', '線上預約課程', '預約時段安排', '多種課程類型', '自訂課程標籤', '自訂課程分類', '多種類型預約',]
    },
    {
        name: '師資團隊',
        img: 'functionMainTeacher',
        child: ['師資團隊列表', '設定師資頭像', '師資基本資料', '師資證照設定', '師資所有課程', '師資經歷列表', '自訂師資技能', '師資課程列表',]
    },
    {
        name: '訂單管理',
        img: 'functionMainOrder',
        child: ['訂單狀態', '訂單詳細資訊', '付款狀態', '訂購人資料', '取貨狀態', '後台取消訂單', '訂單價錢', '匯出匯入訂單',]
    },
    {
        name: '積分系統',
        img: 'functionMainScore',
        child: ['會員消費累計積分', '推薦人積分', '上課加贈積分', '積分加減管理', '積分折抵扣款', '後補', '積分匯率設定', '後補',]
    },
    {
        name: '後台操作',
        img: 'functionMainBackend',
        child: ['輕鬆批量管理', '自定義連結', '搜尋過濾功能', '管理員權限', '資料匯入匯出', '跨店管理', '快速查詢', '數據分析',]
    },
    {
        name: '會員系統',
        img: 'functionMainMember',
        child: ['用戶名單資訊', '師資端用戶', '家長端用戶', '註冊資料模組', '子女端用戶', '學習進度', '學生端用戶', '手機驗證註冊',]
    },
    {
        name: '請假系統',
        img: 'functionMainDayoff',
        child: ['線上請假功能', '請假事由紀錄', '設定是否請假', '請假原因', '管理請假紀錄', '候補', '請假通知', '後補',]
    },
    {
        name: '簽到系統',
        img: 'functionMainSignIn',
        child: ['QRCode掃描', '師資簽到', '入場掃描', '多方管理', '狀態通知', '請假通知', '學員簽到', '候補',]
    },
    {
        name: '多元金流',
        img: 'functionMainMoney',
        child: ['電子錢包', 'Apple Pay', '支付安全密碼', 'Line Pay', '充值優惠獎勵', '銀行轉帳', '綠界金流串接', '信用卡支付',]
    },
]

function FunctionMain() {

    const functionMainArrDisplay = functionMainArr.map((item,index) => {
        return (
            <div className='flex flex-col  [padding:32px_1%] max-h-max max-w-[31%] mr-[1%] w-full shadow-md sm:max-w-max sm:mr-0' key={index}>
                <div className='flex items-center justify-center mb-[42px]'>
                    <div className='h-[56px] w-[56px] mr-[30px]'>
                        <Image
                            src={`/images/${item.img}.svg`}
                            width={56}
                            height={56}
                            className='cursor-pointer'
                            alt='Image'
                        />
                    </div>
                    <div className='text-2xl text-blueDeep'>{item.name}</div>
                </div>
                <div className='flex flex-wrap sm:px-[5%]'>
                    {
                        item.child.map((item2,index2) => {
                            return (
                                <div className='flex items-center w-[50%]' key={index2}>
                                    <div className='h-[16.3px] w-[16.3px] mr-[8px]'>
                                        <Image
                                            src='/images/selectCircle.svg'
                                            width={16.3}
                                            height={16.3}
                                            alt='Image'
                                        />
                                    </div>
                                    <div className='text-[#737373]'>{item2}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    })

    return (
        <div className='flex items-start max-h-max px-[8%] py-[81px] flex-wrap sm:flex-col sm:py-[33px]'>
            {functionMainArrDisplay}
        </div>
    )
}

export default FunctionMain