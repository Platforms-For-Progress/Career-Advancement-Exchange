import React from "react";
import { useState, useEffect } from "react";

import { SketchPicker, ChromePicker } from "react-color";

import FontPicker from "font-picker-react";

import { useParams } from "@reach/router";

import { firestore, auth } from "../base.js";
import { onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

// import {
//   BackgroundPatternGenerator,
//   Canvas,
//   Controls,
// } from "react-background-pattern-generator";

// import { openai } from 'openai'

import "./Collab.css";

// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);
// openai.apiKey = process.env.OPENAI_API_KEY;
// const [image, setImage] = useState("");
// const openai_api_key = process.env.OPENAI_API_KEY;
// async function test(color) {
//   try {
//     const response = await openai.createImage({
//       prompt: "generate a background image for the color " + color,
//       n: 1,
//       size: "1024x1024",
//     });
//     console.log(response);
//     // display image
//     // const img = document.createElement("img");
//     // img.src = "data:image/png;base64," + response.data;
//     // document.body.appendChild(img);
//     const backgroundImageURL = response.data.data[0].url;
//     console.log(backgroundImageURL);
//     return backgroundImageURL;
//   } catch (error) {
//     console.log(error);
//   }
// }

// const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;
// const openai = require('openai-api');
// openai.api_key =  "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";
const fontPickerApiKey = process.env.REACT_APP_FONT_PICKER_API_KEY;

const Collab = () => {
  const { rid } = useParams();

  const [colorPicker, setColorPicker] = useState(false);
  const [colorPicker2, setColorPicker2] = useState(false);
  const [education, setEducation] = useState(false);
  const [educationArray, setEducationArray] = useState([]);
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
  const [selectPattern, setSelectPattern] = useState("");
  const [pattern, setPattern] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [spacing, setSpacing] = useState(0);
  // NOTE: Display name doesnt exist for email pass login; either create new user database or find a way to set its display name; most likely going to be the first option
  // const state = {
  //     displayColorPicker: false,
  //   };
  const [educationEntries, setEducationEntries] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        console.log(user.displayName);
        setName(user.displayName);
        setUid(user.uid);
      } else {
        // User is signed out
        // ...
        console.log("no user");
        window.location.href = "/signin";
      }
    });
  }, []);
  const handleHeaderAddEducation = (e) => {};
  // add Input Values to firebase firestore
  async function getImage() {
    handleImage();
  }

  const handleClick = () => {
    // setState({ displayColorPicker: !state.displayColorPicker })
    setColorPicker(!colorPicker);
  };
  async function handleImage() {
    // setPrompt(prompt);
    // const url = await test(color);
    // setBackgroundImageURL(url);
    // console.log("URL: " + url);
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
    console.log(inputValues[e.target.name][e.target.className]);

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
  function changeSelectPattern(e) {
    setSelectPattern(e.target.value);
    console.log(e.target.value);
    setPattern(e.target.value);
  }
  const handleChangeSecondaryColor = (color) => {
    setSecondaryColor(color.hex);
  };

  function handleCloseSecondaryColor(e) {
    setColorPicker2(false);
  }

  function handleClickSecondaryColor() {
    setColorPicker2(!colorPicker2);
  }

  function setOpacityChange(e) {
    setOpacity(e.target.value);
    console.log(opacity);
  }

  function setSpacingChange(e) {
    setSpacing(e.target.value);
    console.log(spacing);
  }

  function hexToRgb(hex) {
    var bigint = parseInt(hex.replace("#", ""), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
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
  // const handleOnEducationChange = (e) => {
  //   console.log("VALUE", e.target.value);
  //   console.log("NAME", e.target.name);
  //   console.log("ID", e.target.id);
  //   console.log("CLASS", e.target.className);
  //   console.log("KEY", e.target.key);
  //   // setEducation(e.target.value);
  //   //  I want to do something like setEducationArray(educationArray[e.target.name][e.target.className] = e.target.value);
  //   if (educationArray[e.target.name] == undefined) {
  //     educationArray[e.target.name] = [];
  //   }

  //   setEducationArray((educationArray[e.target.className] = e.target.value));
  //   setInputValues((inputValues[e.target.name] = educationArray));
  // };
  // async function handleSubmit() {
  //   // e.preventDefault();
  //   console.log(inputValues);
  //   console.log(inputValues2);
  //   console.log(inputValues3);
  //   setDoc(doc(firestore, "userInputtedValues", uid), {
  //     uid: uid,
  //     education: inputValues,
  //     work: inputValues2,
  //     addedSections: inputValues3,
  //     color: color,
  //     font: font,
  //     backgroundImage: backgroundImageURL,
  //   }).then(() => {
  //     console.log("done");
  //     alert("updated information");
  //   });
  // }

  const handleBackgroundChange = (e) => {
    setPrompt(e.target.value);
    console.log(e.target.value);
    console.log(prompt);
  };

  // useEffect(() => {
  //   console.log(reset);
  // }, [reset]);

  return (
    <div className="collab">
      <div className="collabTitle">Maker Space</div>
      <br></br>
      <div className="startOfPage">
        <div className="left">
          <button className="btn btn-primary" onClick={handleClick}>
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
            apiKey={process.env.REACT_APP_FONT_PICKER_API_KEY}
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
          <p>
            NOTE: Your website will not look like this, it will be a mix of all
            the creative components on this page in addition to your
            collaboration with our team members. This is just a fun way to see
            the start of your website.
          </p>
        </div>
        {/* log color and secondaryColor */}
        {console.log(color)}
        {console.log(secondaryColor)}
        {console.log(pattern)}

        <div
          className="viewport"
          style={{
            backgroundColor: color,
            // opacity: opacity * 0.01,
            // backgroundOpacity: opacity * 0.01,
            color: "black",
            backgroundPosition:
              pattern == "Rhombus"
                ? `40px 0, 40px 0, 0 0, 0 0`
                : pattern == "ZigZag"
                ? `40px 0, 40px 0, 0 0, 0 0`
                : null,

            // opacity: opacity * 0.01,
            // set background opacity
            backgroundRepeat: "repeat",
            backgroundSize:
              pattern == "Rhombus"
                ? `${spacing}px ${spacing}px`
                : pattern == "ZigZag"
                ? `${spacing / 4}px ${spacing * 4}px`
                : `20px, 20px`,
            // backgroundRepeat: "repeat",
            // backgroundSize: `${spacing}px ${spacing}px`,
            // update background image

            background:
              pattern === "Wavy"
                ? `repeating-radial-gradient(circle at 0 0, transparent 0, #ccccf6 ${spacing}px), repeating-linear-gradient(rgba(${hexToRgb(
                    color
                  )}, ${opacity * 0.01}),rgba(${hexToRgb(secondaryColor)}, ${
                    opacity * 0.01
                  }))`
                : pattern === "Rhombus"
                ? `linear-gradient(135deg,${color} 25%, transparent 25%), linear-gradient(225deg, ${color} 25%, transparent 25%), linear-gradient(45deg, ${color} 25%, transparent 25%), linear-gradient(315deg, ${color} 25%, ${secondaryColor} 25%)`
                : pattern === "ZigZag"
                ? `linear-gradient(135deg, ${color} 25%, transparent 25%), linear-gradient(225deg, ${color} 25%, transparent 25%), linear-gradient(45deg, rgba(${hexToRgb(
                    color
                  )}, ${
                    opacity * 0.01
                  }) 25%, transparent 25%), linear-gradient(315deg, ${color} 25%, ${secondaryColor} 25%)`
                : pattern == "ZigZag2"
                ? `linear-gradient(135deg, ${color} 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(225deg, ${color} 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(315deg, ${color} 25%, transparent 25%) 0px 0/ 80px 80px, linear-gradient(45deg, ${color} 25%, ${secondaryColor} 25%) 0px 0/ 80px 80px`
                : null,
          }}
        >
          <div className="viewportHeader" style={{ backgroundColor: color }}>
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
              <p
                className="header1 apply-font highlighted"
                style={{ backgroundColor: `${secondaryColor}` }}
              >
                {name}
              </p>
              <p
                className="header2 apply-font highlighted"
                style={{ backgroundColor: `${secondaryColor}` }}
              >
                Education
              </p>
              {educationEntries.map((entry) => (
                <div
                  className="header3 apply-font highlighted"
                  style={{ backgroundColor: `${secondaryColor}` }}
                >
                  <h2>School: {entry.school}</h2>
                  <h3>Degree: {entry.degree}</h3>
                  <h4>Major: {entry.major}</h4>
                  <h5>
                    {entry.startDate} - {entry.endDate}
                  </h5>
                </div>
              ))}

              {/* {Object.keys(inputValues).map((key) => (
                <ul>
                  <h2>{inputValues[key][0]}</h2>
                  <h4>{inputValues[key][1]}</h4>
                  <h6>{inputValues[key][2]}</h6>
                  <h7>
                    {inputValues[key][3]} - {inputValues[key][4]}
                  </h7>
                  <p>{inputValues[key][5]}</p>
                  
                </ul>
              ))} */}
              {console.log(inputValues)}

              {Object.keys(inputValues).map((key) => (
                <ul>
                  <h2>{inputValues[key][0]}</h2>

                  <h4>{inputValues[key][1]}</h4>
                  <h6>{inputValues[key][2]}</h6>
                  <h7>
                    {inputValues[key][3]} - {inputValues[key][4]}
                  </h7>
                  <p>{inputValues[key][5]}</p>
                </ul>
              ))}

              <p
                className="header2 apply-font highlighted"
                style={{ backgroundColor: `${secondaryColor}` }}
              >
                Experience
              </p>
              {Object.keys(inputValues2).map((key) => (
                <ul>
                  <h2>{inputValues2[key][3]}</h2>
                  <h4>{inputValues2[key][2]}</h4>
                  {/* <h6>{inputValues2[key][]}</h6> */}
                  <h7>
                    {inputValues2[key][0]} - {inputValues2[key][1]}
                  </h7>
                  <p>{inputValues2[key][4]}</p>
                  {inputValues2[key].map((item) => (
                    <>{/* <p>{item}</p> */}</>
                  ))}
                </ul>
              ))}
              <p
                className="header2 apply-font highlighted"
                style={{ backgroundColor: `${secondaryColor}` }}
              >
                Custom Headers
              </p>
              {Object.keys(inputValues3).map((key) => (
                <ul>
                  <h2>{inputValues3[key][0]}</h2>
                  <h4>{inputValues3[key][1]}</h4>
                  <h6>{inputValues3[key][2]}</h6>
                  <h7>{inputValues3[key][3]}</h7>
                  <p>{inputValues3[key][4]}</p>
                  {inputValues3[key].map((item) => (
                    <>{/* <p>{item}</p> */}</>
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
      <EducationForm
        educationEntries={educationEntries}
        setEducationEntries={setEducationEntries}
      />
      <form></form>
      {/* <button onClick={handleHeaderAddEducation}>Add Education</button> */}
      {/* <input type="text" onChange={handleOnChange2} placeholder="School">{inputValues[0][0]}</input> */}
      {/* {Array.from(Array(counter)).map((e, i) => {
        if (inputValues[i]) {
          return (
            <>
              <input
                type="text"
                name={i}
                className={0}
                formItem
                key={e}
                onChange={handleOnEducationChange}
                placeholder="School"
                value={inputValues[i][0]}
              />
              <input
                type="text"
                name={i}
                className={1}
                formItem
                key={e}
                onChange={handleOnEducationChange}
                placeholder="Degree"
                value={inputValues[i][1]}
              ></input>
              <input
                type="text"
                name={i}
                key={e}
                className={2}
                formItem
                onChange={handleOnEducationChange}
                value={inputValues[i][2]}
                placeholder="Major"
              ></input>
              <input
                type="text"
                name={i}
                key={e}
                className={3}
                formItem
                onChange={handleOnEducationChange}
                placeholder="Start Date"
                value={inputValues[i][3]}
              ></input>
              <input
                type="text"
                name={i}
                key={e}
                // make classname {4} and formItem
                className={4}
                onChange={handleOnEducationChange}
                placeholder="End Date"
                value={inputValues[i][4]}
              ></input>
              <br></br>
              <textarea
                name={i}
                key={e}
                className={5}
                formItem
                onChange={handleOnEducationChange}
                value={inputValues[i][5]}
                placeholder="Description or any additional information"
              ></textarea>
              <br></br>
            </>
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
                onChange={handleOnEducationChange}
                placeholder="School"
                // value={inputValues[i][0]}
              />

              <input
                type="text"
                name={i}
                className={1}
                formItem
                key={e}
                onChange={handleOnEducationChange}
                placeholder="Degree"
                // value={inputValues[i][1]}
              ></input>
              <input
                type="text"
                name={i}
                key={e}
                className={2}
                formItem
                onChange={handleOnEducationChange}
                // value={inputValues[i][2]}
                placeholder="Major"
              ></input>
              <input
                type="text"
                name={i}
                key={e}
                className={3}
                formItem
                onChange={handleOnEducationChange}
                placeholder="Start Date"
                // value={inputValues[i][3]}
              ></input>
              <input
                type="text"
                name={i}
                key={e}
                // make classname {4} and formItem
                className={4}
                onChange={handleOnEducationChange}
                placeholder="End Date"
                // value={inputValues[i][4]}
              ></input>
              <br></br>
              <textarea
                name={i}
                key={e}
                className={5}
                formItem
                onChange={handleOnEducationChange}
                placeholder="Description or any additional information"
              ></textarea>
              <br></br>
            </>
          );
        }
        return (
          <div>
            <br></br>
          </div>
        );
      })} */}
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
                    className={4}
                    form-control
                    onChange={handleOnChange3}
                    placeholder="Description"
                    value={inputValues2[i][4]}
                  ></textarea>
                </div>

                <br></br>

                <br></br>
              </div>
            );
          } else {
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
                    className={4}
                    form-control
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
          console.log(inputValues3[i]);
          if (inputValues3[i]) {
            return (
              <div>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={0}
                  key={e}
                  onChange={handleOnChange4}
                  value={inputValues3[i][0]}
                  placeholder="Title of Section"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={1}
                  key={e}
                  onChange={handleOnChange4}
                  value={inputValues3[i][1]}
                  placeholder="Heading One"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={2}
                  key={e}
                  onChange={handleOnChange4}
                  value={inputValues3[i][2]}
                  placeholder="Heading Two"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={3}
                  key={e}
                  onChange={handleOnChange4}
                  value={inputValues3[i][3]}
                  placeholder="Heading Three"
                ></input>
                <br></br>
                <textarea
                  name={i}
                  key={e}
                  className={4}
                  onChange={handleOnChange4}
                  value={inputValues3[i][4]}
                  placeholder="Description or any additional information"
                ></textarea>
                <br></br>
                <br></br>
              </div>
            );
          } else {
            return (
              <div>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={0}
                  key={e}
                  onChange={handleOnChange4}
                  placeholder="Title of Section"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={1}
                  key={e}
                  onChange={handleOnChange4}
                  placeholder="Heading One"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={2}
                  key={e}
                  onChange={handleOnChange4}
                  placeholder="Heading Two"
                ></input>
                <br></br>
                <input
                  type="text"
                  name={i}
                  className={3}
                  key={e}
                  onChange={handleOnChange4}
                  placeholder="Heading Three"
                ></input>
                <br></br>
                <textarea
                  name={i}
                  key={e}
                  className={4}
                  onChange={handleOnChange4}
                  placeholder="Description or any additional information"
                ></textarea>
                <br></br>
                <br></br>
              </div>
            );
          }
        })}
      </div>
      <div>
        <br></br>
        <h3>Add Background Elements</h3>
        <br></br>
        <h4>Add Image</h4>
        <input type="file" id="myFile" name="filename"></input>
        <br></br>
        <br></br>
        <h4>Or Choose Pattern</h4>
        <button className="button" onClick={handleClickSecondaryColor}>
          Pick Secondary Color
        </button>
        {colorPicker2 ? (
          <div style={popover}>
            <div style={cover} onClick={handleCloseSecondaryColor} />
            <ChromePicker
              color={secondaryColor}
              onChange={handleChangeSecondaryColor}
            />
          </div>
        ) : null}
        <select
          class="custom-select mr-sm-2"
          id="cssFormatting"
          onChange={changeSelectPattern}
        >
          <option id="1">Wavy</option>
          <option id="2">Rhombus</option>
          <option id="3">ZigZag</option>

          <option id="4">ZigZag2</option>
          <option id="5">Moon</option>
          <option id="6">Circles</option>
          <option id="7">Diagonal top left to bottom right</option>
          <option id="8">Diagonal bottom left to top right</option>
          <option id="9">Graph Paper</option>
          <option id="10">Isometric</option>
          <option id="11">Dotted</option>
          <option id="12">Wide Dots</option>
          <option id="13">Horizontal Lines</option>
          <option id="14">Vertical Lines</option>
          <option id="15">Diagonal Thin Lines</option>
          <option id="16">Boxes</option>
          <option id="17">Wide Horizontal Lines</option>
          <option id="18">Wide Vertical Lines</option>
          <option id="19">Triangle</option>
          <option id="20">Triangle Opposite</option>
          <option id="21">Rectangles</option>
          <option id="22">Cross</option>
        </select>

        <br></br>
        <br></br>
        <p>Opacity</p>
        <input type="range" id="opacity" onChange={setOpacityChange}></input>
        <p>Spacing</p>
        <input
          type="range"
          placeholder="Spacing (0 to 1)"
          onChange={setSpacingChange}
        ></input>
      </div>
    </div>
  );
};
export default Collab;

function EducationForm({ educationEntries, setEducationEntries }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleAddEducation = () => {
    const newEntry = { school, degree, major, startDate, endDate };
    setEducationEntries([...educationEntries, newEntry]);
    setSchool("");
    setDegree("");
    setMajor("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      <h2>Add Education</h2>
      <form>
        <label>
          School:
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </label>
        <br />
        <label>
          Degree:
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
      </form>
      <ul>
        {educationEntries.map((entry, index) => (
          <li key={index}>
            {entry.school}, {entry.degree}, {entry.major}, {entry.startDate},{" "}
            {entry.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
}
