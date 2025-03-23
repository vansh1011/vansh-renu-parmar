import React from 'react'
import Vector from '../assets/Vector.svg';
import Vector1 from '../assets/Vector(1).svg';
import Vector2 from '../assets/Vector (2).svg';
import Vector3 from '../assets/Vector (3).svg';


const Footer = () => {
  return (
    <div className='bg-black w-full md:h-[160px] h-[110px] mt-10'>
      
      <div className='flex flex-row justify-center items-center gap-[20px] pt-10'>
        <img className='h-[30px] w-[30px] ' src={Vector1} alt="" />
        <img className='h-[30px] w-[30px] ' src={Vector2} alt="" />
        <img className='h-[30px] w-[30px] ' src={Vector3} alt="" />
        <img className='h-[30px] w-[30px] - ' src={Vector} alt=''/>
      </div>

      <p className='flex justify-center items-center text-white mt-3 '>@2025 Vansh Parmar All Rights Reserved.</p>

    </div>
  )
}

export default Footer
