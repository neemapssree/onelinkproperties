import { ArrowUpCircle, ArrowUpIcon } from 'lucide-react';
import React from 'react'
import AmenitiesSlider from './AmenitiesSlider';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className='w-full bg-black py-16'>
        <div className='w-full max-w-7xl mx-auto md:flex md:gap-10'>
            <div className='md:w-1/2 text-white'>
                <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                    LET&apos;S TALK
                </p>
                <h3 className="my-2 font-serif text-3xl text-white md:text-4xl">
                   Make your next move.
                </h3>
                <p className="text-lg mt-5">
                   Share your details and our property consultant
will contact you with pricing, availability,
floor plans and payment options.
                </p>
            </div> 
            <div className='md:w-1/2 bg-[#fdfdfd] p-7 rounded-3xl'>
                <p className="text-md uppercase tracking-[0.18em]">
                    GET PROJECT DETAILS
                </p>  
                <ContactForm />              
            </div> 
        </div>
    </section>
  )
}

export default Contact