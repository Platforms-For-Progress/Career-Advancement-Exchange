import React, { useEffect } from "react";
import "./Toolbar.css";
import { useState } from "react";
import FontPicker from "font-picker-react";
import { Accordion } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, firestore } from "../../../../base.js";
// import {uploadFi÷\}

function Upload({rid, imageData, setImageData, setHomeMap}) {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = async() => {
        console.log("Not working yet");
                if (!file) {
                    alert("Please upload a file first!");
                }
                    
                const url = await firestore.uploadFile(file, rid)
                console.log("URL:", url)
                alert("File uploaded successfully!");

                setImageData([]);
                const data = await firestore.getFiles(rid) 
                    console.log("DATA:", data);
                    for (const item of data) {
                        console.log("DATA2:", item);
                        setImageData((prev) => [...prev, item]);

                    }
                    
                
                console.log("IMAGE DATA:", imageData)

        
    
                }
    
        return (
            <div>
                <input  type="file" onChange={handleChange} />
                <button  onClick={async()=> await handleUpload()}>Upload!</button>
                {/* map the image data */}
                <div className="toolbarImages">
                {imageData.map((image) => {
                    // check if the image is a heic
              

                    
                    return (
                       
                            
                            <img className = "img" src={image } height = {100} alt="uploaded image" />



                       
                    )
                })}
                 </div>

                
            </div>
            );
    

}   

const Toolbar = ({setView, setFont, font, colors, setHeaderBg, headerBg, setFooterBg,footerBg, setHomeBg, homeBg, setAboutBg, setPastWorkBg, setContactBg, rid, setImageArrayHome, setHeadingOneArrayHome, setHomeMap, homeMap, pattern, setPattern, pattern_size, setPatternSize}) => {
    const [active, setActive] = useState("text");
    const [imageData, setImageData] = useState([]);
    const [headingOneActive, setHeadingOneActive] = useState(false);
    const [headingOne, setHeadingOne] = useState("");
    const [headingTwoActive, setHeadingTwoActive] = useState(false);
    const [headingTwo, setHeadingTwo] = useState("");
    const [headingOneArrayforHome, setHeadingOneArrayforHome] = useState([]);
    const patterns = [
        "checkered",
        "grid",
        "dots",
        "cross-dots",
        "diagonal lines",
        "vertical",
        "horizontal",
        "diagonal stripes",
        "vertical stripes",
        "horizontal stripes",
        "triangles",
        "zigzag",
    ]
    
    useEffect(() => {
        firestore.getFiles(rid).then((data) => {
            console.log("DATA:", data);
            for (const item of data) {
                console.log("DATA2:", item);
                setImageData((prev) => [...prev, item]);
            }
            
        })
    }, [rid])

    

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
    const headingOneChange= (event)=> {
        setHeadingOne(event.target.value);

    }
    const setHeadingOneOfficially = () => {
        // setHeadingOneArrayHome(...prev, event.target.value);
        console.log("Heading One Array:", setHeadingOneArrayHome)
        // setHeadingOneArrayHome(...prev, headingOne);
        // setHeadingOneArra/yHome((prev) => [...prev, headingOne]);
        // setHomeMap((prev) => [...prev, {type: "headingOne", content: headingOne}]);
        const lastPage = homeMap[homeMap.length - 1]; // Get the last page in the array
        // check if position exists if position exists then set it to lastPage otherwise use homeMap.length-1
        var newPosition = homeMap.length - 1;
        
        var newPosition = 0;
        try {
            newPosition = lastPage.position + 1;
        } catch (error) {
            newPosition = 0;
        }
        // consider the case where it is an update on
        // setHomeMap([...homeMap, updatedItem]);
        console.log("Home Map:", homeMap);
        const newItem = {
            type: "headingOne",
            content: headingOne,
            position: newPosition
        };
        setHomeMap([...homeMap, newItem]);

          

          console.log("Home Map:", homeMap);

        
          
        
    }

    const headingTwoChange= (event)=> {
        setHeadingTwo(event.target.value);
    }
    const setHeadingTwoOfficially = () => {
        const newItem = {
            type: "headingTwo",
            content: headingTwo,
            position: homeMap.length
        };
        setHomeMap([...homeMap, newItem]);

    }

    const changeHeaderVal = (event) => {
        console.log("Header Value:", event.target.value);
        console.log("Position:", event.target.name);
        const updatedItem = {
            type: "headingOne",
            content: event.target.value,
            position: event.target.name
        };
        setHomeMap([...homeMap, updatedItem]);
        console.log("Home Map:", homeMap);
        
        // console.log("Heading One Array:", headingOneArrayforHome);
        


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

                    <div className="addHeadings">
                        <button className = "btnHeadingOne" onClick={()=>setHeadingOneActive(!headingOneActive)}>Add Heading One</button>
                        {
                            headingOneActive ?
                            <div className="popout">
                               
                            {/* homeMap.map((item) => {
                                if (item.type === "headingOne") {
                                    return (
                                        <div>
                                            <h1>{item.content}</h1>
                                        </div>
                                    )
                                }
                            })
                             */}
                            {
                                homeMap.map((item) => {
                                    if (item.type === "headingOne" ) {
                                        return (
                                            <div>
                                                {/* <in>{item.content}</h1> */}
                                                
                                                <input type="text" placeholder="Heading One" name={item.position} onChange={changeHeaderVal} value={item.content} />
                                                {/* <button className = "btnHeadingOne" onClick={} >Submit</button> */}
                                            </div>
                                        )
                                    }
                                })
                            }

                             <input type="text" placeholder="Heading One" onChange = {headingOneChange}      /> 
                            <button className = "btnHeadingOne" onClick={setHeadingOneOfficially} >Submit</button>
                            </div>
                            : null



                        }

                        <button className = "btnHeadingOne" onClick={()=> setHeadingTwoActive(!headingTwoActive)}>Add Heading Two</button>
                        {
                            headingTwoActive ?
                            <div className="popout">
                                <input type="text" placeholder="Heading Two" onChange = {headingTwoChange} />
                                <button className = "btnHeadingOne" onClick={setHeadingTwoOfficially} >Submit</button>
                            </div>
                            : null


                        }

                        <button className = "btnHeadingOne">Add Heading Three</button>

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
                        setHomeMap={setHomeMap}
                        
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
                            <Accordion.Body>
                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Change Background Pattern
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    { patterns.map((pattern) => {
                                        // log the color
                                        console.log(pattern);
                                        return <Dropdown.Item onClick={()=>setPattern(pattern)}>{pattern}</Dropdown.Item>
                                    })
                                    }
                                </Dropdown.Menu>
                                </Dropdown>
                                {pattern ? 
                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Change Background Pattern Size
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=> setPatternSize("sm")}> Small </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setPatternSize("md")} > Medium </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setPatternSize("lg")}  > Large </Dropdown.Item>
                                    <Dropdown.Item  onClick={()=>setPatternSize("xl")} > Extra Large </Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                                : null}

                            <Dropdown>
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
                                </Dropdown>
                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Add Photo
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { imageData.map((image) => {
                                        // log the color
                                        console.log(image);
                                        return <Dropdown.Item onClick={()=> (setImageArrayHome((imageOld)=>[...imageOld, image]) && setHomeMap(setHomeMap((prev) => [...prev, {type: "image", content: image}])))} >{image}</Dropdown.Item>
                                    })
                                    }
                                </Dropdown.Menu>
                                </Dropdown>
                            </Accordion.Body>
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
