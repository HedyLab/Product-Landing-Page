import React,{ useState , useEffect } from 'react'
import Image from 'next/image'

import Headline from './HeadLine'
import ContentText from './ContentText'
import ListItem from './ListItem'
import Link from "next/link"




const cardForProgramFee = [
    {
        program:'Month',
        describe:
        [

            {
                type: 'Light',
                price:'$300',
                billed:[{currency:'HKD',method:'/month'}],
                advantage:['支援2位後台操作人員','最多可連結5個WeChat & Facebook帳號','最多可連結1個WhatsApp帳號'],
                btnText:'Get start with Light'
            },
            {
                type: 'Standard',
                price:'$500',
                billed:[{currency:'HKD',method:'/month'}],
                advantage:['支援3位後台操作人員','最多可連結5個WeChat & Facebook帳號','最多可連結2個WhatsApp帳號'],
                btnText:'Get start with Standard'
            },
            {
                type: 'Pro',
                price:'$1780',
                billed:[{currency:'HKD',method:'/month'}],
                advantage:['支援5位後台操作人員','最多可連結20個WeChat & Facebook帳號','最多可連結5個WhatsApp帳號'],
                btnText:'Get start with Pro'
            }
        ]
    },
    {
        program:'Season',
        describe:
        [

            {
                type: 'Light',
                price:'$285',
                billed:[{currency:'HKD',method:'/month'}],
                savePrice:'save 180 HKD annually',
                advantage:['支援2位後台操作人員','最多可連結5個WeChat & Facebook帳號','最多可連結1個WhatsApp帳號'],
                btnText:'Get start with Light'
            },
            {
                type: 'Standard',
                price:'$475',
                billed:[{currency:'HKD',method:'/month'}],
                savePrice:'save 300 HKD annually',
                advantage:['支援3位後台操作人員','最多可連結5個WeChat & Facebook帳號','最多可連結2個WhatsApp帳號'],
                btnText:'Get start with Standard'
            },
            {
                type: 'Pro',
                price:'$1691',
                billed:[{currency:'HKD',method:'/month'}],
                savePrice:'save 1068 HKD annually',
                advantage:['支援5位後台操作人員','最多可連結20個WeChat & Facebook帳號','最多可連結5個WhatsApp帳號'],
                btnText:'Get start with Pro'
            }
        ]
    },
    {
        program:'Year',
        describe:
        [

            {
                type: 'Light',
                price:'$270',
                billed:[{currency:'HKD',method:'/month'}],
                savePrice:'save 360 HKD annually',
                advantage:['支援2位後台操作人員','最多可連結5個WeChat & Facebook帳號','最多可連結1個WhatsApp帳號'],
                btnText:'Get start with Light'
            },
            {
                type: 'Standard',
                price:'$450',
                billed:[{currency:'HKD',method:'/month'}],
                savePrice:'save 600 HKD annually',
                advantage:['支援3位後台操作人員','最多可連結5個WeChat & Facebook帳號','最多可連結2個WhatsApp帳號'],
                btnText:'Get start with Standard'
            },
            {
                type: 'Pro',
                price:'$1602',
                billed:[{currency:'HKD',method:'/month'}],
                savePrice:'save 2136 HKD annually',
                advantage:['支援5位後台操作人員','最多可連結20個WeChat & Facebook帳號','最多可連結5個WhatsApp帳號'],
                btnText:'Get start with Pro'
            }
        ]
    },
]

const customization = [
    {
        icon: 'masterBoxCustomizationPerson',
        title: '操作人員',
        price:'$100',
        billed:[{currency:'HKD',method:'/month'}]

    },
    {
        icon: 'masterBoxCustomizationPlatform',
        platform:[{fb:'FaceBook',weChat:'WeChat'}],
        title: '社群頻道',
        price:'$100',
        billed:[{currency:'HKD',method:'/month'}]
    },
    {
        icon: 'masterBoxCustomizationWhatsApp',
        title: 'WhatsApp',
        price:'$100',
        billed:[{currency:'HKD',method:'/month'}]
    }
]

const formStructure = [
    {
        type: '基礎',
        title:['後台操作人員','登入帳號上限','有效聯絡人','顧客資訊']
    },
    {
        type: '功能',
        title:['Web後台系統','iOS & Android手機App','多組織訊息中心及客戶中心','團隊協同作業','權限設置','指派訊息','首次對話回應','離線即時回應','關鍵字回覆','客製化回覆範本','顧客追蹤','顧客標籤分眾','數據分析','售後專員客服']
    }
]

