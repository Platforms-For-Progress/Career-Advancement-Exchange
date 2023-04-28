import React from "react";
import './Links.css';
import { BsTiktok } from 'react-icons/bs';
import image from './Asset 2.png';
const Links = () => {
    return (
        
        <div className="links">
            {/* <h1>Links</h1> */}
            <img src={image} alt="Logo" />
            <h1 className="h1">Career Advancement Exchange</h1>
            <p className="link-ele" onClick={()=>window.location.href ="https://forms.gle/eNHYtbormAFV4Cdc7" }><i class="uil uil-comment-info"></i><a href="https://forms.gle/eNHYtbormAFV4Cdc7">Info Session</a></p>
            <p className="link-ele" onClick={()=>window.location.href ="https://www.linkedin.com/company/career-advancement-exchange" }><i class="uil uil-linkedin"></i><a href="https://www.linkedin.com/company/career-advancement-exchange">LinkedIn</a></p>
            <p className="link-ele" onClick={()=>window.location.href ="https://www.instagram.com/caexchange/" }><i class="uil uil-instagram"></i><a href="https://www.instagram.com/caexchange/">Instagram</a></p>
            <p className="link-ele" onClick={()=>window.location.href ="https://www.tiktok.com/@caexchange"}><BsTiktok className="FaTiktok"/><a href="https://www.tiktok.com/@caexchange">TikTok</a></p>
            
        </div>
    
    );
}

export default Links;