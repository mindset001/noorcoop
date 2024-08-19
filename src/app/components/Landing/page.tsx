import React from 'react'
import Hero from './Hero'
import About from './About'
import Questions from './Questions'
import LendingFinanceSection from './LendingFinancialSection'
import TestimonialSection from './TestimonialSection'
import Partners from './Partners'
import ScrollToTop from './scroll'
import ContactForm from './ContactForm'
import ButtonComponent from './ButtonComponents'

function Landing() {
  return (
    <div className=''>
        <Hero/>
       <div className='hidden md:block'>
       <Partners/>
       </div>
       <div id='about'>
       <About/>
       </div>
       <div>
       <TestimonialSection/>
       </div>
        <div id='lending'>
        <LendingFinanceSection/>
        </div>
       
       <ContactForm/>
        <Questions/>
<ButtonComponent/>
        <ScrollToTop/>
      
    </div>
  )
}

export default Landing