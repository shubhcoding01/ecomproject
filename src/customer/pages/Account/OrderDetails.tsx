import React from 'react';
import Avatar from '@mui/material/Avatar';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { teal } from '@mui/material/colors';

const OrderDetails: React.FC = () => {
  const order = {
    id: 101,
    status: 'DELIVERED',
    shopName: 'Techify Mart',
    product: 'EchoDot 4th Gen Smart Speaker with Alexa (Black)',
    description:
      'Smart speaker with improved bass, LED display showing time, temperature, and timers. Compatible with Alexa voice assistant.',
    size: 'Compact',
    quantity: 1,
    price: 3499,
    deliveryDate: 'May 31, 2025',
    imageUrl:
      'https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UL480_FMwebp_QL65_.jpg',
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Avatar sx={{ bgcolor: teal[500] }}>
            <ElectricBoltIcon />
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Order #{order.id}</h2>
            <p className="text-sm text-green-600 font-medium">{order.status}</p>
          </div>
        </div>

        {/* Product Summary */}
        <div className="flex gap-6">
          <img
            src={order.imageUrl}
            alt={order.product}
            className="w-32 h-32 object-contain rounded-md"
          />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">{order.product}</h3>
            <p className="text-gray-600 text-sm">{order.description}</p>
            <p>
              <strong>Size:</strong> {order.size}
            </p>
            <p>
              <strong>Quantity:</strong> {order.quantity}
            </p>
            <p>
              <strong>Price:</strong> ₹{order.price}
            </p>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="border-t pt-4 text-sm text-gray-700 space-y-1">
          <p>
            <strong>Shop:</strong> {order.shopName}
          </p>
          <p>
            <strong>Delivered on:</strong> {order.deliveryDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
