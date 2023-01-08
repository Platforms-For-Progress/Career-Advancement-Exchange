import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { navigate } from '@reach/router';
import './Login.css';
const Login = () => {
  const navSignUp = () => {
    navigate('/signup');
  };
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
    <h3 onClick={navSignUp}>Need to Sign Up? Click Here!</h3>
    


    </div>
  );
};
export default Login;