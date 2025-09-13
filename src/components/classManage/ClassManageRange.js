import React from 'react'
import Image from 'next/image'
import CardRectangle from '../CardRectangle'

const CardRectangleArr = [
    { name: '空間租借', img: 'round-house' },
    { name: '運動健身', img: 'fitness-centre' },
    { name: '美髮美甲', img: 'fingernail' },
    { name: '醫療診所', img: 'HospitalHouse' },
    { name: '顧問家教', img: 'consultantTutor' },
    { name: '旅遊包車', img: 'car' },
]

function ClassManageRange() {
    return (
        <div className='mainPaddingX flex flex-col items-center pt-[74px] space-y-[40px] sm:space-y-[20px]'>
            <div className='text-blueDeep text-[28px] sm:text-[18px]'>適用對象</div>
            <div className='text-grayDeep text-[23px] sm:text-[16px]'>不再需要傳統紙本紀錄！效率、智慧場館經營</div>
            <div className='flex justify-center flex-wrap'>
                {
                    CardRectangleArr.map((item,index) => {
                        return (
                            <div className='flex flex-col justify-center items-center h-[253px] w-[172px] rounded-[13px] hover:[border:4px_solid_#DCDFEE] sm:w-[46%] sm:px-[2%] sm:h-[253px]' key={index}>
                                <div className='w-[50px] h-[50px] mb-[40px]'>
                                    <Image
                                        src={`/images/${item.img}.svg`}
                                        width={50}
                                        height={50}
                                        objectFit="cover"
                                        className='cursor-pointer'
                                        alt='Image'
                                    />
                                </div>
                                <div className='text-blueDeep text-[20px] '>{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ClassManageRange