import React from 'react'
import Image from 'next/image'
import { AnimatePresence,motion, useScroll, useSpring } from "framer-motion";

import Headline from './HeadLine'
import ContentText from './ContentText'



const ourMission = [
    {
        title: 'Our Mission',
        text: ''
    },
    {
        title: '協助中小企業數位轉型',
        text: '假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假'
    },
    {
        title: '進入國際市場',
        text: '假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假'
    },
    {
        title: '不受網域限制',
        text: '假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字假'
    },
  ]


const featureFunc = [
    { img:'masterBoxBOT',name:'BOT自動回覆',text:'AI自動回覆訊息功能，透過關鍵字即時回應顧客，有效提升客服' },
    { img:'masterBoxPush',name:'分眾群發工具',text:'透過系統分析有效分類消費者，將品牌訊息一次性傳達給所有精準客戶群' },
    { img:'masterBoxOneSite',name:'一站式回覆',text:'一個Master App後台系統，即可管理所有社群平台訊息，降低視窗跳轉導致回覆失誤的問題' },
    { img:'masterBoxSynergy',name:'團隊協同管理',text:'一個帳號、多使用者同時操作，方便管理者掌控客服品質、任務合理分配' },
    { img:'masterBoxGraspMessage',name:'掌握客戶信息',text:'整合消費者不同平台身分、合併消費者資訊，讓客服更能精準掌握顧客心理' },
    { img:'masterBoxCustomizedDialogue',name:'客製化對話流程',text:'可根據產業特性、品牌風格，設計專屬自己Style的對話模板，讓品牌更貼近顧客' },
    { img:'masterBoxIntegratePlatform',name:'多渠道整合',text:'所有社群平台串連、讓媒體資源多平台曝光，消費者能有更多管道進入品牌商城' },
    { img:'masterBoxAnalysisCenter',name:'社群互動數據分析中心',text:'完整呈現社群平台經營狀況，透過數據優化社群經營方式' }
]

