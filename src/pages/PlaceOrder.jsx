import React, { useContext, useState } from 'react'
import Title from '../componenets/Title'
import CartTotal from '../componenets/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  const inputStyles =
    "w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm outline-none focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400";

  const paymentOptions = [
    { id: 'stripe', label: 'Stripe', icon: assets.stripe_logo },
    { id: 'razorpay', label: 'Razorpay', icon: assets.razorpay_logo },
    { id: 'cod', label: 'Cash on Delivery', icon: null },
  ];

  return (
    <div className='pt-10 pb-20 border-t min-h-[80vh]'>

      {/* Page Title */}
      <div className='text-center mb-10'>
        <Title text1={'CHECK'} text2={'OUT'} />
        <p className='text-sm text-gray-400 mt-2'>
          Complete your order by filling in your details below
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-8'>

        {/* -------------------- Left: Delivery Form -------------------- */}
        <div className='flex-1'>

          {/* Form Card */}
          <div className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm'>
            <div className='flex items-center gap-3 mb-6'>
              {/* Step Number */}
              <div className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium'>
                1
              </div>
              <div>
                <p className='font-medium text-sm'>Delivery Information</p>
                <p className='text-xs text-gray-400'>Where should we deliver?</p>
              </div>
            </div>

            {/* Name Row */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3'>
              <input className={inputStyles} type="text" placeholder='First name' />
              <input className={inputStyles} type="text" placeholder='Last name' />
            </div>

            {/* Email */}
            <div className='mb-3'>
              <input className={inputStyles} type="email" placeholder='Email address' />
            </div>

            {/* Street */}
            <div className='mb-3'>
              <input className={inputStyles} type="text" placeholder='Street address' />
            </div>

            {/* City & State */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3'>
              <input className={inputStyles} type="text" placeholder='City' />
              <input className={inputStyles} type="text" placeholder='State / Region' />
            </div>

            {/* Zipcode & Country */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3'>
              <input className={inputStyles} type="number" placeholder='Zipcode' />
              <input className={inputStyles} type="text" placeholder='Country' />
            </div>

            {/* Phone */}
            <div className='mb-3'>
              <input className={inputStyles} type="number" placeholder='Phone number' />
            </div>

            {/* Save Address Checkbox */}
            <label className='flex items-center gap-2 mt-4 cursor-pointer'>
              <input type="checkbox" className='w-4 h-4 accent-black rounded' />
              <span className='text-xs text-gray-500'>Save this address for next time</span>
            </label>
          </div>

          {/* -------------------- Step 2: Payment Method -------------------- */}
          <div className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm mt-6'>

            <div className='flex items-center gap-3 mb-6'>
              <div className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium'>
                2
              </div>
              <div>
                <p className='font-medium text-sm'>Payment Method</p>
                <p className='text-xs text-gray-400'>Choose how you want to pay</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
              {paymentOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setMethod(option.id)}
                  className={`flex items-center gap-3 border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    method === option.id
                      ? 'border-black bg-gray-50 shadow-sm'
                      : 'border-gray-100 hover:border-gray-300'
                  }`}
                >
                  {/* Radio Dot */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      method === option.id
                        ? 'border-black'
                        : 'border-gray-300'
                    }`}
                  >
                    {method === option.id && (
                      <div className='w-2 h-2 bg-black rounded-full'></div>
                    )}
                  </div>

                  {/* Logo or Text */}
                  {option.icon ? (
                    <img className='h-4 object-contain' src={option.icon} alt={option.label} />
                  ) : (
                    <p className='text-xs sm:text-sm text-gray-600 whitespace-nowrap'>
                      {option.label}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* -------------------- Right: Order Summary -------------------- */}
        <div className='w-full lg:w-[380px] flex-shrink-0'>
          <div className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm sticky top-4'>

            <div className='flex items-center gap-3 mb-6'>
              <div className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium'>
                3
              </div>
              <div>
                <p className='font-medium text-sm'>Order Summary</p>
                <p className='text-xs text-gray-400'>Review your total</p>
              </div>
            </div>

            <CartTotal />

            {/* Place Order Button */}
            <button
              onClick={() => navigate('/orders')}
              className='w-full bg-black text-white py-4 rounded-xl text-sm font-medium tracking-wide hover:bg-gray-800 active:bg-gray-900 transition-all mt-6'
            >
              PLACE ORDER
            </button>

            {/* Security Note */}
            <div className='flex items-center justify-center gap-2 mt-4'>
              <svg className='w-4 h-4 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
              </svg>
              <p className='text-xs text-gray-400'>Secure & encrypted checkout</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder