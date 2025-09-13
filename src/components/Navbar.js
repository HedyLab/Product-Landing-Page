import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
import DownList from './DownList'
import { useRouter } from "next/router";
import Link from "next/link"
import Popup from './masterBox/Popup';


const navBarArr = {
    '/': [
        [
            {
                name: '服務項目',
                child: [
                    { title: 'MasterBusiness 智慧商城', url: 'master-business' },
                    { title: 'ImMaster 智慧課程管理', url: 'master-course' },
                    { title: 'ImMaster 行銷顧問', url: 'master-marketing' }
                ]
            },
            { name: '行銷顧問', url: 'marketing' },
            { name: '品牌案例', url: 'brand' },
            { name: '關於我們', url: 'about' }
        ],
        [
            {
                name: '後台註冊',
                url: ''
            },
        ]
    ],
    '/master-business': [
        [
            {
                name: '開店方案 ',
                child: [
                    { img: 'navBarShop', title: '開店方案', content: 'MasterApp 幫助您以最輕鬆的方式實現網路開店，每月自動轉帳付款，0利息、0壓力，可隨時終止合約！' },
                    { img: 'navBarYear', title: '年繳方案', url: 'master-business/annualPayment' },
                    { img: 'navBarMonth', title: '月付訂閱', url: 'master-business/monthlyPayment' },
                ]
            },
            {
                name: '解決方案 ',
                child: [
                    { img: 'navBarBag', title: '解決方案', content: '沒有時間管理網店後台？沒有擁有廣告投放技術？您可以參考以下方案！讓您輕鬆建立品牌形象，創造亮眼營收。' },
                    { img: 'navBarList', title: '代運營服務', url: 'master-business/solution' },
                    { img: 'navBarAD', title: '數位廣告', url: 'master-business/solution' },
                ]
            },
            {
                name: '零卡分期',
                url: 'master-business/zeroCard'
            },
            {
                name: '成功案例 ',
                child: [
                    { img: 'navBarAD', title: '000', content: '000' },
                    { img: 'navBarAD', title: '000', url: 'master-business/solution' },
                    { img: 'navBarAD', title: '000', url: 'master-business/solution' },
                ]
            },
        ],
        [
            {
                name: 'DEMO展示',
                url: 'master-business/DEMO'
            },
            {
                name: '專人諮詢',
                url: 'master-business/consult'
            }
        ]
    ],
    '/master-course': [
        [
            {
                name: '產品功能',
                url: 'master-course/function'
            },
            {
                name: '方案價格',
                url: 'master-course/project'
            },
            {
                name: '知識分享',
                url: 'master-course/'
            },
        ],
        [
            {
                name: '聯絡我們',
                url: 'master-course/'
            },
            {
                name: '免費註冊',
                url: 'master-course/'
            }
        ]
    ],
    '/master-box': [
        [
            { name: '功能介紹', url: 'master-box/function' },
            { name: '方案費用', url: 'master-box/program-fee' },
            { name: '專人聯繫', url: 'master-box/contact' },
            // {
            //     name: '繁體中文',
            //     child: [
            //         { title: '繁體中文', url: 'master-business' },
            //         { title: 'English', url: 'master-course' },
            //     ]
            // },
            // { name: '登入 | 註冊', url: '' },

        ],
        [
            // {
            //     name: '1個月免費試用',
            //     url: ''
            // },
        ]
    ],


}


const getNavBarItems = (pathname) => {

    let key

    if(pathname.includes('master-box')){
        key = Object.keys(navBarArr).find(item => item.includes('master-box'));

        const navBarItems = navBarArr[key];

        if (navBarItems) return navBarItems;

        return navBarArr['/master-box'];

    }else if(pathname.includes('master-business')){
        
        key = Object.keys(navBarArr).find(item => item.includes('master-business'))

        const navBarItems = navBarArr[key];

        if (navBarItems) return navBarItems;
    
        return navBarArr['/'];
        
    }else if(pathname.includes('master-course')){
        
        key = Object.keys(navBarArr).find(item => item.includes('master-course'))

        const navBarItems = navBarArr[key];

        if (navBarItems) return navBarItems;
    
        return navBarArr['/'];

    }else{
        key = Object.keys(navBarArr).find(item => item.includes(pathname));

        const navBarItems = navBarArr[key];

        if (navBarItems) return navBarItems;
    
        return navBarArr['/'];
    }

    

}


