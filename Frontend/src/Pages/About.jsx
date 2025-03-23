import React from 'react'

const About = () => {
  return (
    <div>
      <div className=" flex  flex-col justify-center items-center w-[70vw] h-[260px] relative md:top-[-340px] top-[-214px] md:left-[240px] left-[61px] md:mt-0 mt-[270px] ">
        <p className="md:text-[35px] text-[20px] font-semibold text-black md:h-[37px] h-[20px] md:w-[140px] w-[90px] md:border-2 border-black flex justify-center items-center rounded">About me</p>
        <p className="mt-5 md:text-[18px] text-[13px] tracking-wider">
  Hi, I'm Vansh Parmar from Haridwar, Uttarakhand — a passionate Full-Stack Web Developer. I specialize in building dynamic and responsive web applications using JavaScript, and MongoDB (with Mongoose). I enjoy turning complex problems into simple, efficient solutions and continuously strive to expand my skill set.
  <br />
  I am the proud son of Renu Kumar and Mamta Devi.
  <br />
  With experience in both frontend and backend development, I love creating seamless user experiences and robust backend systems.
  <br />
  When I'm not coding, I enjoy exploring new technologies, collaborating with fellow developers, and constantly pushing my creative boundaries.
  <br />
  Let's connect and build something amazing!
</p>


        <img className="absolute md:top-[260px] top-[290px] md:h-[12px] md:w-[170px] h-[7px] w-[100px]" src="../public/separatorBlack 1.png" alt="Separator" />

        <div className="flex gap-8 absolute top-[330px]">
          <div className="md:h-[30px] md:w-[340px] h-[20px] w-[160px] md:text-[18px] text-[13px] md:mt-0 mt-5 flex flex-col justify-center items-center">
            <p className="font-bold">DESIGN</p>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
          <div className="md:h-[30px] md:w-[340px] h-[20px] w-[160px] md:text-[18px] text-[10px] md:mt-0 mt-5 flex flex-col justify-center items-center">
            <p className="font-black">DEVELOPMENT</p>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
        </div>

        <img className="absolute top-[430px] md:h-[12px] md:w-[170px] h-[7px] w-[100px]" src="../public/separatorBlack 1.png" alt="Separator" />
      </div>

    </div>
  )
}

export default About
