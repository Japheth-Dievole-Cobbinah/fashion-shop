import React from 'react'
import Title from '../componenets/Title'
import { assets } from '../assets/assets'

const Contact = () => {

  const contactMethods = [
    {
      icon: (
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Our Store',
      lines: ['Ofankor Achiato', 'Accra, Ghana'],
      color: 'bg-gray-100 text-gray-700',
    },
    {
      icon: (
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      lines: ['+233 55 659 2404', 'Mon - Fri, 9AM - 6PM'],
      color: 'bg-gray-100 text-gray-700',
    },
    {
      icon: (
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      lines: ['admin@commitsolutionsgroup.com', 'We reply within 24 hours'],
      color: 'bg-gray-100 text-gray-700',
    },
  ]

  return (
    <div className='pt-10 pb-20 border-t'>

      {/* -------------------- Hero Section -------------------- */}
      <div className='text-center mb-14'>
        <Title text1={'CONTACT'} text2={'US'} />
        <p className='text-sm sm:text-base text-gray-400 mt-3 max-w-md mx-auto leading-relaxed'>
          Have a question or need help? We would love to hear from you.
        </p>
      </div>

      {/* -------------------- Contact Info + Image -------------------- */}
      <div className='flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-20'>

        {/* Image */}
        <div className='relative w-full md:max-w-[480px]'>
          <div className='absolute -top-4 -left-4 w-full h-full border-2 border-gray-200 rounded-2xl'></div>
          <img
            className='relative w-full rounded-2xl shadow-lg'
            src={assets.contact_img}
            alt="Contact us"
          />
        </div>

        {/* Info Cards */}
        <div className='flex flex-col gap-4 w-full md:flex-1'>
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className='flex items-start gap-4 border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all duration-300'
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${method.color}`}>
                {method.icon}
              </div>
              <div>
                <p className='font-medium text-sm text-gray-800'>{method.title}</p>
                {method.lines.map((line, i) => (
                  <p key={i} className='text-sm text-gray-500 mt-0.5'>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- Send a Message Form -------------------- */}
      <div className='bg-gray-50 rounded-2xl p-6 sm:p-10 mb-16'>

        <div className='flex items-center gap-3 mb-8'>
          <div className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium'>
            ✉
          </div>
          <div>
            <p className='font-medium text-sm'>Send a Message</p>
            <p className='text-xs text-gray-400'>Fill out the form below and we will get back to you</p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input
            className='w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400'
            type="text"
            placeholder='Your name'
          />
          <input
            className='w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400'
            type="email"
            placeholder='Your email'
          />
        </div>

        <input
          className='w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400 mt-4'
          type="text"
          placeholder='Subject'
        />

        <textarea
          className='w-full bg-white border border-gray-200 rounded-lg py-3 px-4 text-sm outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400 mt-4 resize-none h-32'
          placeholder='Your message...'
        ></textarea>

        <button className='mt-5 bg-black text-white px-10 py-3 rounded-xl text-sm hover:bg-gray-800 active:bg-gray-900 transition-all tracking-wide'>
          SEND MESSAGE
        </button>
      </div>

      {/* -------------------- Careers Section -------------------- */}
      <div className='bg-gray-50 rounded-2xl p-6 sm:p-10 text-center'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium'>
            💼
          </div>
          <p className='font-medium text-sm'>Careers at CommIT Solutions</p>
        </div>

        <p className='text-sm text-gray-500 max-w-md mx-auto leading-relaxed'>
          Learn more about our teams, culture, and current job openings. We are always
          looking for talented people to join us.
        </p>

        <button className='mt-6 border border-black px-10 py-3 rounded-xl text-sm hover:bg-black hover:text-white transition-all duration-300'>
          Explore Jobs
        </button>
      </div>

    </div>
  )
}

export default Contact