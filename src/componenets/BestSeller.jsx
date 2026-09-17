import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // 1. Check if products exist
        // 2. IMPORTANT: Use item.bestseller (matches your assets file)
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller === true);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]); // 3. Re-run when products data arrives

    return (
        <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-full sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Check out our most popular products, handpicked just for you.
                </p>
            </div>

            {/* Responsive Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItems 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller;