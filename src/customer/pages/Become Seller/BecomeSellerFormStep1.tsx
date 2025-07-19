// import { Box, TextField } from '@mui/material'
// import React from 'react'

// const BecomeSellerFormStep1 = ({formik}:any) => {
//   return (
//     <Box>
//         <p className='text-xl font-bold text-center pb-9'>Contact Details</p>

//         <div className='space-y-9'>

//             <TextField
//                           fullWidth
//                           label="Mobile"
//                           name="mobile"
//                           value={formik.values.mobile}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           error={formik.touched.mobile && Boolean(formik.errors.mobile)}
//                           helperText={formik.touched.mobile && formik.errors.mobile}
//                           required
//                         />
//             <TextField
//                           fullWidth
//                           label="GSTIN"
//                           name="GSTIN"
//                           value={formik.values.GSTIN}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
//                           helperText={formik.touched.GSTIN && formik.errors.GSTIN}
//                           required
//                         />            

//         </div>
//     </Box>
//   )
// }

// export default BecomeSellerFormStep1

// src/customer/pages/Become Seller/BecomeSellerFormStep1.tsx

// import React from "react";
// import { useFormikContext } from "formik";
// import { useDispatch } from "react-redux";
// import { sendLoginSignupOtp } from "../../../State/AuthSlice";
// ;

// const BecomeSellerFormStep1 = () => {
//   const { values, setFieldValue } = useFormikContext<any>();
//   const dispatch = useDispatch();

//   const handleSendOtp = async () => {
//     try {
//       const res = await dispatch(
//         sendLoginSignupOtp({
//           email: values.email,
//           // role: "ROLE_SELLER",
//         }) as any
//       );

//       if ((res as any).type.includes("fulfilled")) {
//         alert("OTP sent successfully!");
//       }
//     } catch (error) {
//       console.error("Failed to send OTP", error);
//     }
//   };

//   return (
//     <div>
//       <label>Mobile:</label>
//       <input
//         type="text"
//         name="mobile"
//         value={values.mobile}
//         onChange={(e) => setFieldValue("mobile", e.target.value)}
//       />
//       <button type="button" onClick={handleSendOtp}>
//         Send OTP
//       </button>
//       <label>OTP:</label>
//       <input
//         type="text"
//         name="otp"
//         value={values.otp}
//         onChange={(e) => setFieldValue("otp", e.target.value)}
//       />
//     </div>
//   );
// };

// export default BecomeSellerFormStep1;


import React from "react";
import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { sendLoginSignupOtp } from "../../../State/AuthSlice";

const BecomeSellerFormStep1 = () => {
  const { values, setFieldValue } = useFormikContext<any>();
  const dispatch = useDispatch();

  const handleSendOtp = async () => {
    try {
      const res = await dispatch(
        sendLoginSignupOtp({
          email: values.email,
          // role: "ROLE_SELLER",
        }) as any
      );

      if ((res as any).type.includes("fulfilled")) {
        alert("OTP sent successfully!");
      }
    } catch (error) {
      console.error("Failed to send OTP", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-md">
      <label className="font-semibold">Email:</label>
      <input
        type="email"
        name="email"
        className="border border-gray-300 rounded px-3 py-2"
        value={values.email}
        onChange={(e) => setFieldValue("email", e.target.value)}
      />

      <button
        type="button"
        onClick={handleSendOtp}
        className="bg-blue-600 text-white rounded px-4 py-2 w-fit"
      >
        Send OTP
      </button>

      <label className="font-semibold">OTP:</label>
      <input
        type="text"
        name="otp"
        className="border border-gray-300 rounded px-3 py-2"
        value={values.otp}
        onChange={(e) => setFieldValue("otp", e.target.value)}
      />
    </div>
  );
};

export default BecomeSellerFormStep1;
