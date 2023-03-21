import { TypeAnimation } from 'react-type-animation';
import './Contact.css';
const About = () => {
  return (
    <div className="contacts">
    <TypeAnimation
      sequence={[
        'Contact Us', // Types 'One'
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '2em', cursor: false }}
    />
    
    </div>
  );
};
export default About;