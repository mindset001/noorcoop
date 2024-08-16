import React from 'react'
import Man from '../../../../public/images/woman.png'
import Image from 'next/image'
import { ArrowRightOutlined } from '@ant-design/icons'
import Link from 'next/link'

function About() {
  return (
    <main className='flex justify-center mt-20'>
        <div className='flex flex-col md:flex-row justify-between mt-4 w-[80%] items-center'>
            <div className='md:w-[45%]'>
                <div className=' rounded-[20px] flex w-[60%] p-[5px] gap-2 items-center '>
                   
                    <p className='text-[#00DC66] font-[600] text-[16px]'>Who we are</p>
                </div>

                <h1 className='text-[32px] font-[600]'>Why borrow with NoorCoop?</h1>
                <p className='text-[#475467] text-[18px] font-[400] mt-10'>NoorCoop was launched in 2014 with a simple goal – to fund the ambitions of businesses the length and breadth of Britain. Our leading-edge technology supports our team of business finance experts to help you access fast and flexible funding</p>

                <p className='text-[#475467] text-[18px] font-[400] mt-4'>It takes just minutes to complete your loan application. Once we have reviewed your application and you have accepted the loan terms, the funds could be with you the next working day.</p>

                <Link href='/about' className='flex  flex-col md:flex-row mt-10 gap-4 items-center text-[#4F269F]'>
                    <p>Learn more <span><ArrowRightOutlined /></span></p>
                </Link>
            </div>
            <div className='md:w-[45%] flex justify-end mt-6 md:mt-0'>
                <Image src={Man} alt='' className='md:w-full md:h-[540px]'/>
            </div>
        </div>
    </main>
  )
}

export default About