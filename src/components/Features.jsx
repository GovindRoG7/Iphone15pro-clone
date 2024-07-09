import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils'
import {exploreVideo} from '../utils'
import {explore1Img} from '../utils'
import {explore2Img} from '../utils'
import gsap from 'gsap'
const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo',
            {scrollTrigger:{trigger:'#exploreVideo',
                start:'-20% bottom',toggleActions:'play pause  restart reverse'}, 
            onComplete:()=>{videoRef.current.play()}})
        
        animateWithGsap('#features_title' , {y:0,scale:1, ease:'Power3inOut', opacity:1},{scrub:5.5})
        animateWithGsap('#g_text' , {y:0,opacity:1 ,duration:1 , ease:'power2inOut'})
        animateWithGsap('#imgId' , { scale:1, opacity:1,ease:'power1'},{scrub:5.5})
        
    },[]);


  return (
    <section className='h-full common-padding bg-zinc overflow-hidden relative'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full'>
                <h1 id="features_title" className='section-heading'>Explore the full story.</h1>
            </div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className='mt-32 mb-24 pl-24 '>
                    <h2 id="h2_text"  className='text-5xl lg:text-7xl font-semibold'>iphone.</h2>
                    <h2 id="h2_text"  className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
                </div>
                <div className='flex-center flex-col sm:px-10'>
                    <div className='relative h-[50vh] w-full flex items-center'>
                        <video id="exploreVideo" 
                        preload ="none" playsInline muted className='w-full h-full object-cover' ref={videoRef}>
                            <source src={exploreVideo} type="video/mp4"/>
                        </video>
                    </div>
                    <div className='flex flex-col w-full relative'>
                        <div className='feature-video-container'>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img id="imgId" src={explore1Img} alt="titanium" className='feature-video g_grow'/>
                            </div>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img id="imgId" src={explore2Img} alt="titanium" className='feature-video g_grow'/>
                            </div>
                        </div>
                        <div className='feature-text-container common-padding'>
                            <div className='flex-1 flex-center'>
                                <p id="g_text"
                                 className='feature-text g_text'>
                                  
                                    Iphone 15 pro is {''}
                                    <span className='text-white'>
                                        The first Iphone to feature 
                                        an aerospace-grade titanium design
                                    </span>,
                                    using the same alloy that spacecrafts use.
                                </p>
                            </div>
                            <div className='flex-1 flex-center'>
                                <p id="g_text"
                                 className='feature-text g_text'>
                                    Titanium has one of the best strength-weight ratio of any metal, making these our {''}
                                    <span className='text-white'> 
                                       lightest and most durable Iphone yet.
                                    </span>
                                    you'll notice the difference the moment u pick one up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
