import React from 'react';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className='flex items-center gap-5'>
        <div>
          <Avatar sx={{ bgcolor: teal[500] }}>
            <ElectricBoltIcon />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Order details or description can go here.</p>
        </div>
      </div>
      <div>
        <p className='text-gray-500'>Order ID: 123456789</p>
        <p className='text-gray-500'>Placed on: 2023-10-01</p>
      </div>
    </div>
  );
};

export default OrderItem;