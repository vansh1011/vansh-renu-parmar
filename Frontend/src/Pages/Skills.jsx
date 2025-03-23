import React from 'react'
import b1 from '../public/Group 12.svg'
import b2 from '../public/Group 13.svg'
import b3 from '../public/Unofficial_JavaScript_logo_2.webp'
import b4 from '../public/bootstrap-solid 1.png'
import b5 from '../public/git.svg'
import b6 from '../public/figma.svg'
import b7 from '../public/Group 14.svg'
import b8 from '../public/Tailwind_CSS_Logo.svg.png'
import b9 from '../public/Vector (1).png'
import b10 from '../public/a-removebg-preview.png'
import b11 from '../public/next-js-logo-freelogovectors.net_.png'
import b12 from '../public/images-removebg-preview.png'
import b13 from '../public/image 17.svg'
import b14 from '../public/java-removebg-preview (1).png'
import b15 from '../public/images__1_-removebg-preview.png'
import b16 from '../public/C++.svg'









const Skills = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="md:text-[35px] text-xl font-semibold text-black md:h-[47px] h-[20px] md:w-[170px] w-[100px] md:border-2 border-black flex justify-center items-center rounded md:mb-[60px] mb-[30px]">SKILLS</p>
        <div>
          <p className="font-bold md:text-2xl text-xl md:mb-5 mb-1">USING NOW:</p>
          <div className="md:h-[200px] h-[210px] md:w-[700px] w-[300px] flex flex-wrap justify-center items-center SKILL md:gap-x-[110px] gap-x-[20px] md:gap-y-[30px] gap-y-[15px]">
            <p><img src={b1} alt="HTML" />HTML</p>
            <p><img src={b2} alt="CSS" />CSS</p>
            <p><img src={b3} alt="JavaScript" />JAVASCRIPT</p>
            <p><img src={b4} alt="Bootstrap" />BOOTSTRAP</p>
            <p><img src={b5} alt="Git" />GIT</p>
            <p><img src={b6} alt="Figma" />FIGMA</p>
            <p><img src={b7} alt="React" />REACT</p>
            <p><img src={b8} alt="Tailwind CSS" />TAILWIND CSS</p>
          </div>
        </div>

        <div className="md:mt-[40px] mt-[20px]">
          <p className="font-semibold md:text-2xl text-xl">LEARNING:</p>
          <div className="md:h-[200px] h-[130px] md:w-[700px] w-[300px] flex flex-wrap justify-center items-center SKILL  md:gap-x-[110px] gap-x-[20px] md:gap-y-[30px] gap-y-[15px]">
            <p><img src={b9} alt="Node.js" />NODE.JS</p>
            <p><img src={b10} alt="MongoDB" />MONGO DB</p>
            <p><img src={b11} alt="Next.js" />NEXT.JS</p>
            <p><img src={b12} alt="Express.js" />EXPRESS.JS</p>
          </div>
        </div>

        <div>
          <p className="font-semibold md:text-2xl text-xl">OTHER SKILLS:</p>
          <div className="md:h-[200px] h-[140px] md:w-[700px] w-[300px] flex flex-wrap justify-center items-center SKILL md:gap-x-[110px] gap-x-[20px] md:gap-y-[30px] gap-y-[15px]">
            <p><img src={b13} alt="C" />C</p>
            <p><img src={b14} alt="Java" />JAVA</p>
            <p><img src={15} alt="DSA" />DSA</p>
            <p><img src={b16} alt="C++" />C++</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
