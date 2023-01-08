import { TypeAnimation } from 'react-type-animation';
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

    </div>
  );
};
export default PastWork;