import React from 'react'
import cross from '../assets/cross2.svg'

const DOP5 = ({ onClose }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/40 flex justify-center items-center'>
      <div className='bg-white md:h-[320px] md:w-[640px] w-[340px] h-[400px] rounded overflow-auto'>

        <img className='relative md:left-[600px] left-[300px] top-[10px] hover: cursor-pointer' src={cross} alt="" onClick={onClose} />

        <section>
          <div className='w-[90%] flex flex-row flex-wrap justify-center items-center pl-5'>
            <h2 className='font-bold md:text-2xl text-[12px]'>To-Do List – HTML, CSS & JavaScript</h2>
            <p className='md:text-base text-[10px]'>
              A simple and interactive <strong>To-Do List</strong> app built using <strong>HTML, CSS, and JavaScript</strong>. It helps users add, delete, and manage tasks efficiently.
            </p>

            <h3 className='md:text-lg text-[11px]'>Features:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>Add & Remove Tasks:</strong> Users can add new tasks and remove completed ones.</li>
              <li><strong>Task Completion:</strong> Click to mark tasks as done.</li>
              <li><strong>Local Storage:</strong> Saves tasks even after refreshing the page.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Technologies Used:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>HTML5</strong> – Structure</li>
              <li><strong>CSS3</strong> – Styling</li>
              <li><strong>JavaScript</strong> – Functionality</li>
            </ul>

            <p className='md:text-base text-[10px]'>
              This project strengthened my <strong>JavaScript DOM manipulation and event handling</strong> skills while improving my UI design.
            </p>
          </div>
        </section>

        {/* here when we click the button the onClose function executes */}
      </div>
    </div>
  )
}

export default DOP5
