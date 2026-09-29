import React from 'react'

const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='my-16 sm:my-24 py-12 sm:py-16 px-6 sm:px-12 bg-stone-50/70 border border-gray-100 rounded-3xl max-w-7xl mx-auto text-center'>
      
      {/* ================= Offer Badge ================= */}
      <span className='inline-block text-[11px] font-bold tracking-widest uppercase bg-white border border-gray-200 text-gray-800 px-3.5 py-1 rounded-full shadow-2xs mb-4'>
        Member Exclusive
      </span>

      {/* ================= Heading & Copy ================= */}
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900'>
        Subscribe now & get 20% off
      </h2>
      <p className='text-xs sm:text-sm md:text-base text-gray-500 mt-3 max-w-lg mx-auto leading-relaxed'>
        Be the first to receive updates on new seasonal drops, limited capsule collections, and member-only private sales.
      </p>

      {/* ================= Newsletter Form ================= */}
      <form 
        onSubmit={onSubmitHandler} 
        className='w-full sm:w-3/4 md:w-3/5 lg:w-1/2 mx-auto mt-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 p-1.5 sm:p-2 bg-white border border-gray-200 focus-within:border-black rounded-2xl sm:rounded-full shadow-xs transition-all duration-300'
      >
        {/* Email Input Field */}
        <div className='flex items-center flex-1 w-full pl-3.5 sm:pl-4 pr-2'>
          <svg className='w-4 h-4 text-gray-400 shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
          </svg>
          <input 
            className='w-full bg-transparent outline-none text-xs sm:text-sm text-gray-800 placeholder-gray-400 py-3 sm:py-2.5 px-3' 
            type="email" 
            placeholder='Enter your email address' 
            required
          />
        </div>

        {/* Subscribe CTA Button */}
        <button 
          type='submit' 
          className='w-full sm:w-auto bg-black hover:bg-neutral-800 active:scale-[0.99] text-white text-xs font-semibold tracking-wider uppercase px-8 py-3.5 sm:py-3 rounded-xl sm:rounded-full transition-all duration-200 shadow-xs whitespace-nowrap cursor-pointer'
        >
          Subscribe
        </button>
      </form>

      {/* ================= Privacy Assurance ================= */}
      <div className='flex items-center justify-center gap-2 mt-4 text-[11px] sm:text-xs text-gray-400'>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
        <span>No spam ever. Unsubscribe anytime with a single click.</span>
      </div>

    </div>
  )
}

export default Newsletter