import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { act, useState } from 'react'
import BecomeSellerFormStep1 from './BecomeSellerFormStep1';

const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Business Details",
]
const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStep = (value:number) =>()=> {
        (activeStep < steps.length - 1 || (activeStep > 0 && value == -1)) && setActiveStep(activeStep + value);
        activeStep + value === steps.length -1 && handleCreateAccount();
        console.log("Current Step:", activeStep);
    }

    const handleCreateAccount = () => {
        // Logic to create account goes here
        console.log("Account created");
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
                {activeStep === 0 && <BecomeSellerFormStep1 formik={{values: {}, handleChange: () => {}, handleBlur: () => {}, touched: {}, errors: {}}} />}
                {activeStep === 1 && <p>Step 2: Pickup Address</p>}
                {activeStep === 2 && <p>Step 3: Bank Details</p>}
                {activeStep === 3 && <p>Step 4: Business Details</p>}
            </section>
            <div className='flex items-center justify-between mt-6'>
                    <Button variant='contained' disabled={activeStep === 0} onClick={handleStep(-1)}>
                        Back
                    </Button>

                    <Button variant='contained'  onClick={handleStep(1)}>
                        {activeStep === steps.length-1 ? 'Create Account' : 'Continue'}  
                    </Button>
            </div>
    </div>
  )
}

export default SellerAccountForm