import React from 'react'
import Hero from './Hero'
import About from './About'
import Questions from './Questions'
import LendingFinanceSection from './LendingFinancialSection'
import TestimonialSection from './TestimonialSection'

function Landing() {
  return (
    <div className=''>
        <Hero/>
       <div id='about'>
       <About/>
       </div>
       <div>
       <TestimonialSection/>
       </div>
        <div id='lending'>
        <LendingFinanceSection/>
        </div>
       
        <Questions/>
      
    </div>
  )
}

export default Landing