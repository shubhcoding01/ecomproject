// import { AddPhotoAlternate, Close } from '@mui/icons-material'
// import { CircularProgress, Grid, IconButton, TextField } from '@mui/material'
// import { upload } from '@testing-library/user-event/dist/upload'
// import { Formik, useFormik } from 'formik'
// import { s, t } from 'framer-motion/dist/types.d-CtuPurYT'
// import React, { use, useState } from 'react'
// import { uploadToCloudinary } from '../../../Util/uploadToCloudinary'
// import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
// import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
// import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo'
// import { electronicsLevelTwo } from '../../../data/category/level two/electronicsLevelTwo'
// import { menLevelThree } from '../../../data/category/level three/menLevelThree'
// import { womenLevelThree } from '../../../data/category/level three/womenLevelThree'
// import { furnitureLevelThree } from '../../../data/category/level three/furnitureLevelThree'
// import { electronicsLevelThree } from '../../../data/category/level three/electronicsLevelThree'

// const categorytwo: { [key: string]: any[] } = {
//   men:menLevelTwo,
//   women: womenLevelTwo,
//   kids:[],
//   home_furniture: furnitureLevelTwo,
//   beauty:[],
//   electronics:electronicsLevelTwo,
// };

// const categorythree: { [key: string]: any[] } = {
//   men:menLevelThree,
//   women: womenLevelThree,
//   kids:[],
//   home_furniture: furnitureLevelThree,
//   beauty:[],
//   electronics:electronicsLevelThree,
// };

// const AddProduct = () => {

//   const [uploadImage, setUploadingImage] = useState(false);

//   const [snackbar, setSnackbar] = useState(false);

//   const formik = useFormik({
//     initialValues:{
//       title: '',
//       description: '',
//       mrpPrice: '',
//       sellingPrice: '',
//       quantity: '',
//       color: '',
//       images: [],
//       category: '',
//       category2: '',
//       category3: '',
//       sizes:'',
//     },
//     onSubmit: (values) => {
//       console.log("Form Values", values);
//     },
//   });

//   const handleImageChange = async (event:any) => {
//     const file = event.target.files[0];
//     setUploadingImage(true);
//     const image = await uploadToCloudinary(file);
//     // formik.setFieldValue('images', [...formik.values.images, file]);
//     setUploadingImage(false);
//   };

//   const handleRemoveImage = (index:number) => {
//     const updatedImages =[...formik.values.images];
//     updatedImages.splice(index, 1);
//     formik.setFieldValue('images', updatedImages);
//   };

//   const childCategory  = (category:any, parentCateforyId: any) => {
//     return category.filter((child:any) =>{
//       //console.log("Category", parentCateforyId, child);
//       return child.parentCategory === parentCateforyId;
//     });
//   };
//    const handleCloseSnackbar = () => {
//     setSnackbar(false);
//    }

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>
//         <Grid container spacing={2}>
//           <Grid className="flex flex-wrap gap-5" size={{xs:12}}>
           
//             <input
//               type="file"
//               accept='image/*'
//               id="fileInput"
//               style={{ display: 'none' } }
//               onChange={handleImageChange}
//             />
//             <label className='relative' htmlFor="fileInput">
//               <span className='w-24 h-24 cursor-pointer flex items-center 
//               justify-center p-3 border rounded-md border-gray-400'>
//                 <AddPhotoAlternate className='text-gray-700'/>
//               </span>
//               {uploadImage && (
//                 <div className='absolute top-0 left-0 w-full h-full 
//                 bg-gray-200 flex items-center justify-center'>
//                   <CircularProgress className='text-gray-700' />
//                 </div> }
//             </label>

