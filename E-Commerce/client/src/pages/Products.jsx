import { Link } from "react-router-dom";
import Rating from "../components/Rating.jsx";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";
import { useState, useMemo } from "react";

function Products() {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [searchInput, setSearchInput] = useState("");
  
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    if (!searchInput.trim()) {
      return products; 
    }
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [products, searchInput]);

  return (
    <div className="min-h-screen py-12 px-4 bg-purpleBg">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-goldish">
            Our Premium Collection
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white">
            Discover our amazing collection of products carefully selected just
            for you. Quality meets affordability in every item.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              name="searchInput"
              placeholder="Search products..."
              className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-goldish focus:border-transparent"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          {/* Search Results Info */}
          {searchInput && (
            <div className="mt-4 text-center text-white/80">
              Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} 
              {searchInput && ` for "${searchInput}"`}
            </div>
          )}
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-goldish mx-auto mb-4"></div>
              <h2 className="text-2xl text-white font-semibold">Loading Products</h2>
            </div>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="text-white text-xl mb-4">
              Oops! Something went wrong while loading products.
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-mediumBlue text-white rounded-lg hover:opacity-90 transition-all duration-200"
            >
              Try Again
            </button>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group bg-white border-2 border-gray-200 hover:border-goldish"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-darkerBg"></div>
                </div>

                <div className="flex flex-col flex-grow p-6 bg-gray-300">
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 transition-colors duration-200 group-hover:opacity-80 text-darkerBg">
                    {product.name}
                  </h2>
                  <p className="mb-4 text-sm line-clamp-3 leading-relaxed text-mediumBlue flex-grow">
                    {product.desc}
                  </p>

                  {/* Rating Component */}
                  <div className="mb-4">
                    <Rating
                      rating={product.rating}
                      numReviews={product.numreviews}
                    />
                  </div>

                  <div className="flex items-center justify-center mt-auto">
                    <span className="text-2xl font-bold text-lightPurple">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <svg
              className="w-16 h-16 text-white/40 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <div className="text-white text-xl mb-2">
              {searchInput ? 'No products found' : 'No products available'}
            </div>
            {searchInput && (
              <p className="text-white/60">
                Try searching with different keywords
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;