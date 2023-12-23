import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/Navbar/Navbar';
import Icons from '../../components/Icons/Icons';
import './Chat.css'

const Chat = () => {
  const [conversation, setConversation] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    
    setConversation([
      { role: 'bot', text: <span className='m-heading fs-5 m-l'>' Hello am AR your personal assistant. Please choose an option below to more about know about <b className='heading '>Alfesh'</b></span> },
      { role: 'bot', text: 'Press 1. My Name.' },
      { role: 'bot', text: 'Press 2. My Education.' },
      { role: 'bot', text: 'Press 3. My projects.' },

    ]);
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;


    let response;
    switch (userInput) {
      case '1':
        response = "My name is Alfesh Abdul Azeem.";
        break;
      case '2':
        response = "I am graduated in Sept , 2023 to know more please check the Education Page.";
        break;
      case '3':
        response = "I have worked on various projects, like E-commercer Website ,Cafe Website , Personal Portfolio etc ..to know more please check the Project page";
        break;
      

      default:
        response = "I'm sorry, I didn't understand that option , please check the Digit you entered.";
    }

    
    setConversation([...conversation, { role: 'user', text: userInput }, { role: 'bot', text: response }]);
    setUserInput('');
  };

  return (
    <div className= 'fit-bg'>
      <NavigationBar/>
      <h1 className='m-heading px-3 mx-5'>Assistant<span className='heading bl-c '> AR Bot</span></h1>
      
      <div className='wt-c' >
        {conversation.map((message, index) => (
          <div className='division' key={index} >
            <span className=''>
              {message.text}
            </span>
          </div>
        ))}
      </div>

  <div className='text-center'>
  <input 
    className='px-4 mt-3'  
    style={{
      background: 'rgba(0, 0, 255, 0)',
      borderRadius: '15px',
      borderColor: '#00aaff',
    }} 
    type="text" 
    value={userInput} 
    onChange={handleUserInput} 
  />
  <br />
  <button 
    className='btn btn-outline-primary px-4 mt-3' 
    onClick={handleSendMessage}>
    Send
  </button>
  <Icons/>
</div>

      
    </div>
  );
};

export default Chat;
