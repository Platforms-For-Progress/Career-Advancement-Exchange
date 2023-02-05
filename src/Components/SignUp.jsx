import React, {useState} from 'react'
import { PageHeader, Input, Button, Card } from 'antd';
import { Link, navigate } from "@reach/router"
import { TypeAnimation } from 'react-type-animation';

// import { app } from "../base.js";
// import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import {app} from "../base.js";
import { auth, db, firestore } from "../base.js";
import "./SignUp.css";
import { getAuth } from 'firebase/auth';


const { TextArea } = Input;

const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    const onFirstNameChange = (event) => setFirstName(event.target.value)
    const onLastNameChange = (event) => setLastName(event.target.value)

    // const onSignUp = () => {
    //     console.log('sign up')
    //     console.log(email, password, firstName, lastName)

    //     // createUserWithEmailAndPassword(auth, email, password)
    //     //     .catch(function(error) {
    //     //         console.log('error in signup')
    //     //     });

    //     setEmail('')
    //     setPassword('')
    //     setFirstName('')
    //     setLastName('')
    // }
    // const auth = getAuth();
    // const db = getDatabase();
    const onSignUp = (e) => {
        e.preventDefault();
        function onRegister() {
            const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              set(ref(firestore, "users/" + userCredential.user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: "user",
                
              });
            })
            .catch((error) => console.log(error));
        }
        onRegister();
        const auth = getAuth();
        const user = auth.currentUser;
        user.displayName = firstName;
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
        navigate('/login')
      };

  return (
    
    <div className="signup">
        <div className='signup_header'>
        <TypeAnimation
        sequence={[
           
            'Sign Up', // Types 'One'
            

            () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
        ]}
        wrapper="div"
        cursor={false}
        //   repeat={Infinity}
        style={{ fontSize: '2em' }}
        />
        </div>

        <br></br>
        <div className='signup_container'>
       
        
 
   
        
        <div className="input_container">
            <div className="input_title">
                <h2>
                First Name
                </h2>
            </div>
        <div className="input">
            <Input placeholder="First Name" onChange={onFirstNameChange}/>
        </div>
        </div>
                    
        <div className="input_container">
            <div className="input_title" style={{marginTop:'20px'}}>
                <h2>
                    Last Name
                </h2>
            </div>
            <div className="input">
                <Input placeholder="Last Name" onChange={onLastNameChange}/>
            </div>
        </div>
                    
        <div className="input_container">
            <div className="input_title" style={{marginTop:'20px'}}>
                <h2>
                    Email
                </h2>
            </div>
            <div className="input">
                <Input placeholder="Email" onChange={onEmailChange}/>
            </div>
        </div>
                    
        <div className="input_container">
            <div className="input_title" style={{marginTop:'20px'}}>
                <h2>
                Password
                </h2>
            </div>

            <div className="input">
                <Input.Password placeholder="Password" onChange={onPasswordChange}/>
            </div>
            </div>

            <div style={{width: "100%"}}>
                <div style={{float: "left"}}>
                    <Link to="/sign_in">Have an account? Sign In</Link>
                </div>

                <div className="input_button">
                    <Button type="primary" size="large" style={{marginTop:'20px'}} onClick={onSignUp}>
                        Sign Up
                    </Button> 
                </div>
            </div>
            </div>
        </div>
  
            
  )
}

export default SignUp;