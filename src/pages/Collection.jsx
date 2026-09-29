import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../componenets/Title';
import ProductItems from '../componenets/ProductItems';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle Category Filter
  const toggleCategory = (e) => {
    const val = e.target.value;
    setCategory(prev => 
      prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]
    );
  };

  // Toggle Sub-category Filter (Fixed bug: previously targeted setCategory on remove)
  const toggleSubCategory = (e) => {
    const val = e.target.value;
    setSubCategory(prev => 
      prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  // Filter application logic
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  // Sort products
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const activeFilterCount = category.length + subCategory.length;

  return (
    <div className='max-w-7xl mx-auto pt-8 pb-20 border-t border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-12'>
      
      {/* ================= LEFT SIDE: FILTER SIDEBAR ================= */}
      <aside className='w-full lg:w-64 shrink-0'>
        
        {/* Mobile Toggle Bar */}
        <div 
          onClick={() => setShowFilter(!showFilter)}
          className='flex items-center justify-between p-3.5 bg-gray-50/70 border border-gray-200 rounded-xl cursor-pointer lg:hidden'
        >
          <div className='flex items-center gap-2'>
            <span className='text-sm font-semibold text-gray-900 tracking-wide uppercase'>Filters</span>
            {activeFilterCount > 0 && (
              <span className='w-5 h-5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center'>
                {activeFilterCount}
              </span>
            )}
          </div>
          <svg 
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showFilter ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>

        {/* Filter Cards Container */}
        <div className={`flex flex-col gap-5 mt-4 lg:mt-0 ${showFilter ? 'block' : 'hidden'} lg:block`}>
          
          {/* Header on Desktop */}
          <div className='hidden lg:flex items-center justify-between pb-3 border-b border-gray-100'>
            <span className='text-sm font-bold uppercase tracking-wider text-gray-900'>Filters</span>
            {activeFilterCount > 0 && (
              <button 
                onClick={resetFilters} 
                className='text-xs text-gray-400 hover:text-black transition-colors font-medium cursor-pointer'
              >
                Clear all ({activeFilterCount})
              </button>
            )}
          </div>

          {/* Categories Box */}
          <div className='bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs'>
            <p className='text-xs font-bold uppercase tracking-wider text-gray-900 mb-4'>Categories</p>
            <div className='flex flex-col gap-3 text-sm text-gray-600'>
              {['Men', 'Women', 'Kids'].map((cat) => (
                <label key={cat} className='flex items-center gap-3 cursor-pointer group select-none'>
                  <input 
                    type="checkbox" 
                    value={cat} 
                    checked={category.includes(cat)}
                    onChange={toggleCategory}
                    className='w-4 h-4 accent-black rounded cursor-pointer' 
                  />
                  <span className={`text-xs sm:text-sm transition-colors ${category.includes(cat) ? 'text-black font-semibold' : 'group-hover:text-black'}`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Type / SubCategories Box */}
          <div className='bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs'>
            <p className='text-xs font-bold uppercase tracking-wider text-gray-900 mb-4'>Type</p>
            <div className='flex flex-col gap-3 text-sm text-gray-600'>
              {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (
                <label key={sub} className='flex items-center gap-3 cursor-pointer group select-none'>
                  <input 
                    type="checkbox" 
                    value={sub} 
                    checked={subCategory.includes(sub)}
                    onChange={toggleSubCategory}
                    className='w-4 h-4 accent-black rounded cursor-pointer' 
                  />
                  <span className={`text-xs sm:text-sm transition-colors ${subCategory.includes(sub) ? 'text-black font-semibold' : 'group-hover:text-black'}`}>
                    {sub}
                  </span>
                </label>
              ))}
            </div>
          </div>

        </div>
      </aside>

      {/* ================= RIGHT SIDE: PRODUCT LISTING ================= */}
      <main className='flex-1'>
        
        {/* Top Controls: Title, Count, and Sort Dropdown */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100'>
          <div>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            <p className='text-xs text-gray-400 mt-1'>
              Showing {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Sort Selector with Custom Chevron */}
          <div className='relative self-end sm:self-auto'>
            <select 
              value={sortType} 
              onChange={(e) => setSortType(e.target.value)} 
              className='appearance-none bg-gray-50/70 hover:bg-gray-100/70 focus:bg-white border border-gray-200 focus:border-black rounded-xl text-xs sm:text-sm py-2.5 pl-4 pr-10 outline-none cursor-pointer transition-all'
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Price (Low to High)</option>
              <option value="high-low">Sort by: Price (High to Low)</option>
            </select>
            <div className='pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500'>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Active Filter Chips Strip */}
        {activeFilterCount > 0 && (
          <div className='flex flex-wrap items-center gap-2 mb-6'>
            <span className='text-xs text-gray-400 mr-1'>Active filters:</span>
            {category.map(item => (
              <span 
                key={item} 
                onClick={() => setCategory(prev => prev.filter(c => c !== item))}
                className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer transition-colors'
              >
                {item}
                <img src={assets.cross_icon} className='w-2.5 opacity-60' alt="remove" />
              </span>
            ))}
            {subCategory.map(item => (
              <span 
                key={item} 
                onClick={() => setSubCategory(prev => prev.filter(s => s !== item))}
                className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer transition-colors'
              >
                {item}
                <img src={assets.cross_icon} className='w-2.5 opacity-60' alt="remove" />
              </span>
            ))}
            <button 
              onClick={resetFilters} 
              className='text-xs font-semibold text-black underline ml-2 cursor-pointer'
            >
              Clear all
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filterProducts.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-8'>
            {filterProducts.map((item, index) => (
              <ProductItems 
                key={index} 
                name={item.name} 
                id={item._id} 
                price={item.price} 
                image={item.image} 
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className='flex flex-col items-center justify-center py-24 text-center bg-gray-50/50 rounded-3xl border border-dashed border-gray-200 my-6'>
            <div className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-3'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h4 className='text-base font-semibold text-gray-800'>No products found</h4>
            <p className='text-xs sm:text-sm text-gray-400 mt-1 max-w-sm'>
              We couldn't find any products matching your current search or filter combination.
            </p>
            <button 
              onClick={resetFilters} 
              className='mt-5 bg-black text-white text-xs font-semibold px-6 py-2.5 rounded-xl hover:bg-neutral-800 transition-colors shadow-xs'
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

    </div>
  );
};

export default Collection;