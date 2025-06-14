// import { ListItemIcon, ListItemText } from '@mui/material'
// import React from 'react'

// interface menuItem{
  
//       name:string,
//       path:string,
//       icon:any
//       activeIcon:any
    
// }

// interface DrawerListProps {
//   menu:menuItem[],
//   menu2:menuItem[],
//   toggleDrawer:()=>void
// }

// const DrawerList = ({menu,menu2,toggleDrawer}:DrawerListProps) => {
//   return (
//     <div className='h-full'>
//       <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
//           <div>
//             <div className='space-y-2'>
//                 {
//                   menu.map((item:any,index:number)=>
//                     <div className='pr-9' key={index}>
//                       <p>
//                         <ListItemIcon>
//                           {item.icon}
//                         </ListItemIcon>
//                         <ListItemText primary={item.name}/>
//                       </p>
//                     </div>
//                   )
//                 }
//             </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default DrawerList

import React from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

interface DrawerListProps {
  menu: MenuItem[];
  menu2: MenuItem[];
  toggleDrawer: () => void;
}

const DrawerList: React.FC<DrawerListProps> = ({ menu, menu2, toggleDrawer }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const renderMenu = (items: MenuItem[]) =>
    items.map((item, index) => {
      const isActive = location.pathname === item.path;

      return (
        <div
          key={index}
          onClick={() => {
            navigate(item.path);
            toggleDrawer();
          }}
          className={`flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition-all duration-200
            ${isActive ? 'bg-primary-color text-white shadow-md' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        >
          <ListItemIcon className="min-w-[32px]">
            {isActive ? item.activeIcon : item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{
              fontSize: 15,
              fontWeight: isActive ? 600 : 500,
            }}
          />
        </div>
      );
    });

  return (
    <div className="h-full flex flex-col justify-between w-[300px] border-r dark:border-gray-700 py-5 bg-white dark:bg-gray-900">
      <div className="space-y-2">{renderMenu(menu)}</div>
      <div className="space-y-2 px-2">{renderMenu(menu2)}</div>
    </div>
  );
};

export default DrawerList;
