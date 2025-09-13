import React, { useEffect, useRef } from 'react'
import MainBanner from '../../components/main/MainBanner'
import MainReason from '../../components/main/MainReason'
import MainStep from '../../components/main/MainStep'
import MainFunction from '../../components/main/MainFunction'
import { useIsVisible } from 'react-is-visible'

function main({ setFocus }) {
    const MainBannerRef = useRef()
    const MainReasonRef = useRef()
    const MainStepRef = useRef()
    const MainFunctionRef = useRef()
    const MainBannerView = useIsVisible(MainBannerRef, { once: false })
    const MainReasonView = useIsVisible(MainReasonRef, { once: false })
    const MainStepView = useIsVisible(MainStepRef, { once: false })
    const MainFunctionView = useIsVisible(MainFunctionRef, { once: false })

    useEffect(() => {
        if (MainBannerView)setFocus(0)
        if (MainReasonView)setFocus(1)
        if (MainStepView)setFocus(2)
        if (MainFunctionView)setFocus(3)
    }, [MainBannerView, MainReasonView,MainStepView,MainFunctionView])

    return (
        <>
            {/* <MainBanner ref={MainBannerRef} />
            <MainReason ref={MainReasonRef} />
            <MainStep ref={MainStepRef}/>
            <MainFunction ref={MainFunctionRef}/> */}
            <MainBanner/>
            <MainReason />
            <MainStep/>
            <MainFunction/>
        </>
    )
}

export default main