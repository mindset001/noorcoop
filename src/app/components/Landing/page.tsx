import React from 'react'
import Hero from './Hero'
import About from './About'
import Questions from './Questions'
import LendingFinanceSection from './LendingFinancialSection'

function Landing() {
  return (
    <div className=''>
        <Hero/>
        <About/>
        <LendingFinanceSection/>
        <Questions/>
      
    </div>
  )
}

export default Landing