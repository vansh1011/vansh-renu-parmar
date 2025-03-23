import React from 'react'
import cross from '../assets/cross2.svg';
const Ham = ({onClose}) => {

    const handelChange1 = ()=>{
        window.scrollBy({ top: 690, behavior: "smooth" });
        onClose()
    }
    const handelChange2 = ()=>{
        window.scrollBy({ top: 1240, behavior: "smooth" });
        onClose()
    }
    const handelChange3 = ()=>{
        window.scrollBy({ top: 1910, behavior: "smooth" });
        onClose()
    }
    const handelChange4 = ()=>{
        window.scrollBy({ top: 2510, behavior: "smooth" });
        onClose()
    }

  return (
    <div className='w-full h-[310px] fixed top-0 right-0 left-0 bottom-0 bg-white/40'>
        <div className='w-full h-[70px] bg-black relative'>
            <img className='invert h-10 absolute right-0 top-3' onClick={onClose} src={cross} alt="" />


        </div>
      <div className='h-[60px]  flex justify-center items-center w-full hover:bg-white hover:text-black text-2xl font-semibold' onClick={handelChange1}>About me</div>
      <div className='h-[60px]  flex justify-center items-center w-full hover:bg-white hover:text-black text-2xl font-semibold' onClick={handelChange2}>Skills</div>
      <div className='h-[60px]  flex justify-center items-center w-full hover:bg-white hover:text-black text-2xl font-semibold' onClick={handelChange3}>Projects</div>
      <div className='h-[60px]  flex justify-center items-center w-full hover:bg-white hover:text-black text-2xl font-semibold' onClick={handelChange4}>Contact Us</div>
    </div>
  )
}

export default Ham
