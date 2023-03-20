import { TypeAnimation } from 'react-type-animation';
import './Involved.css';
const Involved = () => {
  return (
    <div className="abouts">
    <TypeAnimation
      sequence={[
        'Get Involved', // Types 'One'
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '2em', cursor: false }}
    />

      <p>Please contact us if interested in becoming a part of our team! We are looking for software engineer interns, marketing interns, and fundraising interns for Summer 2023.</p>

    
    </div>

    
  );
};
export default Involved;