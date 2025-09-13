import React,{ useRef } from 'react'
import { AnimatePresence,motion, useScroll, useSpring } from "framer-motion";
import Image from 'next/image'
import Headline from './HeadLine'
import ContentText from './ContentText'



const featureAnalysis = [
    {
        type:'特色一',
        title: '完整掌握客戶訊息',
        text: '追蹤消費者瀏覽紀錄、建立專屬顧客名單，將商家所有渠道的客戶資料彙整、合併消費者帳號資訊，讓客服透過一個後台就能精準掌握客戶喜好，給顧客尊榮的客服感受。'
    },
    {
        type:'特色二',
        title: '隨時掌握客服成效',
        text: 'MasterBox後台掌握最新社群觸及、曝光及商店訂單轉換狀況，透過粉絲互動及關鍵字分析，讓您掌握顧客喜好、幫助品牌持續穩定成長。'
    }
  ]

const featureOneSite = [
    {
        type:'特色一',
        title: '完整Website、APP系統，即時回覆顧客訊息',
        text: 'MasterBox提供APP後台，讓您離開辦公室，也可利用行動裝置，隨時掌握客服狀態、即時回覆消費者。'
    },
    {
        type:'特色二',
        title: '一站式回覆所有訊息',
        text: '一個Master App後台系統，即可管理所有社群平台訊息，清楚了解訊息回覆狀態，降低視窗跳轉導致回覆失誤的問題。'
    },
    {
        type:'特色三',
        title: '社群互動數據面版',
        text: '一目了然的面板設計，更清楚看懂社群經營狀況，方便品牌隨時調整營運方針。'
    },
]

const featureBOT = [
    {
        type:'特色一',
        title: 'BOT自動回覆',
        text: '無論是產品問題、店家問題，利用關鍵字分析、讓BOT自動回覆訊息，客服無須24小時待命也能即時回覆客人訊息，有效提升客服效能'
    },
    {
        type:'特色二',
        title: '客製化對話模板建立',
        text: '根據產業特性、品牌風格，建立專屬自己Style的對話模板，讓聊天機器人更親切、品牌更貼近顧客。'
    }
]

const featureGroupFunc = [
    {
        type:'特色一',
        title: '訊息群發功能',
        text: '省去無限複製貼上的循環，訊息群發功能讓您快速曝光品牌理念、優惠活動訊息，即使擁有龐大粉絲數也可以一次性發送'
    },
    {
        type:'特色二',
        title: '自訂標籤、分眾群發，提高工作效率',
        text: '根據客服、業務工作需求，自訂標籤分類客群，依據不同需求快速、精準傳達正確資訊，讓顧客覺得每個訊息都是為他量身訂做'
    }
]

const featureSynergy = [
    {
        type:'特色一',
        title: '統一管理多人團隊、掌握客服狀況',
        text: '一個後台系統管理整個客服團隊，即時掌握對話進度、調整回覆方式，加上預存回覆模板及強大搜尋功能，讓所有人都可以快速交接、上手，提供給客戶最好的服務體驗。'
    },
    {
        type:'特色二',
        title: '彈性設定角色權限，工作分工更細緻',
        text: '透過清楚的報表分析，管理者可以更好的了解團隊成員工作狀況、隨時調整工作模式，依據顧客屬性分派任務給不同業務團隊，提供給顧客最精準的服務。'
    }
]


