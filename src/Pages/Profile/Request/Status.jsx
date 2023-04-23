import React, { useEffect } from "react";
import "./Status.css";
import { useState } from "react";
import { firestore } from "../../../base";

const Status = () => {
    const [rid, setRid] = useState("");
    const [status, setStatus] = useState("");
    useEffect(() => {
        const url = window.location.href;
        const urlSplit = url.split("/");
        const rid = urlSplit[urlSplit.length - 1];
        firestore.getRequest(rid).then((data) => {
            console.log(data);
            setStatus(data.status);
        }
        );
        console.log(rid);
    }, []);
    return (
        <div className="request">
            <h2>Request Status</h2>
            {status === 0 ? <p>Your request has been received, and we will be in contact with you shortly</p> : <h3>Request is accepted</h3>}
        </div>
    )
}

export default Status;