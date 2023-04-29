import React, { useEffect } from "react";
import img from './Asset 2.png';
import './Home.css';
import ReactCurvedText from 'react-curved-text';
import { useState } from "react";
const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
        
    return (
        <div className="home">
            <div className="home-image">
                <img src={img} alt="Logo" />
            </div>

            <ReactCurvedText
                width={window.innerWidth}
                height={200}
                // make cx and cy dynamic
                // cx = {()=> window.innerWidth/2}
                // cx = {window.innerWidth/2}
                // make cx dynamic
                cx =  {window.innerWidth/2}
                // cy = {window.innerHeight/2}
                // cx='0'
                className="ReactCurvedText"
                cy='0'
                rx='155'
                ry='153'
                startOffset='17'
                reversed={false}
                text="Career Advancement Exchange"
                textProps={{ style: { fontSize: 30},  color:" #40404", fill: "#40404" }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
            />
            <div className="home-text">
                <p>Showcasing your work can be hard sometimes. Let a website do it for you.</p>
                <button className="home-button" onClick={()=> window.location.href="/login"}>Get Started</button>
            </div>
           

        </div>
        
    );
}

export default Home;