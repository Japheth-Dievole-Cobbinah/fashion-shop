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

  const fetchProductData = async () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
     
      {/* ------------- Product Main Section ------------- */}
      <div className='flex gap-8 sm:gap-12 flex-col sm:flex-row'>
        
        {/* ------------- Product Images Gallery ------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          
          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-start gap-2.5 sm:gap-0 sm:justify-normal sm:w-[19%] w-full'>
            {
              productData.image.map((item, index) => (
                <img 
                  onClick={() => setImage(item)}
                  src={item} 
                  key={index} 
                  className={`w-[22%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover border transition-all rounded-sm ${
                    item === image ? 'border-orange-500 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                  }`} 
                  alt={`thumbnail-${index}`} 
                />
              ))
            }
          </div>

          {/* Main Large Image */}
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto object-cover rounded-sm' src={image} alt={productData.name} />
          </div>
        </div>

        {/* ------------- Product Info ------------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 text-gray-800'>{productData.name}</h1>
          
          {/* Star Ratings */}
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2 text-sm text-gray-500'>(122 reviews)</p>
          </div>

          {/* Price */}
          <p className='mt-5 text-3xl font-medium text-gray-900'>{currency}{productData.price}</p>
          
          {/* Short Description */}
          <p className='mt-5 text-gray-600 md:w-4/5 leading-relaxed text-sm sm:text-base'>
            {productData.description}
          </p>

          {/* Sizes */}
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-sm font-medium text-gray-700'>Select Size</p>
            <div className='flex gap-2 flex-wrap'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-50 text-sm font-medium transition-all rounded-sm ${
                    item === size 
                      ? 'border-orange-500 bg-orange-50 text-orange-600' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart CTA */}
          <button onClick={()=> addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 hover:bg-gray-800 transition-all shadow-sm'>
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5 border-gray-200' />
          
          {/* Guarantee Badges */}
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1.5'>
            <p>✓ 100% Original product guarantee.</p>
            <p>✓ Cash on delivery is available on this product.</p>
            <p>✓ Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ------------- Description & Reviews Section ------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <button 
            onClick={() => setActiveTab('description')} 
            className={`border px-5 py-3 text-sm font-medium cursor-pointer transition-all ${
              activeTab === 'description' ? 'bg-white border-b-white text-black' : 'bg-gray-50 text-gray-500'
            }`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('reviews')} 
            className={`border px-5 py-3 text-sm font-medium cursor-pointer transition-all ${
              activeTab === 'reviews' ? 'bg-white border-b-white text-black' : 'bg-gray-50 text-gray-500'
            }`}
          >
            Reviews (122)
          </button>
        </div>

        {/* Tab Body */}
        <div className='flex flex-col gap-4 border border-t-0 p-6 text-sm text-gray-500 leading-relaxed bg-white'>
          {activeTab === 'description' ? (
            <div className='space-y-3'>
              <p>
                An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.
              </p>
              <p>
                E-commerce websites typically display products or services along with detailed descriptions, high-resolution images, pricing, available sizes or colors, and customer reviews. Each product usually has its own dedicated page with relevant information to help customers make informed purchasing decisions.
              </p>
            </div>
          ) : (
            <div className='space-y-4'>
              <div className='border-b pb-3'>
                <div className='flex items-center gap-2'>
                  <span className='font-medium text-gray-800'>Sarah M.</span>
                  <div className='flex text-orange-500 text-xs'>★★★★★</div>
                </div>
                <p className='mt-1 text-gray-600'>Excellent quality! The fabric is soft and the fit is true to size. Delivered fast as well.</p>
              </div>

              <div className='border-b pb-3'>
                <div className='flex items-center gap-2'>
                  <span className='font-medium text-gray-800'>David K.</span>
                  <div className='flex text-orange-500 text-xs'>★★★★☆</div>
                </div>
                <p className='mt-1 text-gray-600'>Good value for money. Looks great when paired with jeans or casual trousers.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ------------Display Latest Product -------------------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;