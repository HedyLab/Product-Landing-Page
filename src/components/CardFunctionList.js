import React from 'react'
import CardFunction from './CardFunction'


const list = [
    { img: 'gear', num: 90, title: '多種功能', content: '提供商業模板與自訂義區塊，打造品牌專屬網站' },
    { img: 'gearUsers', num: 90, title: '續約率％', content: '提供商業模板與自訂義區塊，打造品牌專屬網站' },
    { img: 'cardDesign', num: 90, title: '版面客製化', content: '提供商業模板與自訂義區塊，打造品牌專屬網站' },
]
const lastNum = list.length-1

function CardFunctionList() {
    return (
        <div className='flex flex-col items-center text-[#1A374D] w-full'>
            <div className='text-[1.75rem] text-center max-text-mx mb-[88px] sm:text-lg sm:mb-[21px]'>最創新的開店平台 10,000+商店共同見證</div>
            <div className='flex justify-between w-full max-w-[976px] mb-[116px] sm:flex-wrap sm:flex-col sm:mb-[63px]'>
                {
                    list && list.map((item, index) => {
                        if(index==lastNum){
                            return CardFunction({ item, index })
                        }else{
                            return CardFunction({ item, index },true)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default CardFunctionList