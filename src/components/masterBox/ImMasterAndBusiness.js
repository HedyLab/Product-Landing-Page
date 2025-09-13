import React from 'react'
import Headline from './HeadLine'
import ContentText from './ContentText'
import Link from "next/link"



function ImMasterAndBusiness() {
    return (

        <>
            {/* <div className='flex flex-col justify-between h-[353px] laptop:mb-8 laptop:h-[276px] tablet:hidden'> */}

            <div className='flex flex-col justify-between mb-[67px] laptop:mb-8 '>
                {/* flex flex-row se:p-0 s:pr-5  */}
                <div className='div-row tablet:flex-col tablet:h-full'>
    
                    {/* ImMaster */}
                    {/* w-[50%] flex flex-col m-auto se:w-[50%] s:w-fit */}
                    {/* className='w-full overflow-hidden' */}
                    {/* aspect-[5/3]  */}
                    <div className='div-col overflow-hidden w-[50%] tablet:w-[100%] '>

                        <div className='w-full aspect-[7/3] laptop:aspect-[5/3] tablet:aspect-[18/3] flex justify-center items-center'>
                            <img src="/images/masterBoxImMaster.png" alt='testImMaster' className='imMaster-img object-cover w-full h-full'/>
                        </div>

                        {/* <div className='imMaster ml-32 tablet:ml-[16%]'> */}
                            <div className='imMaster-col'>
                                <Headline title='ImMaster' color='white' size='normal-xl' customStyles='imMaster-col-headline'/>
                                <ContentText title='智慧課程管理' color='white' customStyles='imMaster-col-text'/>
                                <Link className='' href={`/master-course`}>
                                    <div className='btn-opacity mt-[20px]'>點擊前往</div>
                                </Link>
                            </div>
                            {/* <div></div> */}
    
                        {/* </div> */}
                    </div>
    
    
                    {/* MasterBusiness */}
                    <div className='div-col overflow-hidden w-[50%] tablet:w-[100%]'>
    
                        <div className='w-full aspect-[7/3] laptop:aspect-[5/3] tablet:aspect-[18/3] flex justify-center items-center'>
                            <img src="/images/masterBoxImMasterBusiness2.png" alt='testImMaster' className='masterBusiness-img w-full h-full object-cover'/>
                        </div>
                        {/* ml-1 laptop:ml-[10.75rem]  */}
                        {/* <div className='masterBusiness ml-[5%] tablet:ml-[38%]'> */}
                            {/* <div></div> */}
                            <div className='masterBusiness-col'>
                                <Headline title='MasterBusiness' color='white' size='normal' customStyles='masterBusiness-col-headline'/>
                                <ContentText title='智慧商城' color='white' customStyles='masterBusiness-col-text'/>
                                <Link className='' href={`/master-business`}>
                                    <div className='btn-opacity mt-[20px]'>點擊前往</div>
                                </Link>
                            </div>

                        {/* </div> */}
    
                    </div>
                </div>
        
            </div>

            
        

                  {/* <div className='masterBusiness ml-1 laptop:ml-3 '>
                            <div></div>
                            <div className='masterBusiness-col'>
                                <Headline title='MasterBusiness' color='white' size='normal-xl' customStyles='masterBusiness-col-headline'/>
                                <ContentText title='智慧商城' color='white' customStyles='masterBusiness-col-text'/>
                                <Link className='' href={`/master-business`}>
                                    <div className='btn-opacity mt-[20px]'>點擊前往</div>
                                </Link>
                            </div>
                        </div> */}

        </>
    )
}

export default ImMasterAndBusiness