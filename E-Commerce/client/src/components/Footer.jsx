import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white bg-darkerBg border-t-1 border-goldish">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center text-center">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-goldish">
              ShopEase
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              Your one-stop destination for quality products at unbeatable
              prices. Experience seamless shopping with fast delivery and
              excellent customer service.
            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-goldish">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;