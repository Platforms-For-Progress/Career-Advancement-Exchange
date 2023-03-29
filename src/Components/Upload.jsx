import { useState } from "react";
import { storage } from "../base.js";
import {ref as sRef} from "firebase/database";
import { uploadBytesResumable } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { getStorage, ref } from "firebase/storage";
import "./Upload.css";
function Upload() {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
            if (!file) {
                alert("Please upload a file first!");
            }
                
                const storageRef = ref(storage, `/files/${file.name}`);
        
                const uploadTask = uploadBytesResumable(storageRef, file);
        
                uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                        const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        
                setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                    });
                }
            );
        };
        return (
            <div>
                <input className="buttonlocation" type="file" onChange={handleChange} />
                <button className="buttonlocation" onClick={handleUpload}>Upload!</button>
                <p>{percent} "% done"</p>
            </div>
            );
}
export default Upload;