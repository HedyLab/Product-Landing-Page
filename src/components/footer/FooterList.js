import React from 'react'
import StepFunction from './FooterListFunction'


const footerListData = [
    {
      title: '產品功能',
      content: [ '功能簡介'],
    },
    {
      title: '解決方案',
      content: ['新手網店計畫','商務網店計畫','BOB多元通路','中租0卡分期'],
    },
    {
      title: '成功案例',
      content: ['MOOTO','集雅廊','丁丁海鮮','SAKI YUMMY','ADVANCE TEXTILE AND APPAREL','果樹','半熟工坊','福茗堂茶莊'],
    },
  ];


function FootFunctionList() {

    return (
        <>
        {
            footerListData.map((item, index) => {
                        return StepFunction({ item, index })
                    })
            }
        </>
    )
}

export default FootFunctionList