import React, { useEffect } from "react";
import "./Toolbar.css";
import { useState } from "react";
import FontPicker from "font-picker-react";
import { Accordion } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "../../../../base.js";
// import {uploadFi÷\}

function Upload({rid, imageData, setImageData}) {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        console.log("Not working yet");
        //     if (!file) {
        //         alert("Please upload a file first!");
        //     }
                
        //     firestore.uploadFile(file, rid).then((url) => {
        //             console.log(url);
        //             alert("File uploaded successfully!");

        //         });
        //     }
        //     firestore.getFiles(rid).then((data) => {
        //         console.log("DATA: ", data);
        //         setImageData(data);
        //     });


        
    
        
    
        // return (
        //     <div>
        //         <input  type="file" onChange={handleChange} />
        //         <button  onClick={handleUpload}>Upload!</button>
        //         {/* map the image data */}
        //         {imageData.map((image) => {
        //             return (
        //                 <div>
        //                     <img src={image } alt="uploaded image" />



        //                 </div>
        //             )
        //         })}

                
        //     </div>
            // );
}
}   

const Toolbar = ({setView, setFont, font, colors, setHeaderBg, headerBg, setFooterBg,footerBg, setHomeBg, homeBg, setAboutBg, setPastWorkBg, setContactBg, rid}) => {
    const [active, setActive] = useState("text");
    const [imageData, setImageData] = useState([]);
    
    

    const setTextActive = () => {
        setActive("text");
    }

    const setUploadActive = () => {
        setActive("upload");

    }
    const setPagesActive = () => {
        setActive("pages");
    }
    const setPublishActive = () => {
        setActive("publish");
    }
    const setViewHome = () => {
        setView("home");
    }

    const setViewAbout = () => {
        setView("about");
    }
    const setViewPastWork = () => {
        setView("past-work");
    }
    const setViewHeader = () => {
        setView("header");
    }
    const setViewFooter = () => {
        setView("footer");
    }

    const setViewContact = () => {
        setView("contact");
    }
    

   
    return (
        <div className="Toolbar">
            <div className="Toolbar-nav">
                
                <i class="uil uil-text-fields" onClick={setTextActive}></i>
                <i class="uil uil-file-upload" onClick = {setUploadActive}></i>
                <i class="uil uil-layers" onClick={setPagesActive}></i>
                <i class="uil uil-message" onClick={setPublishActive}></i>
            
            </div>
            { active === "text" ? <div className="Toolbar-text">
                <div className="Toolbar-text-header">
                    <h3>Text</h3>
                    <div className="font-picker">
                    <FontPicker
                        apiKey={process.env.REACT_APP_FONT_PICKER_API_KEY}
                        activeFontFamily={font}
                        onChange={(nextFont) =>
                        setFont(nextFont.family) && console.log(font)
                        }
                       
                    />
                    </div>
                    

                    </div>
                
            </div> : active === "upload" ?
             <div className="Toolbar-upload">
                <div className="Toolbar-upload-header">
                    <h3>Upload</h3>
                    <Upload 
                        rid = {rid}
                        imageData = {imageData}
                        setImageData = {setImageData}
                        
                    />
                </div> 
            </div> : active === "pages" ?
            <div className="Toolbar-pages">
                <div className="Toolbar-pages-header">
                    <h3>Pages and Components</h3>
                    
                    <Accordion defaultActiveKey={'0'} className="accord">
                        <Accordion.Item eventKey="0" onClick={setViewHeader}>
                            <Accordion.Header>Header</Accordion.Header>
                            <Accordion.Body>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Change Background
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { colors.map((color) => {
                                        // log the color
                                        console.log(color);
                                        return <Dropdown.Item onClick={()=>(setHeaderBg(color) && console.log("BG!:",color))} style={{backgroundColor: color, color:"#fff"}}>{color}</Dropdown.Item>
                                    })
                                    }
                                </Dropdown.Menu>
                                </Dropdown>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" onClick={setViewFooter}>
                            <Accordion.Header>Footer</Accordion.Header>
                            <Accordion.Body><Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Change Background
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { colors.map((color) => {
                                        // log the color
                                        console.log(color);
                                        return <Dropdown.Item onClick={()=>(setFooterBg(color) && console.log("BG!:",color))} style={{backgroundColor: color, color:"#fff"}}>{color}</Dropdown.Item>
                                    })
                                    }
                                </Dropdown.Menu>
                                </Dropdown></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" onClick={setViewHome}>
                            <Accordion.Header>Home</Accordion.Header>
                            <Accordion.Body><Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Change Background
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { colors.map((color) => {
                                        // log the color
                                        console.log(color);
                                        return <Dropdown.Item onClick={()=>(setHomeBg(color) && console.log("BG!:",color))} style={{backgroundColor: color, color:"#fff"}}>{color}</Dropdown.Item>
                                    })
                                    }
                                </Dropdown.Menu>
                                </Dropdown></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" onClick={setViewAbout}>
                            <Accordion.Header>About</Accordion.Header>
                            <Accordion.Body>
                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Change Background
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { colors.map((color) => {
                                        // log the color
                                        console.log(color);
                                        return <Dropdown.Item onClick={()=>(setAboutBg(color) && console.log("BG!:",color))} style={{backgroundColor: color, color:"#fff"}}>{color}</Dropdown.Item>
                                    })
                                    }
                                </Dropdown.Menu>
                                </Dropdown>
                                </Accordion.Body>
                        </Accordion.Item>
                       
                        <Accordion.Item eventKey="4" onClick={setViewContact}>
                            <Accordion.Header>Contact</Accordion.Header>
                            <Accordion.Body>
                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Change Background
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { colors.map((color) => {
                                        // log the color
                                        console.log(color);
                                        return <Dropdown.Item onClick={()=>(setContactBg(color) && console.log("BG!:",color))} style={{backgroundColor: color, color:"#fff"}}>{color}</Dropdown.Item>
                                    })
                                    }
                                </Dropdown.Menu>
                                </Dropdown>
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" onClick={setViewPastWork}>
                            <Accordion.Header>Past Work</Accordion.Header>
                            <Accordion.Body>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Change Background
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        { colors.map((color) => {
                                            return <Dropdown.Item onClick={()=>(setPastWorkBg(color) && console.log("BG!:",color))} style={{backgroundColor: color, color:"#fff"}}>{color}</Dropdown.Item>
                                        })
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                </div>
            </div> : active === "publish" ? <div className="Toolbar-publish">
                <div className="Toolbar-publish-header">
                    <h3>Publish</h3>
                </div>
            </div> : null}




        </div>
    );
    }

export default Toolbar;
