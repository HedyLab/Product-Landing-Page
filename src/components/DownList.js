import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link"

function DownList(arr,masterBox) {
    const router = useRouter();

    const Li = arr.map((item, index) => {
        const img = item.img ? (
            <div className=' h-[20px] w-[20px] mr-[4.5px]'>
                <img className=' w-full h-full object-content' src={`/images/${item.img}.svg`} alt="" />
            </div>
        ) : null

        if (!item.content) {
            return (
                <Link href={`/${item.url}`} key={index}>
                    <li className='downListLi' key={index}>
                        {img}
                        <div>{item.title}</div>
                    </li>
                </Link>
            )
        } else {
            return (
                <li className='flex flex-col [padding:13px_13px_13px_20px] [borderBottom:1px_solid_rgba(26,55,77,0.27)]' key={index}>
                    <div className='flex '>
                        {img}
                        <div>{item.title}</div>
                    </div>
                    <div className='text-grayDeep text-sm font-bold '>{item.content}</div>
            </li>)
        }
    })

    return (
        <div className={`${masterBox ? 'downListWrap-masterBox' : 'downListWrap'}`}>
            <ul className={`${masterBox ? 'downListUl-masterBox' : 'downListUl'}`}>
                {Li}
            </ul>
        </div>
    )
}

export default DownList