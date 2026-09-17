import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 sm:gap-14 my-10 mt-24 sm:mt-40 text-sm'>
        
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique assumenda, cumque dolores sunt illum repellendus corrupti ducimus natus culpa, ea quam qui.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-black cursor-pointer transition-all'>Home</li>
            <li className='hover:text-black cursor-pointer transition-all'>About us</li>
            <li className='hover:text-black cursor-pointer transition-all'>Delivery</li>
            <li className='hover:text-black cursor-pointer transition-all'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-black cursor-pointer transition-all'>+233-000-004-8484</li>
            <li className='hover:text-black cursor-pointer transition-all'>contact@dievole.com</li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-700'>
          Copyright 2026 @ dievole.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer