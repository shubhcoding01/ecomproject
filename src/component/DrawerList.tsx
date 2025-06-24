import { Divider, ListItemIcon, ListItemText } from '@mui/material'
import React, { use } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../State/Store'
import { logout } from '../State/AuthSlice'
// import { clearSellerProfile } from '../State/seller/sellerSlice'

interface menuItem{
  
      name:string,
      path:string,
      icon:any
      activeIcon:any
      logout?:boolean
    
}

interface DrawerListProps {
  menu:menuItem[],
  menu2:menuItem[],
  toggleDrawer:()=>void
}

const DrawerList = ({menu,menu2,toggleDrawer}:DrawerListProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
//   const handleLogout = () => {
//   localStorage.removeItem("jwt");
//   dispatch(clearSellerProfile());
//   navigate("/"); // Redirect to home page
// };
  const handleLogout = () => {
    dispatch(logout(navigate))
  };

  return (
    <div className='h-full'>
      <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
          
            <div className='space-y-2'>
                {
                  menu.map((item:any,index:number)=>
                    <div onClick={()=>{

                      // if (item.logout)
                        //  {
  //     handleLogout(); 
  //   } else {
  //     navigate(item.path); 
  //   }
  //   toggleDrawer(); 
  // }
                      {
                      navigate(item.path)
                    if(item.path=="/") handleLogout()}}
                      
                    } className='pr-9 cursor-pointer' key={index}>
                      <p className={`${item.path==location.pathname ? "bg-primary-color text-white":"text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
                        <ListItemIcon>
                          {item.path==location.pathname?item.activeIcon:item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                      </p>
                    </div>
                  )
                }
            </div>

                <Divider/>
            <div className='space-y-2'>
                {
                  menu2.map((item:any,index:number)=>
                    <div onClick={()=>navigate(item.path)} className='pr-9 cursor-pointer' key={index}>
                      <p className={`${item.path==location.pathname ? "bg-primary-color text-white":"text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
                        <ListItemIcon>
                          {item.path==location.pathname?item.activeIcon:item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                      </p>
                    </div>
                  )
                }
            </div>
          
      </div>
    </div>
  )
}

export default DrawerList

// DrawerList.tsx
// import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import React from 'react';

// interface MenuItem {
//   name: string;
//   path: string;
//   icon: React.ReactNode;
//   activeIcon: React.ReactNode;
// }

// interface DrawerListProps {
//   menu: MenuItem[];
//   menu2: MenuItem[];
//   toggleDrawer: () => void;
// }

// const DrawerList: React.FC<DrawerListProps> = ({ menu, menu2, toggleDrawer }) => {
//   return (
//     <div className='h-full'>
//       <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
//         <List>
//           {menu.map((item, index) => (
//             <ListItem key={index} onClick={toggleDrawer} style={{ cursor: 'pointer' }}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.name} />
//             </ListItem>
//           ))}
//         </List>
//         <List>
//           {menu2.map((item, index) => (
//             <ListItem key={index} onClick={toggleDrawer} style={{ cursor: 'pointer' }}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.name} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     </div>
//   );
// };

// export default DrawerList;
