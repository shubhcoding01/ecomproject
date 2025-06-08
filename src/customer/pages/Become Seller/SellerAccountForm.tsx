import { Step, StepLabel, Stepper } from '@mui/material';
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
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
    </div>
  )
}

export default SellerAccountForm