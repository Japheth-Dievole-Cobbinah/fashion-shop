import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../componenets/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [sizeError, setSizeError] = useState(false);

  const fetchProductData = async () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }

  useEffect(() => {
    fetchProductData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(productData._id, size);
  }

  return productData ? (
    <div className='max-w-7xl mx-auto pt-8 pb-20 border-t border-gray-100 transition-opacity ease-in duration-500 opacity-100'>
     
      {/* ================= Product Main Section ================= */}
      <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 items-start'>
        
        {/* ------------- Left: Image Gallery ------------- */}
        <div className='w-full lg:w-3/5 flex flex-col-reverse sm:flex-row gap-4 lg:sticky lg:top-24'>
          
          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-start gap-3 sm:w-20 lg:w-24 shrink-0 no-scrollbar'>
            {productData.image.map((item, index) => (
              <button 
                key={index}
                onClick={() => setImage(item)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 aspect-square w-16 sm:w-full shrink-0 cursor-pointer ${
                  item === image ? 'border-black shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={item} className='w-full h-full object-cover' alt={`thumb-${index}`} />
              </button>
            ))}
          </div>

          {/* Main Display Image */}
          <div className='flex-1 rounded-2xl overflow-hidden bg-gray-50/60 border border-gray-100 shadow-xs'>
            <img 
              className='w-full h-auto max-h-[640px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out' 
              src={image} 
              alt={productData.name} 
            />
          </div>
        </div>

        {/* ------------- Right: Product Details & Purchase ------------- */}
        <div className='w-full lg:w-2/5 flex flex-col'>
          
          {/* Category & Availability Badges */}
          <div className='flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2'>
            <span>{productData.category} / {productData.subCategory}</span>
            <span className='inline-flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px] font-medium'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-500'></span>
              In Stock
            </span>
          </div>

          {/* Product Title */}
          <h1 className='text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mt-1 leading-snug'>
            {productData.name}
          </h1>

          {/* Ratings & Reviews Counter */}
          <div className='flex items-center gap-2 mt-3'>
            <div className='flex items-center gap-0.5 text-amber-400'>
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
            </div>
            <span className='text-xs font-semibold text-gray-800 ml-1'>4.8</span>
            <span className='text-xs text-gray-400'>•</span>
            <a href="#reviews" onClick={() => setActiveTab('reviews')} className='text-xs text-gray-500 hover:text-black underline cursor-pointer'>
              122 customer reviews
            </a>
          </div>

          {/* Price */}
          <div className='mt-6 pb-6 border-b border-gray-100 flex items-baseline gap-3'>
            <span className='text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight'>
              {currency}{productData.price}
            </span>
            <span className='text-xs text-gray-400'>Tax included • Shipping calculated at checkout</span>
          </div>

          {/* Short Description */}
          <p className='mt-5 text-gray-600 text-sm sm:text-base leading-relaxed'>
            {productData.description}
          </p>

          {/* Size Selector */}
          <div className='mt-8'>
            <div className='flex items-center justify-between mb-3'>
              <label className='text-xs font-bold uppercase tracking-wider text-gray-900'>
                Select Size
              </label>
              <button className='text-xs text-gray-400 hover:text-black underline cursor-pointer'>
                Size Guide
              </button>
            </div>

            <div className='flex items-center gap-2.5 flex-wrap'>
              {productData.sizes.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => { setSize(item); setSizeError(false); }}
                  className={`min-w-12 h-11 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                    item === size 
                      ? 'border-black bg-black text-white shadow-xs' 
                      : 'border-gray-200 hover:border-gray-400 bg-white text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Error Message if size not chosen */}
            {sizeError && (
              <p className='text-xs font-medium text-rose-500 mt-2.5 flex items-center gap-1.5'>
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Please choose a size before adding to cart.
              </p>
            )}
          </div>

          {/* Add to Cart CTA */}
          <div className='mt-8'>
            <button 
              onClick={handleAddToCart}
              className='w-full bg-black hover:bg-neutral-800 text-white font-medium py-4 px-8 rounded-xl text-sm transition-all duration-200 shadow-md active:scale-[0.99] flex items-center justify-center gap-3 tracking-wide cursor-pointer'
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span>ADD TO CART</span>
            </button>
          </div>

          {/* Trust & Guarantee Cards */}
          <div className='grid grid-cols-3 gap-3 mt-10 pt-8 border-t border-gray-100 text-center'>
            <div className='p-3 rounded-xl bg-gray-50/70 border border-gray-100'>
              <svg className="w-5 h-5 mx-auto text-gray-700 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className='text-[11px] font-semibold text-gray-800'>100% Authentic</p>
              <p className='text-[10px] text-gray-400'>Original product</p>
            </div>

            <div className='p-3 rounded-xl bg-gray-50/70 border border-gray-100'>
              <svg className="w-5 h-5 mx-auto text-gray-700 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className='text-[11px] font-semibold text-gray-800'>COD Available</p>
              <p className='text-[10px] text-gray-400'>Pay upon arrival</p>
            </div>

            <div className='p-3 rounded-xl bg-gray-50/70 border border-gray-100'>
              <svg className="w-5 h-5 mx-auto text-gray-700 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <p className='text-[11px] font-semibold text-gray-800'>7-Day Return</p>
              <p className='text-[10px] text-gray-400'>Hassle-free exchange</p>
            </div>
          </div>

        </div>

      </div>

      {/* ================= Description & Reviews Tabs ================= */}
      <div id="reviews" className='mt-24'>
        {/* Tab Switcher Pills */}
        <div className='flex items-center justify-center mb-8'>
          <div className='inline-flex bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200/60'>
            <button 
              onClick={() => setActiveTab('description')} 
              className={`px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === 'description' 
                  ? 'bg-white text-gray-900 shadow-xs' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Description & Details
            </button>
            <button 
              onClick={() => setActiveTab('reviews')} 
              className={`px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === 'reviews' 
                  ? 'bg-white text-gray-900 shadow-xs' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Customer Reviews (122)
            </button>
          </div>
        </div>

        {/* Tab Body Box */}
        <div className='bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-xs max-w-4xl mx-auto'>
          {activeTab === 'description' ? (
            <div className='space-y-6 text-sm sm:text-base text-gray-600 leading-relaxed'>
              <h3 className='text-lg font-semibold text-gray-900'>Product Information</h3>
              <p>
                Crafted with an uncompromising focus on everyday comfort and durability, this piece combines breathable, pre-shrunk cotton fabric with a balanced silhouette tailored for daily wear.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 text-xs sm:text-sm'>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-gray-900'>Materials & Care:</span>
                  <span className='text-gray-500'>100% Ring-Spun Cotton • Cold gentle machine wash</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-gray-900'>Fit & Silhouette:</span>
                  <span className='text-gray-500'>True to size • Classic unisex relaxed drape</span>
                </div>
              </div>
            </div>
          ) : (
            <div className='space-y-6'>
              {/* Review 1 */}
              <div className='border-b border-gray-100 pb-5'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2.5'>
                    <div className='w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center'>
                      SM
                    </div>
                    <div>
                      <span className='font-semibold text-sm text-gray-900'>Sarah Mitchell</span>
                      <span className='ml-2 text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium'>
                        Verified Purchase
                      </span>
                    </div>
                  </div>
                  <div className='flex text-amber-400 text-xs'>★★★★★</div>
                </div>
                <p className='mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed'>
                  Exceptional quality and fabric feel. It holds its shape perfectly even after multiple washes. Delivery was fast too!
                </p>
              </div>

              {/* Review 2 */}
              <div className='pb-2'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2.5'>
                    <div className='w-8 h-8 rounded-full bg-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center'>
                      DK
                    </div>
                    <div>
                      <span className='font-semibold text-sm text-gray-900'>David Kofi</span>
                      <span className='ml-2 text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium'>
                        Verified Purchase
                      </span>
                    </div>
                  </div>
                  <div className='flex text-amber-400 text-xs'>★★★★☆</div>
                </div>
                <p className='mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed'>
                  Really clean design and premium stitching. Went for a size L and fits just right. Will definitely order more colors.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= Display Related Products ================= */}
      <div className='mt-24 pt-12 border-t border-gray-100'>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
        
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;