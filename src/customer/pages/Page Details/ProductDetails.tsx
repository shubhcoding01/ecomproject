import React from "react";

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

        <section></section>
      </div>
    </div>
  );
};

export default ProductDetails;
