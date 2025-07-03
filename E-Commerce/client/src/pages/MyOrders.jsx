import React, { useEffect } from "react";
import { useGetMyOrdersQuery } from "../slices/orderApiSlice";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { NotepadText , SquareCheckBig , TruckElectric } from "lucide-react"; 

function MyOrders() {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: myOrders, isLoading, isError, error } = useGetMyOrdersQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-goldish mx-auto mb-4"></div>
          <h2 className="text-2xl text-white font-semibold">
            Loading your orders...
          </h2>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
        <div className="text-center text-white">
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
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl mb-4">Error Loading Orders</h2>
          <p className="mb-4 opacity-75">
            {error?.data?.error || "Something went wrong"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-lightPurple px-6 py-3 rounded-lg hover:opacity-90 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-goldish mb-4">My Orders</h1>
          <p className="text-xl text-white opacity-75">
            Track and manage your order history
          </p>
        </div>

        {/* Orders Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-300 rounded-2xl shadow-lg p-6 text-center">
            <div className="flex justify-center mb-2">
              <NotepadText className="text-3xl text-cyan-700" />
            </div>
            <h3 className="text-2xl font-bold text-darkerBg">
              {myOrders?.length || 0}
            </h3>
            <p className="text-gray-600">Total Orders</p>
          </div>

          <div className="bg-gray-300 rounded-2xl shadow-lg p-6 text-center">
            <div className="flex justify-center text-3xl text-green-600 mb-2"><SquareCheckBig className="text-cyan-700" /></div>
            <h3 className="text-2xl font-bold text-darkerBg">
              {myOrders?.filter((order) => order.isPaid)?.length || 0}
            </h3>
            <p className="text-gray-600">Paid Orders</p>
          </div>

          <div className="bg-gray-300 rounded-2xl shadow-lg p-6 text-center">
            <div className="flex justify-center text-3xl text-blue-600 mb-2"><TruckElectric className="text-cyan-700" /></div>
            <h3 className="text-2xl font-bold text-darkerBg">
              {myOrders?.filter((order) => order.isDelivered)?.length || 0}
            </h3>
            <p className="text-gray-600">Delivered</p>
          </div>
        </div>

        {/* Orders List */}
        {!myOrders || myOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-darkerBg mb-4">
              No Orders Yet
            </h3>
            <p className="text-gray-600 mb-6">
              You haven't placed any orders yet. Start shopping to see your
              orders here!
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-lightPurple to-mediumBlue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {myOrders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Order Header */}
                <div className="bg-gradient-to-r from-lightPurple to-mediumBlue p-6 text-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Order #{order._id.slice(-8).toUpperCase()}
                      </h3>
                      <p className="opacity-90">
                        Placed on{" "}
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-2xl font-bold">
                        ₹{order.totalPrice}
                      </div>
                      <div className="text-sm opacity-90">
                        {order.orderItems?.length || 0} item
                        {(order.orderItems?.length || 0) !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Status */}
                <div className="p-6 border-b border-gray-200 bg-gray-300">
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Payment Status */}
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${
                          order.isPaid ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      ></div>
                      <div>
                        <div className="font-semibold text-darkerBg">
                          Payment
                        </div>
                        <div
                          className={`text-sm ${
                            order.isPaid ? "text-green-600" : "text-yellow-600"
                          }`}
                        >
                          {order.isPaid
                            ? `Paid on ${new Date(
                                order.paidAt
                              ).toLocaleDateString()}`
                            : "Pending"}
                        </div>
                      </div>
                    </div>

                    {/* Delivery Status */}
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${
                          order.isDelivered ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                      <div>
                        <div className="font-semibold text-darkerBg">
                          Delivery
                        </div>
                        <div
                          className={`text-sm ${
                            order.isDelivered
                              ? "text-green-600"
                              : "text-gray-600"
                          }`}
                        >
                          {order.isDelivered
                            ? `Delivered on ${new Date(
                                order.deliveredAt
                              ).toLocaleDateString()}`
                            : "Processing"}
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-darkerBg">
                          Payment Method
                        </div>
                        <div className="text-sm text-gray-600">
                          {order.paymentMethod}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="p-6 bg-gray-300">
                  <h4 className="font-bold text-darkerBg mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {order.orderItems?.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 mr-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-darkerBg">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              Qty: {item.qty}
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold text-darkerBg">
                          ₹{(item.price * item.qty).toFixed(2)}
                        </div>
                      </div>
                    ))}

                    {(order.orderItems?.length || 0) > 3 && (
                      <div className="text-center text-gray-500 text-sm">
                        and {(order.orderItems?.length || 0) - 3} more item
                        {(order.orderItems?.length || 0) - 3 !== 1 ? "s" : ""}
                        ...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back to Shopping Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-lightPurple to-mediumBlue text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13L5 7m0 0H3m4 6h.01M19 13h.01"
              />
            </svg>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
