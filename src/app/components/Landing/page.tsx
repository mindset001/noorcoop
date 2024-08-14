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
        <About/>
        <TestimonialSection/>
        <LendingFinanceSection/>
       
        <Questions/>
      
    </div>
  )
}

export default Landing