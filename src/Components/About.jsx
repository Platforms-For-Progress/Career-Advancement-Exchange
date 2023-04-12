import { TypeAnimation } from 'react-type-animation';
import './About.css';
import logo from '../img/CAEResize.png';
import React from 'react';
const About = () => {
  return (
    <div className="abouts">
    <TypeAnimation
      sequence={[
        'About Us', // Types 'One'
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '2em', cursor: false }}
    />
    <div className="sectionOneAbout">
    <div className='lside'>
    <p>At Career Advancement Exchange, we are a small but dedicated team of professionals committed to helping you achieve your career goals. We understand that finding employment can be a challenging process, especially for groups that have traditionally been underrepresented in the workforce. That's why we've created a personalized platform that showcases your unique talents and experiences, making it easier for you to connect with potential employers and maximize your employment opportunities.</p>

    <p>Our team works tirelessly to provide you with the tools and resources you need to succeed. We take pride in delivering exceptional service and support to our clients, and we are committed to helping you every step of the way. Whether you're just starting out in your career or looking to make a change, we are here to help.</p>
    <p>At Career Advancement Exchange, we believe that everyone deserves an equal shot at career advancement. We're passionate about creating opportunities for groups that have traditionally been overlooked or marginalized in the workforce, and we're dedicated to helping you achieve your full potential. With our personalized approach and dedicated team, we're confident that we can help you achieve your career goals.</p>
    </div>

    <div className='rside'>
      <img src={logo} alt='About Us' />
      </div>
      </div>
      <h3>Mission Statement</h3>
      <p>Career Advancement Exchange aims to help groups traditionally underrepresented in the workforce to gain employment by showcasing their talents and experiences through a personalized website in order to maximize employment based on skill level.</p>

      <h3>Personalized Portfolio Websites</h3>
      <p>A personalized portfolio website is a website that showcases an individual's work, skills, and achievements in a visually appealing and organized manner. The website is designed to create a unique and personalized experience for the user, reflecting their individual style and brand.</p>

      <p>The homepage of a personalized portfolio website typically includes an introduction of the owner and their mission statement, as well as a preview of their most recent work. The website is often divided into different sections, such as "About Me," "Portfolio," "Resume," and "Contact."</p>
      <p>The "About Me" section provides a brief overview of the owner's background, experience, and education. This section may also include a personal statement or message from the owner, describing their passions and values.</p>

      <p>The "Portfolio" section is the main focus of the website, showcasing the owner's best work. This section may be organized by project type, date, or category, and can include images, videos, and descriptions of each project. The portfolio should demonstrate the owner's expertise in their field and their ability to deliver high-quality work.</p>

      <p>The "Resume" section is where the owner can provide more detailed information about their education, work experience, and skills. This section may include a downloadable PDF of their resume, as well as links to their social media profiles and other online presence.</p>

      <p>Finally, the "Contact" section is where potential clients, employers, or collaborators can reach out to the owner. This section may include a contact form, email address, phone number, or other ways to get in touch.</p>

      <h3>Our Team</h3>
      <p>Our team is made up of a diverse group of professionals with a wide range of skills and experience. We are passionate about helping others achieve their career goals, and we are committed to providing exceptional service and support to our clients. We take pride in our work, and we are dedicated to helping you every step of the way.</p>
      
      <div className='section2'>
      <div className='rside'>
      <img className = 'img2' src='https://media.licdn.com/dms/image/D5603AQHyqqAsXNQagw/profile-displayphoto-shrink_400_400/0/1678039342877?e=1684972800&v=beta&t=ef7VOU_9iNiBx5GnniZDOFdgO63BpIyDQo4MIPXWaK4' alt='Elisa Carrillo' width={100}/>
      </div>
      <div className='lside'>
      <h4>Elisa Carrillo</h4>
      <h6>President</h6>
      <p>Elisa Carrillo is the founder of Career Advancement Exchange. She is a passionate advocate for equal employment opportunities and is dedicated to helping groups traditionally underrepresented in the workforce to gain employment. She is committed to providing exceptional service and support to her clients, and she is dedicated to helping them achieve their career goals.</p>
      </div>
      
      </div>
      <div className='section2'>
      <div className='rside'>
      <img className = 'img2' src='https://media.licdn.com/dms/image/C4E03AQEd9o8nNm7j0w/profile-displayphoto-shrink_400_400/0/1627666596476?e=1684972800&v=beta&t=7_F2EBu_wMF7Dy6NgQyooqq9gdSwft8iSslb2Hg4hO8' alt='Jacob Shalabi' width={100}/>
      </div>
      <div className='lside'>
      <h4>Jacob Shalabi</h4>
      <h6>Vice President</h6>
      <p>Jacob Shalabi is a software engineer and web developer with a passion for creating innovative solutions to complex problems. He is committed to providing exceptional service and support to his clients, and he is dedicated to helping them achieve their career goals. He specializes in Database Design and Implementation as well as Cloud Computing services.</p>
      </div>
      </div>

      <div className='section2'>
      <div className='rside'>
      <img className = 'img2' src='https://media.licdn.com/dms/image/D5603AQHwC6fCaleCAw/profile-displayphoto-shrink_400_400/0/1675215503794?e=1684972800&v=beta&t=23Fw8TrtsQYsR11HVjuJG-UvTgBepaPlgr93fnwhqYo' alt='Laiba Khan' width={100}/>
      </div>
      <div className='lside'>
      <h4>Laiba Khan</h4>
      <h6>Treasurer</h6>
      <p>Laiba Khan is a software engineer and web developer with a passion for creating innovative solutions to complex problems. She specializes in form creation and is currently working on learning more about Cloud Services.</p>
      </div>
      </div>
      
      <div className='section2'>
      <div className='rside'>
      <img className = 'img2' src='https://media.licdn.com/dms/image/D4E03AQGEdNsxv4LwyQ/profile-displayphoto-shrink_400_400/0/1666226773851?e=1684972800&v=beta&t=ZNx5Ww1xHomzJGESuCNTkYQXPE1MZspBmMNPV0cTpIc' alt='Maryam Khatoon' width={100}/>
      </div>
      <div className='lside'>
      <h4>Maryam Khatoon</h4>
      <h6>Secretary</h6>
      <p>Maryam Khatoon is a software engineer and web developer with a passion for creating innovative solutions to complex problems. She is currently learning more about creating React Applications and Web Design.</p>
      </div>
      </div>

      <div className='section2'>
      <div className='rside'>
      <img className = 'img2' src='https://media.licdn.com/dms/image/C5603AQFsEbARwU9IQw/profile-displayphoto-shrink_400_400/0/1659336257561?e=1684972800&v=beta&t=VU_9_8UMna7eoWJ4YaZ0NUgpsUcJ3DRr1oFF2DMesxo' alt='Siddhant Wanjara' width={100}/>
      </div>
      <div className='lside'>
      <h4>Siddhant Wanjara</h4>
      <h6>Membership Director</h6>
      <p>Siddhant Wanjara is a software engineer and web developer with a passion for creating innovative solutions to complex problems. He is currently working on creating new features on CAE's Website.</p>
      </div>
      </div>

    </div>
  );
};
export default About;