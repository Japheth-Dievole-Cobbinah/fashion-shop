import React, { useContext, useState } from 'react'
import Title from '../componenets/Title'
import CartTotal from '../componenets/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  const inputStyle = 
    "w-full bg-gray-50/70 focus:bg-white border border-gray-200 focus:border-black rounded-xl py-3 px-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200";

  return (
    <div className='max-w-7xl mx-auto pt-6 sm:pt-12 pb-24 border-t border-gray-100'>
      
      <div className='flex flex-col lg:flex-row gap-10 xl:gap-16 items-start'>
        
        {/* ================= LEFT COLUMN: DELIVERY DETAILS ================= */}
        <div className='w-full lg:flex-1'>
          <div className='bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm'>
            
            <div className='flex items-center justify-between mb-6'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'} />
              <span className='text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-3 py-1 rounded-full'>
                Step 1 of 2
              </span>
            </div>

            <div className='flex flex-col gap-4'>
              {/* First & Last Name */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input className={inputStyle} type="text" placeholder='First name' />
                <input className={inputStyle} type="text" placeholder='Last name' />
              </div>

              {/* Email */}
              <input className={inputStyle} type="email" placeholder='Email address' />

              {/* Street Address */}
              <input className={inputStyle} type="text" placeholder='Street address or P.O. Box' />

              {/* City & State */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input className={inputStyle} type="text" placeholder='City' />
                <input className={inputStyle} type="text" placeholder='State / Province' />
              </div>

              {/* Zip & Country */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input className={inputStyle} type="number" placeholder='Postal code' />
                <input className={inputStyle} type="text" placeholder='Country' />
              </div>

              {/* Phone */}
              <input className={inputStyle} type="tel" placeholder='Phone number for delivery updates' />
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN: SUMMARY & PAYMENT ================= */}
        <div className='w-full lg:w-[460px] xl:w-[480px] lg:sticky lg:top-8'>
          <div className='bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-8'>
            
            {/* Cart Total Breakdown */}
            <div>
              <CartTotal />
            </div>

            {/* Payment Methods */}
            <div>
              <div className='mb-4'>
                <Title text1={'PAYMENT'} text2={'METHOD'} />
              </div>

              <div className='flex flex-col gap-3'>
                
                {/* Stripe Option */}
                <div 
                  onClick={() => setMethod('stripe')}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    method === 'stripe' 
                      ? 'border-black bg-stone-50/50 shadow-xs' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className='flex items-center gap-3.5'>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      method === 'stripe' ? 'border-black bg-black' : 'border-gray-300'
                    }`}>
                      {method === 'stripe' && (
                        <svg className='w-2.5 h-2.5 text-white fill-current' viewBox="0 0 20 20">
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-800 leading-none'>Credit / Debit Card</p>
                      <p className='text-xs text-gray-400 mt-1'>Secure online transaction</p>
                    </div>
                  </div>
                  <img className='h-5 object-contain' src={assets.stripe_logo} alt="Stripe" />
                </div>

                {/* Razorpay Option */}
                <div 
                  onClick={() => setMethod('razorpay')}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    method === 'razorpay' 
                      ? 'border-black bg-stone-50/50 shadow-xs' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className='flex items-center gap-3.5'>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      method === 'razorpay' ? 'border-black bg-black' : 'border-gray-300'
                    }`}>
                      {method === 'razorpay' && (
                        <svg className='w-2.5 h-2.5 text-white fill-current' viewBox="0 0 20 20">
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-800 leading-none'>UPI / Netbanking</p>
                      <p className='text-xs text-gray-400 mt-1'>Instant transfer & wallets</p>
                    </div>
                  </div>
                  <img className='h-5 object-contain' src={assets.razorpay_logo} alt="Razorpay" />
                </div>

                {/* Cash on Delivery Option */}
                <div 
                  onClick={() => setMethod('cod')}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    method === 'cod' 
                      ? 'border-black bg-stone-50/50 shadow-xs' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className='flex items-center gap-3.5'>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      method === 'cod' ? 'border-black bg-black' : 'border-gray-300'
                    }`}>
                      {method === 'cod' && (
                        <svg className='w-2.5 h-2.5 text-white fill-current' viewBox="0 0 20 20">
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-800 leading-none'>Cash On Delivery</p>
                      <p className='text-xs text-gray-400 mt-1'>Pay when item arrives</p>
                    </div>
                  </div>
                  <span className='text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-100 text-gray-600 rounded'>
                    COD
                  </span>
                </div>

              </div>
            </div>

            {/* Submit Action Button */}
            <button 
              onClick={() => navigate('/orders')} 
              className='w-full bg-black hover:bg-neutral-800 text-white font-medium py-4 rounded-xl text-sm transition-all duration-200 shadow-md active:scale-[0.99] flex items-center justify-center gap-2 tracking-wide'
            >
              <span>CONFIRM ORDER</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>

            {/* Security Guarantee Note */}
            <div className='flex items-center justify-center gap-2 text-xs text-gray-400'>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <span>Guaranteed safe and encrypted checkout</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default PlaceOrder