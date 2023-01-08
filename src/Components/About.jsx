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
    <p>As an organization, our goal is to empower BIPOC and those struggling in their search for employment by creating a platform for them to showcase their talents and experiences through a personalized website. We will facilitate access to the tech industry for minorities by offering internships with mentorship opportunities in web design, enabling them to build their own website as well as assist in the development of others. By equipping them with the necessary skills and resources, we are committed to helping our community members convert their internship experience into successful, long-term careers.</p>
    
    </div>
  );
};
export default About;