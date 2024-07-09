import React, { useEffect, useRef } from 'react'
import { carousel1Img, carousel2Img, carousel3Img ,carousel4Img} from '../utils';
import '../utils/imageCarousel.css';
const images = [carousel1Img, carousel2Img, carousel3Img,carousel4Img ]

const ImageCarousel = () => {
  return (
    <div className='slider' id="slider">
        <figure>
            <img src={images[0]} alt="carousel1" />
            <img src={images[1]} alt="carousel2" />
            <img src={images[2]} alt="carousel3" />
            <img src={images[3]} alt="carousel4" />
            <img src={images[0]} alt="carousel1" />
        </figure>
    
      
    </div>
  )
}

export default ImageCarousel

