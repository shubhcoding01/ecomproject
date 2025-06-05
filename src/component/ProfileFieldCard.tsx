// import { Divider } from '@mui/material'
// import React from 'react'

// const ProfileFieldCard = ({keys,value}:{keys:string,value:string}) => {
//   return (
//     <div className='p-5 flex items-center bg-slate-50'>
//         <p className='w-20 lg:w-36 pr-5'>{keys}</p>
//         <Divider orientation="vertical" flexItem />
//         <p className='pl-5'>{value}</p>
//     </div>
//   )
// }

// export default ProfileFieldCard

import React from 'react';
import { Divider, Box } from '@mui/material';
import { Person, Email, Phone, Home, Cake, Wc, Star } from '@mui/icons-material';

const iconMap: Record<string, React.ReactNode> = {
  Name: <Person className="text-blue-500" />,
  Email: <Email className="text-red-500" />,
  Phone: <Phone className="text-green-500" />,
  'Alternate Phone': <Phone className="text-yellow-600" />,
  Address: <Home className="text-purple-500" />,
  'Date of Birth': <Cake className="text-pink-500" />,
  Gender: <Wc className="text-indigo-500" />,
  'Loyalty Tier': <Star className="text-amber-500" />
};

const ProfileFieldCard = ({ keys, value }: { keys: string; value: string }) => {
  return (
    <Box className="flex items-center bg-white p-4 rounded-xl shadow-md transition hover:shadow-lg">
      <div className="flex items-center w-44 space-x-2">
        {iconMap[keys] || <span className="w-6" />}
        <p className="font-medium text-gray-600">{keys}</p>
      </div>
      <Divider orientation="vertical" flexItem className="mx-6" />
      <p className="text-gray-800 pl-2">{value}</p>
    </Box>
  );
};

export default ProfileFieldCard;
