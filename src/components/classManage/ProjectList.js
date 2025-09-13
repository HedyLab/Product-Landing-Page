import React, { useState } from 'react'

const ProjectTypeArr = [
    { img: 'starGray', title: '入門方案', tips: '多種類型課程上架', money: null },
    { img: 'starGray', title: '中階方案', tips: '會員預約、請假功能一應俱全', money: null },
    { img: 'starGold', title: '高階方案', tips: '跨店管理、多種工具任您使用', money: null },
]

const ProjectListArr = [
    {
        title: '基礎功能',
        child: [
            { name: '輕鬆批量管理', level: [1, 2, 3] },
            { name: '搜索/排序/過濾功能', level: [1, 2, 3] },
            { name: '資料匯入匯出', level: [1, 2, 3] },
            { name: '快速查詢', level: [1, 2, 3] },
            { name: '請假功能', level: [2, 3] },
            { name: '團體/私人課程預約', level: [1, 2, 3] },
            { name: '課程表輕鬆管理', level: [1, 2, 3] },
            { name: '多種類型課程上架', level: [1, 2, 3] },
            { name: '課程多層級分類', level: [1, 2, 3] },
            { name: '自訂課程標籤', level: [1, 2, 3] },
        ]
    },
    {
        title: '首頁版面',
        child: [
            { name: '主頁幻燈片', level: [1, 2, 3] },
            { name: '公告跑馬燈', level: [1, 2, 3] },
            { name: '師資團隊', level: [1, 2, 3] },
            { name: '場館資訊', level: [1, 2, 3] },
            { name: '熱銷課程', level: [1, 2, 3] },
            { name: '推薦課程', level: [2, 3] },
            { name: '自定義區塊', level: [3] },
        ]
    },
    {
        title: '後台管理功能',
        child: [
            { name: '員工管理功能', level: [3] },
            { name: '員工班表呈現', level: [1, 2, 3] },
            { name: '員工權限管理', level: [3] },
            { name: '預約報名管理', level: [1, 2, 3] },
            { name: '跨店管理', level: [3] },
            { name: '後台數據分析', level: [1, 2, 3] },
        ]
    },
    {
        title: '進階功能',
        child: [
            { name: '優惠折扣工具', level: [3] },
            { name: '電子錢包支付', level: [2, 3] },
            { name: '會員專屬優惠', level: [1, 2, 3] },
            { name: '自訂資料輸入模組', level: [3] },
            { name: '師資課程安排', level: [1, 2, 3] },
            { name: '師資代預約功能', level: [1, 2, 3] },
            { name: '用戶子母帳戶', level: [2, 3] },
            { name: '家長追蹤學習進度', level: [2, 3] },
            { name: '學習進度報表', level: [1, 2, 3] },
            { name: '學員自我課程管理', level: [1, 2, 3] },
        ]
    },
]
const color = {
    1: '#F7F7F7',
    2: '#FFFFFF',
    3: '#DCDFEE',
}

function ProjectTypeCard(item, index, mobileState) {
    return (
        <div className={`bg-[${color[(index + 1)]}] flex flex-col items-center  w-full py-[39px] space-y-[11px] shadow-md ${index === mobileState ? '' : 'sm:hidden'} sm:py-0 sm:pt-[38px] sm:pb-[47px]`} key={index}>
            <div className='flex space-x-[9px]'>
                {
                    new Array(index + 1).fill("").map((item2, index2) => {
                        return (
                            <img className='w-[23px] h-[23px]' src={`/images/${item.img}.svg`} alt="" key={index2} />
                        )
                    })
                }
            </div>
            <div className='text-3xl text-[#3D3D3D]'> {item.title}</div>
            <div className='text-[15px] text-[#484848]'> {item.tips}</div>
            <div className='text-xl text-[#3D3D3D]'> {item.money ? item.money : '尚未公布（尚未公布）'}</div>
        </div>
    )
}

function ProjectList() {
    const [mobileState, setMobileState] = useState(1)

    const ProjectTypeCardDisplay = ProjectTypeArr.map((item, index) => ProjectTypeCard(item, index, mobileState))
    const node = ProjectListArr.map((item, index) => {
        return (
            <div className='' key={index}>
                <div className='text-xl text-white bg-blueDeep [padding:21px_37px_14px]'>{item.title}</div>
                <div className='flex text-[#3D3D3D]'>
                    {
                        new Array(3).fill("").map((item2, index2) => {
                            return (
                                <div className={`bg-[${color[(index2 + 1)]}] flex flex-col items-center w-full py-[9px] space-y-[18.6px] ${ mobileState === index2 ? '' : 'sm:hidden'} `} key={index2}>
                                    {
                                        item.child.map((item3, index3) => {
                                            if (item3.level.includes(index2 + 1)) {
                                                return <div key={index3}>{item3.name}</div>
                                            }
                                            return <div className='line-through text-[#A3A3A3]' key={index3}>{item3.name}</div>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    })

    return (
        <div className='sm:flex sm:flex-col sm:items-center sm:[padding:75px_5%]'>
            <div className='hidden  sm:flex justify-center items-center w-[337px] h-[51px] bg-blue rounded-[25px] text-center mb-[34px]'>
                <div className={`${mobileState === 0 ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]' : 'text-white'} text-[17px]  w-full`} onClick={() => { setMobileState(0) }}>入門方案</div>
                <div className={`${mobileState === 1 ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]' : 'text-white'} text-[17px]  w-full`} onClick={() => { setMobileState(1) }}>中階方案</div>
                <div className={`${mobileState === 2 ? 'text-blueDeep bg-white rounded-[25px] py-[14px] px-[20px]' : 'text-white'} text-[17px]  w-full`} onClick={() => { setMobileState(2) }}>高階方案</div>
            </div>
            <div className='flex justify-between [padding:22px_12.5%]  sm:w-full sm:[padding:22px_0]'>
                {ProjectTypeCardDisplay}
            </div>
            <div className='flex flex-col px-[12.5%] space-y-[21.6px] mb-[75px]'>
                {node}
            </div>
        </div>

    )
}

export default ProjectList