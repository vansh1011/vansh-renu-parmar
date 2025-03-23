import React from 'react';
import cross from '../assets/cross2.svg';

const DetailsOfProject = ({ onClose }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/40 flex justify-center items-center'>
      <div className='bg-white md:w-[640px] w-[340px] h-[500px] md:h-[500px] overflow-y-auto rounded p-4 relative'>

        {/* Cross Icon */}
        <img
          className='absolute top-3 right-3 w-[20px] h-[20px] md:w-[30px] md:h-[30px] hover:cursor-pointer'
          src={cross}
          alt=""
          onClick={onClose}
        />

        {/* Content */}
        <section>
          <div className='flex flex-row flex-wrap justify-center items-center'>
            <h2 className='font-bold text-[16px] md:text-2xl mb-2 text-center'>Netflix Clone – HTML & CSS</h2>

            <p className='text-[12px] md:text-base mb-2 text-justify'>
              The <strong>Netflix Clone</strong> is a front-end web project designed to replicate the look and feel of Netflix’s homepage using only 
              <strong> HTML and CSS</strong>. This project showcases my skills in web design, layout structuring, and CSS styling to create a visually 
              appealing and responsive website.
            </p>

            <h3 className='font-semibold text-[14px] md:text-lg mb-1'>Features:</h3>
            <ul className='list-disc pl-4 text-[12px] md:text-base mb-2'>
              <li><strong>Responsive Layout:</strong> Adapts to desktops, tablets, and mobiles.</li>
              <li><strong>Navigation Bar:</strong> Includes logo, sign-in button, and menu items.</li>
              <li><strong>Hero Section:</strong> Banner with background image and sign-in prompt.</li>
              <li><strong>Movie Thumbnails:</strong> Grid layout resembling Netflix’s preview.</li>
              <li><strong>Hover Effects:</strong> CSS animations on movie cards.</li>
              <li><strong>Footer Section:</strong> Essential links and social icons.</li>
            </ul>

            <h3 className='font-semibold text-[14px] md:text-lg mb-1'>Technologies Used:</h3>
            <ul className='list-disc pl-4 text-[12px] md:text-base mb-2'>
              <li><strong>HTML5</strong> – For structuring content.</li>
              <li><strong>CSS3</strong> – For styling, responsiveness, and animations.</li>
            </ul>

            <h3 className='font-semibold text-[14px] md:text-lg mb-1'>Challenges & Learning Outcomes:</h3>
            <p className='text-[12px] md:text-base text-justify'>
              Strengthened my <strong>CSS skills</strong>, especially <strong>Flexbox and Grid</strong>. Learned to improve user experience with 
              <strong> hover effects, opacity changes, and transitions</strong>.
            </p>

            <p className='mt-2 text-[12px] md:text-base text-justify'>
              This project demonstrates my ability to <strong>recreate real-world UI designs</strong>, making it a great addition to my portfolio.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DetailsOfProject;
