import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <div className='min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6'>
      <div className='w-full max-w-md bg-white border border-gray-100 rounded-3xl shadow-xs sm:shadow-sm p-8 sm:p-10 transition-all'>
        
        {/* ================= Header ================= */}
        <div className='text-center mb-8'>
          <h2 className='text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900'>
            {currentState === 'Login' ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className='text-xs sm:text-sm text-gray-500 mt-2'>
            {currentState === 'Login' 
              ? 'Please enter your details to sign in to your account.' 
              : 'Enter your details below to get started with us.'}
          </p>
        </div>

        {/* ================= Form ================= */}
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
          
          {/* Name Field (Only on Sign Up) */}
          {currentState === 'Sign Up' && (
            <div className='relative flex items-center'>
              <span className='absolute left-4 text-gray-400'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
              </span>
              <input 
                type="text" 
                className='w-full bg-gray-50/70 focus:bg-white border border-gray-200 focus:border-black rounded-xl py-3 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200' 
                placeholder='Full Name' 
                required
              />
            </div>
          )}

          {/* Email Field */}
          <div className='relative flex items-center'>
            <span className='absolute left-4 text-gray-400'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
              </svg>
            </span>
            <input 
              type="email" 
              className='w-full bg-gray-50/70 focus:bg-white border border-gray-200 focus:border-black rounded-xl py-3 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200' 
              placeholder='Email Address' 
              required
            />
          </div>

          {/* Password Field */}
          <div className='relative flex items-center'>
            <span className='absolute left-4 text-gray-400'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
              </svg>
            </span>
            <input 
              type={showPassword ? "text" : "password"} 
              className='w-full bg-gray-50/70 focus:bg-white border border-gray-200 focus:border-black rounded-xl py-3 pl-11 pr-11 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200' 
              placeholder='Password' 
              required
            />
            {/* Show / Hide Toggle Button */}
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3.5 text-gray-400 hover:text-gray-700 transition-colors p-1'
            >
              {showPassword ? (
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18' />
                </svg>
              ) : (
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                </svg>
              )}
            </button>
          </div>

          {/* Row: Forgot Password */}
          {currentState === 'Login' && (
            <div className='flex justify-end text-xs text-gray-500 mt-[-2px]'>
              <span className='hover:text-black cursor-pointer transition-colors font-medium'>
                Forgot password?
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className='w-full mt-2 bg-black hover:bg-neutral-800 text-white font-medium py-3.5 rounded-xl text-sm transition-all duration-200 shadow-xs active:scale-[0.99]'
          >
            {currentState === 'Login' ? 'Sign In' : 'Create Account'}
          </button>

          {/* Switch Mode Footer */}
          <div className='text-center mt-4 text-xs sm:text-sm text-gray-500'>
            {currentState === 'Login' ? (
              <p>
                Don't have an account?{' '}
                <button 
                  type="button" 
                  onClick={() => setCurrentState('Sign Up')} 
                  className='text-black font-semibold hover:underline cursor-pointer'
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button 
                  type="button" 
                  onClick={() => setCurrentState('Login')} 
                  className='text-black font-semibold hover:underline cursor-pointer'
                >
                  Log in
                </button>
              </p>
            )}
          </div>

        </form>

      </div>
    </div>
  )
}

export default Login