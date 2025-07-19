// import { TextField } from '@mui/material';
// import React from 'react'

// interface BecomeSellerFormStep2Props {
//     formik: any;
// }

// const BecomeSellerFormStep4 =({formik}:BecomeSellerFormStep2Props) => {
//   return (
//     <div className='space-y-9'>

//         <TextField
//             fullWidth
//             label="Business Name"
//             name="businessDetails.businessName"
//             value={formik.values.businessDetails.businessName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.businessDetails?.businessName && Boolean(formik.errors.businessDetails?.businessName)}
//             helperText={formik.touched.businessDetails?.businessName && formik.errors.businessDetails?.businessName}
//             required
//         />

//         <TextField
//             fullWidth
//             name='sellerName'
//             label="Seller Name"
//             value={formik.values.sellerName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
//             helperText={formik.touched.sellerName && formik.errors.sellerName}
//             required
//         />

//         <TextField
//             fullWidth
//             label="Business Email"
//             name="businessDetails.businessEmail"
//             value={formik.values.businessDetails.businessEmail}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.businessDetails?.businessEmail && Boolean(formik.errors.businessDetails?.businessEmail)}
//             helperText={formik.touched.businessDetails?.businessEmail && formik.errors.businessDetails?.businessEmail}
//             required
//         />

//         <TextField
//             fullWidth
//             label="Password"
//             name="password"
//             type="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//             required
//         />

//     </div>
//   )
// }

// export default BecomeSellerFormStep4

import React from "react";
import { useFormikContext } from "formik";

const BecomeSellerFormStep4 = () => {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <div className="space-y-4">
      <div>
        <label>Business Name:</label>
        <input
          type="text"
          name="businessName"
          value={values.businessName || ""}
          onChange={(e) => setFieldValue("businessName", e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      <div>
        <label>GST Number:</label>
        <input
          type="text"
          name="gstNumber"
          value={values.gstNumber || ""}
          onChange={(e) => setFieldValue("gstNumber", e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      {/* Add other business fields here */}
    </div>
  );
};

export default BecomeSellerFormStep4;
