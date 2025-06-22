import { Button } from '@mui/material'
import React, { useState } from 'react'

const tabs = [
  "Deals",
  "Category",
  "Create Deal",
]

const Deal = () => {
  const [activeTab, setActiveTab] = useState("Deals")
  return (
    <div>
      <div className='flex gap-4'>
        {tabs.map((item) => <Button variant={activeTab==item?"contained":"outlined"}>{item}</Button>)}
      </div>
      <div className=''></div>
    </div>
  )
}

export default Deal