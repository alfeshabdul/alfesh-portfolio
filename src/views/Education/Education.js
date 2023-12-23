import NavigationBar from "../../components/Navbar/Navbar";
import Icons from '../../components/Icons/Icons';

function Education()  {
    return(
        <div className="body-container">
            <NavigationBar/>
            <div className='center' style={{ display: 'flex', alignItems: 'center' }}>
            <h1>My</h1>
            <h1 className='bl-c'>Education</h1>
            </div>
            
            <div className="division">
            <h1 className="heading">Graduation</h1>
            <p className="  wt-c "> Collage :- JADHAV RADHABAI DEGREE COLLAGE   </p>
            <p className="  wt-c "> Stream :- Bachelor of Commerce   </p>
            <p className=" wt-c  "> Batch :- 2023 | Passed Out   </p>
            </div>
            <div className="division">
            <h1 className="heading">Collage</h1>
            <p className="   wt-c">Name :- Mount Science Junior Collage</p>
            <p className="   wt-c">Stream :- Computer Science (C.S)</p>
            <p className="   wt-c">Batch :- 2017-19 </p>
            </div>
            <div className="division">
            <h1 className="heading">School</h1>
            <p className="   wt-c"> Name :-    Laxmikanttaya Public School , Ankisa </p>
            <p className="   wt-c"> Batch :-    2017 || Passed Out</p>
            <p className="   wt-c"> Percentage :-   78%</p>
            </div>
           
            <Icons/>
        </div>
    )
  };
  
export default Education ;
