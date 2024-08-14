import React from 'react'
import FAQSection from './FaqSection'

function Questions() {
  return (
    <main className='flex flex-col justify-center items-center mt-20'>
        <div className='text-center'>
            <h1 className='text-[36px] font-[600] text-[#101828]'>Common questions answered</h1>
            <p className='text-[#475467] text-[20px] font-[400ppx] mt-6'>Everything you need to know about Noorcorp</p>
        </div>
        <div className='mt-6 w-[50%] '>
            <FAQSection/>
        </div>
    </main>
  )
}

export default Questions