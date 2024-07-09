import React from 'react'
import { useState } from 'react'
import '../utils/modelView.css'
import { lookImg1 , lookImg2 , lookImg3 , lookImg4, lookImg5 } from '../utils'
const ModelView = () => {
  const [currentColor, setCurrentColor] = useState(lookImg1)
  const changeColor = (color) => {
    setCurrentColor(color)
  }

  return (
    <div className='w-full h-full flex justify-around flex-col items-center relative mt-12'>
      <div className='mt-7'>
        <img src={currentColor}></img>
      </div>
      <div className='rounded-full flex justify-around bg-zinc flex-row md:h-[50px] md:w-1/5 h-[40px] w-[200px]  items-center'>
      <button onClick={()=> changeColor(lookImg1)} id="btn-1" className=' h-4 w-4 rounded-full' ></button>
        <button onClick={()=> changeColor(lookImg5)} id="btn-2" className=' h-4 w-4 rounded-full'></button>
        <button onClick={()=> changeColor(lookImg2)} id="btn-3" className=' h-4 w-4 rounded-full'></button>
        <button onClick={()=> changeColor(lookImg4)} id="btn-4" className=' h-4 w-4 rounded-full'></button>
        <button onClick={()=> changeColor(lookImg3)} id="btn-5" className=' h-4 w-4 rounded-full'></button>
      </div>
    </div>
  )
}

export default ModelView
