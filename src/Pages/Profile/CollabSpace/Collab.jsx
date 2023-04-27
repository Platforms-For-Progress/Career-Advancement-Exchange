import React, { useEffect } from "react";
import "./Collab.css";
import Toolbar from "./Components/Toolbar";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../base";

import ColorPalette from "./Components/ColorPalette";
const Footer = ({ name, footerBg}) => {
    return (
        <div className="footer-bottom" style={{backgroundColor: footerBg}}>
                <div className="icons">
                <i class="uil uil-instagram"></i>
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-linkedin-alt"></i>
                   </div>
                   <div className="below-icons">
                        <p className="apply-font">© 2023 {name}</p>
                        <p className="apply-font">Made with <i class="uil uil-heart"></i> by Career Advancement Exchange</p>

                    </div>
                </div>
    )
}

const Header = ({ name, headerBg, view }) => {
    return (
        // check if view is equal to home
        <div className="apply-font" style={{backgroundColor: headerBg}}>
            <div className="header" >
                <div className="header-left">
                <p className="apply-font">{name}</p>
                </div>
                <div className="header-right">

                <p className="apply-font">About</p>
                <p className="apply-font">Past Work</p>
                <p className="apply-font">Contact</p>
                </div>


            </div>
            
        </div>
    )
}