const allPermissions = ['後台操作人員','登入帳號上限','有效聯絡人','顧客資訊','Web後台系統','iOS & Android手機App','多組織訊息中心及客戶中心','團隊協同作業','權限設置','指派訊息','首次對話回應','離線即時回應','關鍵字回覆','客製化回覆範本','顧客追蹤','顧客標籤分眾','數據分析','售後專員客服']

const programCategory = [
    {
        title:'Free',
        permissions:['後台操作人員','登入帳號上限','有效聯絡人','顧客資訊','Web後台系統','iOS & Android手機App','多組織訊息中心及客戶中心','團隊協同作業','權限設置','指派訊息'],
        permissionsDescription:{
            '後台操作人員':'最多支援3位',
            '登入帳號上限':'每個社群平台最多1個',
            '有效聯絡人':'5000位',
            '顧客資訊':'無限制'
        }
    },
    {
        title:'Standard',
        permissions:['後台操作人員','登入帳號上限','有效聯絡人','顧客資訊','Web後台系統','iOS & Android手機App','多組織訊息中心及客戶中心','團隊協同作業','權限設置','指派訊息','首次對話回應','離線即時回應','關鍵字回覆','客製化回覆範本','顧客追蹤','顧客標籤分眾'],
        permissionsDescription:{
            '後台操作人員':'最多支援8位',
            '登入帳號上限':'每個社群平台最多3個',
            '有效聯絡人':'10000位',
            '顧客資訊':'無限制'
        }
    },
    {
        title:'Pro',
        permissions:['後台操作人員','登入帳號上限','有效聯絡人','顧客資訊','Web後台系統','iOS & Android手機App','多組織訊息中心及客戶中心','團隊協同作業','權限設置','指派訊息','首次對話回應','離線即時回應','關鍵字回覆','客製化回覆範本','顧客追蹤','顧客標籤分眾','數據分析','售後專員客服'],
        permissionsDescription:{
            '後台操作人員':'最多支援12位',
            '登入帳號上限':'每個社群平台最多5個',
            '有效聯絡人':'25000位',
            '顧客資訊':'無限制'
        }
    }
]



