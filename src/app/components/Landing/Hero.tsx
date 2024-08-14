import React from 'react'
import Man from '../../../../public/images/man.png'
import Image from 'next/image'
import { ArrowRightOutlined } from '@ant-design/icons'

function Hero() {
  return (
    <main className='flex justify-center'>
        <div className='flex justify-between mt-4 w-[80%] items-center'>
            <div className='w-[45%]'>
                <div className='bg-[#F4EEFE] rounded-[20px] flex w-[65%] p-[5px] gap-2 items-center '>
                    <p className='bg-[white] rounded-[16px] p-[5px]'>We’re hiring!</p>
                    <p className='flex gap-2 items-center'>Join our sales team <span><ArrowRightOutlined /></span></p>
                </div>

                <h1 className='text-[45px] font-[600]'>Take your business further with a fast and flexible loan</h1>
                <p className='text-[#475467] text-[18px] font-[400] mt-4'>Borrow from £75,000 to £500,000, with loan terms from 6 months to 5 years at competitive rates.
                You’re always in control, so we don’t charge any additional fees if you want to repay your loan early.</p>

                <div className='flex mt-10 gap-4'>
                    <button className='border border-[#D0D5DD] rounded-[8px] py-2 w-[242px] h-[60px]'>Talk to a specialist</button>
                    <button className='bg-[#4F269F] text-[#fff] py-2 w-[242px] rounded-[8px] h-[60px]'>Apply now</button>
                </div>
            </div>
            <div className='w-[45%]'>
                <Image src={Man} alt='' className='w-full h-[540px]'/>
            </div>
        </div>
    </main>
  )
}

export default Hero