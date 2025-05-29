import React, { useEffect, useState } from 'react'
import './ProductCard.css'; // Assuming you have a CSS file for styling
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { pink, teal } from '@mui/material/colors';
import { dark } from '@mui/material/styles/createPalette';

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
    // const intervalRef = useRef<any>(null);

    useEffect(() => {

        let interval:any

        if (isHovered) 
        {
            interval = setInterval(() => 
            {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }, 1000); 
        }
            else if(interval) 
            {
                clearInterval(interval);
                interval = null;
            }
        return () => clearInterval(interval);
    },[isHovered])

  return (
    <>
        <div className="group px-4 relative">
            <div className='card'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>

                {images.map((item,index) => <img 
                className='card-media object-top'
                    src={item}
                    alt=""
                    style={{transform:`translateX(${(index-currentImage)*100}%)`}}
                    />)}

                    <div>
                        <div>
                            <Button variant='contained' bg-color='white' >
                                <Favorite sx={{color:pink[500]}}/>
                            </Button>
                            <Button variant='contained' color='secondary' >
                                <ModeComment sx={{color:teal[500]}}/>
                            </Button>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard