import AmenitiesSlider from './AmenitiesSlider';

interface AmenitiesProps {
  onOpenModal: () => void;
}

const amenitiesData = [
    {"id" : 1, "label" : "Infinity Pool", 
        "image" : "/images/amenities/onelink-properties-pool.webp", "content" : "Stay refreshed with a beautifully designed resort-style pool." },
    {"id" : 2, "label" : "Fitness Centre", 
        "image" : "/images/amenities/onelink-properties-fitness.webp", "content" : "A modern environment designed around an active lifestyle." },
    {"id" : 3, "label" : "Kids' Play Area", 
    "image" : "/images/amenities/onelink-properties-kids-play.webp", "content" : "A safe and engaging environment for younger residents." },
    {"id" : 4, "label" : "Landscaped Gardens", 
    "image" : "/images/amenities/onelink-properties-garden.webp", "content" : "Green spaces designed to bring calm into everyday life." },
    {"id" : 5, "label" : "Residents' Lounge", 
        "image" : "/images/amenities/onelink-properties-lounge.webp", "content" : "A refined space to relax, meet and connect." },
    {"id" : 6, "label" : "24/7 Security", 
    "image" : "/images/amenities/onelink-properties-security.webp", "content" : "Controlled access and professional security." },
    {"id" : 7, "label" : "Concierge Service", 
    "image" : "/images/amenities/onelink-properties-concierge.webp", "content" : "Dedicated assistance for everyday convenience." }
];

const Amenities = ({onOpenModal}: AmenitiesProps) => {
  return (
    <section className='pb-31 overflow-hidden' id='amenities'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className="text-center">
                <h2 className="mb-4 text-2xl tracking-widest">
                    THE EXPERIENCE
                </h2>                
                 <h2 className="text-center font-serif text-2xl leading-[1.05] sm:text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16">
              Unparallelled Amenities for 
              <br/>                      
              <span className="italic text-[#D2B450]">
                      Unmatched Living
              </span>
          </h2>
            </div>            
            <AmenitiesSlider sliderData = {amenitiesData} onOpenModal={onOpenModal} />
        </div>
    </section>
  )
}

export default Amenities