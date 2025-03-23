import React from 'react'
import cross from '../assets/cross2.svg'

const DOP4 = ({ onClose }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/40 flex justify-center items-center '>
      <div className='bg-white md:h-[320px] md:w-[640px] w-[340px] h-[400px] rounded overflow-auto'>

        <img className='relative md:left-[600px] left-[300px] top-[10px] hover: cursor-pointer' src={cross} alt="" onClick={onClose} />

        <section>
          <div className='w-[90%] flex flex-row flex-wrap justify-center items-center pl-5'>
            <h2 className='font-bold md:text-2xl text-[12px]'>Spotify Clone – HTML, CSS & JavaScript</h2>
            <p className='md:text-base text-[10px]'>
              The <strong>Spotify Clone</strong> is a music streaming web application built using <strong>HTML, CSS, and JavaScript</strong>.
              This project replicates Spotify’s interface and allows users to play, pause, and navigate through songs with a sleek and interactive UI.
            </p>

            <h3 className='md:text-lg text-[11px]'>Features:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>Music Playback:</strong> Users can play, pause, and skip songs using custom controls.</li>
              <li><strong>Song List & Album Art:</strong> Displays a collection of songs along with album covers.</li>
              <li><strong>Responsive Design:</strong> Ensures seamless experience across different screen sizes.</li>
              <li><strong>Progress Bar:</strong> Shows the current playback position and allows users to seek within a song.</li>
              <li><strong>Volume Control:</strong> Users can adjust the volume for better listening experience.</li>
              <li><strong>Animated UI:</strong> Smooth transitions and hover effects enhance the user interface.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Technologies Used:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>HTML5</strong> – For structuring the web page.</li>
              <li><strong>CSS3</strong> – For styling and animations.</li>
              <li><strong>JavaScript</strong> – For handling music playback and interactivity.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Challenges & Learning Outcomes:</h3>
            <p className='md:text-base text-[10px]'>
              This project helped me improve my skills in <strong>JavaScript event handling, DOM manipulation, and working with the HTML audio API</strong>.
              I also gained experience in designing a <strong>modern and user-friendly UI</strong> similar to real-world music applications.
            </p>

            <p className='md:text-base text-[10px]'>
              The Spotify Clone is a fully functional music player that showcases my ability to build <strong>interactive web applications</strong>.
            </p>
          </div>
        </section>

        {/* here  when we click the button the onClose function executes */}
      </div>
    </div>
  )
}

export default DOP4
