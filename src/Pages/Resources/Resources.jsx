import React from "react";
import "./Resources.css";
const Resources = () => {
    const goToCAPE = () => {
        window.location.href = "/resources/cape";
    }
    return (
        <div className="resources">
        <h2>Resources</h2>
        <div className="content">
        <div className="Video">
        <h3>Intro Video</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/R5cqgAyAhZc" title="Intro Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="programs">
            <h3>Programs</h3>
            <button className="program-item" onClick={goToCAPE}>CAPE</button>
        </div>
        </div>
        </div>
    );
    }

export default Resources;