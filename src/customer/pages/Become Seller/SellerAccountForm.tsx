// import { Button, Step, StepLabel, Stepper } from '@mui/material';
// import React, { act, useState } from 'react'
// import BecomeSellerFormStep1 from './BecomeSellerFormStep1';
// import { useFormik } from 'formik';
// import { m } from 'framer-motion';
// import BecomeSellerFormStep2 from './BecomeSellerFormStep2';
// import BecomeSellerFormStep3 from './BecomeSellerFormStep3';
// import BecomeSellerFormStep4 from './BecomeSellerFormStep4';
// import { useAppDispatch } from '../../../State/Store';
// import { createSellerAccount } from '../../../State/seller/sellerSliceAuth';

// const steps = [
//     "Tax Details & Mobile",
//     "Pickup Address",
//     "Bank Details",
//     "Business Details",
// ]
// const SellerAccountForm = () => {
//     const [activeStep, setActiveStep] = useState(0);

//     const handleStep = (value:number) =>()=> {
//         (activeStep < steps.length - 1 || (activeStep > 0 && value == -1)) && setActiveStep(activeStep + value);
//         activeStep + value === steps.length -1 && handleCreateAccount();
//         console.log("Current Step:", activeStep);
//     }

//     // const handleCreateAccount = () => {
//     //     // Logic to create account goes here
//     //     console.log("Account created");
//     // }

//     const dispatch = useAppDispatch();

// const handleCreateAccount = () => {
//   formik.handleSubmit();
// };




//     const formik = useFormik({
//         initialValues: {
//             mobile: '',
//             otp: '',
//             gstin: '',
//             pickupAddress: {
//                 name: '',
//                 mobile: '',
//                 pincode: '',
//                 address: '',
//                 city: '',
//                 state: '',
//                 locality: '',
//             },
//             bankDetails: {
//                 accountNumber: '',
//                 ifscCode: '',
//                 accountHolderName: '',
//             },
//             sellerName: '',
//             email: '',
//             businessDetails:{
//                 businessName: '',
//                 businessEmail: '',
//                 businessMobile: '',
//                 logo: '',
//                 banner: '',
//                 businessAddress: "",
//             },
//             password: '',
//         },
//         onSubmit: (values) => {
//             dispatch(createSellerAccount(values));
//             console.log(values, "Form Submitted");
//         },
//     });

//   return (
//     <div>
//         <Stepper
//             activeStep={activeStep}
//             alternativeLabel
//             className='mb-6'>
//                 {steps.map((label, index) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>
//             <section>
//                 {activeStep === 0 ? <BecomeSellerFormStep1 formik={formik} />:
//                 activeStep === 1 ? <BecomeSellerFormStep2 formik={formik} />:
//                 activeStep === 2 ? <BecomeSellerFormStep3 formik={formik} />:
//                 <BecomeSellerFormStep4 formik={formik} />}
//             </section>
//             <div className='flex items-center justify-between mt-6'>
//                     <Button variant='contained' disabled={activeStep === 0} onClick={handleStep(-1)}>
//                         Back
//                     </Button>

//                     <Button variant='contained'  onClick={handleStep(1)}>
//                         {activeStep === steps.length-1 ? 'Create Account' : 'Continue'}  
//                     </Button>
//             </div>
//     </div>
//   )
// }

// export default SellerAccountForm

// src/customer/pages/Become Seller/SellerAccountForm.tsx

import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { Formik, Form } from "formik";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

const steps = ["OTP Verification", "Business Details", "Bank Details", "Set Password"];

const initialValues = {
  mobile: "",
  otp: "",
  gstin: "",
  pickupAddress: {
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
    locality: "",
  },
  bankDetails: {
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branchName: "",
  },
  companyDetails: {
    companyName: "",
    companyEmail: "",
    companyPhone: "",
  },
  password: "",
};

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Final Submit:", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <section>
            {activeStep === 0 ? <BecomeSellerFormStep1  /> :
 activeStep === 1 ? <BecomeSellerFormStep2 formik={formik} /> :
 activeStep === 2 ? <BecomeSellerFormStep3 formik={formik} /> :
 <BecomeSellerFormStep4  />}

          </section>
          <div className="flex gap-4 mt-4">
            {activeStep > 0 && (
              <Button onClick={handleBack}>Back</Button>
            )}
            {activeStep < steps.length - 1 ? (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SellerAccountForm;
