import React from 'react'

interface DrawerListProps {
  menu:any[],
  menu2:any[],
  toggleDrawer:()=>void
}

const DrawerList = ({menu,menu2,toggleDrawer}:DrawerListProps) => {
  return (
    <div className='h-full'>
      <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
          <div>
            <div className='space-y-2'>

            </div>
          </div>
      </div>
    </div>
  )
}

export default DrawerList