import NavigationBar from "../../components/Navbar/Navbar";
import Icons from '../../components/Icons/Icons';

function Projects()  {
    return(
    <div className="body-container">
          <NavigationBar/>
          <div className='center' style={{ display: 'flex', alignItems: 'center' }}>
          <h1>My</h1>
          <h1 className='bl-c'>Projects</h1>
          </div>
          <div className="division">
          <h1 className="heading">Gadget-Trade-Hub</h1>
          <p className="wt-c t-center">We've put together a cool collection of JavaScript projects
              that are perfect for beginners. We used HTML, CSS,
              Bootstrap, and JavaScript to create them</p> 
          <p className="wt-c  t-center">
          Source code with project demo is provided.You can actually
see the code and check out how everything works with our
project demos. It's a great way to learn and have some fun!
          </p>

          <p className="wt-c  t-center">
          In today's world, gadgets like smartphones, laptops,
smartwatches, and home assistants have completely
changed the way we live, work, and communicate. It's pretty
fascinating to see how technology has transformed our daily
lives, right?"
          </p >
          <h3 className="wt-c mx-3">Source Code</h3>
         
          <a className=" mx-5 link" href="https://gadget-trade-hub.netlify.app/">LINK HERE</a>
         
          </div>





          <div className="division">
          <h1 className="heading">Personal Portfolio</h1>
          <p className="wt-c t-center ">This is my personal Portfolio the one which your in now . </p> 
          <h3 className="wt-c mx-3">Source Code</h3>
         
          <a className="mx-5 link" href="https://alfesh.netlify.app">LINK HERE</a>
         
          </div>
          <Icons/>
    </div>
    )
  };
  
export default Projects ;