function ThirdProgramFee() {


    const [programShow,setProgramShow] = useState([])
    const [currentProgramTitle,setCurrentProgramTitle] = useState(null)

    // console.log(programShow)
    useEffect(() => {
        setCurrentProgramTitle('Month')

        cardForProgramFee.map((item,index)=>{
            if(index === 0){

                setProgramShow(item.describe)
            }
        })
    },[])


    const onClick = (programTitle) => {

        cardForProgramFee.map((item,index)=>{

            if(item.program === programTitle){
                setProgramShow(item.describe)
                setCurrentProgramTitle(programTitle)

            }
        })
    }



    return(
        <>
            <div className={`device flex justify-center items-center w-full`}>
            {/* laptop:w-[960px] tablet:w-[640px] mobile:w-[448px] s:w-[368px]  */}
                <div className='programFee max-w-[1216px] px-1 w-[100vw] border-b-[1px] border-shadowGray'>

                    <div className='programFee-col'>
                        <Headline title='MasterBox 方案費用' color='black' size='normal-xl' customStyles='programFee-headline'/>
                    </div>

                    <div className={`programButton-bg`}>
                        <div className='grid grid-cols-3 gap-2 mt-[-7.5px]'>
                        {
                            cardForProgramFee.map((title,index)=>{
                                return (    
                                    
                                    <div key={index} className={`programButton ${(title.program === currentProgramTitle) ? 'programButton-light' :''}`} onClick={() => onClick(title.program)}>
                                        <ContentText title={title.program} size='small' customStyles='font-medium'/> 
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>

                    <div className='programFee-col  pc:overflow-x-auto'>
                        <div className="w-full">
                            <div className='grid grid-cols-3 gap-8 mt-[34px] mb-16 laptop:gap-6 pc:flex pc:my-12 pc:gap-4 mobile:my-6 mobile:gap-2'>
                                {
                                    programShow.map
                                    (
                                        (item, index) => 
                                        <div key={index} >
                                            {/* {
                                                describe.map
                                                (
                                                    (item, idx) =>  */}
                                                    <div className={`${(item.type === 'Standard') ? 'programFee-card-point':'programFee-card-normal'} rounded-3xl programFee-card`}>

                                                        <div className={`programFee-card-title`}>
                                                            <ContentText title={item.type} size='medium' color='primary'/>
                                                        
                                                            {/* <ContentText title={item.title} size='' customStyles='programFee-card-text'/> */}
                                                        </div>
        
                                                        <div className={`programFee-card-price`}>
                                                            <div  className=''>
                                                                <ContentText title={item.price} size='' customStyles='customization-price mr-2'/>
                                                            </div>
                                                            {
                                                                item.billed.map
                                                                (
                                                                    ({currency,method},idx) =>
                                                                    <div  className='flex flex-col mt-[2%]'>
                                                                        <ContentText title={currency} size='' customStyles='customization-price-text'/>
                                                                        <ContentText title={method} size='' customStyles='customization-price-text mt-[10%]'/>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                        {
                                                            (item.savePrice !== undefined)
                                                            ?<div  className='flex justify-center'>
                                                                <ContentText title={item.savePrice} size='normal' color='black_tertiary' customStyles='mb-4'/>
                                                            </div>
                                                            :''
    
                                                        }
        
                                                        <div className={`programFee-card-body ${(item.type === 'Standard') ? 'border-primary_light' :'border-cardShadow'} border-t-[1px]`}>
        
                                                            <div  className='mt-[20px]'>
                                                                <ul className='programFee-ul'>
                                                                    {
                                                                        item.advantage.map
                                                                        (
                                                                            (object, idx) => 
        
                                                                            <ListItem key={idx} customStyles='whitespace-nowrap'
                                                                            startElement={<img src="/images/masterBoxCheck.svg" alt="masterBoxCheck"/>}>
                                                                                <ContentText title={object} size='normal' customStyles='programFee-card-body-text'/>
                                                                            </ListItem>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </div>
                                                            {
                                                                (item.type === 'Standard')
                                                                ?
                                                                <Link className='' href='/master-box/contact'>
                                                                    <div className='btn-full mt-[48px] justify-center flex'>
                                                                        <ContentText title={item.btnText} size='normal' color='white'/>
                                                                    </div>
                                                                </Link>
                                                                :
                                                                <Link className='' href='/master-box/contact'>
                                                                    <div className='btn-fullBlack mt-[48px] flex justify-center'>
                                                                        <ContentText title={item.btnText} size='normal' color='white'/>
                                                                    </div>
                                                                </Link>
                                                                
                                                            }
                                                        </div>
                                                    </div>
                                                {/* )
                                            } */}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>



                    {/* 微客製項目 */}
                    <div className='mb-[37px] pc:mt-[96px]  mobile:mt-[60px]'>
                        <Headline title='微客製項目' color='black' size='normal-xl' customStyles='programFee-headline'/>
                    </div>

                    <div className='customization'>
                        <div className='w-full'>
                            <div className='grid grid-cols-3 gap-10 xlTablet:grid-cols-1'>
                            {
                                    customization.map
                                    (
                                        (item, index) => 
                                         <div key={index} className={`rounded-3xl customization-card`}>

                                            <div className={`customization-title ${(item.platform) ? 'justify-between' : 'justify-start'}`}>
                                                <div className='flex flex-row'>
                                                    <img className=' w-[48px] h-[48px] object-content' src={`/images/${item.icon}.svg`} alt="" />
                                                    <ContentText title={item.title} size='' customStyles='customization-text'/>
                                                </div>
                                                {
                                                    item.platform?.map
                                                    (
                                                        ({fb,weChat},idx) => 
                                                        <div className='flex flex-row justify-end mt-[2px] se:hidden '>
                                                            <img className=' w-[26px] h-[26px] object-content' src={`/images/${fb}.svg`} alt="" />
                                                            <img className=' w-[28px] h-[22px] object-content mt-[3px] ml-[5px]' src={`/images/${weChat}.svg`} alt="" />
                                                        </div>
                                                    )
                                                }
                                            </div>

                                            <div className={`customization-body`}>
                                                <div  className=''>
                                                    <ContentText title={item.price} size='' customStyles='customization-price mr-2'/>
                                                </div>
                                                {
                                                    item.billed.map
                                                    (
                                                        ({currency,method},idx) =>
                                                        <div  className='flex flex-col mt-[3%]'>
                                                            <ContentText title={currency} size='' customStyles='customization-price-text'/>
                                                            <ContentText title={method} size='' customStyles='customization-price-text mt-[12%]'/>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>


                    {/* 聯絡專員 */}
                    <div className='contact-border'>
                        <div className='contact-col '>
                            <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                                <div className='contact-describe'>
                                    <div className='flex mb-2 tablet:mb-[15px] mobile:mb-[30px] s:mb-3'>
                                        <Headline title='MasterBox' color='primary' customStyles='contact-title'/>
                                        <Headline title='智慧訊息管理' color='white' customStyles='contact-title'/>
                                    </div>

                                    <div className={``}>
                                        <div className='flex flex-col mb-4 contact-describe-col'>
                                            <ContentText title='用戶前三個月 50% OFF' color='white' customStyles='contact-describe-col-text'/>
                                            <ContentText title='前100名第一年 50% OFF' color='white' customStyles='contact-describe-col-text'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='contact-btn'>
                                    <div className='btn-primaryContact'>
                                        <div className='flex items-center mobile:mt-[2px]'>
                                            <div  className='mr-[10px]'>
                                                <img src="/images/sms.svg" alt="sms" className='contact-btn-icon'/>
                                            </div>
                                            <Link className='' href='/master-box/contact'>
                                                <ContentText title='聯絡專員' color='white' customStyles='contact-btn-text'/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col '>
                                <div className='flex items-center'>
                                    <img src="/images/masterBoxProgramFeeContactBg.svg" alt="masterBoxProgramFeeContactBg"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='tablet:hidden'>
                        <div className="my-12 w-[998px] tablet:hidden">
                            <img className="tablet:hidden" src={`/images/test6.svg`} alt="test6-ProgramForm"/>
                        </div>
                    </div>

                    <div className='hidden tablet:block tablet:programFee-img-form'>
                        <div className='test-img-form'>

                            <Image className='test-img mt-3'
                                width="277"
                                height="986"
                                src={`/images/test6-1.svg`} 
                                alt="test6-ProgramForm"
                            />

                            <div className=" tablet:overflow-x-auto mt-24">
                                <img className="programFee-img" src={`/images/test6-2.svg`} alt="test6-ProgramForm"/>
                            </div>
                        </div>       
                    </div>

                    <div className='hidden tablet:block'>
                        <div className="mt-6 mb-12 ">
                            <img className="scroll" src={`/images/masterBoxScroll.svg`} alt="masterBoxScroll"/>
                            <ContentText title='向左滑動' size='normal' color='grayscale' customStyles='mt-2'/>
                        </div>
                    </div> */}


                    {/* 表格 */}
                    {/* <div className='programFee-col w-[1000px] border-b-[1px] border-shadowGray'>
                        <div className='grid grid-cols-4 gap-10 my-12'> */}
                            {/* <div className={`programFee-form`}>
                                {
                                    formStructure.map
                                    (
                                        ({type,title}, index) =>
                                            <div  key={index} className=''>
                                                <div className={`programFee-form-title justify-start items-center mt-6`}>
                                                    <div className='py-4'>
                                                        <Headline title={type} size='small' />
                                                    </div>
                                                </div>
                                                <div className={`programFee-form-text justify-start items-center`}>
                                                    {
                                                        title.map((item,idx) =>{
                                                            return(
                                                                <div key={idx} className='shadow-[0px_1px_0px_rgba(0,0,0,0.25)] py-3'>
                                                                <ContentText title={item}/>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                    )
                                }
                            </div> */}

                            {/* <div className={`programFee-form`}>
                                {
                                    formStructure.map(({type,title}, index) =>{
                                        // console.log('title',title)
                                        return(
                                        <>
                                            {
                                                title.map((item,idx) =>{
                                                // console.log('item',item)

                                                    return(
                                                        <>
                                                            {
                                                                programCategory.map(({title,permissions}, c) =>{
                                                                    // console.log('title2',title + '+', c)
                                                                    // console.log('permissions',permissions)
                                                                    // console.log('c',c)
                                                                    
                                                                    return(
                                                                        <>
                                                                            <div  key={c === 0} >
                                                                                <div  className={`programFee-form-title justify-start items-center mt-6`}>
                                                                                    <div className='py-4'>
                                                                                        <Headline title={title} size='small' />
                                                                                    </div>
                                                                                </div>
                                                                                {
                                                                                    permissions.map((text,d) =>{
                                                                                        return(
                                                                                        (item === text)
                                                                                        ?
                                                                                        <div className=''>
                                                                                            <div className={`programFee-form-text justify-start items-center`}>
                                                                                                <div key={d} className='shadow-[0px_1px_0px_rgba(0,0,0,0.25)] py-3'>
                                                                                                    <ContentText title={'我是打勾'+ d}/>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        :''
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                        )
                                    })
                                }
                            </div>
                            <div className={`programFee-form`}>
                                {
                                    allPermissions.map((option, index) =>{
                                        console.log('option',option+ '+', index)

                                        return(
                                            <>
                                                {
                                                    programCategory.map((text,d) =>{
                                                        console.log('text',text.permissions + '+', d)
                                                        // console.log('permissions',permissions)
                                                        // console.log('c',c)
                                                        
                                                        return(
                                                            (d === 0 && option === text.permissions)
                                                            ?
                                                            <div className=''>
                                                                <div className={`programFee-form-text justify-start items-center`}>
                                                                    <div key={index} className='shadow-[0px_1px_0px_rgba(0,0,0,0.25)] py-3'>
                                                                        <ContentText title={'我是打勾'+ d}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :''
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div> */}
                        {/* </div>
                    </div> */}

                   

                </div>
            </div>
        </>

    )
}

export default ThirdProgramFee