function Introduce() {
    return(

        <AnimatePresence mode={"wait"}>
            <div className={`device flex justify-center items-center w-full`}>
                <div className='introduce mt-[240px] px-1 w-[1216px] laptop:w-[960px] laptop:max-w-full  tablet:w-[640px] tablet:mt-[120px] mobile:w-[448px] mobile:mt-[64px] s:w-[368px]'>

                    {/*全新訊息整合平台*/}
                    <Headline title='全新訊息整合平台' color='black' size='medium' customStyles='text-center introduce-headline'/>
                    <Headline title='與全世界緊密連接' color='black' size='medium' customStyles='text-center introduce-headline'/>


                    <div className='flex justify-center items-center flex-col py-8 px-4 max-w-[832px]  w-[100%] s:hidden text-center'>
                        <ContentText color='black_dark900' title='整合所有通訊渠道，無須跳轉視窗，節省時間、產生高效能！' size='medium' customStyles='text-center'/>
                        <ContentText color='black_dark900' title='收整顧客主動詢問的對話視窗，留下瀏覽紀錄、興趣產品追蹤，將顧客分眾貼標！' size='medium' customStyles='text-center'/>
                        <ContentText color='black_dark900' title='每個對話任務都能指派負責人，處理進度清楚又明瞭' size='medium' customStyles='text-center'/>
                    </div>

                    <div className='hidden s:block py-6 px-2 w-[100%]'>
                        <ContentText color='black_dark900' title='整合所有通訊渠道，無須跳轉視窗，節省時間、產生高效能！收整顧客主動詢問的對話視窗，留下瀏覽紀錄、興趣產品追蹤，將顧客分眾貼標！每個對話任務都能指派負責人，處理進度清楚又明瞭' customStyles='text-center'/>
                    </div>
                    
                    {/* img動畫*/}
                    {/* <div className='introduce-img mb-[70px]'>
                        <img className='w-full h-full' src="/images/masterBoxDataAnalysis.svg" alt="masterBoxDataAnalysis" />
                    </div> */}
                    <motion.div className='introduce-img mb-[70px]' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                        <img className='w-full h-full' src="/images/masterBoxDataAnalysis.svg" alt="masterBoxDataAnalysis" />
                    </motion.div>



                    {/* 串聯眾多社群平台*/}
                    <Headline title='串聯眾多社群平台' color='black' size='medium' customStyles='introduce-headline'/>

                    {/* img動畫*/}
                    {/* <div className='introduce-img mb-[70px] tablet:mt-[20px] mobile:hidden'>
                        <img className='w-full h-full' src="/images/test8.svg" alt="masterBoxAnimationLogo" />
                    </div> */}
                    <motion.div className='introduce-img my-[70px] tablet:hidden' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                        <img className='w-full h-full' src="/images/test8.svg" alt="masterBoxAnimationLogo" />
                    </motion.div>
                    <motion.div className='hidden animation-img tablet:flex' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                        <img className='w-full h-full' src="/images/test8-1.svg" alt="masterBoxAnimationLogo" />
                    </motion.div>

                    {/* <div className='hidden animation-img'>
                        <img className='w-full h-full' src="/images/test8-1.svg" alt="masterBoxAnimationLogo" />
                    </div> */}




                    {/* 特色功能to 八個框*/}

                    <Headline title='特色功能' color='black' size='medium' customStyles='introduce-headline'/>


                    <div className='flex justify-center items-center flex-col mt-8 max-w-[832px] w-[100%] s:hidden px-4'>
                        <ContentText color='black_dark900' size='medium' title='整合所有社群平台訊息系統，一個後台即可管理所有訊息' customStyles='text-center'/>
                        <ContentText color='black_dark900' size='medium' title='一個系統即可串接官網及社群通訊軟體，打造全通路CRM客戶分析，追蹤客戶跨渠道行為軌跡' customStyles='text-center'/>
                    </div>

                    <div className='hidden s:block mt-8 w-[100%] px-2'>
                        <ContentText color='black_dark900' size='normal' title='整合所有社群平台訊息系統，一個後台即可管理所有訊息 一個系統即可串接官網及社群通訊軟體，打造全通路CRM客戶分析，追蹤客戶跨渠道行為軌跡' customStyles='text-center'/>
                    </div>

                    <div className='introduce-col max-w-[1200px] w-[100vw]'>
                        <div className='flex justify-center flex-wrap'>
                            {
                                featureFunc.map((item,index) => {
                                    return (
                                        <div className='featureFunc' key={index}>
                                            {/* <div className='mt-[10px] mb-[10px]'>
                                                <Image
                                                    src={`/images/${item.img}.svg`}
                                                    width={170}
                                                    height={170}
                                                    objectFit="cover"
                                                    className='cursor-pointer'
                                                    alt={item.img}
                                                />
                                            </div> */}
                                            <motion.div className='mt-[10px] mb-[10px]' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                                <Image
                                                    src={`/images/${item.img}.svg`}
                                                    width={170}
                                                    height={170}
                                                    objectFit="cover"
                                                    className='cursor-pointer'
                                                    alt={item.img}
                                                />
                                            </motion.div>
                                            <Headline title={item.name} color='black' size='small' customStyles='text-center mb-2'/>
                                            <ContentText color='black_dark900' title={item.text} customStyles='text-center'/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                     {/* Our Mission 取消此欄位 */}
                    {/* <div className='introduce-col w-[1200px] mt-[70px] border-y-[0.5px]'>
                        <div className='grid grid-cols-4 gap-2 my-12'>
                            {
                                ourMission.map(({title,text},idx) => {
                                    return(
                                        <>
                                            <div className='ourMission'>
                                                <div className='flex flex-col justify-center' key={idx}>
                                                    <Headline title={title} color='black' size='small'/>
                                                    <ContentText title={text} customStyles='mt-1'/>
                                                </div>
                                            </div>
                                        </>

                                    )
                                })
                            }
                        </div>
                    </div> */}

                </div>
            </div>
        </AnimatePresence>
    )
}

export default Introduce