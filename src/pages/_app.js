import Layout from '../components/Layout'
import React, { useState } from 'react';
import  { useRouter } from 'next/router';
import store from "../store";
import { Provider } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import "../styles/LoginBanner.css";
import '../styles/globals.scss';



function MyApp({ Component, pageProps }) {


  // const [screenWH, setScreenWH] = useState(null)
  // const [isMasterBox, setIsMasterBox] = useState(false);
  // const router = useRouter()
  // const pathname = router.pathname
  
  // useEffect(() => {
  
  //   // (screenWH?.w < 1024) ? setIsShrink(true) : setIsShrink(false)
  
  //   if ( (pathname.includes('master-box')) && screenWH?.w < 640) {
  //     setIsMasterBox(true)
  //   }
  
  // }, [pathname])
  
  
  // const screen = () => {
  //   console.log('window.innerWidth',window.innerWidth)
  //   setScreenWH( { w:window.innerWidth, h:window.innerHeight} )
  // }
  // screen();


  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </Provider>
  );
}

export default MyApp;