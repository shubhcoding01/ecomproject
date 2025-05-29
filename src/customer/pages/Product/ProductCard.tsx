import React from 'react'
import './ProductCard.css'; // Assuming you have a CSS file for styling

const ProductCard = () => {
    const images = [
        "https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/51P1YW2yAGL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61OgwPCLMsL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61U0B7tRy+L._SY741_.jpg"
    ];
  return (
    <>
        <div className="group px-4 relative">
            <div className='card'>

                {images.map((item) => <img 
                className='card-media object-top'
                    src={item}
                    alt=""/>)}

            </div>
        </div>
    </>
  )
}

export default ProductCard