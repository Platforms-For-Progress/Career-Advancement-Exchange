import React from "react";
import './Loading.css';
const Loading = () => {
    const goToLinkedIn = () => {
        window.location.href = "https://www.linkedin.com/company/career-advancement-exchange";
    }
    return (
        // <div className="loading scre">
        <div className="loading">
            <h1 onClick={goToLinkedIn}>Coming Soon</h1>
            {/* <p>Our team is working hard to bring you the best experience possible. Please check back soon!</p> */}
        </div>

    );
    }

export default Loading;