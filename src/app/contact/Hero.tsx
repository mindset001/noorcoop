import React from 'react'

function Hero() {
  return (
    <main className='flex flex-col items-center mt-10'>
    <div className='w-[80%]'>
        <p className='text-[#00DC66] text-[16px] font-[600]'>Nice to meet you</p>
        <div className='flex flex-col md:flex-row justify-between mt-6 items-start'>
            <div className='md:w-[60%]'>
                <p className='text-[#101828] text-[40px] font-[600]'>Our mission is to increase the GDP of your startup</p>
            </div>
            <div className='md:w-[35%]'>
                <p className='text-[#475467] text-[16px] font-[400]'>Untitled is a technology company that builds infrastructure for your startup, so you don’t have to. Businesses of every size—from new startups to public companies—use our software to manage their businesses.</p>
                
  
            </div>
        </div>
    </div>
</main>
  )
}

export default Hero