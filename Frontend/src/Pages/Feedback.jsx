import React, { useState } from 'react'

import { toast } from "react-hot-toast";
import axios from 'axios'


const Feedback = () => {

  const [data, setdata] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  })

  const handelOnChange = (e) => {
    const { name, value } = e.target

    setdata((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const URL = "http://localhost:7000/api/feedback"
    try {

      const response = await axios.post(URL, data, {
        headers: {
          'Content-Type': 'application/json'
        },
      })

      toast.success("Thanks for the contacting!")

      if (response.data.success) {
        setdata({
          name: "",
          email: "",
          number: "",
          message: ""
        })
      }


    } catch (error) {
      toast.error("Sorry Error 500")
    }


  }


  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="md:text-[35px] text-xl font-semibold text-black h-[47px] w-[170px] flex justify-center items-center rounded md:mb-[60px] mb-2">Contact</p>
      </div>
      <form className=' flex flex-col justify-center items-center' action="" onSubmit={handelSubmit}>
        {/* we use the value = {data.name} because doing this we make the input tag controlled by react then we can change in the value or after submission we can clear them */}

        <input className=' md:w-[600px] w-[260px] md:h-[50px] h-[30px] my-5 mx-5 rounded px-3 text-[16px] font-semibold border-[3px] border-b-black border-l-black border-[#E5E5E5]  outline-none' type="text" name='name' id='name' placeholder='Your name' required value={data.name} onChange={handelOnChange} />

        <input className=' md:w-[600px] w-[260px] md:h-[50px] h-[30px] my-5 mx-5 rounded px-3 text-[16px] font-semibold  border-[3px] border-b-black border-l-black border-[#E5E5E5] outline-none' type="email" name='email' id='email' placeholder='Your email' required value={data.email} onChange={handelOnChange} />

        <input className=' md:w-[600px] w-[260px] md:h-[50px] h-[30px] my-5 mx-5 rounded px-3 text-[16px] font-semibold border-[3px] border-b-black border-l-black border-[#E5E5E5] outline-none' type="number" name='number' id='number' placeholder='Mobile number' required value={data.number} onChange={handelOnChange} />

        <textarea className=' md:w-[600px] w-[260px] h-[110px] rounded px-3 text-[16px] font-semibold  border-[3px] border-b-black border-l-black border-[#E5E5E5]  outline-none' name="message" id="message" rows={8} required placeholder='Message' value={data.message} onChange={handelOnChange}></textarea>

        <button className='my-5 md:w-[140px] w-[100px] h-[30px] md:h-[40px] bg-green-500 cursor-pointer rounded font-semibold md:text-xl text-[13px]' >Submit</button>
      </form>



    </div>
  )
}

export default Feedback