function IntroduceFunction() {

    return(
        <>
            <AnimatePresence mode={"wait"}>
                <motion.div style={{   display: "display-internal" }}>

                    {/* 深入瞭解顧客 */}
                    <div className={`device flex justify-center items-center w-full`}>
                        <div className='introduceFunction max-w-[1216px] w-[100vw] px-1'>

                        {/* laptop:headline-laptop tablet:headline-tablet mobile:headline-normal */}
                            <Headline title='深入瞭解顧客' color='black' size='medium' customStyles='introduceFunction-headline'/>
                            <Headline title='打造最佳客服體驗' color='black' size='medium' customStyles='introduceFunction-headline'/>

                            {/* img動畫*/}
                            <div className='introduceFunction-img flex mt-16 xlPc:hidden'>
                                <div className='img-col analysis-img xlPc:hidden'>

                                    {/* 中間主圖 */}
                                    <div className=''>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                        <Image
                                                src={`/images/masterBoxIndex.svg`}
                                                width={792}
                                                height={446}
                                                objectFit="cover"
                                                alt='masterBoxIndex'
                                            />
                                    </motion.div>
                                    </div>

                                    {/* 右上區塊 */}
                                    <div className='relative bottom-[489px] left-[300px]'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2 }}}>
                                            <Image
                                                src={`/images/masterBoxFan.svg`}
                                                width={690}
                                                height={141}
                                                objectFit="cover"
                                                alt='masterBoxAnalysisFan'
                                            />
                                        </motion.div>
                                    </div>

                                    {/* 左下小圖 */}
                                    <div className='relative bottom-[17rem] right-20'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1.5 }}}>
                                            <Image
                                                src={`/images/masterBoxAnalysisCenter.svg`}
                                                width={277}
                                                height={277}
                                                objectFit="cover"
                                                alt='masterBoxAnalysisCenter'
                                            />
                                        </motion.div>
                                    </div>

                                    {/* 正下方圓圈 */}
                                    <div className='relative bottom-[570px] left-[280px] w-[300px]'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2.5 }}}>
                                            <Image
                                                src={`/images/masterBoxPlatformAnalysisToCircle.svg`}
                                                width={277}
                                                height={277}
                                                objectFit="cover"
                                                alt='masterBoxPlatformAnalysisToCircle'
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <motion.div className='introduceFunction-onceImg' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                <img className='w-full h-full' src="/images/test.svg" alt="test-analysis" />
                            </motion.div>

                            <div className='introduceFunction-col'>
                                <div className='introduceFeature grid grid-cols-2 gap-8 my-12 laptop:gap-6 tablet:gap-8 mobile:gap-6 tablet:grid-cols-1'>
                                    {
                                        featureAnalysis.map(({type,title,text},idx) => {
                                            return(
                                                <>
                                                    <div className=''>
                                                        <div className='flex justify-center items-start h-full' key={idx}>
                                                            <div className='flex flex-col mr-4'>
                                                                <Headline title={type} color='black' size='small'/>
                                                            </div>
                                                            <div className='flex flex-col max-w-[500px] laptop:w-[382px] tablet:w-[506px] mobile:w-[362px] s:w-[272px] '>
                                                                <Headline title={title} color='black' size='small'/>
                                                                <ContentText color='black_dark900' title={text} customStyles='mt-1' size='medium'/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 即時對話訊息，一次整合*/}
                    <div className={`device flex justify-center items-center w-full`}>
                        <div className='introduceFunction w-[1216px] px-1 laptop:w-[960px] laptop:max-w-full tablet:w-[640px] mobile:w-[448px] s:w-[368px]'>

                            <Headline title='即時對話訊息，一次整合' color='black' size='medium' customStyles='introduceFunction-headline'/>

                        
                            {/* img動畫*/}
                            <div className='introduceFunction-img flex mt-16 h-[530px] xlPc:hidden xlPc:h-0'>
                                <div className='img-col oneSide-img xlPc:hidden'>

                                    {/* 中間主圖 */}
                                    <div className=''>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                            <Image
                                                    src={`/images/masterBoxIntroduceOneSite.svg`}
                                                    width={900}
                                                    height={446}
                                                    objectFit="cover"
                                                    alt='masterBoxIntroduceOneSite'
                                                />
                                        </motion.div>
                                    </div>

                                      {/* 中間內部 */}
                                      <div className='relative bottom-[443px] left-[98px]'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1.5 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceOneSite2.svg`}
                                                width={190}
                                                height={192}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceOneSite2'
                                            />
                                        </motion.div>
                                    </div>

                                    {/* 左IG */}
                                    <div className='relative bottom-[30rem] right-20'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceOneSite3.svg`}
                                                width={276}
                                                height={104}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceOneSite3'
                                            />
                                        </motion.div>
                                    </div>

                                    {/* weChat */}
                                    <div className='relative bottom-[685px] left-[798px] w-[300px]'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 3 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceOneSite4.svg`}
                                                width={276}
                                                height={104}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceOneSite4'
                                            />
                                        </motion.div>
                                    </div>

                                    {/* FB */}
                                    <div className='relative bottom-[600px] left-[687px] w-[300px]'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2.5 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceOneSite5.svg`}
                                                width={276}
                                                height={104}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceOneSite5'
                                            />
                                        </motion.div>
                                    </div>

                                </div>
                            </div>

                            <motion.div className='introduceFunction-img hidden xlPc:flex mt-16' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                <img className='w-full h-full' src="/images/test2.svg" alt="test2-oneSide" />
                            </motion.div>

                            <div className='introduceFunction-col'>
                                <div className='introduceFeature grid grid-cols-2 gap-8 my-12 laptop:gap-6 tablet:gap-8 mobile:gap-6 tablet:grid-cols-1'>
                                    {
                                        featureOneSite.map(({type,title,text},idx) => {
                                            return(
                                                <>
                                                    <div className=''>
                                                        <div className='flex justify-center items-start h-full' key={idx}>
                                                            <div className='flex flex-col mr-4'>
                                                                <Headline title={type} color='black' size='small'/>
                                                            </div>
                                                            <div className='flex flex-col w-[500px] laptop:w-[382px] tablet:w-[506px] mobile:w-[362px] s:w-[272px]'>
                                                                <Headline title={title} color='black' size='small'/>
                                                                <ContentText color='black_dark900' title={text} customStyles='mt-1' size='medium'/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*增粉、轉單、客服*/}
                    <div className={`device flex justify-center items-center w-full`}>
                        <div className='introduceFunction w-[1216px] px-1 laptop:w-[960px] laptop:max-w-full tablet:w-[640px] mobile:w-[448px] s:w-[368px]'>

                            <Headline title='增粉、轉單、客服' color='black' size='medium' customStyles='introduceFunction-headline'/>
                            <Headline title='聊天機器人一次搞定！' color='black' size='medium' customStyles='introduceFunction-headline'/>

                        
                            {/* img動畫*/}
                            <div className='introduceFunction-img flex mt-16 xlPc:hidden'>
                                <div className='img-col robot-img xlPc:hidden'>

                                    {/* 中間主圖 */}
                                    <div className='xlPc:hidden'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                            <Image
                                                    src={`/images/masterBoxIntroduceBOT.svg`}
                                                    width={792}
                                                    height={446}
                                                    objectFit="cover"
                                                    alt='masterBoxIntroduceBOT'
                                                />
                                        </motion.div>
                                    </div>

                                    {/* 右邊上傳區塊 */}
                                    <div className='relative bottom-[400px] left-[650px] w-[250px] xlPc:hidden'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1.5 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceBOT2.svg`}
                                                width={174}
                                                height={248}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceBOT2'
                                            />
                                        </motion.div>

                                        {/* 右邊輸入區塊 */}
                                        <div className='relative bottom-[20px] left-[50px] xlPc:hidden'>
                                            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2 }}}>
                                                <Image
                                                    src={`/images/masterBoxIntroduceBOT3.svg`}
                                                    width={174}
                                                    height={92}
                                                    objectFit="cover"
                                                    alt='masterBoxIntroduceBOT3'
                                                />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* 右下BOT小卡 */}
                                    <div className='relative bottom-[430px] left-[600px] w-[300px] xlPc:hidden'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2.5 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceBOT4.svg`}
                                                width={277}
                                                height={132}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceBOT4'
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <motion.div className='introduceFunction-onceImg' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                <img className='w-full h-full' src="/images/test3.svg" alt="test-robot" />
                            </motion.div>

                            <div className='introduceFunction-col'>
                                <div className='introduceFeature grid grid-cols-2 gap-8 my-12 laptop:gap-6 tablet:gap-8 mobile:gap-6 tablet:grid-cols-1'>
                                    {
                                        featureBOT.map(({type,title,text},idx) => {
                                            return(
                                                <>
                                                    <div className=''>
                                                        <div className='flex justify-center items-start h-full' key={idx}>
                                                            <div className='flex flex-col mr-4'>
                                                                <Headline title={type} color='black' size='small'/>
                                                            </div>
                                                            <div className='flex flex-col w-[500px] laptop:w-[382px] tablet:w-[506px] mobile:w-[362px] s:w-[272px] '>
                                                                <Headline title={title} color='black' size='small'/>
                                                                <ContentText  color='black_dark900' title={text} customStyles='mt-1' size='medium'/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*群發工具自訂分眾推送精準訊息*/}
                    <div className={`device flex justify-center items-center w-full`}>
                        <div className='introduceFunction w-[1216px] px-1 laptop:w-[960px] laptop:max-w-full tablet:w-[640px] mobile:w-[448px] s:w-[368px]'>

                            <Headline title='群發工具' color='black' size='medium' customStyles='introduceFunction-headline'/>
                            <Headline title='自訂分眾推送精準訊息' color='black' size='medium' customStyles='introduceFunction-headline'/>

                        
                            {/* img動畫*/}
                            <div className='introduceFunction-img flex mt-10 justify-center xlPc:hidden'>
                                <div className='flex groupFunc-img xlPc:hidden'>

                                    {/* 左區 */}
                                    <div className='groupFunc-col xlPc:hidden'>
                                        <div className=''>
                                            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                                <Image
                                                        src={`/images/masterBoxIntroduceGroupFuncMobile.svg`}
                                                        width={483}
                                                        height={619}
                                                        objectFit="cover"
                                                        alt='masterBoxIntroduceGroupFuncMobile'
                                                    />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* 右區 */}
                                    <div className=' groupFunc-col mt-28 xlPc:hidden'>
                                        <div className=''>
                                            <div className='Channel-row'>
                                                <div className='Object-col'>
                                                    <div className=''>
                                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2 }}}>
                                                            <Image
                                                                src={`/images/masterBoxIntroduceGroupFuncChannel.svg`}
                                                                width={483}
                                                                height={60}
                                                                objectFit="cover"
                                                                alt='masterBoxIntroduceGroupFuncChannel'
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Object-row mt-5'>
                                                <div className='Object-col'>
                                                    <div className=''>
                                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 3 }}}>
                                                            <Image
                                                                src={`/images/masterBoxIntroduceGroupFuncObject.svg`}
                                                                width={483}
                                                                height={64}
                                                                objectFit="cover"
                                                                alt='masterBoxIntroduceGroupFuncObject'
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            
                            </div>



                            <div className='introduceFunction-onceImg'>
                                <motion.div className='img-col laptop-img' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                    <img className='w-full h-full' src="/images/test4.svg" alt="test4-groupFunc" />
                                </motion.div>
                                <div className='img-col groupFunc-col mt-28'>
                                    <div className='Channel-row'>
                                        <motion.div className='Object-col' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                            <img className='w-full h-full' src="/images/test4-1.svg" alt="test4-GroupFuncChannel" />
                                        </motion.div>
                                    </div>
                                    <div className='Object-row mt-5'>
                                        <motion.div className='Object-col' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                            <img className='w-full h-full' src="/images/test4-2.svg" alt="test4-GroupFuncObject" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className='introduceFunction-col'>
                                <div className='introduceFeature grid grid-cols-2 gap-8 my-12 laptop:gap-6 tablet:gap-8 mobile:gap-6 tablet:grid-cols-1'>
                                    {
                                        featureGroupFunc.map(({type,title,text},idx) => {
                                            return(
                                                <>
                                                    <div className=''>
                                                        <div className='flex justify-center items-start h-full' key={idx}>
                                                            <div className='flex flex-col mr-4'>
                                                                <Headline title={type} color='black' size='small'/>
                                                            </div>
                                                            <div className='flex flex-col w-[500px] laptop:w-[382px] tablet:w-[506px] mobile:w-[362px] s:w-[272px] '>
                                                                <Headline title={title} color='black' size='small'/>
                                                                <ContentText  color='black_dark900' title={text} customStyles='mt-1' size='medium'/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>


                    {/*多人協作平台彈性設定角色權限*/}
                    <div className={`device flex justify-center items-center w-full`}>
                        <div className='introduceFunction w-[1216px] px-1 laptop:w-[960px] laptop:max-w-full tablet:w-[640px] mobile:w-[448px] s:w-[368px] border-b-[1px] border-shadowGray'>

                            <Headline title='多人協作平台' color='black' size='medium' customStyles='introduceFunction-headline'/>
                            <Headline title='彈性設定角色權限' color='black' size='medium' customStyles='introduceFunction-headline'/>

                        
                            {/* img動畫*/}
                            <div className='introduceFunction-img flex mt-8 xlPc:hidden'>
                                <div className='img-col synergy-img xlPc:hidden'>

                                    {/* 中間主圖 */}
                                    <div className=''>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                            <Image
                                                    src={`/images/masterBoxIntroduceSynergy.svg`}
                                                    width={792}
                                                    height={436}
                                                    objectFit="cover"
                                                    alt='masterBoxIntroduceSynergy'
                                                />
                                        </motion.div>
                                    </div>

                                    {/* 右邊上傳區塊 */}
                                    <div className='relative bottom-[320px] left-[550px] w-[450px]'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1.5 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceSynergy2.svg`}
                                                width={442}
                                                height={378}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceSynergy2'
                                            />
                                        </motion.div>
                                    </div>

                                    {/* 右下BOT小卡 */}
                                    <div className='relative bottom-[380px] w-[450px]'>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 2 }}}>
                                            <Image
                                                src={`/images/masterBoxIntroduceSynergy3.svg`}
                                                width={290}
                                                height={150}
                                                objectFit="cover"
                                                alt='masterBoxIntroduceBOT3'
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <motion.div className='introduceFunction-onceImg' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                                <img className='w-full h-full' src="/images/test5.svg" alt="test5-synergy" />
                            </motion.div>

                            <div className='introduceFunction-col'>
                                <div className='introduceFeature grid grid-cols-2 gap-8 my-12 laptop:gap-6 tablet:gap-8 mobile:gap-6 tablet:grid-cols-1'>
                                    {
                                        featureSynergy.map(({type,title,text},idx) => {
                                            return(
                                                <>
                                                    <div className=''>
                                                        <div className='flex justify-center items-start h-full' key={idx}>
                                                            <div className='flex flex-col mr-4'>
                                                                <Headline title={type} color='black' size='small'/>
                                                            </div>
                                                            <div className='flex flex-col w-[500px] laptop:w-[382px] tablet:w-[506px] mobile:w-[362px] s:w-[272px] '>
                                                                <Headline title={title} color='black' size='small'/>
                                                                <ContentText color='black_dark900' title={text} customStyles='mt-1' size='medium'/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>


                </motion.div>
            </AnimatePresence>
            

        </>

    )
}

export default IntroduceFunction