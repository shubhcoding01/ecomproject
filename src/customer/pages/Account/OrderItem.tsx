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
      <div className='p-5 bg-teal-50 flex gap-3'>
        <div>
          <img className='w-[70px]' src="https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
        </div>
        <div className='w-full space-y-2'>
          <h1 className='font-bold'>Shubh Shop</h1>
          <p>NoiseFit Halo 1.43" AMOLED Display, Bluetooth Calling Round Dial Smart Watch, Premium Metallic Build, Always on Display, Smart Gesture Control, 100 Sports Modes (Vintage Brown)</p>
          <p>
            <strong>Size : </strong>
            Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;