import React, { useState } from 'react'
import Navbar from './Navbar'
import Foot from './Foot'
import ScrollToAnchor from './ScrollToAnchor'

function Layout({ children }) {

    const [focus, setFocus] = useState(0)

    return (
        <>
            <Navbar focus={focus} setFocus={setFocus} />
            <ScrollToAnchor focus={focus} setFocus={setFocus} />
            <>{React.cloneElement(children, { setFocus: setFocus })}</>
            <Foot />
        </>
    )
}

export default Layout