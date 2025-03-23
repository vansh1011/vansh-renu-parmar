import React from 'react'
import cross from '../assets/cross2.svg'

const DOP3 = ({ onClose }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/40 flex justify-center items-center '>
      <div className='bg-white md:h-[320px] md:w-[640px] w-[340px] h-[400px] rounded overflow-auto'>

        <img className='relative md:left-[600px] left-[300px] top-[10px] hover: cursor-pointer' src={cross} alt="" onClick={onClose} />

        <section>
          <div className='w-[90%] flex flex-row flex-wrap justify-center items-center pl-5'>
            <h2 className='font-bold md:text-2xl text-[12px]'>Password Generator – HTML, CSS & JavaScript</h2>
            <p className='md:text-base text-[10px]'>
              The <strong>Password Generator</strong> is a web-based tool that allows users to create secure and random passwords instantly.
              Built with <strong>HTML, CSS, and JavaScript</strong>, this project enhances security by generating strong passwords based on user preferences.
            </p>

            <h3 className='md:text-lg text-[11px]'>Features:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>Random Password Generation:</strong> Creates unique passwords with a mix of uppercase, lowercase, numbers, and symbols.</li>
              <li><strong>Custom Length:</strong> Users can set the desired password length for enhanced flexibility.</li>
              <li><strong>Character Selection:</strong> Option to include/exclude uppercase letters, numbers, and special characters.</li>
              <li><strong>Copy to Clipboard:</strong> One-click functionality to copy the generated password.</li>
              <li><strong>Responsive Design:</strong> Works seamlessly across different devices.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Technologies Used:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>HTML5</strong> – For structuring the web page.</li>
              <li><strong>CSS3</strong> – For styling and layout design.</li>
              <li><strong>JavaScript</strong> – For implementing password generation logic.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Challenges & Learning Outcomes:</h3>
            <p className='md:text-base text-[10px]'>
              This project helped me strengthen my understanding of <strong>JavaScript functions, event handling, and DOM manipulation</strong>.
              I also improved my skills in designing <strong>interactive UI components</strong>.
            </p>

            <p className='md:text-base text-[10px]'>
              The Password Generator is a practical tool that showcases my ability to build <strong>functional and user-friendly web applications</strong>.
            </p>
          </div>
        </section>

        {/* When we click the button, the onClose function executes */}
      </div>
    </div>
  )
}

export default DOP3
