import React from 'react'
import DetailsOfProject from './DetailsOfProject'
import DOP2 from './DOP2'
import DOP3 from './DOP3'
import DOP4 from './DOP4'
import DOP5 from './DOP5'
import DOP6 from './DOP6'

import { useState } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'

const Projects = () => {


    const [Info, setInfo] = useState(false)
    const [Info2, setInfo2] = useState(false)
    const [Info3, setInfo3] = useState(false)
    const [Info4, setInfo4] = useState(false)
    const [Info5, setInfo5] = useState(false)
    const [Info6, setInfo6] = useState(false)
    return (
        <div>
            <div className="flex flex-col justify-center items-center md:mt-0 mt-8">
            <p className="md:text-[35px] text-[20px] font-semibold text-black md:h-[47px] md:w-[170px] h-[25px] w-[80px] md:border-2 border-black flex justify-center items-center rounded-2xl mb-[60px] ">Projects</p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='flex md:w-[1230px] w-[300px] justify-center items-center md:gap-x-[40px] gap-x-[20px]  md:gap-y-[120px] gap-y-[50px] flex-wrap md:mb-[40px] mb-[20px]'>

                    <div className=' md:h-[210px] h-[80px] md:w-[250px] w-[140px] rounded-2xl-2xl transition-transform duration-300 hover:scale-110 hover:cursor-pointer' onClick={() => setInfo(true)}>
                        <img className='rounded-2xl md:h-[210px] h-[80px] md:w-[250px] w-[140px] object-cover' src={img2} alt="" />
                    </div>

                    <div className=' md:h-[210px] h-[80px] md:w-[250px] w-[140px] rounded-2xl-2xl transition-transform duration-300 hover:scale-110 hover:cursor-pointer' onClick={() => setInfo2(true)}>
                        <img className='rounded-2xl md:h-[210px] h-[80px] md:w-[250px] w-[140px] object-cover' src={img1} alt="" />
                    </div>
                    <div className=' md:h-[210px] h-[80px] md:w-[250px] w-[140px] rounded-2xl-2xl transition-transform duration-300 hover:scale-110 hover:cursor-pointer' onClick={() => setInfo3(true)}>
                        <img className='rounded-2xl md:h-[210px] h-[80px] md:w-[250px] w-[140px] object-cover' src={img3} alt="" />
                    </div>
                    <div className=' md:h-[210px] h-[80px] md:w-[250px] w-[140px] rounded-2xl-2xl transition-transform duration-300 hover:scale-110 hover:cursor-pointer' onClick={() => setInfo4(true)}>
                        <img className='rounded-2xl md:h-[210px] h-[80px] md:w-[250px] w-[140px] object-cover' src={img4} alt="" />
                    </div>
                    <div className=' md:h-[210px] h-[80px] md:w-[250px] w-[140px] rounded-2xl-2xl transition-transform duration-300 hover:scale-110 hover:cursor-pointer' onClick={() => setInfo5(true)}>
                        <img className='rounded-2xl md:h-[210px] h-[80px] md:w-[250px] w-[140px] object-cover' src={img5} alt="" />
                    </div>
                    <div className=' md:h-[210px] h-[80px] md:w-[250px] w-[140px] rounded-2xl-2xl transition-transform duration-300 hover:scale-110 hover:cursor-pointer' onClick={() => setInfo6(true)}>
                        <img className='rounded-2xl md:h-[210px] h-[80px] md:w-[250px] w-[140px] object-cover' src={img6} alt="" />
                    </div>

                </div></div>


            {Info && (
                <DetailsOfProject onClose={() => setInfo(false)} />
                // here we difine the onclose funtion
            )}

            {Info2 && (
                <DOP2 onClose={() => setInfo2(false)} />
                // here we difine the onclose funtion
            )}

            {Info3 && (
                <DOP3 onClose={() => setInfo3(false)} />
                // here we difine the onclose funtion
            )}

            {Info4 && (
                <DOP4 onClose={() => setInfo4(false)} />
                // here we difine the onclose funtion
            )}

            {Info5 && (
                <DOP5 onClose={() => setInfo5(false)} />
                // here we difine the onclose funtion
            )}

            {Info6 && (
                <DOP6 onClose={() => setInfo6(false)} />
                // here we difine the onclose funtion
            )}

        </div>
    )
}

export default Projects
