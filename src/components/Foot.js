import React, { useState, useEffect } from 'react'
import FooterList from './footer/FooterList'
import Headline from '../components/masterBox/HeadLine';
import LanguageSelector from '../components/masterBox/LanguageSelector'
import { useRouter } from "next/router"
import Link from "next/link"
import ContentText from './masterBox/ContentText';


const logo = [
  'footerFacebookLogo',
  'footerInstagramLogo',
  'footerYoutubeLogo',
  'footerLineLogo',
  'footerWhatsappLogo'
]

const masterBoxLogo = [
  { title: 'masterBoxFooterFacebook', url: 'https://www.facebook.com/MasterAppInc/?ref=pages_you_manage' },
  { title: 'masterBoxFooterWhatsapp', url: 'https://api.whatsapp.com/send?phone=85267330717' },
  { title: 'masterBoxFooterYoutube', url: 'https://www.youtube.com/channel/UCASxcpTvBx6WxgtdKc9nyiA' },
  { title: 'masterBoxFooterLine', url: 'https://page.line.me/?accountId=154boxqf' },

  // 'masterBoxFooterFacebook',
  // 'masterBoxFooterWhatsapp',
  // 'masterBoxFooterYoutube',
  // 'masterBoxFooterLine',
]

const mobileLogoArr = [
  'footIconFB',
  'footIconIG',
  'footIconLine',
  'footIconEmail',
]

const footerTxt = [
  '1111人才招募',
  '營業時間：週一至週五',
  '電話：(02)2500-7680',
  '地址：104台北市建國北路二段90號3樓',
]


const company_serviceItems = [
  {
    title: 'MasterApp',
    text: [
      // {title: '認識MasterApp', url: ''},
      // { title: 'MasterBusiness', url: 'master-business' },
      // { title: "I'mMaster", url: 'master-course' },
      { title: 'MasterBox', url: 'master-box' },
      // {title: '加入我們', url: ''},
    ]
  },
  {
    title: '支援',
    text: [
      { title: '聯繫專員', url: 'master-box/contact' },
      // {title: '常見問與答', url: ''},
      { title: "價格方案", url: 'master-box/program-fee' },
    ]

  },
  {
    title: '功能介紹',
    text: [
      { title: 'MasterBox功能', url: 'master-box/function' },
      // {title: '數據中心', url: 'master-box/function'},
      // {title: 'BOT機器人', url: 'master-box/function'},
      // {title: "群發工具", url: 'master-box/function'},
      // {title: "訊息中心", url: 'master-box/function'},
      // {title: "團隊管理", url: 'master-box/function'},
    ]

  }
]



const mobileLogoIcon = () => mobileLogoArr.map((item, index) => <img className='h-[47px] w-[47px]' src={`/images/${item}.svg`} alt="" key={index} />)

const footerTxtList = () => footerTxt.map((item, index) => <div className='pr-4 mt-4 font-light leading-5' key={index} >{item}</div>
)


