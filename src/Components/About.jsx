import { TypeAnimation } from 'react-type-animation';
import './About.css';
const About = () => {
  return (
    <div className="abouts">
    <TypeAnimation
      sequence={[
        'About Us', // Types 'One'
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '2em', cursor: false }}
    />
    <h3>Mission Statment</h3>
    <p>Career Advancement Exchange aims to help groups traditionally underrepresented in the workforce to gain employment by showcasing their talents and experiences through a personalized website in order to maximize employment based on skill level. 
</p>
    
    </div>
  );
};
export default About;