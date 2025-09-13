import React from 'react'
import Headline from './HeadLine'
import ContentText from './ContentText'

function SupporterAndCustomer() {
    return (

        // MasterBox串聯全渠道

        <div className='supporterAndCustomer flex flex-col justify-start items-center text-white h-[395px] bg-cover bg-center pt-[102px] mb-[74px] sm:bg-center sm:space-y-[23px]'>


            {/* 合作夥伴，八個框 */}
            <Headline title='合作夥伴(技術支援)'/>
            
            <div className={`supporter-col`}>
                
            </div>


            {/* 服務客戶，八個框 */}
            <Headline title='服務客戶'/>
            <ContentText title='他們已經選擇 MasterBox，你還在等嗎？'/>
            <div className={`customer-col`}>
                
            </div>
            
        </div>
    )
}

export default SupporterAndCustomer