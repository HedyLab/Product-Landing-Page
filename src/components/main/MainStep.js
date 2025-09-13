import React from 'react'
import CardFunction from '../CardFunction'

const list1 = [
    { img: 'MainStep', title: '網路行銷、吸客', content: '投放廣告並吸引消費者點擊進網站並瀏覽您的商品' },
    { img: 'MainStep2', title: '網路消費', content: '透過流量點進的消費者，進行第一次消費' },
    { img: 'MainStep3', title: 'APP發送通知', content: '隨時發送優惠通知，促進消費者再次消費。' },
]
const lastNum1 = list1.length-1

const list2 = [
    { img: 'MainStep4', title: '網路行銷、吸客', content: '投放廣告並吸引消費者點擊進網站並瀏覽您的商品' },
    { img: 'MainStep5', title: '網路消費', content: '透過流量點進的消費者，進行第一次消費' },
    { img: 'MainStep6', title: 'APP發送通知', content: '隨時發送優惠通知，促進消費者再次消費' },
]

function MainStep(props,ref) {

    return (
        <div className='font-bold' id='MainStep' ref={ref}>
            <div className='flex flex-col  items-center bg-blue pt-[53px] pb-[53px] sm:[padding:31px_21px_30px] sm:text-center'>
                <div className='text-blueDeep text-[1.75rem] mb-[20px] sm:text-lg sm:mb-[30px]'>網路開店 三步驟</div>
                <div className='text-grayDeep text-xl mb-[45px] sm:text-base sm:mb-[30px]'>完全不了解該怎麼開始你的線上生意？使用我們的其實很簡單！</div>
                <div className='flex justify-between w-full sm:flex-col sm:justify-start'>
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
            <div className='flex flex-col  items-center  [padding:75px_216px_75px] sm:[padding:75px_21px] sm:text-center'>
                <div className='text-blueDeep text-[28px] mb-[20px] sm:text-[18px] sm:mb-[36px]'>助你一臂之力 成為業界第一</div>
                <div className='text-grayDeep text[20px] mb-[30px] leading-[23px] sm:text-[14px]'>你的產品或服務明明勝過他人，卻無奈業績成效未能好過同行呢? </div>
                <div className='text-grayDeep text[20px] mb-[45px] leading-[23px] sm:text-[14px] sm:mb-[30px]'>憑藉多年經驗及數據，我們有信心以MasterBusiness的綑綁式電商系統幫助你在業界獨佔鰲頭。 </div>
                <div className='flex justify-between w-full sm:flex-wrap sm:flex-col sm:items-center '>
                    {
                        list2 && list2.map((item, index) => {
                            return CardFunction({ item, index },false)
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col items-center text-[20px] text-white bg-[url('/images/MainStepFoot.svg')] bg-cover [padding:63px_0px] sm:bg-center ">
                <div className='mb-[36px] sm:text-lg'>貼緊世界趨勢 比別人走快一步</div>
                <div className='text-[28px] mb-[36px] sm:text-xl'>MasterBusiness 智慧商城</div>
                <div className='sm:text-lg'>帶你跨出這一步 </div>
            </div>
        </div >
    )
}

export default  React.forwardRef(MainStep)