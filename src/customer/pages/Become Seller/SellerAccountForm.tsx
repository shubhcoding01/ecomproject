import React, { useState } from 'react'

const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Business Details",
]
const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(1);

  return (
    <div>SellerAccountForm</div>
  )
}

export default SellerAccountForm