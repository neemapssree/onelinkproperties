import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Overview = () => {
  return (
    <section className="w-full py-10">
        <div className='mx-auto flex w-full max-w-7xl items-stretch justify-between gap-10 md:flex-row md:gap-12'>
            <div className='w-full md:w-1/2'>
                <div className='relative h-full w-full rounded-2xl overflow-hidden'>
                    <Image src="/images/onelink-properties-project.webp"                 
                    alt='onelink properties' fill 
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
            </div>
            <div className='md:w-1/2 space-y-8 bg-[#F5F5DC] py-10 px-7 rounded-2xl'>
                <span className='bg-[#D2B450] py-3 px-5 text-md rounded-xl font-bold'>
                    THE PROJECT
                </span>
                <h2 className='text-5xl mt-10'>Designed for elevated living.</h2>
                <p className='text-xl mt-10'>
                    Aurelia Residences is a contemporary collection of thoughtfully designed apartments in Dubai Creek Harbour, created for those who value refined living, meaningful spaces, and a connected urban lifestyle.

From spacious interiors and floor-to-ceiling windows to premium finishes and resort-inspired amenities, every detail has been considered to create a home that feels sophisticated, comfortable, and effortlessly modern.

Set within one of Dubai&apos;s most promising waterfront destinations, Aurelia offers residents a peaceful retreat while remaining connected to the city&apos;s business, entertainment, and cultural landmarks.
</p>   

                <button className='flex gap-3 bg-transparent cursor-pointer hover:bg-[#D2B450] border-2 border-[#D2B450] hover:border-0 text-md px-5 py-3 rounded-3xl cursor-pointer'>
                    Discover Aurelia <ChevronRight />
                </button>            
            </div>
        </div>
    </section>
  )
}

export default Overview