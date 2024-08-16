'use client'
import React from 'react'

import { CountUp } from 'use-count-up'

const onComplete = () => {
    // do your stuff here
    return { shouldRepeat: true, delay: 2 }
  }

function Count() {
  return (
    <main className='flex justify-center items-center mt-20'>
        <div className='bg-[#F1EFF4] rounded-[16px] w-[80%] flex flex-col md:flex-row py-10 md:px-20 justify-between'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#1570EF] font-[600] text-[60px]'><CountUp isCounting end={400} duration={3.2} onComplete={onComplete}/>+</h1>
                <p className='text-[#19054E] text-[18px] font-[500]'>Projects completed</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#1570EF] font-[600] text-[60px]'><CountUp isCounting end={600} duration={3.2} onComplete={onComplete}/>%</h1>
                <p className='text-[#19054E] text-[18px] font-[500]'>Return on investment</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1  className='text-[#1570EF] font-[600] text-[60px]'><CountUp isCounting end={10} duration={3.2} onComplete={onComplete}/>k</h1>
                <p className='text-[#19054E] text-[18px] font-[500]'>Global downloads</p>
            </div>

        </div>
    </main>
  )
}

export default Count