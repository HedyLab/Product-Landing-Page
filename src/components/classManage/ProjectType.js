import React from 'react'

const ProjectTypeArr = [
    { img: 'starGray', title: '入門方案', tips: '多種類型課程上架', money: null },
    { img: 'starGray', title: '中階方案', tips: '會員預約、請假功能一應俱全', money: null },
    { img: 'starGold', title: '高階方案', tips: '跨店管理、多種工具任您使用', money: null },
]
const color = {
    1: '#F7F7F7',
    2: '#FFFFFF',
    3: '#DCDFEE',
}

function ProjectTypeCard(item, index) {
    return (
        <div className={`bg-[${color[(index + 1)]}] flex flex-col items-center  w-full py-[39px] space-y-[11px] shadow-md`} key={index}>
            <div className='flex space-x-[9px]'>
                {
                    new Array(index + 1).fill("").map((item2,index2) => {
                        return (
                            <img className='w-[23px] h-[23px]' src={`/images/${item.img}.svg`} alt="" key={index2}/>
                        )
                    })
                }
            </div>
            <div className='text-3xl text-[#3D3D3D]'> {item.title}</div>
            <div className='text-[15px] text-[#484848]'> {item.tips}</div>
            <div className='text-xl text-[#3D3D3D]'> {item.money ? item.money : '尚未公布（尚未公布）'}</div>
        </div>
    )
}

function ProjectType() {
    const ProjectTypeCardDisplay = ProjectTypeArr.map((item, index) => ProjectTypeCard(item, index))
    return (
        <div className='flex justify-between px-[12.5%] py-[22px]'>
            {ProjectTypeCardDisplay}
        </div>
    )
}

export default ProjectType