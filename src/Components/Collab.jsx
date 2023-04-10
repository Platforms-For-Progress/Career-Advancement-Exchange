import React from "react";
import { SketchPicker } from "react-color";
import { ChromePicker } from "react-color";
// import { ChromePicker }  from 'react-color';
import { useState } from "react";
import { useEffect } from "react";
import "../index.css";
import FontPicker from "font-picker-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../base.js";
// import { env } from "process";
import { useParams } from "@reach/router";
// import {fontPickerApiKey} from "../env.js"
import { firestore } from "../base.js";
// import { openai } from 'openai';
// import { env } from "proc
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

// import { openai } from 'openai'



// import fontpicker api key from .env file
const fontPickerApiKey = process.env.REACT_APP_FONT_PICKER_API_KEY;
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// openai.apiKey = process.env.OPENAI_API_KEY;
// const [image, setImage] = useState("");
// const openai_api_key = process.env.OPENAI_API_KEY;
async function test(color) {
  try {
    const response = await openai.createImage({
      prompt: "generate a background image for the color " + color,
      n: 1,
      size: "1024x1024",
    });
    console.log(response);
    // display image
    // const img = document.createElement("img");
    // img.src = "data:image/png;base64," + response.data;
    // document.body.appendChild(img);
   const backgroundImageURL = (response.data.data[0].url);
   console.log(backgroundImageURL);
   return backgroundImageURL;
    
  }
  catch (error) {
    console.log(error);
  }

  
}


// const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;
// const openai = require('openai-api');
// openai.api_key =  "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";
import { useParams } from "@reach/router";


const AddEducation = () => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [gpa, setGpa] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  const onSchoolChange = (event) => setSchool(event.target.value);
  const onDegreeChange = (event) => setDegree(event.target.value);
  const onMajorChange = (event) => setMajor(event.target.value);
  const onMinorChange = (event) => setMinor(event.target.value);
  const onGpaChange = (event) => setGpa(event.target.value);
  const onGraduationDateChange = (event) =>
    setGraduationDate(event.target.value);

  return (
    <div>
      <input type="text" placeholder="School Name" />
      <input type="text" placeholder="Degree" />
      <input type="text" placeholder="Major" />
      <input type="text" placeholder="Minor" />
      <input type="text" placeholder="GPA" />
      <input type="text" placeholder="Graduation Date" />
    </div>
  );
};

