import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

import "./EditForm.css";
import { firestore } from "../../../base";
const EditForm = () => {
    const [rid, setRid] = useState("");
    const [usrReq, setUsrReq] = useState({});
    const [data, setData] = useState([]);
    const [uid, setUid] = useState("");
    useEffect(() => {
        const url = window.location.href;
        const urlSplit = url.split("/");
        const rid = urlSplit[urlSplit.length - 1];
        setRid(rid);

        firestore.getRequest(rid).then((data) => {
            console.log(data);
            setUid(data.user_id)
            setUsrReq(data.request_data);
            setData(data.request_data);
        }
        );
    }, []);
    const submit = () => {
        // call addRequest function from base.js and pass in the data
        console.log(data);
        firestore.updateRequest(rid, data, 0, "").then((response) => {
            console.log("success");
            console.log(response);
            alert("Request updated successfully");
            // window.href = "/collab/"+response;
            // navigate("/collab/"+response);
            // window.location.reload();
        })
            .catch((error) => {
                console.log(error);
            });


        console.log("submitted");
    }
    const handleChange = (e) => {
        // console.log(e.target.id, e.target.value)
        setData({ ...data, [e.target.id]: e.target.value });

        // console.log(data);
    };
    return (
        <div className="edit-form">
            <h2>Edit Form</h2>
            <Form className="form">
                <Form.Group controlId="work">
                    <Form.Label>What do you do for work/study? What do you enjoy most about it?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={data.work} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="hobbies">
                    <Form.Label>What are your hobbies/interests? How did you get interested in them?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={data.hobbies} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="book">
                    <Form.Label>What's your favorite book/movie/TV show and why?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={data.book} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="explore">

                    <Form.Label>What's one place you'd like to explore and why?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={data.explore} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="key">
                    <Form.Label>What's one thing you'd like to learn more about?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={data.key} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="passion">
                    <Form.Label>What's your passion? What do you want to do with your life?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={data.passion} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="challenge">
                    <Form.Label>What's one challenge you've faced in your life? How did you overcome it?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={data.challenge} onChange={handleChange}/>
                </Form.Group>
                
            </Form>
            <div variant="primary" type="submit" className="butt" onClick={submit}>
                Submit
            </div>

           




        </div>
    )
}

export default EditForm;