import React from 'react'
import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1742544997332.json'
import Ham from './Ham'
import git from '../assets/V1.png'
import icon from '../assets/V2.png'
import linked from '../assets/Vector.png'
import bg from '../assets/Rectangle 67.png'
import a from '../assets/bv-removebg-preview.png'
// import a2 from '../assets/V1.png'
// import a3 from '../assets/V2.png'








const Home = () => {


  const AboutScroll = () => {
    window.scrollBy({ top: 650, behavior: "smooth" });
  }

  const SkillsScroll = () => {
    window.scrollBy({ top: 1250, behavior: "smooth" });
  }

  const ContactScroll = () => {
    window.scrollBy({ top: 2810, behavior: "smooth" });
  }
  const ProjectScroll = () => {
    window.scrollBy({ top: 2110, behavior: "smooth" });
  }

  const [ham, setHam] = useState(false)

  const handleOpen = ()=>{
    setHam(true)
  }

  return (
    <div>
      <div className="body md:block hidden">
        <div className='md:block hidden '>
          <img className="logo" src={a} alt="Logo" />
          <p className="font-bold relative left-[240px] top-[80px] text-xl underline">Hi, I am</p>
          <p className="font-semibold relative left-[200px] top-[100px] text-5xl tracking-wider">Vansh Parmar</p>
          <p className="text-gray-400 text-[18px] relative left-[240px] top-[120px]">Web Developer || MERN DEV.</p>

          <div className="h-[50px] w-[50px] bg-[#C4C4C4] relative left-[240px] top-[210px] shadow-lg rounded flex justify-center items-center hover:cursor-pointer hover:bg-gray-400">
            <a href="https://github.com/vansh1011">
              <img className="" src={git} alt="GitHub" />
            </a>
          </div>

          <div className="h-[50px] w-[50px] bg-[#C4C4C4] relative left-[320px] top-[160px] rounded flex justify-center items-center hover:cursor-pointer hover:bg-gray-400">
            <a href="">
              <img src={icon} alt="Icon" />
            </a>
          </div>

          <div className="h-[50px] w-[50px] bg-[#C4C4C4] relative left-[400px] top-[110px] rounded flex justify-center items-center hover:cursor-pointer hover:bg-gray-400">
            <a herf="https://www.linkedin.com/in/vansh-renu-parmar-5b4b49323/">
              <img src={linked} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className='md:block hidden'>
          <img className="imgr " src={bg} alt="Background Image" />

          <nav>
            <ul className="text-white font-semibold flex gap-[1vw] relative xl:top-[-600px] top-[-520px] xl:right-[-510px] right-[-470px] text-[18px] tracking-wider">
              <li className="hover:cursor-pointer h-[35px] w-[110px] rounded-2xl flex justify-center items-center hover:bg-gray-400" onClick={AboutScroll}>About me</li>
              <li className="hover:cursor-pointer h-[35px] w-[110px] rounded-2xl flex justify-center items-center hover:bg-gray-400" onClick={SkillsScroll}>Skills</li>
              <li className="hover:cursor-pointer h-[35px] w-[110px] rounded-2xl flex justify-center items-center hover:bg-gray-400" onClick={ProjectScroll}>Projects</li>
              <li className="h-[35px] w-[110px] bg-white rounded-2xl text-black flex justify-center items-center hover:cursor-pointer " onClick={ContactScroll}>Contact Me</li>
            </ul>
          </nav>

          <p className="hey text-white relative xl:top-[-510px] top-[-450px] right-[-610px] xl:text-[120px] text-[110px]">Hey it's</p>
          <p className="vp text-white relative xl:top-[-540px] top-[-450px] right-[-670px] xl:text-[120px] text-[110px]">V.P</p>
        </div>

      </div>

      {/*  home page for mobile  */}


      <div className='md:hidden block min-h-screen '>
        <div className="w-full h-[550px] bg-black clip-slant relative ">

          <div className='flex flex-row  items-center justify-between '>
            <img className='invert h-[70px] w-[110px] ml-[-30px]' src={a} alt="" />
            <Lottie className='invert h-[55px] w-[55px] ' onClick={handleOpen} animationData={animationData} loop={true} />

          </div>

          <p className="hey text-white absolute left-[90px] top-[110px]  text-[100px]">Hey it's</p>
          <p className="vp text-white absolute left-[120px] top-[250px]  text-[90px]">V.P</p>

        </div>

        <style>
          {`
          .clip-slant {
          clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
               }
              `}
        </style>

            <div className='ml-[35px]'>
              <p className='font-semibold text-[25px] text-slate-800 flex flex-row  justify-between'>Hi, I am 
                <a href="https://github.com/vansh1011"><img className=' mr-2' src={git} alt="" /></a>
              </p>
              <p className='font-bold text-[40px] text-slate-800 flex flex-row  justify-between'>Vansh Parmar
                <img className='h-[40px] w-[35px] mt-2 mr-2' src={icon} alt="" />
              </p>
              <p className='font-semibold text-[25px] text-slate-800 flex flex-row  justify-between'>Full stack Developer || MERN Dev.
                <a href="https://www.linkedin.com/in/vansh-renu-parmar-5b4b49323/"><img className=' mr-2' src={linked} alt="" /></a>
              </p>
            </div>

            {
              ham && <Ham onClose={()=>setHam(false)}/>
            }

            </div>
    </div>
  )
}

export default Home
