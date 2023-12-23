
import React from 'react';
import Icons from '../../components/Icons/Icons';
import NavigationBar from '../../components/Navbar/Navbar';

const MailMe = () => {
  return (
    <div className='body-container'>
        <NavigationBar/>
      <h1 className='text-center'>Contact <span className='bl-c'>Me</span></h1>
      <p className='wt-c center'>
        If you have any questions or feedback, feel free to send me an email at{' '}
        <a href="alfeshabdul2002@gmail.com">alfeshabdul2002@gmail.com</a>.
        <Icons/>
      </p>
    </div>
  );
};

export default MailMe;
