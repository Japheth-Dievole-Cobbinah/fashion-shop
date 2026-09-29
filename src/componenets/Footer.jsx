import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-gray-100 bg-white pt-16 sm:pt-24 pb-12 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='max-w-7xl mx-auto'>
        
        {/* ================= Main Footer Grid ================= */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 sm:pb-16'>
          
          {/* Brand & Mission Column (5 cols) */}
          <div className='lg:col-span-5 flex flex-col items-start'>
            <Link to='/'>
              <img src={assets.logo} className='w-32 sm:w-36 mb-5 object-contain' alt="Company Logo" />
            </Link>
            <p className='w-full md:w-4/5 text-gray-500 text-xs sm:text-sm leading-relaxed'>
              Carefully curated collections crafted with attention to fit, finish, and durability. Built for everyday ease and timeless modern aesthetics.
            </p>

            {/* Social Icons */}
            <div className='flex items-center gap-3.5 mt-6'>
              <a href="#" className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all duration-200'>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all duration-200'>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all duration-200'>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className='lg:col-span-3'>
            <p className='text-xs font-semibold uppercase tracking-widest text-gray-900 mb-4'>
              Company
            </p>
            <ul className='flex flex-col gap-2.5 text-xs sm:text-sm text-gray-500'>
              <li>
                <Link to='/' className='hover:text-black hover:translate-x-1 inline-block transition-all duration-200'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/collection' className='hover:text-black hover:translate-x-1 inline-block transition-all duration-200'>
                  Collection
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-black hover:translate-x-1 inline-block transition-all duration-200'>
                  About us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-black hover:translate-x-1 inline-block transition-all duration-200'>
                  Delivery & Shipping
                </Link>
              </li>
              <li>
                <a href='#' className='hover:text-black hover:translate-x-1 inline-block transition-all duration-200'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column (4 cols) */}
          <div className='lg:col-span-4'>
            <p className='text-xs font-semibold uppercase tracking-widest text-gray-900 mb-4'>
              Get in Touch
            </p>
            <div className='flex flex-col gap-3 text-xs sm:text-sm text-gray-500'>
              
              {/* Phone */}
              <a href="tel:+2330000048484" className='flex items-center gap-2.5 hover:text-black transition-colors'>
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+233 (000) 004-8484</span>
              </a>

              {/* Email */}
              <a href="mailto:contact@dievole.com" className='flex items-center gap-2.5 hover:text-black transition-colors'>
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>contact@dievole.com</span>
              </a>

              {/* Hours / Note */}
              <div className='flex items-center gap-2.5 text-gray-400 mt-1'>
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className='text-[11px] sm:text-xs'>Monday – Friday, 9:00 AM – 6:00 PM</span>
              </div>

            </div>
          </div>

        </div>

        {/* ================= Bottom Copyright Strip ================= */}
        <div className='pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400'>
          <p>© 2026 Dievole Studio. All rights reserved.</p>
          
          <div className='flex items-center gap-6'>
            <a href="#" className='hover:text-black transition-colors'>Terms of Service</a>
            <a href="#" className='hover:text-black transition-colors'>Privacy</a>
            <a href="#" className='hover:text-black transition-colors'>Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer