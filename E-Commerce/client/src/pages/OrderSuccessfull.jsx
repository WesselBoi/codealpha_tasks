import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function OrderSuccessfull() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isValidAccess, setIsValidAccess] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    // Check if user came from a valid order placement
    const { orderId, orderData } = location.state || {};
    
    // Also check sessionStorage for additional validation
    const recentOrderId = sessionStorage.getItem('recentOrderId');
    const orderTimestamp = sessionStorage.getItem('orderTimestamp');
    
    // Validate access conditions
    const hasValidLocationState = orderId && orderData;
    const hasRecentOrder = recentOrderId && orderTimestamp;
    const isRecentOrder = orderTimestamp && (Date.now() - parseInt(orderTimestamp)) < 300000; // 5 minutes
    
    if (hasValidLocationState || (hasRecentOrder && isRecentOrder)) {
      setIsValidAccess(true);
      setOrderInfo({
        orderId: orderId || recentOrderId,
        orderData: orderData || JSON.parse(sessionStorage.getItem('recentOrderData') || '{}')
      });
      
      // Store order info for this session (in case of page refresh)
      if (orderId && orderData) {
        sessionStorage.setItem('recentOrderId', orderId);
        sessionStorage.setItem('recentOrderData', JSON.stringify(orderData));
        sessionStorage.setItem('orderTimestamp', Date.now().toString());
      }
      
      // Clear the session storage after 5 minutes
      setTimeout(() => {
        sessionStorage.removeItem('recentOrderId');
        sessionStorage.removeItem('recentOrderData');
        sessionStorage.removeItem('orderTimestamp');
      }, 300000);
      
    } else {
      // Invalid access - redirect to home after a brief delay
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    }
  }, [location.state, navigate]);

  // Show loading/redirect message for invalid access
  if (!isValidAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-white opacity-75 mb-6">
            This page can only be accessed after placing an order.
          </p>
          
          <div className="space-y-3">
            <div className="text-white opacity-60 text-sm">
              Redirecting to home page...
            </div>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-lightPurple text-white rounded-lg font-semibold transition-all duration-200 hover:opacity-90"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { orderId, orderData } = orderInfo || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Success Animation */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-16 h-16 text-green-600 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="text-5xl font-bold text-goldish mb-4">
            Order Placed Successfully! 🎉
          </h1>
          
          <p className="text-xl text-white opacity-90 mb-8">
            Thank you for your purchase! Your order has been confirmed and is being processed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-bold text-darkerBg mb-2">Order Confirmation</h2>
            {orderId && (
              <p className="text-gray-600">
                Order ID: <span className="font-mono text-lightPurple">{orderId}</span>
              </p>
            )}
            <p className="text-sm text-gray-500 mt-2">
              Placed on: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-bold text-darkerBg mb-3 flex items-center">
                <span className="text-2xl mr-2">📧</span>
                Next Steps
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lightPurple rounded-full mr-3"></span>
                  Order confirmation email sent
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lightPurple rounded-full mr-3"></span>
                  Processing will begin shortly
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lightPurple rounded-full mr-3"></span>
                  Tracking info will be provided
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-darkerBg mb-3 flex items-center">
                <span className="text-2xl mr-2">📦</span>
                Order Status
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <span className="text-yellow-800">Payment</span>
                  <span className="text-yellow-700 font-medium">Pending</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-gray-800">Shipping</span>
                  <span className="text-gray-600 font-medium">Processing</span>
                </div>
              </div>
            </div>
          </div>

          {orderData && (
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Amount:</span>
                <span className="text-2xl font-bold text-lightPurple">
                  ₹{orderData.totalPrice}
                </span>
              </div>
              
              {/* Additional Order Summary */}
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Items:</span>
                  <span>₹{orderData.itemsPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>₹{orderData.shippingPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>₹{orderData.taxPrice}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/myorders"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-lightPurple to-mediumBlue text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View My Orders
          </Link>
          
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-purpleBg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13L5 7m0 0H3m4 6h.01M19 13h.01" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-white opacity-60 text-xs">
          ⚠️ This page is only accessible immediately after order placement for security reasons
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessfull;