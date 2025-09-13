import React, { useState, useEffect } from 'react'
import Headline from './HeadLine'
import ContentText from './ContentText'
import Form from './Form'

import FormInput from './FormInput'

const infoStructure = [
    {
        type: '基本資料',
        colum: [
        {
            title:'姓名',
            value:''
        },
        {
            title:'聯絡電話',
            value:''
        },
        {
            title:'公司名稱',
            value:''
        },
        {
            title:'部門職稱(非必填)',
            value:''
        },
        {
            title:'E-mail',
            value:''
        },
        {
            title:'如何得知MasterBox平台',
            value:''
        }]
    },
    {
        type: '想諮詢的方向(可複選)',
        title: ['問題1','問題1','問題1','問題1','問題1','問題1','問題1','問題1']
    }
]



function ContactProfessional() {

    const [screenWH, setScreenWH] = useState(null)
    const [inputsData, setInputsData] = useState([])
    const [inputsError, setInputsError] = useState(null)
    const [submitted, setSubmitted] = useState(false)


    const sendBtnOnClick = () => {

        if (!checkInputsData()){console.log('checkError'); return;}

        if(inputsData[0].colum[4].value !== ''){

            try {

                fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputsData[0])

                })
                setSubmitted(true)
                setInputsError(null)
                setInputsData([])

                setTimeout(() =>
                    window.location.replace(`/master-box`)
                , 2000)

            } catch (error) {

                alert('error', error)
                setSubmitted(false)
                window.location.replace(`/master-box/contact`);
            }
        }
    }

    let dataStructure = [
        {
            title:'姓名',
            value:''
        },
        {
            title:'聯絡電話',
            value:''
        },
        {
            title:'公司名稱',
            value:''
        },
        {
            title:'部門職稱(非必填)',
            value:''
        },
        {
            title:'E-mail',
            value:''
        },
        {
            title:'如何得知MasterBox平台',
            value:''
        }
    ]

    useEffect(() => {
        setInputsData(infoStructure)
    },[])

    const onInputChange = (value, title, index,parentIndex) => {

        const newInput = [...inputsData]

        newInput[parentIndex].colum[index].value = value

        setInputsData(newInput)
    }

    const checkInputsData = () => {

        console.log('checkInputsData',inputsData)
        console.log('name',inputsData[0].colum[0].value)


        let errorMessages = {}

        let name = inputsData[0].colum[0].value
        let mobile = inputsData[0].colum[1].value
        let company = inputsData[0].colum[2].value
        let email = inputsData[0].colum[4].value
        let howToKnowUs = inputsData[0].colum[5].value

        // if (name?.length === 0 || mobile?.length === 0 || company?.length === 0 || email?.length === 0 || howToKnowUs?.length === 0) errorMessages['basic']['mobile'] = new errorHandler(type.INVALID_FORMAT, 'mobile').createErrorMessage()

        // if (name?.length === 0) errorMessages['name'] = new errorHandler(type.INVALID_FORMAT, 'address').createErrorMessage()
        // if (mobile?.length === 0) errorMessages['mobile'] = new errorHandler(type.INVALID_FORMAT, 'address').createErrorMessage()
        // if (company?.length === 0) errorMessages['company'] = new errorHandler(type.INVALID_FORMAT, 'address').createErrorMessage()
        // if (email?.length === 0) errorMessages['email'] = new errorHandler(type.INVALID_FORMAT, 'address').createErrorMessage()
        // if (howToKnowUs?.length === 0) errorMessages['howToKnowUs'] = new errorHandler(type.INVALID_FORMAT, 'address').createErrorMessage()

        
        if (name == '') errorMessages['姓名'] = '必填欄位'
        if (mobile == '') errorMessages['聯絡電話'] = '必填欄位'
        if (company == '') errorMessages['公司名稱'] = '必填欄位'
        if (email == '') errorMessages['E-mail'] = '必填欄位'
        if (howToKnowUs == '') errorMessages['如何得知MasterBox平台'] = '必填欄位'

        setInputsError(errorMessages);

        console.log('eror',inputsError)
        console.log('eror',errorMessages)
        // console.log('eror',(Object.keys(errorMessages).length))



        if (Object.keys(errorMessages).length === 0 ) { setInputsError(null); return true }

    }



    // const screen = () => {
    //     setScreenWH( { w:window.innerWidth, h:window.innerHeight} )
    //     console.log('window.innerWidth',window.innerWidth)
    // }

    // useEffect(() => {

    //     window.addEventListener('resize', screen, { passive: false });
    //     window.onload = screen();
    //     return () => { window.removeEventListener('resize', screen) }

    // }, []);

    const sComponentWidth = screenWH?.w - 32

    return(
        <>
            <div className={`device  flex justify-center items-center w-full`}>
                <div className='contactProfessional max-w-[1216px]  mt-24 px-1 w-[100vw]'>

                    
                    {/* Banner */}
                    <div className={`contactUs text-white s:w-[${sComponentWidth}px]`}>

                        <div className='contactUs-title'>
                            <Headline title='取得MasterBox' color='white' size='medium' customStyles='contactUs-headline text-center'/>
                            <Headline title='專人聯繫' color='primary' size='medium' customStyles='contactUs-headline text-center'/>
                        </div>
                        

                        <div className={`flex flex-col justify-center items-center mt-6 `}>
                            <ContentText title='立即透過MasterBox建立與顧客的緊密聯繫' color='white' customStyles='contactUs-headline-text text-center' />
                            <ContentText title='若有任何需求諮詢，請於下方表單留下您的資訊，' color='white' customStyles='contactUs-headline-text text-center'/>
                            <ContentText title='Master App團隊將請專人與您聯繫，謝謝' color='white' customStyles='contactUs-headline-text text-center' />
                        </div>

                        {/* <div className={`hidden tablet:block flex-col justify-center items-center mt-6 `}>
                            <ContentText title='立即透過MasterBox建立與顧客的緊密聯繫，若有任何需求諮詢，請於下方表單留下您的資訊，Master App團隊將請專人與您聯繫，謝謝' color='white' customStyles='contactUs-headline-text-tablet' />
                        </div> */}
                    </div>


                    {/* form */}
                    <Form sendBtnOnClick={() => sendBtnOnClick()} isSent={submitted} customStyles='border-b-[1px] border-shadowGray'>

                        <div className={`leaveInfo-col s:w-[${sComponentWidth}px]`}>
                            <div className='leaveInfo-col-title'>
                                <Headline title='留下您的聯繫方式，將由專人提供諮詢服務' size='normal' customStyles='leaveInfo-col-headline text-center'/>
                            </div>
                            {
                                infoStructure.map(({type,colum},idx) => {
                                
                                    return (
                                        (idx === 0)
                                        ?
                                        <div key={idx}>
                                            <div className=''>
                                                <ContentText title={type} size='medium' customStyles='info-title'/>
                                            </div>

                                            <div className='grid grid-cols-2 gap-8 mt-8 mobile:grid-cols-1'>
                                                {
                                                    colum.map((item,index) =>{
                                                        // console.log('inputsError',inputsError)
                                                        // {
                                                        //     if((inputsError !== null)){
                                                        //         console.log('e',inputsError)
                                                        //         console.log('e',inputsError[item])
                                                        //         console.log('e',(inputsError[item.title] == item.title))

                                                        //     }else if(inputsError[item.title] == item.title){
                                                        //         console.log('d',inputsError[item.title])
                                                        //     }
                                                        // }

                                                        return(

                                                            <FormInput key={index} inputId={item.title} inputType='text' labelId={item.title} labelTitle={item.title}
                                                            onChange={(event) => onInputChange(event.target.value,item.title,index,idx)}
                                                            errorText={(inputsError !== null) ? inputsError[item.title]: ''}/>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                        </div>    
                                        :''
                                        // <div>
                                        //     <div className=''>
                                        //         <ContentText title={type} size='normal' customStyles='info-title'/>
                                        //     </div>

                                        //     <div className='grid grid-cols-4 gap-8 mt-8'>
                                        //         {
                                        //             title.map((value,index) =>{

                                        //                 return(

                                        //                     <Label key={index} title={value}/>
                                        //                 )
                                        //             })
                                        //         }
                                                
                                        //     </div>
                                        // </div>

                                    )
                                })
                            }

                        </div> 
                    </Form>
                </div>
            </div>
        </>

    )
}

export default ContactProfessional