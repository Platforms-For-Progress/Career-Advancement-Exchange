import React, { useEffect, useState } from "react";
import "./Landing.css";
const Landing = () => {
    const [rid, setRid] = useState("");
    useEffect(() => {
        const url = window.location.href;
        const urlSplit = url.split("/");
        const rid = urlSplit[urlSplit.length - 1];
        setRid(rid);
    }, []);
    const goToCollab = () => {
        window.location.href = "/collab/"+rid ;
    }
    const goToStatus = () => {
        window.location.href = "/status/"+rid ;
    }
    const goToMessage = () => {
        window.location.href = "/message/"+rid ;
    }
    return (
        <div className="status" >
            <div className="box" onClick={goToStatus}>
                <h2>View Request Status</h2>
            </div>
            <div className="box" onClick={goToCollab}>
                <h2>Collaboration Space</h2>
            </div>
            <div className="box" onClick={goToMessage}>
                <h2>Message your admins</h2>
            </div>

        </div>
    )
}

export default Landing;