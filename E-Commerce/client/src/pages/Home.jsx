import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

function Home() {
  const { data: products, isLoading } = useGetProductsQuery();
  const featuredProducts = products?.slice(0, 4) || [];

  return (
    <div className="min-h-screen bg-purpleBg">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purpleBg to-darkerBg">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-goldish leading-tight">
            Welcome to
            <span className="block text-white">ShopEase</span>
          </h1>
          <p className="text-xl md:text-xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            Discover amazing products with unbeatable quality and prices. Your
            perfect shopping experience starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-goldish text-darkerBg font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-darkerBg transition-all duration-300 transform hover:scale-105"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {!isLoading && featuredProducts.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-br from-darkerBg to-purpleBg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-goldish">
                Featured Products
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Check out some of our most popular items loved by customers
                worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex flex-col flex-grow px-6 py-4 bg-gray-300">
                    <h3 className="text-lg font-bold mb-2 text-darkerBg line-clamp-2 flex-grow">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-lightPurple mt-auto">
                      ₹{product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-block px-8 py-4 bg-goldish text-darkerBg font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-lightPurple to-mediumBlue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Join thousands of satisfied customers and discover your next
            favorite product today.
          </p>
          <Link
            to="/products"
            className="inline-block px-10 py-5 bg-white text-lightPurple font-bold text-xl rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
