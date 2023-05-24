import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../base';
import React from 'react';
import './Contact.css';



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onMessageChange = (event) => setMessage(event.target.value);

  const submit = (event) => {
      event.preventDefault();
      console.log("Attempting submit");
      setDoc(doc(firestore, "contacts", name), {
          Name : name,
          Email : email,
          Message: message,
      }).then(()=> {
          setName("");
          setEmail("");
          setMessage("");
          console.log("Submitted");
          window.location.reload();
      }).catch((error) => {
        console.error("Error submiting: ", error);
      });
  }


  return (
    <div className="contacts">
    <TypeAnimation
      sequence={[
        'Contact Us', // Types 'One'
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '2em', cursor: false }}
    />
    



    
    <form>
        <div className="form-group">
          <label htmlFor="name_enter">Name (First and Last) </label>
          <input type="name" className="form-control" id="name_enter" placeholder="Enter your name here!" onChange={onNameChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email here!" onChange={onEmailChange} required/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="Messager">Message</label>
            <textarea className="form-control" id="Messager" rows="3" placeholder='Enter any extra details here!' onChange={onMessageChange}></textarea>
        </div>
       
        <button type="submit" onClick={submit} className="btn btn-primary" >Submit!</button>
      </form>
 
    </div>
    
  );
};
export default Contact;