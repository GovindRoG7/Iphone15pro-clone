import React from 'react'
import {animateWithGsap, chipImg, frameVideo} from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import {frameImg} from '../utils'


const chip = () => {
  useGSAP(() => {
    animateWithGsap(".g_fadeIn", {opacity:1, y:0, duration:2, ease:"power2.inOut"})
    gsap.from("#chip", {scrollTrigger:{trigger:"#chip",toggleActions:'restart reverse restart reverse', start:"20% bottom"} , opacity:0,scale:2, duration:2, ease:"power2.inOut"})
  },[])
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} width={180} height ={180} / >
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='hiw-title'>
            A17 Pro Chip.
            <br/> A Monster for gaming.
          </h2>
          <p className='hiw-subtitle text-white'>
            The A17 Pro Chip is the most powerful chip in a smartphone. you will like it.
          </p>
        </div>
        <div className='mt-10 md:mt-20 mb-14'>
          <div className='relative h-full flex-center'>
            <div className='overflow-hidden'>
              <img src={frameImg} alt = "frame" className='bg-transparent relative z-10' />
            </div>
            <div className='hiw-video'>
                <video preload='none' autoPlay loop muted playsInline className='pointer-events-none'>
                  <source src={frameVideo} type='video/mp4' />
                </video>
            </div>

          </div>
          <p className='text-gray hiw-subtitle mt-3  text-center font-semibold '>
            Honkai: Star Rail
          </p>
          <div className='hiw-text-container pt-[6rem]'>
            <div className='flex-1 flex-center flex-col'>
              <p className='hiw-text g_fadeIn mb-2 '>
                A17 Pro is an entirely new
                 class of iPhone chip that delivers our <span className='text-white font-bold'>best graphics 
                  performance by far.</span>
              </p>
              <p className='hiw-text g_fadeIn mt-3'>
                Mobile <span className='text-white font-bold'>games will look and 
                  feel so immersive</span>, with 
                  incredibly detailed environments and more 
                  realistic characters. And with 
                  industry-leading speed and efficiency, A17 Pro takes fast 
                  and runs with it.
              </p>
            </div>
            <div className='flex-1 mt-8 g_fadeIn flex-col '>   
              <p className='hiw-text'>New</p>
              <p className='hiw-bigtext'>Pro-class GPU</p>
              <p className='hiw-text'>with 6 cores</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
export default chip
