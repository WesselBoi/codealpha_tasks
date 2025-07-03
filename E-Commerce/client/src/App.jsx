import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageTransition from "./components/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx"; 
import Profile from "./pages/Profile.jsx"
import { useAuthPersist } from './hooks/useAuthPersist';
import Shipping from "./pages/Shipping.jsx"
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import MyOrders from './pages/MyOrders.jsx';
import OrderSuccessfull from './pages/OrderSuccessfull.jsx';
import ScrollToTop from "./hooks/ScrollToTop.js";
import { AnimatePresence } from "framer-motion";

function App() {
  useAuthPersist();       // Custom hook for confirming user authentication state
  const location = useLocation();

  return (
    <div>
      <Header />
      <ScrollToTop />         {/* Scroll to top functionality */}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
          <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
          <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
          <Route path="/shipping" element={<PageTransition><Shipping /></PageTransition>} />
          <Route path="/payment" element={<PageTransition><Payment /></PageTransition>} />
          <Route path="/placeorder" element={<PageTransition><PlaceOrder /></PageTransition>} />
          <Route path="/myorders" element={<PageTransition><MyOrders /></PageTransition>} />
          <Route path="/ordersuccessfull" element={<PageTransition><OrderSuccessfull /></PageTransition>} />
          <Route 
            path="*" 
            element={
              <PageTransition>
                <div className="min-h-screen flex items-center justify-center bg-purpleBg">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-goldish mb-4">404</h1>
                    <p className="text-white text-xl">Page Not Found</p>
                  </div>
                </div>
              </PageTransition>
            } 
          />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;