const CollabSpace = () => {
    const [view, setView] = useState("home");
    const [font, setFont] = useState("Arial");
    const [name, setName] = useState();
    const [uid, setUid] = useState();
    const [colors, setColors] = useState([]);
    const [headerBg, setHeaderBg] = useState("#fff");
    const [footerBg, setFooterBg] = useState("#fff");
    const [homeBg, setHomeBg] = useState("#fff");
    const [aboutBg, setAboutBg] = useState("#fff");
    const [pastWorkBg, setPastWorkBg] = useState("#fff");
    // const [contentBg, setContentBg] = useState("#fff");
    const [contactBg, setContactBg] = useState("#fff");
    const [rid, setRid] = useState();
    const [imageArrayHome, setImageArrayHome] = useState([]);
    const [headingOneArrayHome, setHeadingOneArrayHome] = useState([]);
    const [homeMap, setHomeMap] = useState([]);
    const [aboutMap, setAboutMap] = useState({});
    const [pattern, setPattern] = useState("");
    const [pattern_size, setPatternSize] = useState("");

   
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log(user.displayName);
            setName(user.displayName);
            setUid(user.uid);
          } else {
            console.log("no user");
            window.location.href = "/login";

          }
        });


        // get rid from url
        const url = window.location.href;
        const urlArray = url.split("/");
        const rid = urlArray[urlArray.length - 1];
        setRid(rid);
        console.log(rid);
      }, []);
    //   console.log(headerBg);
    return (
        <div className="collab-space">
        <Toolbar 
            setView = {setView}
            setFont = {setFont}
            font = {font}
            colors = {colors}
            setHeaderBg = {setHeaderBg}
            headerBg = {headerBg}
            setFooterBg = {setFooterBg}
            footerBg = {footerBg}
            setHomeBg = {setHomeBg}
            homeBg = {homeBg}
            setAboutBg = {setAboutBg}
            setPastWorkBg={setPastWorkBg}
            setContactBg = {setContactBg}
            rid = {rid}
            setImageArrayHome = {setImageArrayHome}
            setHeadingOneArrayHome = {setHeadingOneArrayHome}
            setHomeMap = {setHomeMap}
            homeMap = {homeMap}
            pattern = {pattern}
            setPattern = {setPattern}
            pattern_size = {pattern_size}
            setPatternSize = {setPatternSize}
            

        />
        <div className="viewport" style={{ fontFamily: { font }, font: {font}}}>
        {view === "home"        ? 
        
        <div  style={{backgroundColor: headerBg}}>
            <Header 
                name = {name}
                headerBg = {headerBg}
                view = {view}
                />
               
            <div className="home-content" style={{backgroundColor:homeBg}}>
                {homeMap.map((item) => {
                    if (item.type == "headingOne") {
                        return (
                            <div className="home-heading-one">
                                <p className="apply-font">{item.content}</p>
                            </div>

                        )
                    }
                    else if (item.type == "image") {
                        return (
                            <div className="home-image">
                                <img src={item.content} alt="" />
                            </div>
                        )
                    }
                    else if (item.type == "headingTwo") {
                        return (
                            <div className="home-heading-two">
                                <p className="apply-font">{item.content}</p>
                            </div>
                        )
                    }
                    else if (item.type == "paragraph") {
                        return (
                            <div className="home-paragraph">
                                <p className="apply-font">{item.content}</p>
                            </div>
                        )
                    }

                })}
                
            </div>
            <div className="footer-bottom" style={{backgroundColor: footerBg}}>
                <div className="icons">
                <i class="uil uil-instagram"></i>
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-linkedin-alt"></i>
                   </div>
                   <div className="below-icons">
                        <p className="apply-font">© 2023 {name}</p>
                        <p className="apply-font">Made with <i class="uil uil-heart"></i> by Career Advancement Exchange</p>

                    </div>
                </div>
            

        </div> : view === "about" ? 
            <div className="aboutYou"  style={{backgroundColor: headerBg}}>
                <Header 
                name = {name}
                headerBg = {headerBg}
                view = {view}
                />


          
            <div className="about-content" style={{backgroundColor:aboutBg}}>
                <p className="apply-font">About Me</p>
            </div>
            <Footer 
                
                name = {name}
                footerBg = {footerBg}
            />
            </div> : view === "past-work" ? 

            <div className="past-work">
                {/* <p className="apply-font">Past Work</p> */}
                <Header 
                name = {name}
                headerBg = {headerBg}
                view = {view}
                />
                <div className="past-work-content" style={{backgroundColor:pastWorkBg}}>
                    <p className="apply-font">Past Work</p>
                </div>


            <Footer 
                
                name = {name}
                footerBg = {footerBg}
            />
            </div> : view === "header" ?
            <div className="headerTime"> 
            <Header 
                name = {name}
                headerBg = {headerBg}
                view = {view}
                />
                <div className="home-content applyOpacity" style={{backgroundColor:homeBg}}>
                <p className="apply-font">Hi, My name is {name}</p>
                { imageArrayHome.map((image) => {
                    return (
                        <img width={100} src={image} />
                    )
                })
                }
            </div>
            <div className="footer-bottom applyOpacity" style={{backgroundColor: footerBg}}>
                <div className="icons">
                <i class="uil uil-instagram"></i>
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-linkedin-alt"></i>
                   </div>
                   <div className="below-icons">
                        <p className="apply-font">© 2023 {name}</p>
                        <p className="apply-font">Made with <i class="uil uil-heart"></i> by Career Advancement Exchange</p>

                    </div>
                </div>
            </div>

            : view === "footer" ? 
            <div className="footerTime">
                <div className="applyOpacity">
            <Header 
                name = {name}
                headerBg = {headerBg}
                view = {view}
                />
                <div className="home-content applyOpacity" style={{backgroundColor:homeBg}}>
                <p className="apply-font">Hi, My name is {name}</p>
                { imageArrayHome.map((image) => {
                    return (
                        <img width={100} src={image} />
                    )
                })
                }
            </div>
            </div>  
            <div className="footer-bottom " style={{backgroundColor: footerBg}}>
                <div className="icons">
                <i class="uil uil-instagram"></i>
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-twitter"></i>
                <i class="uil uil-linkedin-alt"></i>
                   </div>
                   <div className="below-icons">
                        <p className="apply-font">© 2023 {name}</p>
                        <p className="apply-font">Made with <i class="uil uil-heart"></i> by Career Advancement Exchange</p>

                    </div>
                </div>
            </div>

: view === "contact" ?
            <div className="contact">
                <Header 
                name = {name}
                headerBg = {headerBg}
                view = {view}
                />
                <div className="contact-content" style={{backgroundColor:contactBg}}>
                    <p>Contact Me !</p>
                </div>
                <Footer
                    name={name}
                    footerBg={footerBg}
                />
                
                </div> : view == "past-work" ?
                <div className="past-work">
                    <p className="apply-font">Past Work</p>
                        
                        </div> : null}
            
        </div>
        <ColorPalette
            setColors={setColors}
            colors={colors}

            
            />
        </div>
    );
    }
export default CollabSpace;