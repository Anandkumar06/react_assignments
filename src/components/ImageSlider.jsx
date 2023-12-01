import React, { useState } from 'react'
import './css/ImageSlider.css'

export default function ImageSlider()
{
    const images=[
        "https://cdn.pixabay.com/photo/2023/09/14/19/14/landscape-8253576_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/10/29/22/11/leaves-8351230_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/10/21/07/25/mountains-8330900_1280.jpg"
    ];
    
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
    //   setInterval(() => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //   }, 2000);
        const nextSlide = () => {
            
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
      
        const prevSlide = () => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        };

    return (
        <div className='image-container'>
            <button className='slider-btn' onClick={prevSlide}>
                Previous
            </button>
            <img className='slider-image'  src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
            <button className='slider-btn' onClick={nextSlide}>
                Next
            </button>
        </div>
    )
}