import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../../images/pic.jpg.png'
import NavigationBar from '../../components/Navbar/Navbar';
import Icons from '../../components/Icons/Icons';
// import Chat from '../Chat/Chat';

import { Link } from 'react-router-dom';


function Home () {
    return(
      
      <div className='body-container'>
         <NavigationBar/>
        
        <div className='content-container'>
         <div className='text-content'>
         
         <h1>Hi, I'm Alfesh Abdul </h1>
         <h2>Web Developer | Designer </h2>
    

         <p className='para'>"I am a versatile web developer with a keen eye for design. My skills extend beyond coding, as I bring a designer's perspective to my work. With a strong aptitude for learning, I continuously strive to expand my knowledge and stay updated with the latest industry trends. I have successfully completed various projects and have valuable experience collaborating with teams on GitHub. I am passionate about creating functional and visually appealing web solutions and look forward to contributing to innovative projects in the future."</p>
         <Link className='btn btn-outline-primary mx-2' to='/mail-me' >Mail me</Link>
         <Link className='btn btn-outline-primary' to='/chat' >Lets Talk</Link>
         </div>
         <img src={pic}  alt='' className="image flex" />
         
         </div>
      
         <Icons/>

      </div>
        )

}

export default Home