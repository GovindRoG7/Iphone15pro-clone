import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import {watchImg} from '../utils'
import ImageCarousel from './ImageCarousel'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(()=> {
    gsap.to('#title', {opacity:1, y:0, duration:1, delay:0.5, scrollTrigger: {trigger: '#title', start: 'top 80%', toggleActions:'restart reverse restart reverse'}})
    gsap.to('.link', { opacity:1, y:0, duration:1, delay:0.75, stagger:0.25,scrollTrigger: {trigger: '#title', start: 'top 80%', toggleActions:'restart reverse restart reverse'}})
  },[])
  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='md:flex mb-12 w-full items-end justify-between'>
          <h1 id="title" className='section-heading'>Get Highlights</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the Film 
              <img src= {watchImg} alt = "watch" / >
            </p>  
            <p className='link'>Watch the Event
              <img src= {watchImg} alt = "watch" / >
            </p>
          </div>
        </div>
        <ImageCarousel />
      </div>
      
      
      
    </section>
  )
}

export default Highlights
