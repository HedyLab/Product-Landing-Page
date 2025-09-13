import React from 'react'
import TopBanner from '../../components/masterBox/TopBanner'
import Introduce from '../../components/masterBox/Introduce'
import VariousDevices from '../../components/masterBox/VariousDevices'
import OurAnalysis from '../../components/masterBox/OurAnalysis'
import StartForFree from '../../components/masterBox/StartForFree'
import SupporterAndCustomer from '../../components/masterBox/SupporterAndCustomer'
import ImMasterAndBusiness from '../../components/masterBox/ImMasterAndBusiness'
import Head from 'next/head'
import seoImg from '../../../public/images/seo_img.jpg';
import icoImg from '../../../public/Icon.ico';
function index() {
  return (
    <>
      <Head>
        <title>MasterBox-企業智慧客服訊息管理</title>
        <meta name="description" content="MasterBox一站式掌握多平台通訊系統，幫助企業解決內部團隊與客戶訊息不漏接加強兩者之間的協同合作。" />
        <meta property="og:title" content="MasterBox-企業智慧客服訊息管理" />
        <meta property="og:description" content="MasterBox一站式掌握多平台通訊系統，幫助企業解決內部團隊與客戶訊息不漏接加強兩者之間的協同合作。" />
        <meta property="og:url" content="https://masterbox.masterappinc.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://masterbox.masterappinc.com${seoImg.src}`} />
        <link
          key="icon"
          rel="icon"
          href={`https://masterbox.masterappinc.com${icoImg.src}`}
          style={{ height: '20px', width: '20px' }}
        />

      </Head>

      <TopBanner />
      <Introduce />
      <VariousDevices />
      <OurAnalysis />
      <StartForFree />
      {/* <SupporterAndCustomer/> */}
      {/* <ImMasterAndBusiness /> */}
    </>
  )
}

export default index