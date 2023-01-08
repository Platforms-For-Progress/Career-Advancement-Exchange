import { TypeAnimation } from 'react-type-animation';
import './Login.css';
const Login = () => {
  return (
    <div className="login">
    <TypeAnimation
      sequence={[
        'Login', // Types 'One'
        

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
export default Login;