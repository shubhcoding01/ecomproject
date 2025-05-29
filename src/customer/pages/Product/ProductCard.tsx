import React, { useState } from 'react'
import './ProductCard.css'; // Assuming you have a CSS file for styling

const images = [
        "https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61XSVitox-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/51P1YW2yAGL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61OgwPCLMsL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61U0B7tRy+L._SY741_.jpg"
    ];

const ProductCard = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
        <div className="group px-4 relative">
            <div className='card'>

                {images.map((item,index) => <img 
                className='card-media object-top'
                    src={item}
                    alt=""
                    style={{transform:`translateX(${(index-1)*100}%)`}}
                    />)}

            </div>
        </div>
    </>
  )
}

export default ProductCard