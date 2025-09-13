import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, setIsAuthenticated } from '../slices/userSlice';
import IndexBanner from '../components/index/IndexBanner'
import IndexMain from '../components/index/IndexMain'
import Process from '../components/Process'
import IndexContent from '../components/index/IndexContent'


export default function Home() {

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch()
  return (
    <div className="">
      <Head>
        <title>Next app template</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <IndexBanner />
      <IndexMain />
      <Process />
      <IndexContent />
    </div>
  )
}




{/* <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <span className="text-xl text-blue-800 ">is authenticated: {isAuthenticated.toString()}</span>
        <button onClick={() => dispatch(setIsAuthenticated(!isAuthenticated))} className="button">setIsAuthenticated</button>
      </main> */}