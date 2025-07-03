import { useParams , Link , useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetails() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { data: product, isLoading, isError } = useGetProductDetailsQuery(productId);

  // Determine the maximum selectable quantity
  const maxQty = product && product.countinstock && product.countinstock < 10 ? product.countinstock : 10;
  const addToCartHandler = () => {
    dispatch(addToCart({...product, qty: quantity}))
    navigate("/cart");
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-purpleBg">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 bg-mediumBlue"
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
            Back to Products
          </Link>
        </div>

        {/* Main Product Card */}
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="text-white text-xl mb-4">
              Oops! Something went wrong while loading product details.
            </div>
            <Link
              to="/"
              className="px-6 py-3 bg-mediumBlue text-white rounded-lg hover:opacity-90 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        ) : product ? (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Product Info Section */}
              <div className="p-8 lg:p-12 space-y-6 bg-gray-300">
                <div>
                  <h1 className="text-4xl font-bold mb-4 text-darkerBg">
                    {product.name}
                  </h1>
                  <div className="mb-6">
                    <Rating
                      rating={product.rating}
                      numReviews={product.numreviews}
                    />
                  </div>
                  <p className="text-5xl font-bold mb-6 text-purpleBg">
                    ₹{product.price}
                  </p>
                </div>

                <div>
                  <h3 className="inline-block py-2 rounded-lg text-xl font-semibold text-mediumBlue">
                    Description
                  </h3>
                  <hr />
                  <p className="leading-relaxed text-lg text-mediumBlue mt-4">
                    {product.desc}
                  </p>
                </div>
                {product.countinstock ? (
                  <div className="text-lg text-green-600 font-semibold">
                    In Stock: {product.countinstock}
                  </div>
                ) : (
                  <div className="text-lg text-red-600 font-semibold">
                    Out of Stock
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold mb-3 text-darkerBg">
                      Quantity
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border-2 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 transition-all duration-200 border-mediumBlue focus:ring-purpleBg cursor-pointer disabled:cursor-not-allowed"
                      disabled={!product.countinstock}
                    >
                      {[...Array(maxQty)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 xl:gap-8">
                    <button
                      className={
                        product.countinstock
                          ? "flex-1 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg bg-mediumBlue cursor-pointer"
                          : "flex-1 text-white py-4 px-8 rounded-lg text-lg font-semibold  shadow-lg bg-gray-400 cursor-not-allowed"
                      }
                      onClick={addToCartHandler}
                      disabled={!product.countinstock}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="text-white text-xl">
              Product not found.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;