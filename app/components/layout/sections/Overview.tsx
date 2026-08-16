import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface OverviewProps {
  onOpenModal: () => void;
}

const Overview = ({ onOpenModal }: OverviewProps) => {
  return (
    <section className="w-full py-10" id='overview'>
        <div className='mx-auto md:flex w-full md:px-7 max-w-7xl items-stretch justify-between gap-10 md:flex-row md:gap-6 lg:gap-12'>
            <div className='w-full md:w-1/2'>
                <div className='relative h-full w-full rounded-2xl overflow-hidden'>
                    <Image src="/images/onelink-properties-project.webp"                 
                    alt='onelink properties' fill 
                    className='object-cover' loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
            </div>
            <div className='md:w-1/2 space-y-8 bg-[#F5F5DC] py-10 px-7 rounded-2xl'>
                <span className='bg-[#D2B450] py-3 px-5 text-sm md:text-md rounded-xl font-bold'>
                    THE PROJECT
                </span>
                <h2 className='text-3xl md:text-4xl lgtext-5xl mt-10'>Designed for<br/>elevated living.</h2>
                <p className='text-md md:text-lg lg:text-xl mt-10'>
                    Aurelia Residences is a contemporary collection of thoughtfully designed apartments in Dubai Creek Harbour, created for those who value refined living, meaningful spaces, and a connected urban lifestyle.

Set within one of Dubai&apos;s most promising waterfront destinations, Aurelia offers residents a peaceful retreat while remaining connected to the city&apos;s business, entertainment, and cultural landmarks.
</p>   

                <button 
                onClick={onOpenModal}
                className='flex gap-3 bg-transparent cursor-pointer hover:bg-[#D2B450] border-2 border-[#D2B450] hover:border-0 text-sm md:text-md px-4 py-2 md:px-5 md:py-3 rounded-3xl cursor-pointer'>
                    Discover Aurelia <ChevronRight />
                </button>            
            </div>
        </div>
    </section>
  )
}

export default Overview