import React from 'react'
import StepFunction from './StepFunction'


const list = [
    { img: 'Step1Icon', title: 'STEP1.註冊', content: 'MasterApp 後台，完成資料填寫' },
    { img: 'Step2Icon', title: 'STEP2.諮詢', content: '完成註冊，MasterApp專人將會在兩個工作日內與您聯繫，了解品牌需求與走向' },
    { img: 'Step3Icon', title: 'STEP3.評估', content: '了解品牌需求後，將會分析評估最適合品牌的功能，開啟MasterApp系統' },
    { img: 'Step4Icon', title: 'STEP4.開通', content: '完成開通，即可立即使用，開始您的Business!' },
]


function StepFunctionList() {

    return (
        <>
        {
            list.map((item, index) => {
                        return StepFunction({ item, index })
                    })
            }
        </>
    )
}

export default StepFunctionList