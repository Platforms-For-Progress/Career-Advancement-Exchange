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

    </div>
  );
};
export default Involved;