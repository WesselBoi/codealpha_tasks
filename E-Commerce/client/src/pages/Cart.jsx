import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { addToCart , removeFromCart } from "../slices/cartSlice";
import { FaTrashAlt , FaUser , FaLock} from "react-icons/fa";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo , isAuthenticated } = useSelector((state) => state.auth)

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async(id) => {
    dispatch(removeFromCart(id));
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const checkoutHandler = () => {
    if(isAuthenticated && userInfo) {
      navigate("/shipping")
    } else {
      navigate("/login?redirect=/shipping");
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-purpleBg">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-goldish">
            Shopping Cart
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white">
            Review your selected items and proceed to checkout when ready.
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-3xl font-bold mb-4 text-darkerBg">
                Your cart is empty
              </h2>
              <p className="text-lg text-mediumBlue mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 bg-mediumBlue"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>
        ) : (
          /* Cart Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Column */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-48 h-auto sm:h-auto">
                      <Link to={`/product/${item._id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-6 flex flex-col justify-between bg-gray-300">
                      <div>
                        <Link to={`/product/${item._id}`}>
                          <h3 className="text-xl font-bold mb-2 text-darkerBg">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-2xl font-bold mb-4 text-purpleBg">
                          ₹{item.price}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-3">
                          <label className="text-sm font-medium text-darkerBg">
                            Quantity:
                          </label>
                          <select
                            value={item.qty}
                            onChange={(e) =>
                              addToCartHandler(item, Number(e.target.value))
                            }
                            className="border-2 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 transition-all duration-200 border-mediumBlue focus:ring-purpleBg"
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Remove Button */}
                        <button className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200 cursor-pointer" onClick={() => removeFromCartHandler(item._id)}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-2xl font-bold mb-6 text-darkerBg">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-mediumBlue">
                      Items (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                    </span>
                    <span className="font-semibold text-darkerBg">
                      ₹{totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mediumBlue">Shipping</span>
                    <span className="font-semibold text-darkerBg">
                      ₹{totalPrice > 100 ? "0.00" : "10.00"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mediumBlue">Tax</span>
                    <span className="font-semibold text-darkerBg">
                      ₹{(totalPrice * 0.18).toFixed(2)}
                    </span>
                  </div>
                  <hr className="border-mediumBlue" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-darkerBg">Total</span>
                    <span className="font-bold text-purpleBg">
                      ₹
                      {(
                        totalPrice +
                        (totalPrice > 100 ? 0 : 10) +
                        totalPrice * 0.18
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>

                {!isAuthenticated && (
                  <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center">
                      <FaLock className="text-yellow-600 mr-2" />
                      <p className="text-sm text-yellow-800">
                        Please sign in to proceed with checkout
                      </p>
                    </div>
                  </div>
                )}

                {isAuthenticated && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <FaUser className="text-green-600 mr-2" />
                      <p className="text-sm text-green-800">
                        Signed in as <span className="font-medium">{userInfo?.name}</span>
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {isAuthenticated ? (
                    <button 
                      className="w-full text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105 bg-mediumBlue"
                      onClick={checkoutHandler}
                    >
                      <div className="flex items-center justify-center">
                        <FaLock className="mr-2" />
                        Proceed to Checkout
                      </div>
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <button 
                        className="w-full text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105 bg-lightPurple"
                        onClick={checkoutHandler}
                      >
                        <div className="flex items-center justify-center">
                          <FaUser className="mr-2" />
                          Sign In to Checkout
                        </div>
                      </button>
                      <p className="text-xs text-center text-mediumBlue">
                        New customer? <Link to="/register" className="text-lightPurple font-medium">Create an account</Link>
                      </p>
                    </div>
                  )}
                  
                  <Link
                    to="/"
                    className="block w-full text-center text-mediumBlue py-3 px-6 rounded-lg font-medium border-2 border-mediumBlue transition-all duration-200 hover:bg-mediumBlue hover:text-white"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;