import React from 'react'
import { AnimatePresence,motion, useScroll, useSpring } from "framer-motion";
import Headline from './HeadLine'
import ContentText from './ContentText'

function StartForFree() {
    return (

        <AnimatePresence mode={"wait"}>
            <div>
            {/* mb-[74px] */}
                <div className='startForFree flex flex-col justify-start items-center text-white h-[632px] bg-cover bg-center '>

                    <div className='flex mt-[140px] tablet:mt-[32px]'>
                        <Headline title='MasterBox' color='primary' size='large' customStyles='startForFree-headline text-center' />
                        <Headline title='串連全渠道' color='white' size='large' customStyles='startForFree-headline text-center'/>
                    </div>

                    <div className='my-8 max-w-[792px] tablet:my-4 w-[100%] px-4'>
                        <ContentText size='large' title='串連並整合顧客資料，包含即時通訊、網站、App。透過 MasterBox 的 AI 預測模型分析所有渠道資料，並提供個人化內容，打造無縫的客戶體驗' color='white' customStyles='startForFree-text text-center'/>
                    </div>

                    <div className='btn-startForFree mt-[96px] mb-[140px] tablet:mt-[48px] tablet:mb-[32px] mobile:mt-[32px] mobile:mb-[32px]'>
                            Coming soon
                    </div>
                </div>
            </div>


        </AnimatePresence>
    )
}

export default StartForFree