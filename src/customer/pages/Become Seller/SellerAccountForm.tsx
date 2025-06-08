import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { act, useState } from 'react'

const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Business Details",
]
const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStep = (value:number) =>()=> {
        setActiveStep(activeStep + value);
    }

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
            <section>

            </section>
            <div className='flex items-center justify-between mt-6'>
                    <Button variant='contained' disabled={activeStep === 0} onClick={handleStep(-1)}>

                    </Button>
            </div>
    </div>
  )
}

export default SellerAccountForm