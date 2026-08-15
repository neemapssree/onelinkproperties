import { ChevronRight, LucideDollarSign, MapPin } from 'lucide-react'

const Banner = () => {
  return (
    <div className="w-full bg-[url('/images/onelink-properties-header.webp')] h-[700px] bg-cover bg-center">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-black">
            <div className='flex h-full md:max-w-7xl w-full gap-15 items-end mx-auto pt-5 pb-10'>
                <div className="md:w-1/2">
                    <h1 className='text-3xl text-white my-7'>
                        ONE LINK PROPERTIES PRESENTS
                    </h1>
                    <span className='w-[300px] flex gap-5 bg-[#D2B450] py-3 px-5 text-md rounded-xl font-bold'>
                        <MapPin /> 
                        DUBAI CREEK HARBOUR
                    </span>
                    
                    <h2 className='text-7xl text-white mt-7'>
                        AURELIA RESIDENCES
                    </h2> 
                    {/* <div className='grid grid-cols-2 gap-5 text-white mt-7'>
                        <div className='border border-1 border-[#dddddd40] p-4 space-y-2'>
                            <span className='flex gap-1'>
                                <MapPin />
                                <span className='text-xl'>Location</span>
                            </span>
                            <h4 className='text-2xl text-[#D2B450]'>Dubai Creek Harbour</h4>
                        </div>
                        <div className='border border-1 border-[#dddddd40] p-4 space-y-2'>
                            <span className='flex gap-1'>
                                <LucideDollarSign />
                                <span className='text-xl'>Starting From</span>
                            </span>
                            <h4 className='text-2xl text-[#D2B450]'>AED 1.25 Million</h4>
                        </div>
                    </div>                    */}
                </div>
                <div className="md:w-1/2">                    
                    <p className='text-2xl text-white leading-normal'>
                        Discover a refined collection of contemporary residences where thoughtful architecture, tranquil waterfront surroundings, and effortless city connectivity come together.
                    </p>
                    <div className='flex gap-7 mt-7 items-center'>
                        <button className='flex gap-3 bg-white hover:bg-[#D2B450] text-md px-5 py-3 rounded-3xl cursor-pointer'>
                            Enquire Now <ChevronRight />
                        </button>
                        <a className='text-md underline text-white cursor-pointer'>
                            Download Brochure
                        </a>                    
                    </div>                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner