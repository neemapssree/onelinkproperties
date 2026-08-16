import { ChevronRight, MapPin } from 'lucide-react'

interface BannerProps {
  onOpenModal: () => void;
}

const Banner = ({ onOpenModal }: BannerProps) => {
  return (
    <div className="w-full overflow-hidden bg-[url('/images/onelink-properties-header.webp')] bg-cover bg-bottom md:bg-center h-[650px] md:h-[700px]">
        <div className="flex h-full w-full bg-gradient-to-t from-black/80 via-black/35 to-black/10">
            <div className='mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-end md:gap-10 px-4 pb-10 pt-5 md:grid-cols-2'>
                {/* Left */}
                <div className="min-w-0 pt-25 md:pt-0">
                    <h1 className='text-xl md:text-3xl text-white my-7'>
                        ONE LINK PROPERTIES PRESENTS
                    </h1>
                    <span className='w-[300px] flex gap-5 bg-[#D2B450] py-3 px-5 text-sm md:text-md rounded-xl font-bold'>
                        <MapPin /> 
                        DUBAI CREEK HARBOUR
                    </span>
                    
                    <h2 className='uppercase font-serif text-4xl leading-[0.9] text-white md:text-5xl lg:text-[88px] mt-5'>
                        Aurelia
                        <br />
                        Residences
                    </h2>                     
                </div>
                {/* Right */}
                <div className="min-w-0">                   
                    <p className='text-md md:text-xl lg:text-2xl text-white leading-normal'>
                        Discover a refined collection of contemporary residences where thoughtful architecture, tranquil waterfront surroundings, and effortless city connectivity come together.
                    </p>
                    <div className='flex gap-7 mt-7 items-center'>
                        <button 
                        onClick={onOpenModal}
                        className='flex gap-3 bg-white hover:bg-[#D2B450] text-sm md:text-md px-5 py-3 rounded-3xl cursor-pointer'>
                            Enquire Now <ChevronRight />
                        </button>
                        <button 
                        onClick={onOpenModal}
                        className='text-sm md:text-md underline text-white cursor-pointer'>
                            Download Brochure
                        </button>                    
                    </div>                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner