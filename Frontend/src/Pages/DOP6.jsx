import React from 'react'
import cross from '../assets/cross2.svg'

const DOP6 = ({ onClose }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/40 flex justify-center items-center'>
      <div className='bg-white md:h-[320px] md:w-[640px] w-[340px] h-[400px] rounded overflow-auto'>

        <img className='relative md:left-[600px] left-[300px] top-[10px] hover: cursor-pointer' src={cross} alt="" onClick={onClose} />

        <section>
          <div className='w-[90%] flex flex-row flex-wrap justify-center items-center pl-5'>
            <h2 className='font-bold md:text-2xl text-[12px]'>X.com Clone – HTML, Tailwind CSS & JavaScript</h2>
            <p className='md:text-base text-[10px]'>
              A modern <strong>X.com (Twitter) Clone</strong> built with <strong>HTML, Tailwind CSS, and JavaScript</strong>. It replicates the core UI of X.com, providing a sleek and responsive design.
            </p>

            <h3 className='md:text-lg text-[11px]'>Features:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>Responsive Feed:</strong> Displays posts dynamically in a structured format.</li>
              <li><strong>Like & Retweet:</strong> Interactive buttons for user engagement.</li>
              <li><strong>Dark Mode:</strong> Toggle between light and dark themes.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Technologies Used:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>HTML5</strong> – Structure</li>
              <li><strong>Tailwind CSS</strong> – Styling & responsiveness</li>
              <li><strong>JavaScript</strong> – Interactivity</li>
            </ul>

            <p className='md:text-base text-[10px]'>
              This project helped me learn <strong>Tailwind CSS utility classes</strong> and improved my front-end development skills.
            </p>
          </div>
        </section>

        {/* here when we click the button the onClose function executes */}
      </div>
    </div>
  )
}

export default DOP6
