import React from 'react'
import ZeroCardBanner from '../../components/main/ZeroCardBanner'
import ZeroCardType from '../../components/main/ZeroCardType'
import ZeroCardQA from '../../components/main/ZeroCardQA'

function zeroCard() {
    return (
        <div>
            <ZeroCardBanner/>
            <ZeroCardType/>
            <ZeroCardQA/>
        </div>
    )
}

export default zeroCard