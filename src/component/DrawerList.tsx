import { ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

interface menuItem{
  
      name:string,
      path:string,
      icon:any
      activeIcon:any
    
}

interface DrawerListProps {
  menu:menuItem[],
  menu2:menuItem[],
  toggleDrawer:()=>void
}

const DrawerList = ({menu,menu2,toggleDrawer}:DrawerListProps) => {
  return (
    <div className='h-full'>
      <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
          <div>
            <div className='space-y-2'>
                {
                  menu.map((item:any,index:number)=>
                    <div className='pr-9' key={index}>
                      <p>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                      </p>
                    </div>
                  )
                }
            </div>
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