const Collab = () => {
  const { rid } = useParams();

  const [colorPicker, setColorPicker] = useState(false);
  const [education, setEducation] = useState(false);
  const [work, setWork] = useState(false);
  const [skills, setSkills] = useState(false);
  const [custom, setCustom] = useState(false);
  const [color, setColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#fff");
  const [font, setFont] = useState("Open Sans");
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");

  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);
  const [reset, setReset] = useState(false);
  const [abc, setAbc] = useState({});

  const [inputValues2, setInputValues2] = useState({});
  const [counter2, setCounter2] = useState(0);
  const [reset2, setReset2] = useState(false);
  const [abc2, setAbc2] = useState({});

  const [inputValues3, setInputValues3] = useState({});
  const [counter3, setCounter3] = useState(0);
  const [reset3, setReset3] = useState(false);
  const [abc3, setAbc3] = useState({});

  const [prompt, setPrompt] = useState("");
  const [backgroundImageURL, setBackgroundImageURL] = useState("");
  // NOTE: Display name doesnt exist for email pass login; either create new user database or find a way to set its display name; most likely going to be the first option
  // const state = {
  //     displayColorPicker: false,
  //   };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        console.log(user.displayName);
        setName(user.displayName);
        console.log("here");
        // setName(user.displayName);
        // setStr("Welcome, " + user.displayName);
        setUid(user.uid);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no user");
        window.location.href = "/signin";
      }

    });
    setUid(window.location.href.split("/")[4]);
    console.log(uid)
    const docRef = doc(firestore, "userInputtedValues", window.location.href.split("/")[4]);
    getDoc(docRef)

      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setInputValues(doc.data().education);
          setInputValues2(doc.data().work);
          setInputValues3(doc.data().addedSections);
          setColor(doc.data().color);
          console.log(doc.data().color);
          setFont(doc.data().font);
          console.log(doc.data().font);
          
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
 // add Input Values to firebase firestore
  async function getImage() {
    handleImage();
    
  };

  const handleClick = () => {
    // setState({ displayColorPicker: !state.displayColorPicker })
    setColorPicker(!colorPicker);
  };
  async function handleImage() {
    // setPrompt(prompt);
    const url = await test(color);
    setBackgroundImageURL(url);
    console.log("URL: " + url);

  }
  const handleEducationClick = () => {
    setEducation(!education);
  };
  const handleWorkClick = () => {
    setWork(!work);
  };
  const handleSkillsClick = () => {
    setSkills(!skills);
  };
  const handleCustomClick = () => {
    setCustom(!custom);
  };
  const handleClose = () => {
    // this.setState({ displayColorPicker: false })
    setColorPicker(false);
  };
  const handleEducationClose = () => {
    // setEducation(false);
  };
  const handleWorkClose = () => {
    setWork(false);
  };
  const handleSkillsClose = () => {
    setSkills(false);
  };
  const handleCustomClose = () => {
    setCustom(false);
  };
  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  const handleChange = (color) => {
    // this.setState({ background: color.hex })
    console.log(color);
    setColor(color.hex);
  };
  const handleText = (color) => {
    // this.setState({ background: color.hex })
    setTextColor(color.hex);
  };
  const handleOnChange2 = (e) => {
    // const abc = {};
    e.preventDefault();
    console.log("NAME: " + e.target.name);
    console.log("CLASS: " + e.target.className);
    console.log("VALUE: " + e.target.value);
    
    if (reset) {
      console.log("allocating new array");
      abc[e.target.name] = [];
      setReset(!reset);
    }
    console.log(inputValues[e.target.name][e.target.className])

    // check if the value has been changed
    if (e.target.value != inputValues[e.target.name][e.target.className]) {
      // if it has been changed, then update the value
      console.log("change");
      // setAbc(inputValues[e.target.name][e.target.className] = e.target.value);
      
        
      setInputValues({ ...inputValues, ...abc });
      console.log(inputValues);
    } else {
      console.log("no change");

    }
      // abc[e.target.name][e.target.className] = e.target.value;
      // setInputValues({ ...inputValues, ...abc });
      // console.log(inputValues);
    
   
    

    
  };
  function handleClick2() {
    setCounter(counter + 1);
    console.log(counter);
    console.log(reset);
    setReset(!reset);
    console.log(reset);
    setReset(true);
    console.log(reset);
  }

  const handleOnChange3 = (e) => {
    // const abc = {};

    if (reset2) {
      console.log("allocating new array");
      abc2[e.target.name] = [];
      setReset2(!reset2);
    }
   
    if (e.target.value != inputValues2[e.target.name][e.target.className]) {
      setAbc2[e.target.name][e.target.className] = e.target.value;
      setInputValues2({ ...inputValues, ...abc });
      console.log(inputValues);
    }

    console.log(inputValues2);
  };

  function handleClick3() {
    setCounter2(counter2 + 1);
    console.log(counter2);
    console.log(reset2);
    setReset2(!reset2);
    console.log(reset2);
    setReset2(true);
    console.log(reset2);

  }

  const handleOnChange4 = (e) => {
    // const abc = {};
    
    if (reset3) {
      console.log("allocating new array");
      abc3[e.target.name] = [];
      setReset3(!reset3);
    }
    if (e.target.value != inputValues3[e.target.name][e.target.className]) {
      abc3[e.target.name][e.target.className] = e.target.value;
      setInputValues3({ ...inputValues, ...abc });
      console.log(inputValues);
    }
    
  };

  function handleClick4() {

    setCounter3(counter3 + 1);
    console.log(counter3);
    console.log(reset3);
    setReset3(!reset3);
    console.log(reset3);
    setReset3(true);
    console.log(reset3);
  }
  // populate input values with firebase firestore values
  // useEffect(() => {
  //   const docRef = doc(firestore, "userInputtedValues", uid);
  //   getDoc(docRef)

  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //         setInputValues(doc.data().education);
  //         setInputValues2(doc.data().work);
  //         setInputValues3(doc.data().addedSections);
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting document:", error);
  //     });
  // }, [uid]);
  async function handleSubmit() {
    // e.preventDefault();
    console.log(inputValues);
    console.log(inputValues2);
    console.log(inputValues3);
    setDoc(doc(firestore, "userInputtedValues", uid), {
      uid: uid,
      education: inputValues,
      work: inputValues2,
      addedSections: inputValues3,
      color: color,
      font: font,
      backgroundImage: backgroundImageURL,
    
    }).then(()=> {
      console.log("done");
      alert("updated information")
    })
    
  };
  const handleBackgroundChange = (e) => {
    setPrompt(e.target.value);
    console.log(e.target.value);
    console.log(prompt);
  };

  useEffect(() => {
    console.log(reset);
  }, [reset]);

  return (
    <div className="collab">
      <div className="collabTitle">Maker Space</div>
      <br></br>
      <div className="startOfPage">
        <div className="left">
          <button className="button" onClick={handleClick}>
            Pick Background Color
          </button>
          {colorPicker ? (
            <div style={popover}>
              <div style={cover} onClick={handleClose} />
              <ChromePicker color={color} onChange={handleChange} />
            </div>
          ) : null}
        </div>

        {/* <form class = "form-inline"> */}
        <div className="right">
          <p>Pick Heading Font</p>
          <FontPicker
            apiKey={fontPickerApiKey}
            activeFontFamily={font}
            onChange={(nextFont) =>
              setFont(nextFont.family) && console.log(font)
            }
          />
        </div>
      </div>

      <div
        className="collabBackground apply-font"
        style={{ backgroundColor: color, color: "black", fontFamily: { font } }}
      >
        Your background color is {color}
        <br></br>
        Your font is {font}
      </div>
      {/* </form> */}

      <br></br>

      <div className="previewWindow">
        <div className="previewTitle">
          <h1>Preview</h1>
          <p>NOTE: Your website will not look like this, it will be a mix of all the creative components on this page in addition to your collaboration with our team members. This is just a fun way to see the start of your website.</p>
        </div>
        <div
          className="viewport"
          style={{ backgroundColor: color, color: "black" }}
        >
          <div className="viewportHeader">
            <div className="rightsideViewHeader">
              <p className="apply-font">{name}</p>
            </div>
            <div className="leftsideViewHeader">
              <p className="p">Home</p>

              <p className="p">About Me</p>
              <p className="p">My Work</p>
              <p className="p">Contact Me</p>
            </div>
          </div>
          <div className="previewBackground">
            <div className="previewText">
              <p className="header1 apply-font">{name}</p>
              <p className="header2 apply-font">Education</p>
              {Object.keys(inputValues).map((key) => (
                <ul>
                  <h2>{inputValues[key][0]}</h2>
                  <h4>{inputValues[key][1]}</h4>
                  <h6>{inputValues[key][2]}</h6>
                  <h7>{inputValues[key][3]} - {inputValues[key][4]}</h7>
                  <p>{inputValues[key][5]}</p>
                  {inputValues[key].map((item) => (
                     <>
                     
                     {/* <p>{item}</p> */}
                     </>
                  ))}
                </ul>
              ))}
              <p className="header2 apply-font">Experience</p>
              {Object.keys(inputValues2).map((key) => (
                <ul>
                  <h2>{inputValues2[key][3]}</h2>
                  <h4>{inputValues2[key][2]}</h4>
                  {/* <h6>{inputValues2[key][]}</h6> */}
                  <h7>{inputValues2[key][0]} - {inputValues2[key][1]}</h7>
                  <p>{inputValues2[key][4]}</p>
                  {inputValues2[key].map((item) => (
                      <>
                      {/* <p>{item}</p> */}
                      </>
                  ))}
                </ul>
              ))}
              <p className="header2 apply-font">Custom Headers</p>
              {Object.keys(inputValues3).map((key) => (
                <ul>
                  <h2>{inputValues3[key][0]}</h2>
                  <h4>{inputValues3[key][1]}</h4>
                  <h6>{inputValues3[key][2]}</h6>
                  <h7>{inputValues3[key][3]}</h7>
                  <p>{inputValues3[key][4]}</p>
                  {inputValues3[key].map((item) => (

                      <>
                      {/* <p>{item}</p> */}
                      </>
                  ))}
                </ul>
              ))}

            </div>
          </div>
          
        </div>
      </div>
      <br></br>
      <h2>Add Heading</h2>
      <br></br>
      <button onClick={handleClick2}>Add Education</button>
      {/* <input type="text" onChange={handleOnChange2} placeholder="School">{inputValues[0][0]}</input> */}
      {Array.from(Array(counter)).map((e, i) => {
        if (inputValues[i]) {
          
          return (
            <><input
              type="text"
              name={i}
              className={0}
              formItem
              key={e}
              onChange={handleOnChange2}
              placeholder="School"
              value={inputValues[i][0]} />
              <input
                type="text"
                name={i}
                className={1} formItem
                key={e}
                onChange={handleOnChange2}
                placeholder="Degree"
                value={inputValues[i][1]}
              ></input>
              <input
                type="text"
                name={i}
                key={e}
                className={2} formItem
                onChange={handleOnChange2}
                value={inputValues[i][2]}
                placeholder="Major"
              ></input><input
                type="text"
                name={i}
                key={e}
                className={3} formItem
                onChange={handleOnChange2}
                placeholder="Start Date"
                value={inputValues[i][3]}
              ></input><input
                type="text"
                name={i}
                key={e}
                // make classname {4} and formItem
                className={4}
                onChange={handleOnChange2}
                placeholder="End Date"
                value={inputValues[i][4]}
              ></input><br></br><textarea name={i} key={e} className={5} formItem onChange={handleOnChange2} value={inputValues[i][5]} placeholder="Description or any additional information"></textarea><br></br></>
          );
        } else {
          return (
            <>
            <input
              type="text"
              name={i}
              className={0}
              formItem
              key={e}
              onChange={handleOnChange2}
              placeholder="School"
              // value={inputValues[i][0]}
            />
            <input
              type="text"
              name={i}
              className={0} formItem
              key={e}
              onChange={handleOnChange2}
              placeholder="School"
              // value={inputValues[i][0]}
            ></input>
            <input
              type="text"
              name={i}
              className={1} formItem
              key={e}
              onChange={handleOnChange2}
              placeholder="Degree"
              // value={inputValues[i][1]}
            ></input>
            <input
              type="text"
              name={i}
              key={e}
              className={2} formItem
              onChange={handleOnChange2}
              // value={inputValues[i][2]}
              placeholder="Major"
            ></input>
            <input
              type="text"
              name={i}
              key={e}
              className={3} formItem
              onChange={handleOnChange2}
              placeholder="Start Date"
              // value={inputValues[i][3]}
            ></input>
            <input
              type="text"
              name={i}
              key={e}
              // make classname {4} and formItem
              className = {4}
              onChange={handleOnChange2}
              placeholder="End Date"
              // value={inputValues[i][4]}
            ></input>
            <br></br>
            <textarea name={i} key={e} className={5} formItem  onChange={handleOnChange2}  placeholder="Description or any additional information"></textarea>
            <br></br>
            </>
          );
        }
        return (

          <div >
            <br></br>
            
            
          </div>
        );
      })}
      {/* <button className = "button" onClick={ handleEducationClick } >Add Education</button>
        {   education ? <div style={ popover }>
          <div style={ cover } onClick={ handleEducationClose }/>
          <AddEducation color={color} onChange={console.log("adding edu")}/>
        </div> : null }
        <button className = "button" onClick={ handleWorkClick } >Add Work Experience</button>
        {   work ? <div>
          <div style={ cover } onClick={ handleWorkClose }/>
          <addEducation color="black" onChange={console.log("adding work")}/>
        </div> : null }
        <button className = "button" onClick={ handleCustomClick } >Add Custom</button>
        {   custom ? <div style={ popover }>
          <div style={ cover } onClick={ handleCustomClose }/>
          <addEducation color={color} onChange={console.log("cus")}/>
        </div> : null } */}
      {/* <p> Browse fonts on the below links and copy the font-family name or font url to the input box below.</p>
        
        <div className="link-primary" onClick = {()=> window.location.href = 'https://fonts.google.com/'}>Google Fonts</div>
        <div className="link-primary" onClick={()=>window.location.href = 'https://fonts.adobe.com/fonts'}>Adobe Fonts</div>
        <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
            <label for="primaryText" class="sr-only">Primary Text</label>
            <input type="primaryText" class="form-control" id="primaryText" placeholder="Font for most of your text"/>
        </div>
        <div class="form-group mx-sm-3 mb-2">
            <label for="funText" class="sr-only">Fun Text</label>
            <input type="funText" class="form-control" id="funText" placeholder="Font for headers (titles)"/>
        </div>
        
        </form> */}

      <br></br>
      <div className="addSection">
        
        <br></br>
        <button onClick={handleClick3}>Add Experience</button>
        {Array.from(Array(counter2)).map((e, i) => {
          if (inputValues2[i]) {
            
            return (
              <div>
                <br></br>
                <div class="form-group-experience">
                <input

                  type="text"
                  name={i}
                  className={0}
                  key={e}
                  onChange={handleOnChange3}
                  placeholder="Start Date"
                  value={inputValues2[i][0]}
                ></input>

                <br></br>

                <input
                  type="text"
                  name={i}
                  className={1}
                  key={e}
                  onChange={handleOnChange3}
                  placeholder="End Date"
                  value={inputValues2[i][1]}
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  key={e}
                  className={2}
                  onChange={handleOnChange3}
                  placeholder="Company or Group"
                  value={inputValues2[i][2]}
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  key={e}
                  className={3}
                  onChange={handleOnChange3}
                  placeholder="Position"
                  value={inputValues2[i][3]}
                ></input>
                <br></br>
                
                
                {/* <p>Description</p> */}
                <textarea
                  class="form-control"
                  id="Description"
                  rows="3"
                  type="text"
                  name={i}
                  key={e}
                  className={4} form-control
                  onChange={handleOnChange3}
                  placeholder="Description"
                  value={inputValues2[i][4]}
                ></textarea>
                </div>
                

                <br></br>

                <br></br>

                </div>
            );
          }
          else {
            return (
              <div>
                <br></br>
                <div class="form-group-experience">
                <input

                  type="text"
                  name={i}
                  className={0}
                  key={e}
                  onChange={handleOnChange3}
                  placeholder="Start Date"
                ></input>

                <br></br>

                <input
                  type="text"
                  name={i}
                  className={1}
                  key={e}
                  onChange={handleOnChange3}
                  placeholder="End Date"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  key={e}
                  className={2}
                  onChange={handleOnChange3}
                  placeholder="Company or Group"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  key={e}
                  className={3}
                  onChange={handleOnChange3}
                  placeholder="Position"
                ></input>
                <br></br>
                
                
                {/* <p>Description</p> */}
                <textarea
                  class="form-control"
                  id="Description"
                  rows="3"
                  type="text"
                  name={i}
                  key={e}
                  className={4} form-control
                  onChange={handleOnChange3}
                  placeholder="Description"
                ></textarea>
                </div>
                

                <br></br>

                <br></br>

                </div>

            );
          }

          })}

          <br></br>
         
        

          {/*  */}
          </div>

          

        <div className="addSection">
        <br></br>
        <button onClick={handleClick4}>Add Custom</button>
        {Array.from(Array(counter3)).map((e, i) => {
          console.log(inputValues3[i])
          if (inputValues3[i]) {

            return (
              <div>
                <br></br>
                <input type="text" name={i} className={0} key={e} onChange={handleOnChange4} value ={inputValues3[i][0]} placeholder="Title of Section"></input>
                <br></br>
                <input type="text" name={i} className={1} key={e} onChange={handleOnChange4} value = {inputValues3[i][1]} placeholder="Heading One"></input>
                <br></br>
                <input type="text" name={i} className={2} key={e} onChange={handleOnChange4} value = {inputValues3[i][2]} placeholder="Heading Two"></input>
                <br></br>
                <input type="text" name={i} className={3} key={e} onChange={handleOnChange4} value = {inputValues3[i][3]} placeholder="Heading Three" ></input>
                <br></br>
                <textarea name={i} key={e} className={4} onChange={handleOnChange4}value = {inputValues3[i][4]} placeholder="Description or any additional information"></textarea>
                <br></br>
                <br></br>


              </div>
            );
          }
          else {
            return (
              <div>
                <br></br>
                <input type="text" name={i} className={0} key={e} onChange={handleOnChange4} placeholder="Title of Section"></input>
                <br></br>
                <input type="text" name={i} className={1} key={e} onChange={handleOnChange4} placeholder="Heading One"></input>
                <br></br>
                <input type="text" name={i} className={2} key={e} onChange={handleOnChange4} placeholder="Heading Two"></input>
                <br></br>
                <input type="text" name={i} className={3} key={e} onChange={handleOnChange4} placeholder="Heading Three"></input>
                <br></br>
                <textarea name={i} key={e} className={4} onChange={handleOnChange4} placeholder="Description or any additional information"></textarea>
                <br></br>
                <br></br>
                </div>
            );
          }
        })}

        <br></br>
        <br></br>
        <div className="submitValues">
        
        <br></br>
        <br></br>
        <h3>Generate Background Image</h3>
        
        
        <br></br>
        <button onClick={handleImage}>Generate</button>
        {/* display background image */}
        <br></br>
        <br></br>
        <div className="backgroundImage" >
          <p>Please allow image to load before generating a new image</p>
          <img src={backgroundImageURL} alt="backgroundImage" width="500" />
        </div>
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>


    </div>

  );
};
export default Collab;
