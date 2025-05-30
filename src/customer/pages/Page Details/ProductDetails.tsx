import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { teal } from "@mui/material/colors";
import { Divider } from "@mui/material";

const ProductDetails = () => {
  const images = [
    "https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/61XSVitox-L._SY741_.jpg",
    "https://m.media-amazon.com/images/I/61U0B7tRy+L._SY741_.jpg",
    "https://m.media-amazon.com/images/I/51P1YW2yAGL._SY741_.jpg",
  ];
  return (
    <div className="px-5 lg:px-20 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {/* {[1,1,1,1].map((item)=><img 
              className='lg:w-full w-[50px] cursor-pointer rounded-md'
              src='https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg' alt=''/>)} */}
            {images.map((item,i) => (
              <img
                key={i}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt={`Product thumbnail ${i + 1}`}
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">
            R Clothing
          </h1>
          <p className="text-gray-600 font-semibold">Men Stylish Shirt</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{color:teal[500],fontSize:"17px"}}/>
            </div>
            <Divider orientation="vertical" flexItem/>
            <span>
              234 Ratings
            </span>

          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
