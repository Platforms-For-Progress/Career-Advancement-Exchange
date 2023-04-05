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
import { useParams } from "@reach/router";

// import fontpicker api key from .env
const fontPickerApiKey = process.env.REACT_APP_FONTPICKER_API_KEY;

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
  }, []);

  const handleClick = () => {
    // setState({ displayColorPicker: !state.displayColorPicker })
    setColorPicker(!colorPicker);
  };
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

    if (reset) {
      console.log("allocating new array");
      abc[e.target.name] = [];
      setReset(!reset);
    }
    // abc[e.target.name] = {};
    abc[e.target.name][e.target.className] = e.target.value;

    // abc[(e.target.name), (e.target.className)] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
    console.log(inputValues);
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
        <div className="previewTitle">Preview</div>
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
                  <h2>{key}</h2>
                  {inputValues[key].map((item) => (
                    <p>{item}</p>
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
      {Array.from(Array(counter)).map((e, i) => {
        return (
          <div>
            <br></br>
            <input
              type="text"
              name={i}
              className={0}
              key={e}
              onChange={handleOnChange2}
              placeholder="School"
            ></input>
            <input
              type="text"
              name={i}
              className={1}
              key={e}
              onChange={handleOnChange2}
              placeholder="Degree"
            ></input>
            <input
              type="text"
              name={i}
              key={e}
              className={2}
              onChange={handleOnChange2}
              placeholder="Major"
            ></input>
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
    </div>
  );
};
export default Collab;