function Navbar({ focus, setFocus }) {
    const router = useRouter();
    const pathname = router.pathname //main
    const info = getNavBarItems(pathname)

    const [display, setDisPlay] = useState('')
    const [headerState, setHeaderState] = useState(false)
    const [masterBoxHeader, setMasterBoxHeader] = useState(false)
    const [mobileToggle, setMobileToggle] = useState(false)
    const [mobileCurrent, setMobileCurrent] = useState('')

    // const info = navBarArr['/']

    const mobileListOnClick = (target) => {
        if (target === mobileCurrent) return setMobileCurrent('')
        setMobileCurrent(target)
    }
    const [masterBoxLayout, setMasterBoxLayout] = useState(false);

    useEffect(() => {
        
        const onScroll = () => {

            if (window.scrollY > 0 && headerState === false) { setHeaderState(true) }
            if (window.scrollY === 0) { setHeaderState(false) }
        }

        const masterBoxScroll = () => {

            if (window.scrollY > 0 && masterBoxHeader === false) { setMasterBoxHeader(true) }
            if (window.scrollY === 0) { setMasterBoxHeader(false) }
        }

        if(!pathname.includes('master-box')){
            setMasterBoxLayout(false)
            setHeaderState(true)

            window.addEventListener('scroll', onScroll)
            return () => {
                window.removeEventListener('scroll', onScroll)
            }

        }else{
            setMasterBoxLayout(true)
            setHeaderState(false)
            
            window.addEventListener('scroll', masterBoxScroll)
            return () => {
                window.removeEventListener('scroll', masterBoxScroll)
            }
        }

    }, [headerState,pathname])


    const leftNode = (
        <div className='flex items-center text-blueDeep space-x-[30px]'>
            {/* <Link className='min-w-[128px] min-h-[25px]' href='/' >
                <img className='w-full h-full cursor-pointer' src='/images/logo.svg' alt="" />
            </Link> */}
            {
                info && info[0].map((item, index) => {
                    if (item.child) {
                        return (
                            <div className='relative flex items-center justify-center'
                                onMouseEnter={() => { setDisPlay(item.name) }}
                                onMouseLeave={() => { setDisPlay('') }}
                                key={index}
                            >
                                <div className='flex cursor-pointer'>
                                    <div className='mr-[7.25px] whitespace-nowrap '>{item.name}</div>
                                    <div className='min-w-[10.5px] min-h-[6px]'>
                                        <img className='w-full h-full cursor-pointer' src='/images/down.svg' alt="" />
                                    </div>
                                </div>
                                <div className={`${display === item.name ? 'block' : 'hidden'} `}>{DownList(item.child)}</div>
                            </div>
                        )
                    } else {
                        return (
                            <Link href={`/${item.url}`} key={index}>
                                <div className='cursor-pointer whitespace-nowrap' key={index}>{item.name}</div>
                            </Link>
                        )
                    }
                })
            }
        </div>
    )

    const rightNode = (
        <div className='flex items-center whitespace-nowrap '>
            {
                info && info[1].map((item, index) => {
                    return (
                        <Link className='' href={`/${item.url}`} key={index}>
                            <div className='btn  cursor-pointer mr-[15px]' key={index}>{item.name}</div>
                        </Link>
                    )
                })
            }
        </div >
    )


    const masterBoxLeftNode = (
        
        info && info[0].map((item, index) => {

            if (item.child) {
                return (
                    <div className='flex items-center text-blueDeep space-x-[30px] mr-[20px]'>
                        <div className='relative flex items-center justify-center'
                            onMouseEnter={() => { setDisPlay(item.name) }}
                            onMouseLeave={() => { setDisPlay('') }}
                            key={index}
                        >
                            <div className='flex cursor-pointer'>
                                <div className='mr-[7.25px] whitespace-nowrap '>{item.name}</div>
                                <div className='min-w-[10.5px] min-h-[6px]'>
                                    <img className='w-full h-full cursor-pointer' src='/images/down.svg' alt="" />
                                </div>
                            </div>
                            <div className={`${display === item.name ? 'block' : 'hidden'} `}>{DownList(item.child,masterBoxLayout)}</div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={index} className={`flex items-center space-x-[30px] mr-[20px]`}>
                        <Link href={`/${item.url}`}>                        
                            <div className={`${(index === 4) ? 'text-primary' :'text-blueDeep'} cursor-pointer whitespace-nowrap`}>{item.name}</div>
                        </Link>
                    </div>
                )
            }
        })
    )

    const masterBoxRightNode = (
        <div className='flex items-center whitespace-nowrap '>
            {
                info && info[1].map((item, index) => {
                    return (
                        <Link className='' href={`/${item.url}`} key={index}>
                            <div className='btn-primary  cursor-pointer mr-[15px]' key={index}>{item.name}</div>
                        </Link>
                    )
                })
            }
        </div >
    )

    const mobileList = info && info[0].map((item, index) => {
        if (item.child) {
            return (
                <li className='flex flex-col justify-center items-center   lending-[20px]' key={index}>
                    <div className='flex justify-center items-center py-[20px] relative' onClick={() => { mobileListOnClick(item.name) }}>
                        <div className='mr-0'>{item.name}</div>
                        <img className='w-[7.8px] h-[4.7px] absolute left-[70px]' src="/images/navbarDown.svg" alt="" />
                    </div>
                    <ul className={`${mobileCurrent === item.name ? 'block' : 'hidden'} w-full px-[8.26%]`}>
                        {
                            item.child.map((item2, index2) => {
                                if (!item2.content) {
                                    return (
                                        <Link className='' href={`/${item2.url}`} key={index2}>
                                            <li className=' py-[20px] font-[400]'>{item2.title}</li>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <li className='flex justify-center items-center w-full py-[20px] [borderBottom:1.5px_solid_#DCDFEE] ' key={index2}>
                                            <img className='w-[17.5px] h-[18.5px] mr-[4px]' src={`/images/${item2.img}.svg`} alt="" />
                                            <div>{item2.title}</div>
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
                    <li className='flex justify-center items-center py-[20px]'>
                        <div className=''>{item.name}</div>
                    </li>
                </Link>
            )
        }
    })

    const masterSidebar = [
        { name: '首頁', url: 'master-box' },
        { name: '功能介紹', url: 'master-box/function' },
        { name: '方案費用', url: 'master-box/program-fee' },
        { name: '專人聯繫', url: 'master-box/contact' },
    ]

    const masterBoxSideList = masterSidebar?.map((item, index) => {
        if (item.child) {
            return (
                <li className='flex flex-col justify-center items-center   lending-[20px]' key={index}>
                    <div className='flex justify-center items-center py-[20px] relative' onClick={() => { mobileListOnClick(item.name) }}>
                        <div className='mr-0'>{item.name}</div>
                        <img className='w-[7.8px] h-[4.7px] absolute left-[70px]' src="/images/navbarDown.svg" alt="" />
                    </div>
                    <ul className={`${mobileCurrent === item.name ? 'block' : 'hidden'} w-full px-[8.26%]`}>
                        {
                            item.child.map((item2, index2) => {
                                if (!item2.content) {
                                    return (
                                        <Link className='' href={`/${item2.url}`} key={index2}>
                                            <li className=' py-[20px] font-[400]'>{item2.title}</li>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <li className='flex justify-center items-center w-full py-[20px] [borderBottom:1.5px_solid_#DCDFEE] ' key={index2}>
                                            <img className='w-[17.5px] h-[18.5px] mr-[4px]' src={`/images/${item2.img}.svg`} alt="" />
                                            <div>{item2.title}</div>
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
                    <li className='flex justify-center items-center py-[20px]'>
                        <div className=''>{item.name}</div>
                    </li>
                </Link>
            )
        }
    })

    return (
        <div
            className={`
            ${headerState && 'bg-white shadow-[0_5px_20px_rgba(0,0,0,0.5)]'}
             fixed  w-full  text-sm font-bold z-10 flex items-center 
            ${mobileToggle ? 'sm:h-screen sm:bg-white' : ''}        
            z-20 sm:flex-col sm:justify-start sm:max-h-max sm:top-0 sm:bottom-0  tablet:flex-col tablet:justify-start tablet:max-h-max tablet:top-0 tablet:bottom-0  
            `}
        >
            {
                masterBoxLayout
                ?
                <>
                        <div className={`  ${masterBoxHeader ? 'backdrop-blur' :'bg-white'} mainPaddingX flex justify-between items-center m-auto w-[1204px] laptop:w-[960px] tablet:w-full tablet:m-0 tablet:px-4 h-[56px]`}>

                            <Link className='self-start mt-3 ' href='/master-box' >
                                <div className='min-w-[137px] min-h-[32px]'>
                                    <img className='w-full h-full cursor-pointer' src='/images/masterBoxLogo.svg' alt="masterBoxLogo" />
                                </div>
                            </Link>

                            {/* 漢堡 */}
                            <div className='hidden w-[28px] h-[30px] tablet:block' onClick={() => { setMobileToggle(!mobileToggle) }}>
                                <img className='w-full h-full ' src="/images/hamburger.svg" alt="" />
                            </div>
                            
                            {/* pc端 */}
                            <div className={`flex items-center justify-end w-full tablet:hidden  ml-[30px]`}>
                                {masterBoxLeftNode}
                                {masterBoxRightNode}
                            </div>

                        </div>

                     {/* 移動端 */}
                    
                     <Popup isShow={mobileToggle} isSide='true' isOverlay='true' onClick={() => { setMobileToggle(!mobileToggle) }} customStyles={`p-[16px]`}>
                        <div className={`${mobileToggle ? 'mt-8' : ''} `}>
                            <ul className={`max-h-max items-center text-center text-[15px] w-full font-[600]`}>
                                {masterBoxSideList}
                            </ul>
                        </div>
                    </Popup>

                </>

                :
                <>
                    <div className={`mainPaddingX flex justify-between items-center w-full py-[28.5px] sm:py-[23px] sm:px-[4%]`}>

                        <Link className='self-start ' href='/' >
                            <div className='min-w-[159px] min-h-30px] sm:min-w-[160px] sm:min-h-[30.7px]'>
                                <img className='w-full h-full cursor-pointer' src='/images/logo.svg' alt="" />
                            </div>
                        </Link>

                        {/* 漢堡 */}
                        <div className='hidden w-[28px] h-[30px] sm:block' onClick={() => { setMobileToggle(!mobileToggle) }}>
                            <img className='w-full h-full ' src="/images/hamburger.svg" alt="" />
                        </div>
                        
                        {/* pc端 */}
                        <div className={`flex items-center justify-between w-full sm:hidden  ml-[30px]`}>
                            {leftNode}
                            {rightNode}
                        </div>


                        <div className={`flex items-center whitespace-nowrap sm:hidden text-[#1A374D'`}>
                            <div>服務地區：</div>
                            <div className='flex '>
                                <div>台灣</div>
                                <div className='mx-[4px] min-w-[16px]'>
                                    <img className='w-full h-full' src='/images/iconTaiwan.svg' alt="" />
                                </div>
                                <div className='mx-[4px] min-w-[10.5px]'>
                                    <img className='w-full h-full cursor-pointer' src='/images/down.svg' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 移動端 */}
                    <ul className={`${mobileToggle ? 'sm:block' : ''} max-h-max  hidden items-center text-center text-blueDeep text-[15px]  w-full font-[600] text-blueDeep`}>
                        {mobileList}
                        <li className='flex justify-center items-center py-[11px] px-[35px] mt-[60px] '>
                            <div className='btn2 max-w-max'>瞭解更多</div>
                        </li>
                    </ul>
                </>
            }
        </div>
    )
}

export default Navbar