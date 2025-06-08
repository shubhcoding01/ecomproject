import { Stepper } from '@mui/material';
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
    <div>
        <Stepper
            activeStep={activeStep}
            alternativeLabel
            className='mb-6'>
                
            </Stepper>
    </div>
  )
}

export default SellerAccountForm