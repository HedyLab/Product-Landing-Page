import React, { useState } from 'react'
import Headline from './HeadLine'
import { AnimatePresence,motion, useScroll, useSpring } from "framer-motion";
import IframeBox from './IframeBox';
import Popup from './Popup';
import Image from 'next/image';


function TopBanner() {

    const [showVideo, setShowVideo] = useState(false)





    return(
        <AnimatePresence mode={"wait"}>
            <div className={`device flex justify-center items-center w-full`}>
                <div className='top-banner mt-24 px-1 laptop:w-[960px] laptop:max-w-full tablet:w-[640px] mobile:w-[448px] s:w-[368px]'>

                    <div className='flex justify-center items-center flex-col text-center'>
                        <Headline title='MASTERBOX IS BUILDING' color='black' size='medium' customStyles='text-center top-banner-headline'/>
                        <Headline title='BETTER NETWORKS' color='black' size='medium' customStyles='text-center top-banner-headline'/>
                    </div>


                    {/* <Link className='' href={`/master-business/monthlyPayment`} key={idx}>
                        <li className=' py-[16px] font-[400]'>{object.title}</li>
                    </Link> */}

                    {/* <Popup isShow={mobileToggle} size='rightSide' isSide='true' isOverlay='true' onClick={() => { setMobileToggle(!mobileToggle) }} customStyles={`p-[16px]`}>

                        <div className={`${mobileToggle ? 'mt-8' : ''} `}>
                            <ul className={`max-h-max items-center text-center text-[15px] w-full font-[600]`}>
                                {masterBoxSideList}
                            </ul>
                        </div>

                    </Popup> */}
                                    {/* <img src="/public/masterBoxVideo.mp4"/> */}

                    {/* watch video */}
                    <div className='btn-video mt-[20px]' onClick={()=> {setShowVideo(!showVideo)}}>
                        <div className='flex items-center'>
                            <div  className='mr-[10px]'>
                                <img className='w-[57px] h-[32px] s:w-[42.75px] s:h-[24px]' src="/images/masterBoxVideo.svg" alt="masterBoxVideo"/>
                            </div>
                            watch video
                        </div>
                    </div>

                    {
                        showVideo
                        ?
                        <div className='bg-black/40 watchVideo'>

                            <div className={`watchVideo-col`}>
                                
                                <div  className=''>
                                    <Image name='closeBtn'
                                        width="24"
                                        height="24"
                                        onClick={()=> {setShowVideo(!showVideo)}}
                                        src="/images/masterBoxClose.svg" 
                                        alt="masterBoxClose"
                                        customStyles='watchVideo-icon left-[10px] top-[10px] cursor-pointer bg-white rounded-[5px]'
                                    />

                                    {/* <img className='w-[1204px] h-[675.93px] mx-0 laptop:w-[898px] laptop:h-[574.93px] tablet:w-[598px] tablet:h-[376.93px] mobile:w-[417px] mobile:h-[243.93px] s:w-[345px] s:h-[192.93px]' src="/images/masterBoxVideo.svg" alt="masterBoxVideo"/> */}
                                    {/* <IframeBox className='w-[1204px] h-[674.93px] mx-0' src="https://www.youtube.com/embed/Yx9ZMxhHml0" alt="masterBoxVideo"/> */}

                                    {/* <IframeBox className='mobile:w-[300px] mobile:h-[200px] mx-0' src="https://www.youtube.com/embed/Yx9ZMxhHml0" alt="masterBoxVideo"/> */}

                                    <div className='xl:hidden'>
                                        <iframe width="1204px" height="600px" src="https://www.youtube.com/embed/Yx9ZMxhHml0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>

                                    <div className='hidden xl:block tablet:hidden'>
                                        <iframe width="800px" height="500px" src="https://www.youtube.com/embed/Yx9ZMxhHml0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className='hidden tablet:block mobile:hidden'>
                                        <iframe width="500px" height="300px" src="https://www.youtube.com/embed/Yx9ZMxhHml0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className='hidden mobile:block'>
                                        <iframe width="300px" height="200px" src="https://www.youtube.com/embed/Yx9ZMxhHml0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    {/* <iframe
                                        className='w-[1204px] h-[674.93px] mx-0'
                                        frameBorder={0}
                                        title=''
                                        src="/public/masterBoxVideo.mp4"
                                    // scrolling="no"
                                    ></iframe> */}
                                </div>

                                {/* <IframeBox className='w-[1204px] h-[674.93px] mx-0' src="/public/masterBoxVideo.mp4" alt="masterBoxVideo" /> */}
                            </div>
                        </div>
                        // <img src="/public/masterBoxVideo.mp4"/>

                        // <Popup isShow={showVideo} size='fit' isOverlay='true' onClick={() => { setShowVideo(!showVideo) }} customStyles={`p-[16px]`}>

                        //     <div className={``}>
                        //         <IframeBox src="/public/masterBoxVideo.mp4"/>
                        //     </div>

                        // </Popup>
                        :
                        ''
                    }




                    {/* img動畫*/}
                    <div className='banner-col'>
                        {/* <div className='banner-bg-img'>
                            <img className='w-full h-full' src="/images/masterBoxBannerBackground.svg" alt="masterBoxBannerBackground" />
                        </div>
                        <div className='banner-img'>
                            <img className='w-full h-full' src="/images/masterBoxBanner.svg" alt="masterBoxBanner" />
                        </div> */}
                        <motion.div className='banner-bg-img' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                            <img className='w-full h-full' src="/images/masterBoxBannerBackground.svg" alt="masterBoxBannerBackground" />
                        </motion.div>
                        <motion.div className='banner-img' initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1 }, once: true}}>
                            <img className='w-full h-full' src="/images/masterBoxBanner.svg" alt="masterBoxBanner" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </AnimatePresence>
    )
}

export default TopBanner