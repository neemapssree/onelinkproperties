import { ArrowUpCircle, ArrowUpIcon } from 'lucide-react';
import React from 'react'
import AmenitiesSlider from './AmenitiesSlider';

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

const Amenities = () => {
  return (
    <section className='pb-16'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className="text-center">
                <h2 className="mb-4 text-2xl tracking-widest">
                    THE EXPERIENCE
                </h2>
                <p className="text-4xl">
                    Unparallelled Amenities for Unmatched Living
                </p>
            </div>            
            <AmenitiesSlider sliderData = {amenitiesData} />
        </div>
    </section>
  )
}

export default Amenities