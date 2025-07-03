import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/authApiSlice";
import { setRegisterCredentials } from "../slices/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "" 
  });
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields')
      return false
    }

    if (formData.name.length < 3) {
      setError('Name must be at least 3 characters long')
      return false
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return false
    }

    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }

    return true
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return
    }

    console.log(formData);

    try {
      const userData = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      }).unwrap();

      dispatch(setRegisterCredentials(userData));

      navigate("/login");
    } catch (err) {
      setError(err?.data?.error || "Registration Failed");
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center px-4 py-12'>
      <div className='max-w-md w-full'>
        {/* Logo/Brand */}
        <div className='text-center mb-8'>
          <Link to='/' className='inline-block'>
            <h1 className='text-4xl font-bold text-goldish mb-2'>ShopEase</h1>
            <p className='text-white opacity-75'>Create your account</p>
          </Link>
        </div>

        {/* Register Form */}
        <div className='bg-white rounded-2xl shadow-2xl p-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-darkerBg mb-2'>Create Account</h2>
            <p className='text-mediumBlue'>Join us and start your shopping journey</p>
          </div>

          {error && (
            <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg'>
              <div className='flex items-center'>
                <svg className='w-5 h-5 text-red-400 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
                </svg>
                <p className='text-red-700 text-sm'>{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name Field */}
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-darkerBg mb-2'>
                Full Name
              </label>
              <div className='relative'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200'
                  placeholder='Enter your full name'
                  required
                />
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg className='w-5 h-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-darkerBg mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200'
                  placeholder='Enter your email'
                  required
                />
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg className='w-5 h-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-darkerBg mb-2'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full px-4 py-3 pl-11 pr-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200'
                  placeholder='Create a password'
                  required
                />
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg className='w-5 h-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                  </svg>
                </div>
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  <svg className='w-5 h-5 text-gray-400 hover:text-gray-600' fill='currentColor' viewBox='0 0 20 20'>
                    {showPassword ? (
                      <path fillRule='evenodd' d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z' clipRule='evenodd' />
                    ) : (
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Optional) */}
            <div>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-darkerBg mb-2'>
                Confirm Password <span className='text-gray-400'>(Optional)</span>
              </label>
              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className='w-full px-4 py-3 pl-11 pr-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200'
                  placeholder='Confirm your password'
                />
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg className='w-5 h-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                  </svg>
                </div>
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  <svg className='w-5 h-5 text-gray-400 hover:text-gray-600' fill='currentColor' viewBox='0 0 20 20'>
                    {showConfirmPassword ? (
                      <path fillRule='evenodd' d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z' clipRule='evenodd' />
                    ) : (
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='terms'
                  name='terms'
                  type='checkbox'
                  required
                  className='h-4 w-4 text-lightPurple focus:ring-lightPurple border-gray-300 rounded'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='terms' className='text-mediumBlue'>
                  I agree to the{' '}
                  <a href='#' className='text-lightPurple font-medium hover:text-opacity-80'>
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href='#' className='text-lightPurple font-medium hover:text-opacity-80'>
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-lightPurple to-mediumBlue hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightPurple disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105'
            >
              {isLoading ? (
                <div className='flex items-center'>
                  <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  Creating account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className='mt-8 text-center'>
            <p className='text-mediumBlue'>
              Already have an account?{' '}
              <Link 
                to='/login' 
                className='text-lightPurple font-medium hover:text-opacity-80 transition-colors duration-200'
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;