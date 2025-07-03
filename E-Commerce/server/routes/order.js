const express = require('express');
const {
  createOrder,
  getOrderById,
  getMyOrders,
  updateOrderToPaid,
} = require('../controllers/order');
const auth  = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected user routes
router.post('/', auth, createOrder);
router.get('/myorders', auth, getMyOrders);
router.get('/:id', auth, getOrderById);
router.put('/:id/pay', auth, updateOrderToPaid);


module.exports = router;