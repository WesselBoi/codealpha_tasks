// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useGetOrderDetailsQuery } from '../slices/orderApiSlice';

// function OrderDetails() {
//   const { id } = useParams();
//   const { data: order, isLoading, error } = useGetOrderDetailsQuery(id);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
//         <div className="text-white text-xl">Loading order details...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
//         <div className="text-center text-white">
//           <h2 className="text-2xl mb-4">Error loading order</h2>
//           <p className="mb-4">{error?.data?.error || 'Something went wrong'}</p>
//           <Link to="/profile" className="bg-lightPurple px-6 py-3 rounded-lg">
//             Back to Orders
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-goldish mb-2">Order Details</h1>
//           <p className="text-white opacity-75">Order ID: {order?._id}</p>
//         </div>

//         {/* Order Status */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//           <div className="grid md:grid-cols-3 gap-4">
//             <div className={`p-4 rounded-lg text-center ${order?.isPaid ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
//               <div className="text-2xl mb-2">{order?.isPaid ? '✅' : '⏳'}</div>
//               <h3 className="font-bold">Payment Status</h3>
//               <p className={order?.isPaid ? 'text-green-700' : 'text-yellow-700'}>
//                 {order?.isPaid ? `Paid on ${new Date(order.paidAt).toLocaleDateString()}` : 'Not Paid'}
//               </p>
//             </div>
            
//             <div className={`p-4 rounded-lg text-center ${order?.isDelivered ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
//               <div className="text-2xl mb-2">{order?.isDelivered ? '🚚' : '📦'}</div>
//               <h3 className="font-bold">Delivery Status</h3>
//               <p className={order?.isDelivered ? 'text-green-700' : 'text-gray-700'}>
//                 {order?.isDelivered ? `Delivered on ${new Date(order.deliveredAt).toLocaleDateString()}` : 'Not Delivered'}
//               </p>
//             </div>
            
//             <div className="p-4 rounded-lg text-center bg-blue-50 border border-blue-200">
//               <div className="text-2xl mb-2">📅</div>
//               <h3 className="font-bold">Order Date</h3>
//               <p className="text-blue-700">
//                 {new Date(order?.createdAt).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
          
//           {/* Order Details */}
//           <div className="lg:col-span-2 space-y-6">
            
//             {/* Shipping Info */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold text-darkerBg mb-4">Shipping Information</h3>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <p><strong>Name:</strong> {order?.user?.name}</p>
//                 <p><strong>Email:</strong> {order?.user?.email}</p>
//                 <p><strong>Address:</strong> {order?.shippingAddress?.address}</p>
//                 <p><strong>City:</strong> {order?.shippingAddress?.city}</p>
//                 <p><strong>Postal Code:</strong> {order?.shippingAddress?.postalCode}</p>
//                 <p><strong>Country:</strong> {order?.shippingAddress?.country}</p>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold text-darkerBg mb-4">Payment Method</h3>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <p><strong>Method:</strong> {order?.paymentMethod}</p>
//               </div>
//             </div>

//             {/* Order Items */}
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold text-darkerBg mb-4">Order Items</h3>
//               <div className="space-y-4">
//                 {order?.orderItems?.map((item, index) => (
//                   <div key={index} className="flex items-center py-4 border-b last:border-b-0">
//                     <div className="w-16 h-16 mr-4">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-full h-full object-cover rounded-lg"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <Link to={`/product/${item.product}`} className="text-darkerBg hover:text-lightPurple font-medium">
//                         {item.name}
//                       </Link>
//                       <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
//                     </div>
//                     <div className="text-gray-700 font-medium">
//                       ${(item.qty * item.price).toFixed(2)}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
//               <h3 className="text-2xl font-bold text-darkerBg mb-6">Order Summary</h3>

//               <div className="space-y-4 mb-6">
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Items</span>
//                   <span className="font-semibold">${order?.itemsPrice}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Shipping</span>
//                   <span className="font-semibold">${order?.shippingPrice}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-700">Tax</span>
//                   <span className="font-semibold">${order?.taxPrice}</span>
//                 </div>
//                 <hr className="border-gray-300" />
//                 <div className="flex justify-between text-xl">
//                   <span className="font-bold text-darkerBg">Total</span>
//                   <span className="font-bold text-lightPurple">${order?.totalPrice}</span>
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <Link
//                   to="/profile"
//                   className="block w-full text-center bg-gradient-to-r from-lightPurple to-mediumBlue text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:opacity-90"
//                 >
//                   View All Orders
//                 </Link>
                
//                 <Link
//                   to="/"
//                   className="block w-full text-center border-2 border-mediumBlue text-mediumBlue py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:bg-mediumBlue hover:text-white"
//                 >
//                   Continue Shopping
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;