import { TypeAnimation } from 'react-type-animation';
import './Home.css';
const Home = () => {
  return (
    <div className="homez">
    <TypeAnimation
      sequence={[
        'Hi!', // Types 'One'
        1000, // Waits 1s
        'Hi! Welcome to Platforms for Progress', // Deletes 'One' and types 'Two'
        // 10000,
        
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '2em', cursor: false }}
    />
    <br></br>
    <TypeAnimation
      sequence={[
        4000,

        'We are an organization created to uplift those seeking jobs as well as mentor the next generation of web developers.',
       

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
      repeat={Infinity}
      style={{ fontSize: '2em', font: 'monospace', cursor: false }}
    />
    </div>
  );
};
export default Home;