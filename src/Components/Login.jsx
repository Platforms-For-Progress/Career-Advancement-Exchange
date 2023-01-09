import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { navigate } from '@reach/router';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { provider } from '../base'; 
import './Login.css';
import { signInWithGoogle } from '../base';
import googlelogin from './googlelogin';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  

      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const onEmailChange = (event) => setEmail(event.target.value)
      const onPasswordChange = (event) => setPassword(event.target.value)
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
      
          const uid = user.uid;
          console.log(uid);
          // navigate('/profile');
          window.open('/profile');
          console.log(user.displayName);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      const navSignUp = () => {
        window.open('/signup');
      };
      const onLogin = () => {
        console.log('login');
        // signInWithGoogle();
        googlelogin();
      };
      const handleSubmit = (e) => {
        // e.preventDefault();
        // function onRegister() {
        //   signInWithEmailAndPassword(auth, email, password).catch((error) =>
        //     console.log(error)
        //   );
        // }
        // onRegister();
        // setEmail("")
        // setPassword("")

        // navigate('/home')
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
        .then(function(result) {
            console.log('user signed in')
            setEmail('')
            setPassword('')
            window.open('/profile')
            
        }).catch(function(error) {
            console.log('there was an error signing in')
            console.log(error)
            setPassword('')
            alert(error.message)
        });
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
    <div className='cont'>
    <div className='section1'>
    <button onClick={onLogin}>Login with Google</button>
    </div>
    <div className='middlecont'>
    <p>OR</p>
    </div>
    <form>
    <div className='formy'>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    </div>
    {/* <br></br> */}
    <button type="submit" class="btn btn-primary">Submit</button>
    <br></br>
    <div className='add'></div>
    <p onClick={navSignUp}>Need to Sign Up? Click Here!</p> 
    </form> 
    
    </div>


    </div>
  );
};
export default Login;