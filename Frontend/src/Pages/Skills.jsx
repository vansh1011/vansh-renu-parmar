import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="md:text-[35px] text-xl font-semibold text-black md:h-[47px] h-[20px] md:w-[170px] w-[100px] md:border-2 border-black flex justify-center items-center rounded md:mb-[60px] mb-[30px]">SKILLS</p>
        <div>
          <p className="font-bold md:text-2xl text-xl md:mb-5 mb-1">USING NOW:</p>
          <div className="md:h-[200px] h-[210px] md:w-[700px] w-[300px] flex flex-wrap justify-center items-center SKILL md:gap-x-[110px] gap-x-[20px] md:gap-y-[30px] gap-y-[15px]">
            <p><img src="../public/Group 12.svg" alt="HTML" />HTML</p>
            <p><img src="../public/Group 13.svg" alt="CSS" />CSS</p>
            <p><img src="../public/Unofficial_JavaScript_logo_2.webp" alt="JavaScript" />JAVASCRIPT</p>
            <p><img src="../public/bootstrap-solid 1.png" alt="Bootstrap" />BOOTSTRAP</p>
            <p><img src="../public/git.svg" alt="Git" />GIT</p>
            <p><img src="../public/figma.svg" alt="Figma" />FIGMA</p>
            <p><img src="../public/Group 14.svg" alt="React" />REACT</p>
            <p><img src="../public/Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" />TAILWIND CSS</p>
          </div>
        </div>

        <div className="md:mt-[40px] mt-[20px]">
          <p className="font-semibold md:text-2xl text-xl">LEARNING:</p>
          <div className="md:h-[200px] h-[130px] md:w-[700px] w-[300px] flex flex-wrap justify-center items-center SKILL  md:gap-x-[110px] gap-x-[20px] md:gap-y-[30px] gap-y-[15px]">
            <p><img src="../public/Vector (1).png" alt="Node.js" />NODE.JS</p>
            <p><img src="../public/a-removebg-preview.png" alt="MongoDB" />MONGO DB</p>
            <p><img src="../public/next-js-logo-freelogovectors.net_.png" alt="Next.js" />NEXT.JS</p>
            <p><img src="../public/images-removebg-preview.png" alt="Express.js" />EXPRESS.JS</p>
          </div>
        </div>

        <div>
          <p className="font-semibold md:text-2xl text-xl">OTHER SKILLS:</p>
          <div className="md:h-[200px] h-[140px] md:w-[700px] w-[300px] flex flex-wrap justify-center items-center SKILL md:gap-x-[110px] gap-x-[20px] md:gap-y-[30px] gap-y-[15px]">
            <p><img src="../public/image 17.svg" alt="C" />C</p>
            <p><img src="../public/java-removebg-preview (1).png" alt="Java" />JAVA</p>
            <p><img src="../public/images__1_-removebg-preview.png" alt="DSA" />DSA</p>
            <p><img src="../public/C++.svg" alt="C++" />C++</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
