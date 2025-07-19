// import React from 'react'
// import SellerDrawerList from '../../components/SellerDrawerList/SellerDrawerList'
// import SellerRoutes from '../../../Routes/SellerRoutes'
// import { Outlet } from 'react-router-dom'

// const SellerDashboard = () => {
//   const toggleDrawer = () => {}
//   return (
//     <div>
//         <div className='lg:flex lg:h-[90vh]'>

//             <section className="hidden lg:block h-full">
//                 <SellerDrawerList toggleDrawer={toggleDrawer}/>
//             </section>
//             <Outlet/>
//             <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
//                 <SellerRoutes/>
//             </section>

//         </div>
//     </div>
//   )
// }

// export default SellerDashboard

import React from 'react';
import SellerDrawerList from '../../components/SellerDrawerList/SellerDrawerList';
import { Outlet } from 'react-router-dom';
import SellerRoutes from '../../../Routes/SellerRoutes';

const SellerDashboard = () => {
  const toggleDrawer = () => {};

  return (
    <div>
      <div className='lg:flex lg:h-[90vh]'>
        <section className="hidden lg:block h-full">
          <SellerDrawerList toggleDrawer={toggleDrawer} />
        </section>
        
        <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
          <SellerRoutes /> {/* 👈 This is where the nested routes will be rendered */}
        </section>
      </div>
    </div>
  );
};

export default SellerDashboard;


// SellerDashboard.tsx
// import React from 'react';
// import SellerDrawerList from '../../components/SellerDrawerList/SellerDrawerList';

// const SellerDashboard: React.FC = () => {
//   const toggleDrawer = () => {
//     // Implement drawer toggle functionality
//   };

//   return (
//     <div>
//       <div className='lg:flex lg:h-[90vh]'>
//         <section className="hidden lg:block h-full">
//           <SellerDrawerList toggleDrawer={toggleDrawer} />
//         </section>
//         <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
//           <h1 className="text-2xl font-bold">Seller Dashboard</h1>
//           <p>Manage your seller account and view your sales data here.</p>
//           {/* Add more content as needed */}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;