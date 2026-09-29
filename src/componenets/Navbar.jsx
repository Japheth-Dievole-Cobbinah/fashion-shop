import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowSearch, getCardCount } = useContext(ShopContext);
  const navigate = useNavigate();

  // Detect scroll to add shadow when sticky
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative text-xs tracking-wider transition-colors duration-300 ${
      isActive ? 'text-black font-medium' : 'text-gray-500 hover:text-black'
    }`;

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-white py-4 sm:py-5'
        }`}
      >
        <div className='flex items-center justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] max-w-[1440px] mx-auto'>

          {/* Logo */}
          <Link to='/' className='flex-shrink-0'>
            <img src={assets.logo} alt="logo" className='w-24 sm:w-32 lg:w-36' />
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex items-center gap-8 xl:gap-10'>
            {[
              { path: '/', label: 'HOME' },
              { path: '/collection', label: 'COLLECTION' },
              { path: '/about', label: 'ABOUT' },
              { path: '/contact', label: 'CONTACT' },
            ].map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={navLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Icons Section */}
          <div className='flex items-center gap-4 sm:gap-5'>

            {/* Search */}
            <button
              onClick={() => {
                setShowSearch(true);
                navigate('/collection');
              }}
              className='p-1.5 rounded-full hover:bg-gray-100 transition-all'
            >
              <img src={assets.search_icon} className='w-4 h-4 sm:w-5 sm:h-5' alt="search" />
            </button>

            {/* Profile */}
            <div className='group relative'>
              <Link to='/login' className='p-1.5 rounded-full hover:bg-gray-100 transition-all block'>
                <img src={assets.profile_icon} className='w-4 h-4 sm:w-5 sm:h-5' alt="profile" />
              </Link>

              {/* Dropdown */}
              <div className='group-hover:block hidden absolute right-0 top-full pt-3 z-50'>
                <div className='flex flex-col gap-1 w-44 py-2 px-3 bg-white rounded-xl shadow-lg border border-gray-100'>
                  {['My Profile', 'Orders', 'Logout'].map((item) => (
                    <p
                      key={item}
                      className='text-sm text-gray-500 px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-black cursor-pointer transition-all'
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link to='/cart' className='relative p-1.5 rounded-full hover:bg-gray-100 transition-all'>
              <img src={assets.cart_icon} className='w-4 h-4 sm:w-5 sm:h-5' alt="cart" />
              {getCardCount() > 0 && (
                <span className='absolute -top-1 -right-1 w-4.5 h-4.5 min-w-[18px] h-[18px] text-center leading-[18px] bg-black text-white rounded-full text-[10px] font-medium'>
                  {getCardCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setVisible(true)}
              className='lg:hidden p-1.5 rounded-full hover:bg-gray-100 transition-all'
            >
              <img src={assets.menu_icon} className='w-4 h-4 sm:w-5 sm:h-5' alt="menu" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={`${scrolled ? 'h-16' : 'h-20 sm:h-24'} transition-all duration-300`} />

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 lg:hidden ${
          visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setVisible(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-5 border-b border-gray-100'>
          <div className='flex items-center gap-3'>
            <img src={assets.logo} alt="logo" className='w-24' />
          </div>
          <button
            onClick={() => setVisible(false)}
            className='p-2 rounded-full hover:bg-gray-100 transition-all'
          >
            <img src={assets.cross_icon} className='w-4 h-4' alt="close" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className='flex flex-col p-5 gap-1'>
          {[
            { path: '/', label: 'Home' },
            { path: '/collection', label: 'Collection' },
            { path: '/about', label: 'About' },
            { path: '/contact', label: 'Contact' },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive
                    ? 'bg-gray-100 text-black font-medium'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-black'
                }`
              }
            >
              <span>{link.label}</span>
              <span className='text-gray-300'>→</span>
            </NavLink>
          ))}
        </nav>

        {/* Separator */}
        <div className='mx-5 border-t border-gray-100' />

        {/* Extra Links */}
        <div className='flex flex-col p-5 gap-1'>
          <NavLink
            to='/login'
            onClick={() => setVisible(false)}
            className='flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-black transition-all'
          >
            <img src={assets.profile_icon} className='w-4' alt="" />
            My Profile
          </NavLink>
          <NavLink
            to='/orders'
            onClick={() => setVisible(false)}
            className='flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-black transition-all'
          >
            <img src={assets.bin_icon} className='w-4' alt="" />
            My Orders
          </NavLink>
          <NavLink
            to='/cart'
            onClick={() => setVisible(false)}
            className='flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-black transition-all'
          >
            <img src={assets.cart_icon} className='w-4' alt="" />
            Cart ({getCardCount()})
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;