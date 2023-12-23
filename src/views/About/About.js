import pic from '../../images/pic.jpg.png'
import NavigationBar from "../../components/Navbar/Navbar";
import Icons from '../../components/Icons/Icons';


function About () {
    return(
        <div className="body-container ">
        <NavigationBar/>
        <div className='center' style={{ display: 'flex', alignItems: 'center' }}>
        <h1>About</h1>
        <h1 className='bl-c'>Me</h1>
        </div>

            <img  width="300px" src={pic} alt=''/>

            <h2>FULL STACK WEB DEVELOPER</h2>
            <p className='center'>Hello am Alfesh Abdul , nice to meet you . I am Web Developer by profession and good at Web Designing skills ,and am much comfortable with ReactJS </p>
          

        <Icons/>
        </div>
    
    )

  };

  export default About ;
  