import React from 'react'
import Image from 'next/image'

function ClassManageShare() {
    return (
        <div className='flex flex-col justify-start items-center text-white h-[395px] bg-cover bg-center bg-[url("/images/ClassManageFoot.svg")] pt-[102px] mb-[74px] sm:bg-center sm:space-y-[23px]'>
            <div className='text-[28px] mb-[46px] sm:text-xl sm:mb-0'>範例分享</div>
            <div className='flex items-center justify-between w-full px-[20%] mb-[23px] sm:text-lg sm:px-[4%]'>
                <div className="h-[30px] min-w-[30px] bg-[url('/images/arrayLeftBtn.svg')] " ></div>
                <div className='w-[46%] text-[20px] sm:w-full sm:px-[20px]'>17FIT 是健身場館的首選平台，它其實降低了很多場館管理成本</div>
                <div className="h-[30px] min-w-[30px] bg-[url('/images/arrayRightBtn.svg')] " ></div>
            </div>
            <div className='flex justify-center items-center sm:px-[30px]'>
                <div className='w-[69px] h-[1px] bg-[#C4C4C4] mr-[10px] sm:w-[68px]'></div>
                <div className='text-[16px] text-[#D8D8D8]' >好時光女生運動樂園創辦人 Steffi</div>
            </div>
        </div>
    )
}

export default ClassManageShare