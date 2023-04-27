import React from "react";
import img from './Asset 2.png';
import './Home.css';
import ReactCurvedText from 'react-curved-text';
const Home = () => {
    return (
        <div className="home">
            <div className="home-image">
                <img src={img} alt="Logo" />
            </div>

            <ReactCurvedText
                width={1100}
                height={200}
                // make cx and cy dynamic
                // cx = {()=> window.innerWidth/2}
                cx = {window.innerWidth/2}
                // cy = {window.innerHeight/2}
                // cx='0'
                className="ReactCurvedText"
                cy='0'
                rx='182'
                ry='153'
                startOffset='40'
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
                <button className="home-button">Get Started</button>
            </div>
           

        </div>
        
    );
}

export default Home;