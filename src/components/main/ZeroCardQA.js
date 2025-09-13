import React, { useState } from 'react'
import Image from 'next/image'

const QAarr = [
    '1111111111',
    '222222222222222222',
    '333333333333333',
    '44444444',
]

function ZeroCardQA() {
    const [state, setState] = useState('base')
    const [QA, setQA] = useState(null)

    const onClickQAList = (target) => {
        if(QA === target) return setQA(null)
        setQA(target)
    }

    const QAarrDisplay = QAarr.map((item, index) => {
        return (
            <div key={index}>
                <div className='flex justify-between  [padding:22px_17vw_11px] cursor-pointer sm:[padding:22px_5%_11px]' onClick={() => { onClickQAList(index) }}>
                    <div className='text-[#5C5C5C]'>常見問題集 {index +1}</div>
                    <div className='w-[12.3px] h-[12.3px]'>
                        <Image
                            src='/images/plus.svg'
                            width={12.3}
                            height={12.3}
                            alt='Image'
                            priority={true}
                        />
                    </div>
                </div>
                <div className={`${QA === index ? 'max-h-max block' : 'h-[0px] hidden'}  [padding:22px_17vw_11px] `}>{item}</div>
            </div>
        )
    })

    return (
        <div className=' px-[108px] pb-[75px] flex flex-col sm:px-[5%]'>
            <div className='bg-blueLight pt-[16px] pb-[13px] text-xl text-white text-center'>Q&A</div>
            <div className='shadow-[0_1px_1px_1px_rgba(0,0,0,0.2)] py-[24px]'>
                {QAarrDisplay}
            </div>
        </div >
    )
}

export default ZeroCardQA

