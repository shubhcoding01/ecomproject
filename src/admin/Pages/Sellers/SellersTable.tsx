import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { title } from 'process'
import React, { useState } from 'react'

const accountStatusOptions = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "Your account is awaiting verification. Please check your email for further instructions.",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Your account is active and fully functional.",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description: "Your account has been temporarily suspended due to policy violations or suspicious activity.",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "Your account has been deactivated by you or an administrator. You can reactivate it anytime.",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Your account has been permanently banned due to repeated violations of our terms of service.",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Your account has been closed. All data has been archived or removed as per policy.",
  },
];
const SellersTable = () => {
    const [accountStatus, setAccountStatus] = useState("ACTIVE")

    const handleChange= (event:any) => {
        setAccountStatus(event.target.value);
    }
  return (
    <div className='pb-5 w-60'>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={accountStatus}
    label="Account Status"
    onChange={handleChange}
  >
    {accountStatusOptions.map((item)=> <MenuItem value={item.status}>{item.title}</MenuItem>)}
    
  </Select>
</FormControl>
    </div>
  )
}

export default SellersTable