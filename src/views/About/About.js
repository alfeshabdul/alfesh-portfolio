import React from 'react';
import pic from '../../images/pic.jpg.png';
import NavigationBar from '../../components/Navbar/Navbar';
import Icons from '../../components/Icons/Icons';

function About() {
  return (
    <div className="body-container">
      <NavigationBar />
      <div className="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1> About<span className='bl-c'>Me</span></h1>

        <img style={{ width: '300px', height: '300px'}} src={pic} alt="" />

        <h2>FULL STACK WEB DEVELOPER</h2>
        <p className="center">
          Hello, I'm Alfesh Abdul. Nice to meet you. I am a Full Stack Web Developer by profession, skilled in Web Designing,
          and proficient with ReactJS.
        </p>

        <Icons />
      </div>
    </div>
  );
}

export default About;
