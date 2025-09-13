import React from 'react'
import { AnimatePresence,motion, useScroll, useSpring } from "framer-motion";
import Headline from './HeadLine'
import ContentText from './ContentText'

function OurAnalysis() {
    return(

        <AnimatePresence mode={"wait"}>
            <div className={`device flex justify-center items-center w-full`}>

                {/* 快速掌握即時數據，對準「精準受眾」 */}
                <div className='ourAnalysis mt-12 px-1 max-w-[1216px] mobile:mt-[64px] w-[100vw]'>

                    <div className='flex justify-center items-center flex-col'>
                        
                        <div className='tablet:hidden flex flex-col items-center'>
                            <Headline title='快速掌握即時數據，對準「精準受眾」' color='black' size='medium' customStyles='ourAnalysis-headline text-center'/>
                        </div>

                        <div className='hidden ourAnalysis-headline-col'>
                            <Headline title='快速掌握即時數據，' color='black' size='medium' customStyles='ourAnalysis-headline text-center'/>
                            <Headline title='對準「精準受眾」' color='black' size='medium' customStyles='ourAnalysis-headline text-center'/>
                        </div>

                        <div className='flex justify-center items-center flex-col my-8 mx-4  max-w-[832px] w-[100%] px-4 tablet:hidden'>
                                <ContentText color='black_dark900' size='medium' title='藉由MasterBox多功能數據版面看懂您的社群經營狀態、顧客來源，透過精準數據分析粉絲興趣及客服狀況，' customStyles='text-center'/>
                                <ContentText color='black_dark900' size='medium' title='消費者對那些產品有興趣？是不是應該調整社群素材？是否有即時回覆？客人問題都被解決了嗎？' customStyles='text-center'/>
                                <ContentText color='black_dark900' size='medium' title='客服有沒有需要被調整的地方？' customStyles='text-center'/>
                                <ContentText color='black_dark900' size='medium' title='每一個數字跳動，都代表著一個意義，讓您能更清楚了解品牌粉絲的喜好趨勢、調整社群方向更明確' customStyles='text-center'/>
                        </div>

                        <div className='hidden ourAnalysis-text'>
                            <ContentText color='black_dark900' size='medium' title='藉由MasterBox多功能數據版面看懂您的社群經營狀態、顧客來源，透過精準數據分析粉絲興趣及客服狀況、消費者對那些產品有興趣？是不是應該調整社群素材？是否有即時回覆？客人問題都被解決了嗎？客服有沒有需要被調整的地方？' customStyles='text-center'/>
                            <ContentText color='black_dark900' size='medium' title='每一個數字跳動，都代表著一個意義，讓您能更清楚了解品牌粉絲的喜好趨勢、調整社群方向更明確' customStyles='text-center'/>
                        </div>
                    </div>

                   


                   
                    

                    {/* img動畫*/}
                    <div className='img-row flex mb-[70px]'>
                        <motion.div className='img-col ourAnalysis-img' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                            <img className='w-full h-full' src="/images/test7.svg" alt="test7-ourAnalysis" />
                        </motion.div>
                        {/* <div className='img-col ourAnalysis-img'>
                            <img className='w-full h-full' src="/images/test7.svg" alt="test7-ourAnalysis" />
                        </div> */}
                        {/* <div className='img-col laptop-img'>
                            <img className='w-full h-full' src="/images/masterBoxLaptop.svg" alt="masterBoxLaptop" />
                        </div>
                        <div className='img-col analysis-col'>
                            <div className='fans-row flex'>
                                <div className='fans-col'>
                                    <img className='fans-img' src="/images/masterBoxFanInteraction.svg" alt="masterBoxFanInteraction" />
                                </div>
                                <div className='fans-col'>
                                    <img className='fans-img' src="/images/masterBoxFanIncrease.svg" alt="masterBoxFanIncrease" />
                                </div>
                                <div className='fans-col'>
                                    <img className='fans-img' src="/images/masterBoxFanActive.svg" alt="masterBoxFanActive" />
                                </div>
                                <div className='fans-col'>
                                    <img className='fans-img' src="/images/masterBoxFanLost.svg" alt="masterBoxFanLost" />
                                </div>
                            </div>
                            <div className='massage-row'>
                                <div className='massage-col'>
                                    <img className='w-full h-full' src="/images/masterBoxMessageVolume.svg" alt="masterBoxMessageVolume" />
                                </div>
                            </div>
                            <div className='platform-row'>
                                <div className='platform-col'>
                                    <img className='w-full h-full' src="/images/masterBoxPlatformAnalysis.svg" alt="masterBoxPlatformAnalysis" />
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </AnimatePresence>
    )
}

export default OurAnalysis