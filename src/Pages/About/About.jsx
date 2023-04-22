import React from "react";
import "./About.css";
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
    return (
        <div className="about">
            <h2>About</h2>
            
            <h3>Mission</h3>
            <p>We aim to reduce inequities in the hiring process and celebrate diversity throughout the workforce</p>
            <h3>The Problem</h3>
            <p>Personal branding services don't offer full customization for diverse backgrounds</p>
            <h3>Our Team</h3>
            
            <Carousel
                interval={null}
                controls={true}
                indicators={false}
                className="carousel"
                // remove space between cards
                


                 >
            
            <Carousel.Item>
        
             
                <div class="cards-wrapper">
                <div class="card">
                    <img src="https://media.licdn.com/dms/image/D5603AQFA_u1oScXWzA/profile-displayphoto-shrink_400_400/0/1681465373134?e=1687392000&v=beta&t=THzTXgO92eA_kMPvDEMEA5T3EnbybZ4WQFBNFfZObeA" class="card-img-top" alt="Elisa Carrillo"/>
                    <div class="card-body">
                    <h5 class="card-title">Elisa Carrillo</h5>
                    <p class="card-text">Founder and Team Lead</p>
                    {/* <a href="https://queenellie873.com" class="btn btn-primary">Go to her Personal Portfolio</a> */}
                    </div>
                </div>
                <div class="card">
                    <img src="https://media.licdn.com/dms/image/C4E03AQEd9o8nNm7j0w/profile-displayphoto-shrink_400_400/0/1627666596476?e=1687392000&v=beta&t=HBHbFK2yJr7aOcfGF_OTbvU4fB1EYvAN_6jbIr5ikSo" class="card-img-top" alt="Jacob Shalabi"/>
                    <div class="card-body">
                    <h5 class="card-title">Jacob Shalabi</h5>
                    <p class="card-text">Software Team Lead</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                </div>
                
                
            </Carousel.Item>
            
            <Carousel.Item>
                {/* <img
                className="d-block w-100"
                src="https://media.licdn.com/dms/image/D5603AQFA_u1oScXWzA/profile-displayphoto-shrink_400_400/0/1681465373134?e=1687392000&v=beta&t=THzTXgO92eA_kMPvDEMEA5T3EnbybZ4WQFBNFfZObeA"
                alt="Second slide"
                /> */}

                <div class="cards-wrapper">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                
                
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
                

                <div class="cards-wrapper">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                

                <div class="cards-wrapper">
                <div class="card">
                    <img src="..." class="card-img-top" alt="Elisa Carrillo"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.queenellie873.com" class="btn btn-primary">Go to her portfolio</a>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
            </Carousel.Item>
            </Carousel>
            
        </div>
    );
}

export default About;