//             <div className='flex flex-wrap gap-2'>
//               {formik.values.images.map((image, index) => (
//                 <div className='relative'>
//                   <img
//                   className='w-24 h-24 object-cover rounded-md'
//                   key={index}
//                   src={image}
//                   alt = {`Product Image ${index + 1}`}
//                   />
//                   <IconButton
//                     className='absolute top-0 right-0 spyace-bg-red-500 spyace-text-white spyace-rounded-full spyace-p-1 hover:spyace-bg-red-600'
//                     onClick={() => handleRemoveImage(index)}
//                     size='small'
//                     color='error'
//                     sx={{
//                       position:"absolute",
//                       top:0,
//                       right:0,
//                       outline:"none",
//                     }}
//                     >
//                       <Close sx={{fontSize:"1rem"}}/>
//                     </IconButton>
//             </div>
//               ))}
//               </div>
//           </Grid>
//           <Grid size={{xs:12}}>
//             <TextField
//             fullWidth
//             id='title'
//             name='title'
//             label="Title"
//             value={formik.values.title}
//             onChange={formik.handleChange}
//             error={formik.touched.title && Boolean(formik.errors.title)}
//             helperText={formik.touched.title && formik.errors.title}
//             required
//             />
//           </Grid>
//           <Grid size={{xs:12}}>
//             <TextField
//             fullWidth
//             id='description'
//             name='description'
//             label="Description"
//             value={formik.values.description}
//             onChange={formik.handleChange}
//             error={formik.touched.description && Boolean(formik.errors.description)}
//             helperText={formik.touched.description && formik.errors.description}
//             required
//             multiline
//             rows={4}
//             />
//           </Grid>
//       </form>
//     </div>
//   )
// }

// export default AddProduct

import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { CircularProgress, Grid, IconButton, TextField, Button, Snackbar } from '@mui/material';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { uploadToCloudinary } from '../../../Util/uploadToCloudinary';
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo';
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo';
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo';
import { electronicsLevelTwo } from '../../../data/category/level two/electronicsLevelTwo';
import { menLevelThree } from '../../../data/category/level three/menLevelThree';
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree';
import { furnitureLevelThree } from '../../../data/category/level three/furnitureLevelThree';
import { electronicsLevelThree } from '../../../data/category/level three/electronicsLevelThree';

const categorytwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furnitureLevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
};

const categorythree = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
};

const AddProduct = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      mrpPrice: '',
      sellingPrice: '',
      quantity: '',
      color: '',
      images: [],
      category: '',
      category2: '',
      category3: '',
      sizes: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      mrpPrice: Yup.number().required('MRP Price is required').positive('Must be a positive number'),
      sellingPrice: Yup.number().required('Selling Price is required').positive('Must be a positive number'),
      quantity: Yup.number().required('Quantity is required').integer('Must be an integer').positive('Must be a positive number'),
      color: Yup.string().required('Color is required'),
    }),
    onSubmit: (values) => {
      console.log("Form Values", values);
      setSnackbar(true);
    },
  });

  const handleImageChange = async (event:any) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue('images', [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index:number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>
        <Grid container spacing={2}>
          <Grid size={{xs:12}} className="flex flex-wrap gap-5">
            <input
              type="file"
              accept='image/*'
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <label className='relative' htmlFor="fileInput">
              <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400'>
                <AddPhotoAlternate className='text-gray-700' />
              </span>
              {uploadImage && (
                <div className='absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center'>
                  <CircularProgress className='text-gray-700' />
                </div>
              )}
            </label>

            <div className='flex flex-wrap gap-2'>
              {formik.values.images.map((image, index) => (
                <div className='relative' key={index}>
                  <img
                    className='w-24 h-24 object-cover rounded-md'
                    src={image}
                    alt={`Product Image ${index + 1}`}
                  />
                  <IconButton
                    className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600'
                    onClick={() => handleRemoveImage(index)}
                    size='small'
                    color='error'
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              id='title'
              name='title'
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
              fullWidth
              id='description'
              name='description'
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              required
              multiline
              rows={4}
            />
          </Grid>

          <Grid size={{xs:12, sm:6}}>
            <TextField
              fullWidth
              id='mrpPrice'
              name='mrpPrice'
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid>

          <Grid size={{xs:12, sm:6}}>
            <TextField
              fullWidth
              id='sellingPrice'
              name='sellingPrice'
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
              helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
              required
            />
          </Grid>

          <Grid size={{xs:12, sm:6}}>
            <TextField
              fullWidth
              id='quantity'
              name='quantity'
              label="Quantity"
              type="number"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
              required
            />
          </Grid>

          <Grid size={{xs:12, sm:6}}>
            <TextField
              fullWidth
              id='color'
              name='color'
              label="Color"
              value={formik.values.color}
              onChange={formik.handleChange}
              error={formik.touched.color && Boolean(formik.errors.color)}
              helperText={formik.touched.color && formik.errors.color}
              required
            />
          </Grid>

          <Grid size={{xs:12}}>
            <Button type="submit" variant="contained" color="primary">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={snackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Product added successfully!"
      />
    </div>
  );
};

export default AddProduct;
