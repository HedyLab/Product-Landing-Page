import React from 'react'
import { useState } from 'react'
import { useRouter } from "next/router";

const pageObj = {
    login: ['LoginBanner', 'LoginMain', 'LoginProcess', 'LoginContent'],
    main: ['MainBanner', 'MainReason#', 'MainStep', 'MainFunction'],
}

function scrollToAnchor({focus,setFocus}) {
    const router = useRouter()
    const pageType = router.pathname.split('/')[1]

    const scrollToAnchor = (item) => {
        if (item) {
            let anchorElement = document.getElementById(item);
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }

    return (
        <div className=' flex flex-col items-center fixed top-[50%] right-[20px] space-y-[12px] z-10 sm:hidden' id='MainReason'>
            {
                pageObj[pageType] && pageObj[pageType].map((item, index) => {
                    if (index === 0) {
                        return (
                            <img
                                className='h-[16px] w-[16px] object-fill cursor-pointer '
                                src="/images/home.svg"
                                alt=""
                                key={item}
                                onClick={() => { scrollToAnchor(item); setFocus(index) }}
                            />
                        )
                    } else {
                        return (
                            <img
                                className='h-[7px] w-[7px] object-fill cursor-pointer'
                                src={`/images/${focus === index ? 'ScrollToAnchorSpotBlue' : 'ScrollToAnchorSpotWhite'}.svg`}
                                alt=""
                                key={item}
                                onClick={() => { scrollToAnchor(item); setFocus(index) }}
                            />
                        )
                    }
                })
            }
        </div>
    )
}

export default scrollToAnchor