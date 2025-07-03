import React from "react";
import { useSelector } from "react-redux";
import { useGetUserProfileQuery } from "../slices/authApiSlice";
import { Link } from "react-router-dom";

function Profile() {
  // Get user info from Redux (for immediate display)
  const { userInfo } = useSelector((state) => state.auth);

  // Fetch fresh user data from API
  const {
    data: profileData,
    isLoading: profileLoading,
    error: profileError,
  } = useGetUserProfileQuery();

  // Use profileData if available, fallback to userInfo
  const displayData = profileData || userInfo;

  // Loading state
  if (profileLoading && !userInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
        <div className="text-white text-center">
          <svg className="animate-spin h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg">Loading your profile...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (profileError && !userInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
        <div className="text-white text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <h2 className="text-2xl font-bold mb-2">Profile Not Found</h2>
          <p className="text-lg opacity-75 mb-6">Unable to load your profile information</p>
          <Link 
            to="/"
            className="px-6 py-3 bg-lightPurple text-white rounded-lg hover:opacity-90 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-goldish mb-4">My Profile</h1>
          <p className="text-white opacity-75 text-lg">Your account information at a glance</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Profile Avatar Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              {/* Avatar */}
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-lightPurple via-mediumBlue to-goldish rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-4xl font-bold">
                    {displayData?.name ? displayData.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-darkerBg mb-2">
                  {displayData?.name || 'User'}
                </h2>
                <p className="text-mediumBlue text-lg">
                  {displayData?.email || 'No email provided'}
                </p>
              </div>

              {/* Status Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Active Member
                </span>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Link 
                  to="/myorders" 
                  className="block w-full py-3 px-4 bg-gradient-to-r from-lightPurple to-mediumBlue text-white rounded-xl hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                >
                  View My Orders
                </Link>
                <Link 
                  to="/products" 
                  className="block w-full py-3 px-4 border-2 border-lightPurple text-lightPurple rounded-xl hover:bg-lightPurple hover:text-white transition-all duration-200 transform hover:scale-105"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Details Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-darkerBg">Account Details</h3>
                <div className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Verified</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Personal Information */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-darkerBg mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-lightPurple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Personal Information
                  </h4>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                      <p className="text-lg font-semibold text-darkerBg">
                        {displayData?.name || 'Not provided'}
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl">
                      <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                      <p className="text-lg font-semibold text-darkerBg">
                        {displayData?.email || 'Not provided'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Statistics */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-darkerBg mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-lightPurple" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Account Statistics
                  </h4>

                  <div className="space-y-4">

                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Member Since</p>
                          <p className="text-lg font-bold text-mediumBlue">
                            {displayData?.createdAt ? 
                              new Date(displayData.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              }) : 
                              'Recently'
                            }
                          </p>
                        </div>
                        <div className="text-mediumBlue">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Data freshness indicator */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Last updated: {new Date().toLocaleTimeString()}</span>
                  </div>
                  {profileLoading && (
                    <div className="flex items-center text-lightPurple">
                      <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Refreshing...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link 
            to="/"
            className="inline-flex items-center px-8 py-4 bg-white text-lightPurple rounded-2xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;