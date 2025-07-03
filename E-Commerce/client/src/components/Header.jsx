import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./Logout";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header className="shadow-lg border-b-2 border-goldish bg-darkerBg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity duration-200 text-goldish"
            >
              ShopEase
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
            >
              About
            </Link>
          </nav>

          {/* Right Side: Auth & Cart */}
          <div className="flex items-center space-x-4">
            
            {/* Authentication Section */}
            <div className="hidden md:flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <Link 
                    to="/profile"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
                  >
                    Profile ( {userInfo.name} ) 
                  </Link>
                  <LogoutButton />
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-2 bg-goldish text-darkerBg rounded-md text-sm font-medium transition-all duration-200 hover:opacity-90"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <div className="relative">
              <Link
                to="/cart"
                className="text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform duration-200 text-goldish"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
              </Link>
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-2 text-darkerBg text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold bg-goldish border border-darkerBg">
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md transition-all duration-200 hover:opacity-80 text-goldish"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-goldish/30 py-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Auth Section */}
              <div className="border-t border-goldish/30 pt-3 mt-2">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link 
                      to="/profile"
                      className="block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile ({userInfo.name})
                    </Link>
                    <div className="px-3">
                      <LogoutButton />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-cyan-600 text-goldish"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-3 py-2 bg-goldish text-darkerBg rounded-md text-sm font-medium transition-all duration-200 hover:opacity-90 mx-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;