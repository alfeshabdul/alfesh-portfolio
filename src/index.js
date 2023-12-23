import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About  from './views/About/About';
import Projects  from './views/Projects/Projects';
import  Education from './views/Education/Education';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Chat from './views/Chat/Chat';
import MailMe from './views/Mail-me/Mail-me';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
"path": "/",
"element": <Home/>
    },
    {
        "path": "/about",
        "element": <About/>
        
     },
     {
        "path": "/projects",
        "element": <Projects/>
        
     },
     {
      "path": "/education",
      "element": <Education/>
      },
      {
         "path": "/chat",
         "element": <Chat/>
         },
         {
            "path": "/mail-me",
            "element": <MailMe/>
            }
])


root.render(<RouterProvider router={router} />);

