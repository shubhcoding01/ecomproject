import { AddPhotoAlternate, Close } from '@mui/icons-material'
import { CircularProgress, Grid, IconButton, TextField } from '@mui/material'
import { upload } from '@testing-library/user-event/dist/upload'
import { Formik, useFormik } from 'formik'
import { s, t } from 'framer-motion/dist/types.d-CtuPurYT'
import React, { use, useState } from 'react'
import { uploadToCloudinary } from '../../../Util/uploadToCloudinary'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo'
import { electronicsLevelTwo } from '../../../data/category/level two/electronicsLevelTwo'
import { menLevelThree } from '../../../data/category/level three/menLevelThree'
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree'
import { furnitureLevelThree } from '../../../data/category/level three/furnitureLevelThree'
import { electronicsLevelThree } from '../../../data/category/level three/electronicsLevelThree'

const categorytwo: { [key: string]: any[] } = {
  men:menLevelTwo,
  women: womenLevelTwo,
  kids:[],
  home_furniture: furnitureLevelTwo,
  beauty:[],
  electronics:electronicsLevelTwo,
};

const categorythree: { [key: string]: any[] } = {
  men:menLevelThree,
  women: womenLevelThree,
  kids:[],
  home_furniture: furnitureLevelThree,
  beauty:[],
  electronics:electronicsLevelThree,
};

const AddProduct = () => {

  const [uploadImage, setUploadingImage] = useState(false);

  const [snackbar, setSnackbar] = useState(false);

  const formik = useFormik({
    initialValues:{
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
      sizes:'',
    },
    onSubmit: (values) => {
      console.log("Form Values", values);
    },
  });

  const handleImageChange = async (event:any) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await uploadToCloudinary(file);
    // formik.setFieldValue('images', [...formik.values.images, file]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index:number) => {
    const updatedImages =[...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  const childCategory  = (category:any, parentCateforyId: any) => {
    return category.filter((child:any) =>{
      //console.log("Category", parentCateforyId, child);
      return child.parentCategory === parentCateforyId;
    });
  };
   const handleCloseSnackbar = () => {
    setSnackbar(false);
   }

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>
        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5" size={{xs:12}}>
           
            <input
              type="file"
              accept='image/*'
              id="fileInput"
              style={{ display: 'none' } }
              onChange={handleImageChange}
            />
            <label className='relative' htmlFor="fileInput">
              <span className='w-24 h-24 cursor-pointer flex items-center 
              justify-center p-3 border rounded-md border-gray-400'>
                <AddPhotoAlternate className='text-gray-700'/>
              </span>
              {uploadImage && (
                <div className='absolute top-0 left-0 w-full h-full 
                bg-gray-200 flex items-center justify-center'>
                  <CircularProgress className='text-gray-700' />
                </div> }
            </label>

            <div className='flex flex-wrap gap-2'>
              {formik.values.images.map((image, index) => (
                <div className='relative'>
                  <img
                  className='w-24 h-24 object-cover rounded-md'
                  key={index}
                  src={image}
                  alt = {`Product Image ${index + 1}`}
                  />
                  <IconButton
                    className='absolute top-0 right-0 spyace-bg-red-500 spyace-text-white spyace-rounded-full spyace-p-1 hover:spyace-bg-red-600'
                    onClick={() => handleRemoveImage(index)}
                    size='small'
                    color='error'
                    sx={{
                      position:"absolute",
                      top:0,
                      right:0,
                      outline:"none",
                    }}
                    >
                      <Close sx={{fontSize:"1rem"}}/>
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
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="spyace-input spyace-w-full spyace-p-2 spyace-border spyace-rounded-md"
              rows={4}
              required
            ></textarea>
          </Grid>
      </form>
    </div>
  )
}

export default AddProduct