import { TypeAnimation } from 'react-type-animation';
import React from 'react';
import './PastWork.css';
const PastWork = () => {
  return (
    <div className="past">
    <TypeAnimation
      sequence={[
        'Past Work', // Types 'One'
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '2em', cursor: false }}
    />
    
    <div className='section3'>
      
        <div className='section3-1-1'>
        <img className='img2' src='https://media.licdn.com/dms/image/C4D03AQF-lkCTdhhocw/profile-displayphoto-shrink_400_400/0/1658766873246?e=1684972800&v=beta&t=eqwmckXCDwz_LBgDSA-LqaHmZoMcESxXcFk9c8d5REg' alt='Clarisa Carrillo' width={200}></img>
        </div>

        <div className='section3-1-2'>
        <h1>Clarisa Carrillo</h1>
        <p>Over the course of one week, our team created a personalized portfolio website for Clarisa Carrillo. We included past social media content she created, as well as her choreography, her resume, and her awards.</p>
        <p onClick={()=>window.location.href='https://Clarisa-Carrillo.web.app'}>Click here to visit her website</p>
        </div>
      </div>
   
    </div>
  );
};
export default PastWork;