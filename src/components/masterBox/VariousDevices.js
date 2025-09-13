import React from 'react'
import { AnimatePresence,motion, useScroll, useSpring } from "framer-motion";

import Headline from './HeadLine'
import ContentText from './ContentText'

function VariousDevices() {
    return(

        <AnimatePresence mode={"wait"}>
            <div className={`device flex justify-center items-center w-full`}>
                <div className='variousDevices mt-[70px] px-1 max-w-[1216px] mobile:mt-[64px] w-[100vw]'>

                    <div className='flex justify-center items-center flex-col'>

                        <div className='laptop:hidden flex flex-col items-center'>
                            <Headline title='MasterBox包含Web版智慧訊息管理系統' color='black' size='medium'  customStyles='text-center variousDevices-headline'/>
                            <Headline title='iOS 及Android App版後台操作系統' color='black' size='medium' customStyles='text-center variousDevices-headline'/>
                        </div>

                        <div className='hidden variousDevices-headline-col'>
                            <Headline title='MasterBox包含Web版' color='black' size='medium'  customStyles='variousDevices-headline text-center'/>
                            <Headline title='智慧訊息管理系統' color='black' size='medium'  customStyles='variousDevices-headline text-center'/>
                            <Headline title='iOS 及Android App版' color='black' size='medium'  customStyles='variousDevices-headline text-center'/>
                            <Headline title='後台操作系統' color='black' size='medium' customStyles='variousDevices-headline text-center'/>
                        </div>

                        <div className='flex justify-center items-center flex-col my-8 mx-2 px-4 max-w-[832px] w-[100%]'>
                            <ContentText color='black_dark900' size='medium' title='無論何時何地，MasterBox都能讓你橫跨多平台限制' customStyles='text-center'/>
                            <ContentText color='black_dark900' size='medium' title='快速回覆來自不同社群的眾多訊息，即時解決顧客疑難雜症，提升業績、讓品牌快速成長！' customStyles='text-center'/>
                        </div>
                    </div>


                    {/* img動畫*/}
                    {/* <div className='mobile-img mb-[40px]'>
                        <img className='w-full h-full' src="/images/masterBoxMobile.svg" alt="masterBoxMobile" />
                    </div> */}
                    <motion.div className='mobile-img mb-[40px]' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                        <img className='w-full h-full' src="/images/masterBoxMobile.svg" alt="masterBoxMobile" />
                    </motion.div>

                    {/* <div className='variousDevices-col w-[350px] m-auto flex justify-between s:w-[328px]'>
                        <div className='appStore-img mb-[40px]'>
                            <img className='w-full h-full' src="/images/masterBoxAppStore.svg" alt="masterBoxAppStore" />
                        </div>
                        <div className='googlePlay-img mb-[40px]'>
                            <img className='w-full h-full' src="/images/masterBoxGooglePlay.svg" alt="masterBoxGooglePlay" />
                        </div>
                    </div> */}

                </div>
            </div>
        </AnimatePresence>

    )
}

export default VariousDevices