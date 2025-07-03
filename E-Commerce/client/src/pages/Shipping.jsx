import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';

function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { shippingAddress, cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    address: shippingAddress?.address || '',
    city: shippingAddress?.city || '',
    postalCode: shippingAddress?.postalCode || '',
    country: shippingAddress?.country || '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
    if (!userInfo) {
      navigate('/login?redirect=/shipping');
    }
  }, [cartItems, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }
    
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    // Basic postal code validation
    if (formData.postalCode && !/^\d{5}(-\d{4})?$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Please enter a valid postal code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      dispatch(saveShippingAddress(formData));
      navigate('/payment');
    } catch (error) {
      console.error('Error saving shipping address:', error);
      setErrors({ submit: 'Failed to save shipping address. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleAddDemoAddress() {
    setFormData({
      address: '123 Demo Street',
      city: 'Demo City',
      postalCode: '12345',
      country: 'India'
    });
    setErrors({});
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Checkout Steps */}
        <CheckoutSteps step1 step2 />
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-goldish mb-2">Shipping Address</h1>
          <p className="text-white opacity-75">Where should we deliver your order?</p>
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🛒</span>
              <span className="font-medium">
                {cartItems.reduce((acc, item) => acc + item.qty, 0)} items in cart
              </span>
            </div>
            <span className="font-bold text-lightPurple">
              ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Shipping Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          
          {/* User Info Display */}
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <p className="text-green-800">
                Delivering to: <span className="font-medium">{userInfo?.name}</span>
              </p>
            </div>
          </div>
          <div className='text-right'>
            <button className='p-2 bg-cyan-100 bg-cover cursor-pointer hover:underline rounded-xl' onClick={() => handleAddDemoAddress()}>Use demo address</button>
          </div>

          {/* Error Display */}
          {errors.submit && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{errors.submit}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Address Field */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-darkerBg mb-2">
                Street Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                  errors.address 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-lightPurple focus:border-lightPurple'
                }`}
                placeholder="123 Main Street"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            {/* City and Postal Code Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* City Field */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-darkerBg mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                    errors.city 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-lightPurple focus:border-lightPurple'
                  }`}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>

              {/* Postal Code Field */}
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-darkerBg mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                    errors.postalCode 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-lightPurple focus:border-lightPurple'
                  }`}
                  placeholder="12345"
                />
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>
                )}
              </div>
            </div>

            {/* Country Field */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-darkerBg mb-2">
                Country *
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                  errors.country 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-lightPurple focus:border-lightPurple'
                }`}
              >
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Other">Other</option>
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-600">{errors.country}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/cart')}
                className="flex-1 py-3 px-6 border-2 border-mediumBlue text-mediumBlue rounded-lg hover:bg-mediumBlue hover:text-white transition-all duration-200"
              >
                Back to Cart
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-lightPurple to-mediumBlue text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </div>
                ) : (
                  'Continue to Payment'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shipping;