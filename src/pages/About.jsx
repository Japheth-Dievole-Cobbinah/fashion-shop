import React from 'react'
import Title from '../componenets/Title'
import { assets } from '../assets/assets'
import Newsletter from '../componenets/Newsletter'

const About = () => {
  return (
    <div className='pt-8 border-t border-gray-100 max-w-7xl mx-auto'>
      
      {/* ----------------- Section Title ----------------- */}
      <div className='text-2xl sm:text-3xl text-center pt-4 pb-2'>
        <Title text1={'ABOUT'} text2={'OUR BRAND'} />
        <p className='text-xs sm:text-sm text-gray-500 mt-2 max-w-md mx-auto'>
          Crafting modern essentials designed for comfort, style, and everyday longevity.
        </p>
      </div>

      {/* ----------------- Brand Story & Image ----------------- */}
      <div className='my-12 sm:my-16 flex flex-col md:flex-row gap-10 lg:gap-16 items-center'>
        
        {/* Left Side: Brand Imagery */}
        <div className='w-full md:w-1/2'>
          <div className='relative overflow-hidden rounded-2xl shadow-sm border border-gray-100'>
            <img 
              className='w-full h-auto max-h-[500px] object-cover hover:scale-105 transition-all duration-700 ease-out' 
              src={assets.about_img} 
              alt="About our team and studio" 
            />
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600 text-sm sm:text-base leading-relaxed'>
          <p>
            Born out of a passion for minimalist aesthetics and mindful design, our brand was established to deliver elevated wardrobe staples without compromising on quality or accessibility.
          </p>
          <p>
            From the initial sketch to the final stitch, every garment undergoes meticulous fitting and fabrication. We partner with ethical artisans and source sustainably conscious cottons and textiles that feel incredible the first time you put them on, and only get better with wear.
          </p>

          {/* Mission Highlight Box */}
          <div className='bg-gray-50/80 border-l-4 border-black p-5 rounded-r-xl my-2'>
            <h3 className='text-gray-900 font-semibold text-base mb-1.5'>Our Mission</h3>
            <p className='text-xs sm:text-sm text-gray-500 leading-normal'>
              To empower individuals to feel confident in timeless silhouettes—blending contemporary versatility with conscious craftsmanship built to outlast seasonal trends.
            </p>
          </div>
        </div>

      </div>

      {/* ----------------- Quick Stat Strip ----------------- */}
      <div className='grid grid-cols-3 gap-4 py-8 px-6 sm:px-12 my-10 bg-gray-50/70 rounded-2xl border border-gray-100 text-center'>
        <div>
          <p className='text-xl sm:text-3xl font-bold text-gray-900'>10k+</p>
          <p className='text-[11px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1 font-medium'>Happy Customers</p>
        </div>
        <div className='border-x border-gray-200'>
          <p className='text-xl sm:text-3xl font-bold text-gray-900'>100%</p>
          <p className='text-[11px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1 font-medium'>Original Quality</p>
        </div>
        <div>
          <p className='text-xl sm:text-3xl font-bold text-gray-900'>24/7</p>
          <p className='text-[11px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1 font-medium'>Dedicated Support</p>
        </div>
      </div>

      {/* ----------------- Why Choose Us ----------------- */}
      <div className='pt-10 pb-6'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-24'>
        
        {/* Card 1: Quality Assurance */}
        <div className='group p-8 rounded-2xl border border-gray-100 bg-white hover:border-black/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between'>
          <div>
            <div className='w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300'>
              <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className='text-base font-semibold text-gray-900 mb-2'>Quality Assurance</h4>
            <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>
              Every item is rigorously tested against shrinkage, color fading, and fabric durability to guarantee complete peace of mind.
            </p>
          </div>
        </div>

        {/* Card 2: Convenience */}
        <div className='group p-8 rounded-2xl border border-gray-100 bg-white hover:border-black/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between'>
          <div>
            <div className='w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300'>
              <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className='text-base font-semibold text-gray-900 mb-2'>Effortless Convenience</h4>
            <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>
              From simple frictionless browsing to door-step deliveries and seamless 7-day exchanges, your shopping experience is streamlined.
            </p>
          </div>
        </div>

        {/* Card 3: Customer Service */}
        <div className='group p-8 rounded-2xl border border-gray-100 bg-white hover:border-black/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between'>
          <div>
            <div className='w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300'>
              <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className='text-base font-semibold text-gray-900 mb-2'>Customer-First Service</h4>
            <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>
              Our knowledgeable support specialists are always ready to assist with sizing, order tracking, and custom questions.
            </p>
          </div>
        </div>

      </div>
      
      <Newsletter />

    </div>
  )
}

export default About