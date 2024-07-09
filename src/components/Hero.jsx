import React, { useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleResize = useCallback(() => {
    console.log('Resizing, current width:', window.innerWidth);
    if (window.innerWidth < 760) {
      console.log('Switching to smallHeroVideo');
      setVideoSrc(smallHeroVideo);
    } else {
      console.log('Switching to heroVideo');
      setVideoSrc(heroVideo);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    console.log('Video source updated:', videoSrc);
  }, [videoSrc]);

  useGSAP(() => {
    gsap.to('.hero-title', { opacity: 1, delay: 2 });
    gsap.to('#cta',{opacity:1, y:-50 , delay:2});
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <video
          className="md:w-10/12 sm:w-10/12 w-9/12 object-cover"
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href ="#highlights" className='btn transition all'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
