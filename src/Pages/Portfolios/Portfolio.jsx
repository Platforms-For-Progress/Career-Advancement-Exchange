import React from "react";
import './Portfolio.css';
const Portfolios = () => {
    return (
        <div className="portfolio">
        <h2>Portfolios</h2>
        <div className="portfolio-container">
            <div className="portfolio-card" >
                <div className="portfolio-card-content" >
                    <img src="https://media.licdn.com/dms/image/C4D03AQF-lkCTdhhocw/profile-displayphoto-shrink_400_400/0/1658766873246?e=1687392000&v=beta&t=SOqAb9kUiPBpn3M5J7eI98Q4PWUPYKUP1cxJFWFRF9A" alt="Elisa Carrillo"/>
                    <a href="https://clarisa-carrillo.web.app" class="btn btn-primary">Visit Her Portfolio</a>
                </div>
                <div className="portfolio-card-content-text">
                <h3>Clarisa Carrillo</h3>
                <p>Clarisa Carrillo is currently a Junior student at Emerson College majoring in Political Communications with a minor in Pre-Law and Dance. She is the President of the Communications, Politics and Law Association and a member of Emerson’s Urban Dance Theater. Additionally, she works in the Emerson Office of Intercultural Affairs and is a research assistant with Emerson College Polling. In her free time she loves to sing, dance, read and discover new places to eat!</p>
               
                </div>
                

                </div>
            </div>
        </div>
    );
    }
export default Portfolios;