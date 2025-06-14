import { ListItemIcon } from '@mui/material'
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
                    <div key={index}>
                      <p>
                        <ListItemIcon>
                          
                        </ListItemIcon>
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