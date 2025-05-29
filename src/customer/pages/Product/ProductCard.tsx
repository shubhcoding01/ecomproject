import React, { useEffect, useState } from 'react'
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

    useEffect(() => {

    let interval:any
        if (isHovered) {
            interval=setInterval(()=>{ // Don't change image if hovered
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000); 
}
    else if(interval){
        clearInterval(interval);
        interval = null;}
    },[isHovered])

  return (
    <>
        <div className="group px-4 relative">
            <div className='card'>

                {images.map((item,index) => <img 
                className='card-media object-top'
                    src={item}
                    alt=""
                    style={{transform:`translateX(${(index-currentImage)*100}%)`}}
                    />)}

            </div>
        </div>
    </>
  )
}

export default ProductCard