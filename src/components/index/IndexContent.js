import React from 'react'
import CardServer from '../CardServer'
import CardFunction from '../CardFunction'
const list1 = [
    { img: 'gear', num: 90, title: '多種功能', content: '提供商業模板與自訂義區塊，打造品牌專屬網站' },
    { img: 'gearUsers', num: 90, title: '續約率％', content: '提供商業模板與自訂義區塊，打造品牌專屬網站' },
    { img: 'cardDesign', num: 90, title: '版面客製化', content: '提供商業模板與自訂義區塊，打造品牌專屬網站' },
]
const lastNum1 = list1.length-1
const list1BorderR=true


const list2 = [
    { img: 'cardIcon1', titleEn: 'MasterBusiness', title: '智慧商城', url: '/master-business' },
    { img: 'cardIcon2', titleEn: 'ImMaster', title: '智慧課程管理', url: '/master-course' },
    // { img: 'cardPeople3', titleEn: 'ImMaster', title: '行銷顧問', url: 'master-marketing' },
    { img: 'cardIcon3', titleEn: 'MasterBox', title: '智慧訊息管理', url: '/master-box' },

]

function LoginContent() {
    return (
        <div className='mainPaddingX flex flex-col items-center text-[#1A374D] font-bold' id='LoginContent'>
            {/* {<CardFunctionList />} */}
            <div className='flex flex-col items-center text-[#1A374D] w-full'>
                <div className='text-[1.75rem] text-center max-text-mx mb-[88px] sm:text-lg sm:mb-[21px]'>最創新的開店平台 10,000+商店共同見證</div>
                <div className='flex justify-between w-full max-w-[976px] mb-[116px] sm:flex-wrap sm:flex-col sm:mb-[63px]'>
                {
                        list1 && list1.map((item, index) => {
                            if(lastNum1==index){
                                return CardFunction({ item, index },false)
                            }else{
                            return CardFunction({ item, index },true)
                            }
                        })
                    }
                </div>
            </div>
            <div className='text-[1.75rem] mb-[2rem] sm:text-[18px] sm:mb-[22.5px]'>創立一個帳號，管理多種店鋪</div>
            <div className='text-grayDeep mb-[74px] text-center sm:text-base sm:mb-[30px] sm:text-[16px]'>智慧營運SaaS產品，商家、場館、美容、餐飲，功能模組化，不受市場侷限。</div>
            <div className='flex justify-between w-full max-w-[1057px] mb-[116px] sm:mb-[64.23px] sm:flex-wrap sm:flex-col sm:items-center'>
                {
                    list2 && list2.map((item, index) => {
                        return CardServer({ item, index })
                    })
                }
            </div>

        </div>
    )
}
export default LoginContent
