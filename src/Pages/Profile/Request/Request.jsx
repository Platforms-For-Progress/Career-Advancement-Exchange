import React from "react";
import "./Request.css";
import { Form, Button } from "react-bootstrap";
import { firestore } from "../../../base";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../../../base";
import { navigate } from "@reach/router";
import { doc, getDoc } from "firebase/firestore";

const Request = () => {
    const [uid, setUid] = useState("");
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (!user) {
            navigate("/login");
            window.location.reload();
          } else {
            const usersCollection = firestore.usersCollection;
            const userDocRef = doc(usersCollection, user.uid);
            const userDocSnap = await getDoc(userDocRef);
            const userData = userDocSnap.data();
            console.log(userData.user_id);
            setUid(userData.user_id)
    
            // setFname(userData.firstname);
            // setLname(userData.lastname);
            // setName(userData.name);
            // setEmail(userData.email);
          }
        });
        return () => unsubscribe;
      }, []);
    
    const [data, setData] = useState({
        work: "",
        hobbies: "",
        book: "",
        explore: "",
        key: "",
        passion: "",
        challenge: "",
        happy: "",
    });
    const handleChange = (e) => {
        // console.log(e.target.id, e.target.value)
        setData({ ...data, [e.target.id]: e.target.value });

        // console.log(data);
    };

    const submit = () => {
        // call addRequest function from base.js and pass in the data
        console.log(data);
        firestore.addRequest(uid, data, 0, "").then((response) => {
            console.log("success");
            console.log(response)
            // window.href = "/collab/"+response;
            navigate("/collab/"+response);
            window.location.reload();
        })
            .catch((error) => {
                console.log(error);
            });


        console.log("submitted");
    }
    return (
        <div className="request">
            <h2>Request</h2>
            <Form className="form">
            <Form.Group className="mb-3" controlId="work" onChange={handleChange} >
                <Form.Label>What do you do for work/study? What do you enjoy most about it?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="hobbies" onChange={handleChange}>
                <Form.Label>What are your hobbies/interests? How did you get interested in them?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="book" onChange={handleChange}>
                <Form.Label>What's your favorite book/movie/TV show and why?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="explore" onChange={handleChange}>
                <Form.Label>What's something you've always wanted to try but haven't yet?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="key" onChange={handleChange}>
                <Form.Label>What are your values? What's important to you in life?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="passion" onChange={handleChange}>
                <Form.Label>What's something you're passionate about?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="challenge" onChange={handleChange}>
                <Form.Label>What's a challenge you've faced in your life and how did you overcome it?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="happy" onChange={handleChange}>
                <Form.Label>What's something that makes you happy?</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            

            
            <div variant="primary" type="submit" className="butt" onClick={submit}>
                Submit
            </div>
            </Form>
        </div>
    );
}

export default Request;