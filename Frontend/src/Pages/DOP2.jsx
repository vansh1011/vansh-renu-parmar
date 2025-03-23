import React from 'react'
import cross from '../assets/cross2.svg'

const DOP2 = ({ onClose }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/40 flex justify-center items-center '>
      <div className='bg-white md:h-[320px] md:w-[640px] w-[340px] h-[400px] rounded overflow-auto'>

        <img className='relative md:left-[600px] left-[300px] top-[10px] hover: cursor-pointer' src={cross} alt="" onClick={onClose} />

        <section>
          <div className='w-[90%] flex flex-row flex-wrap justify-center items-center pl-5'>
            <h2 className='font-bold md:text-2xl text-[12px]'>Amazon Clone – HTML & CSS</h2>
            <p className='md:text-base text-[10px]'>
              The <strong>Amazon Clone</strong> is a front-end web project that replicates the look and feel of Amazon’s homepage using only
              <strong> HTML and CSS</strong>. This project demonstrates my ability to design and structure a complex e-commerce layout with proper responsiveness.
            </p>

            <h3 className='md:text-lg text-[11px]'>Features:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>Responsive Design:</strong> Ensures the website adapts smoothly to different screen sizes, from desktops to mobile devices.</li>
              <li><strong>Navigation Bar:</strong> A fully styled top navbar with the <strong>Amazon logo, search bar, cart icon, and user options</strong>.</li>
              <li><strong>Hero Banner:</strong> A large promotional banner similar to Amazon’s main section with a background image and CTA buttons.</li>
              <li><strong>Product Listings:</strong> A structured grid layout showcasing products with images, titles, prices, and rating stars.</li>
              <li><strong>Hover Effects:</strong> Smooth CSS animations for buttons, product cards, and interactive elements.</li>
              <li><strong>Footer Section:</strong> Includes customer service links, company policies, and social media icons.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Technologies Used:</h3>
            <ul className='md:text-base text-[10px]'>
              <li><strong>HTML5</strong> – For structuring the webpage elements.</li>
              <li><strong>CSS3</strong> – For styling, layout structuring, and animations.</li>
            </ul>

            <h3 className='md:text-lg text-[11px]'>Challenges & Learning Outcomes:</h3>
            <p className='md:text-base text-[10px]'>
              This project helped me refine my understanding of <strong>Flexbox and Grid</strong> for layout management. I also learned to enhance user experience
              through <strong>hover effects, opacity changes, and transitions</strong> to make the UI more engaging.
            </p>

            <p className='md:text-base text-[10px]'>
              This Amazon Clone demonstrates my ability to <strong>recreate real-world UI designs</strong> and improve my front-end development skills.
            </p>
          </div>
        </section>

        {/* When we click the button, the onClose function executes */}
      </div>
    </div>
  )
}

export default DOP2