function Foot() {
  const router = useRouter();
  const pathname = router.pathname
  const [masterBoxLayout, setMasterBoxLayout] = useState(false);

  const [isTablet, setIsTablet] = useState('')

  const listOnClick = (target) => {
    if (target === isTablet) return setIsTablet('')
    setIsTablet(target)
  }

  useEffect(() => {
    if (pathname.includes('master-box')) {
      setMasterBoxLayout(true)
    } else {
      setMasterBoxLayout(false)
    }
  }, [pathname])


  const logoIcon = logo.map((item) => {
    return (
      <div className=' h-[48px] w-[48px] mr-[24px] cursor-pointer' key={item}>
        <img className='w-full h-full object-content' src={`/images/${item}.svg`} alt="" />
      </div>
    )
  })
  // masterBoxLogoIcon?.map((item, index) => {
  // <Link className='' href={`/${object.url}`} key={idx}>

  // }
  const masterBoxLogoIcon = masterBoxLogo.map((item, index) => {
    return (
      <div className=' h-[26.6px] w-[26.67px] mx-[12px] cursor-pointer' key={index}>
        <Link className='' href={item.url}>
          <img className='w-full h-full object-content' src={`/images/${item.title}.svg`} alt="" />
        </Link>
      </div>
    )
  })

  const list = [{ title: '繁體中文', onClick: () => { changeLanguage("zh-TW", "繁體中文") } }, { title: 'English', onClick: () => { changeLanguage("en", "English") } }]


  const mobileList = company_serviceItems?.map((item, index) => {
    if (item.text) {
      return (
        <li className='flex flex-col justify-center items-center lending-[20px]' key={index}>

          <div className=' w-[120px] ml-[10%]'>
            <div className='grid grid-cols-2 py-[16px] relative cursor-pointer justify-items-center items-center' onClick={() => { listOnClick(item.title) }}>
              <div className='cursor-pointer'>{item.title}</div>
              <div className=''> <img className='w-[10px] h-[5px] absolute cursor-pointer' src="/images/masterBoxVector.svg" alt="Vector" /></div>
            </div>
          </div>

          <ul className={`${isTablet === item.title ? 'block' : 'hidden'} w-full px-[8.26%]`}>
            {
              item.text.map((object, idx) => {
                if (!object.content) {
                  return (
                    <Link className='footer-link' href={`/${object.url}`} key={idx}>
                      <li className=' py-[16px] text-grayscale font-normal'>{object.title}</li>
                    </Link>
                  )
                } else {
                  return (
                    <li className='flex justify-center items-center w-full py-[16px] [borderBottom:1.5px_solid_#DCDFEE] ' key={idx}>
                      {/* <img className='w-[17.5px] h-[18.5px] mr-[4px]' src={`/images/${object.img}.svg`} alt="" /> */}
                      <div>{object.title}</div>
                    </li>
                  )
                }
              })
            }
          </ul>
        </li>
      )
    } else {
      return (
        <Link className='' href={`/${item.url}`} key={index}>
          <li className='flex justify-center items-center py-[16px]'>
            <div className=''>{item.name}</div>
          </li>
        </Link>
      )
    }
  })

  return (
    <>
      {
        masterBoxLayout
          ?
          <>
            {/* ${(pathname === '/master-box') ?'laptop:mt-[4.5rem]' :''} */}
            <div className={`footer `}>

              {/* PC端 */}
              <div className='footer-container'>

                <div className={`footer-row flex tablet:hidden ${(pathname === '/master-box') ? '' : 'pt-4 tablet:py-0'}`}>
                  <div className='footer-col'>
                    <div>
                      <div className=''>
                        <img className='w-full h-full object-content' src='/images/masterBoxFooterLogo.svg' alt="" />
                      </div>

                      {/* <LanguageSelector list={list} customStyles="my-6"/> */}
                      <div className='my-6'></div>

                      {/* <div className='flex flex-col'>
                        <div className='my-3 appStore-img'>
                            <img className='w-full h-full' src="/images/masterBoxAppStore.svg" alt="masterBoxAppStore" />
                        </div>
                        <div className='my-3 googlePlay-img'>
                            <img className='w-full h-full' src="/images/masterBoxGooglePlay.svg" alt="masterBoxGooglePlay" />
                        </div>
                    </div> */}
                    </div>
                  </div>
                  <div className='grid grid-cols-3 gap-20 footer-col laptop:gap-9'>
                    {
                      company_serviceItems.map(({ title, text }, index) => {
                        return (
                          <ul key={index} className='footer-ul'>
                            <div className="footer-li-col">
                              <li className="footer-li">
                                <div className="footer-li-title">
                                  {title}
                                </div>
                              </li>
                              {
                                text.map((item, idx) => {
                                  return (

                                    <li className="footer-li" key={idx}>
                                      <Link className='' href={`/${item.url}`}>
                                        <div className="footer-li-text">
                                          {item.title}
                                        </div>
                                      </Link>
                                    </li>
                                  )
                                })
                              }
                            </div>
                          </ul>
                        )
                      })
                    }
                  </div>
                </div>

                <div className='flex justify-between pb-4 tablet:hidden'>
                  <div className='flex justify-between footer-col'>
                    <div className='mr-[40px] font-medium'>© 2021 MasterApp Inc. All Rights Reserved.</div>
                    <div className='flex'>
                      <Link className='' href='/master-box/privacyPolicy'>
                        <div className='mr-[5px] font-medium cursor-pointer'>隱私權政策</div>
                      </Link>

                      <div className='mx-[10px]'>|</div>

                      <Link className='' href='/master-box/termsOfService'>
                        <div className='ml-[5px] font-medium cursor-pointer'>服務條款</div>
                      </Link>
                    </div>
                  </div>
                  <div className='flex footer-col'>
                    {masterBoxLogoIcon}
                  </div>
                </div>

              </div>


              {/* 移動端 */}
              {/* ${(pathname === '/master-box') ?'' :'mt-6'} */}
              <ul className={`hidden tablet:block max-h-max items-center text-center mt-5 text-black text-[15px] w-[100vw] font-[600]`}>
                {mobileList}
                {/* <li className='flex justify-center items-center py-[11px] px-[35px] mt-[60px] '>
                    <div className='btn2 max-w-max'>瞭解更多</div>
                </li> */}
              </ul>

              <div className='footer-block-col'>

                <div className='flex ml-[26%] mt-10 w-[224px] mobile:ml-[23%] s:ml-[24%]'>
                  {masterBoxLogoIcon}
                </div>

                <div className='flex ml-[29%] mt-6 mb-3 w-[192px] mobile:ml-[26%] s:ml-[27%]'>
                  <div className='flex'>
                    <Link className='' href='/master-box/privacyPolicy'>
                      <ContentText size='medium' title='隱私權政策' customStyles='font-black mr-[5px] cursor-pointer' />
                    </Link>
                    <ContentText size='medium' title='|' customStyles='font-black mx-[10px]' />

                    <Link className='' href='/master-box/termsOfService'>
                      <ContentText size='medium' title='服務條款' customStyles='font-black ml-[5px] cursor-pointer' />
                    </Link>

                  </div>
                </div>

                <div className='flex ml-[10%] mb-6 w-[350px] mobile:max-w-[326px] mobile:ml-[5%] s:ml-[8%]'>
                  <ContentText size='medium' title='© 2021 MasterApp Inc. All Rights Reserved.' customStyles='font-black' />
                </div>

                {/* <div className='flex ml-[23%] w-[228px] mobile:w-[215px] mobile:ml-[22%]'>
                  <div className='mx-2 mb-6 appStore-img'>
                      <img className='w-full h-full mobile:w-[106px] mobile:h-[34px]' src="/images/masterBoxAppStore.svg" alt="masterBoxAppStore" />
                  </div>
                  <div className='mx-2 mb-6 googlePlay-img'>
                      <img className='w-full h-full mobile:w-[106px] mobile:h-[34px]' src="/images/masterBoxGooglePlay.svg" alt="masterBoxGooglePlay" />
                  </div>
              </div> */}

              </div>

            </div>
          </>

          :
          <div className='bg-[#080F31] max-h-max font-bold text-white sm:[padding:40px_21px] sm:bg-[#1C325A]'>
            {/* px端 */}
            <div className='[padding:70px_80px] [borderBottom:1px_solid_#475569] sm:[padding:0px] sm:hidden' >
              <div className='text-[1.75rem] mb-[30px]'>連絡我們</div>
              <div className='flex justify-between mb-[40px]'>
                <div className='flex flex-col w-3/6'>
                  <div className='text-2xl mb-[20px]'>台灣</div>
                  <div className='mb-[10px]'>服務時間：星期一至五 上午 9 點至下午 6 點</div>
                  <div className='mb-[10px]'>聯絡電話：02-2500-7680</div>
                  <div className='mb-[10px]'>手機號碼：0909-503-386</div>
                  <div>公司地址：台北市中山區建國北路二段90號3樓</div>
                </div>
                <div className='flex flex-col w-3/6'>
                  <div className='text-2xl mb-[20px]'>香港</div>
                  <div className='mb-[10px]'>服務時間：星期一至五 上午 9 點至下午 6 點</div>
                  <div className='mb-[10px]'>聯絡電話：+852 6733 0717</div>
                  <div>公司地址：B624, Hi-Tech industrial Centre, Chai Wan Kok Street, Tsuen Wan,Hong Kong</div>
                </div>
              </div>
              <div className='flex'>
                {logoIcon}
              </div>
            </div>
            <div className='flex justify-between bg-[length:68px] p-[30px_80px] sm:hidden'>
              <div>© 2021 MasterApp Inc. All Rights Reserved.</div>
              <div className='flex'>
                <div className='mr-[66px] cursor-pointer'>隱私權政策</div>
                <div className='cursor-pointer'>服務條款</div>
              </div>
            </div>



            {/* 移動端 */}
            <div className='relative flex-col hidden sm:flex'>
              {/* {footerListArrary} */}
              <div className='w-full mb-2 pb-[32px]'>
                <img className='h-[45.64px] ' src='/images/FooterMobileLogo.svg' alt="" />
              </div>
              <div className='w-[42px]  absolute right-[2px] top-[16.75px] flex flex-col	justify-center items-center'>
                <img className='w-[19.5px] mb-2 mt-0' src='/images/PageTop.svg' alt="" />
                <div className='font-light leading-5  text-[16px] text-center font-extralight tracking-wider'>PAGE TOP</div>
              </div>

              <FooterList />
              <div className='h-[1px] w-full bg-white mt-[10px] mb-[28px]'></div>
              <div className='space-y-[12px] text-white mb-[40px]'>
                {footerTxtList()}
              </div>
              <div className='flex justify-around px-[8%]'>
                {mobileLogoIcon()}
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Foot