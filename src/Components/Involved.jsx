import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { firestore } from '../base';
import { doc, setDoc } from 'firebase/firestore';
import './Involved.css';
import React from 'react';
const Involved = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onSchoolChange = (event) => setSchool(event.target.value);
  const onLinkedInChange = (event) => setLinkedIn(event.target.value);

  const submit = (event) => {
    event.preventDefault();
    console.log("Attempting submit");
    setDoc(doc(firestore,"intern_applications", name), {
      name: name,
      email: email,
      school: school,
      linkedIn: linkedIn
    }).then(()=> {
      setName("");
      setEmail("");
      setLinkedIn("");
      setSchool("");
      console.log("Submitted!");
      window.location.reload();
    }).catch((error) => {
      console.error("Error submitting: ", error);
    });
  }

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
        // repeat={Infinity}
        style={{ fontSize: '2em', cursor: false }}
      />
      <p>Please contact us if interested in becoming a part of our team! We are looking for software engineer interns, marketing interns, and fundraising interns for Summer 2023.</p>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Full Name</label>
          <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name here!" onChange={onNameChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onEmailChange} required/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">LinkedIn</label>
          <input type="linkedin" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your linkedURL" onChange={onLinkedInChange} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">School or Organization</label>
          <input type="school" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the name of your institution" onChange={onSchoolChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Involved;