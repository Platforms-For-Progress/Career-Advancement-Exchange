import React from "react";
import { Accordion } from "react-bootstrap";
import "./CAPE.css";
const CAPE = () => {
    const data = [
        {
            "name": "Week One",
            "videos": ["https://www.youtube.com/embed/1Q8fG0TtVAY", "https://www.youtube.com/embed/1Q8fG0TtVAY", "https://www.youtube.com/embed/1Q8fG0TtVAY"],
            "video_Titles": ["Video 1", "Video 2", "Video 3"],
            "video_Descriptions": ["Video 1 Description", "Video 2 Description", "Video 3 Description"],
            "assignments": ["assignment1.pdf, assignment2.pdf, assignment3.pdf"]
        },
        {
            "name": "Week Two",
            "videos": ["https://www.youtube.com/embed/1Q8fG0TtVAY", "https://www.youtube.com/embed/1Q8fG0TtVAY", "https://www.youtube.com/embed/1Q8fG0TtVAY"],
            "assignments": ["assignment1.pdf, assignment2.pdf, assignment3.pdf"],
            "video_Titles": ["Video 1", "Video 2", "Video 3"],
            "video_Descriptions": ["Video 1 Description", "Video 2 Description", "Video 3 Description"],
            
        },
        {
            "name": "Week Three",
            "videos": ["https://www.youtube.com/embed/1Q8fG0TtVAY", "https://www.youtube.com/embed/1Q8fG0TtVAY", "https://www.youtube.com/embed/1Q8fG0TtVAY"],
            "assignments": ["assignment1.pdf, assignment2.pdf, assignment3.pdf"],
            "video_Titles": ["Video 1", "Video 2", "Video 3"],
            "video_Descriptions": ["Video 1 Description", "Video 2 Description", "Video 3 Description"],

        },
    ]

    return (
        <div className="CAPE">
            <h2>CAPE</h2>
            <div className="content">
                {/* map data */}
                {data.map((week, index) => {
                    return (
                        <div className="week">
                            
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0" className="accordion">
                                    <Accordion.Header className="header">{week.name}</Accordion.Header>
                                    <Accordion.Body className="body">
                                    {week.videos.map((video, index) => {
                                        return (
                                            <div className="acc-item">
                                                <iframe width="300" height="150" src={video} title={week.video_Titles[index]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                <div>
                                                <h3>{week.video_Titles[index]}</h3>
                                                <p>{week.video_Descriptions[index]}</p>
                                                </div>
                                            </div>
                                        )
                                    })}

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        
                            
                            <div className="assignments">
                                
                           
                            </div>
                            </div>

                    )})}


                

                
            </div>

        </div>
    );
}

export default CAPE;