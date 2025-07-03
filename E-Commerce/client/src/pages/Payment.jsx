import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../slices/cartSlice";
import CheckoutSteps from "../components/CheckoutSteps";

function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingAddress, paymentMethod, cartItems } = useSelector(
    (state) => state.cart
  );

  const [selectedMethod, setSelectedMethod] = useState(
    paymentMethod || "PayPal"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if no shipping address
  useEffect(() => {
    if (!shippingAddress?.address) {
      navigate("/shipping");
    }
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [shippingAddress, cartItems, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      dispatch(savePaymentMethod(selectedMethod));
      navigate("/placeorder");
    } catch (error) {
      console.error("Error saving payment method:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const paymentOptions = [
    {
      id: "Credit/Debit Card",
      name: "Credit/Debit Card",
      description: "Visa, MasterCard, American Express via Stripe",
      icon: "💳",
      popular: true,
    },
    {
      id: "CashOnDelivery",
      name: "Cash on Delivery",
      description: "Pay when you receive your order",
      icon: "💵",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Checkout Steps */}
        <CheckoutSteps step1 step2 step3 />

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-goldish mb-2">
            Payment Method
          </h1>
          <p className="text-white opacity-75">
            Choose your preferred payment option
          </p>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Shipping Address Summary */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Shipping to:</h3>
            <p className="text-blue-800 text-sm">
              {shippingAddress?.address}, {shippingAddress?.city},{" "}
              {shippingAddress?.postalCode}, {shippingAddress?.country}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Payment Options */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-darkerBg mb-4">
                Select Payment Method
              </h3>

              {paymentOptions.map((option) => (
                <label
                  key={option.id}
                  className={`
                    relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      selectedMethod === option.id
                        ? "border-lightPurple bg-purple-50"
                        : "border-gray-300 hover:border-gray-400"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={option.id}
                    checked={selectedMethod === option.id}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="sr-only"
                  />

                  {/* Custom Radio Button */}
                  <div
                    className={`
                    w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center
                    ${
                      selectedMethod === option.id
                        ? "border-lightPurple bg-lightPurple"
                        : "border-gray-400"
                    }
                  `}
                  >
                    {selectedMethod === option.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>

                  {/* Option Content */}
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{option.icon}</span>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-darkerBg">
                            {option.name}
                          </span>
                          {option.popular && (
                            <span className="ml-2 px-2 py-1 bg-goldish text-white text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedMethod === option.id && (
                    <div className="text-lightPurple">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </label>
              ))}
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-green-800 text-sm font-medium">
                    Secure Payment
                  </p>
                  <p className="text-green-700 text-xs">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate("/shipping")}
                className="flex-1 py-3 px-6 border-2 border-mediumBlue text-mediumBlue rounded-lg hover:bg-mediumBlue hover:text-white transition-all duration-200"
              >
                Back to Shipping
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-lightPurple to-mediumBlue text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Continue to Review Order"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
