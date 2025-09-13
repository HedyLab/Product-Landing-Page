import React from 'react'
import MarketingBanner from '../../components/marketing/MarketingBanner'
import MarketingOurServe from '../../components/marketing/MarketingOurServe'
import MarketingCard from '../../components/marketing/MarketingCard'
import MarketingCase from '../../components/marketing/MarketingCase'
import MarketingFoot from '../../components/marketing/MarketingFoot'

function marketing() {
    return (
        <>
            <MarketingBanner />
            <MarketingOurServe />
            <MarketingCard />
            <MarketingCase />
            <MarketingFoot />
        </>
    )
}

export default marketing