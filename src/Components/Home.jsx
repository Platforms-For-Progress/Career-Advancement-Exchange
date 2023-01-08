import { TypeAnimation } from 'react-type-animation';
import './Home.css';
const Home = () => {
  return (
    <div className="homez">
    <TypeAnimation
      sequence={[
        'Hi!', // Types 'One'
        1000, // Waits 1s
        'Hi! Welcome to Career Advancement Exhange', // Deletes 'One' and types 'Two'
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

        'Our mission is to help break down barriers for those traditionally underrepresented in the workforce by providing a platform to showcase their talents and experiences. We believe in empowering and enhancing job opportunities by creating personalized websites that maximize employment based on skill level. Join us and let us help you reach the career of your dreams!',
       

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