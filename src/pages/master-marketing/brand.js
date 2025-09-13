import React from 'react'
import BrandBanner from '../../components/marketing/BrandBanner'
import BrandContent from '../../components/marketing/BrandContent'
import BrandMain from '../../components/marketing/BrandMain'
import BrandTag from '../../components/marketing/BrandTag'
import BrandList from '../../components/marketing/BrandList'

function brand() {
    return (
        <>
            <BrandBanner />
            <BrandContent />
            <BrandMain />
            <BrandTag />
            <BrandList />
        </>
    )
}

export default brand