// import { getFirestore } from "firebase/firestore";
import { useReducer } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './Edit.css';
// import { Button } from 'react-bootstrap';
// import {}
import Form from 'react-bootstrap/Form';
// import { Navigate } from 'react-router-dom';
import { navigate } from '@reach/router';
import {connectAuthEmulator} from 'firebase/auth';
import { auth, firestore } from '../base';
import { getDatabase } from 'firebase/database';
import { doc, getDocs, getDoc, getFirestore, collection, updateDoc } from "firebase/firestore";
import { validateArgCount } from '@firebase/util';
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Edit() {
    const [toEdit, setToEdit] = useState("");
    const [update, setUpdate] = useState("");
    // const db = getFirestore();
    async function ed() {
        setToEdit(document.getElementById('q1').value);
        setUpdate(document.getElementById('q2').value);
        const usRef = doc(firestore, "userRequestedWebsites", lookupUID);
        await updateDoc(usRef, {
            [toEdit]: update,
            // capital: true,
        }).then(function(){
            alert("Updated!")
            navigate('/story/'+lookupUID);
            window.location.reload();
        }).catch(function() {
            alert("Please try again");
        });
    };
    const [lookupUID, setLookupUID] = useState("");
   
    useEffect(()=> {
        const tempUID = window.location.pathname.slice(6,);
        setLookupUID(tempUID);
        console.log(tempUID);
        
        
        console.log("Important");
        // console.log(data[1]);
        // setFname(data.firstName);

    });
    // function onChangeColor() {
    //     console.log(event.target.value);
    // }
    
    // console.log(document.getElementById('q1').value);
    return (
        <div className='editer'>
            <div className='story1'>
                <p>Please choose what attribute to edit.</p>
              
                <Form.Select aria-label="e1" id = "q1">
                    <option>Select to see options</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="idea">Inital Idea</option>
                    <option value="doc">Upload Documents</option>
                    <option value="developed">Developed Idea Notes</option>
                    <option value="special">Special Notes</option>
                </Form.Select>
                <br></br>
                <p>Input the updated value</p>
                <Form.Group className="mb-3">
                    
                    <Form.Control id='q2' placeholder="Updated Value" />
                </Form.Group>
                <div className='edit' onClick={()=>ed()}>
                    <p>Submit</p>
                </div>
            </div>
        </div>
        // <div class="modal" tabindex="-1" role="dialog">
        // <div class="modal-dialog" role="document">
        //     <div class="modal-content">
        //     <div class="modal-header">
        //         <h5 class="modal-title">Modal title</h5>
        //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //         <span aria-hidden="true">&times;</span>
        //         </button>
        //     </div>
        //     <div class="modal-body">
        //         <p>Modal body text goes here.</p>
        //     </div>
        //     <div class="modal-footer">
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        //     </div>
        //     </div>
        // </div>
        // </div>
    );
}
export default Edit;
