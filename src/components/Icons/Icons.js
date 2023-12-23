// Icons.js
import React from 'react';
import './Icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub , faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Icons = () => {

  const whatsappNumber = '+919834896944';

  return (
    <div className='center fs-4 p-5 footer'>
      <a className='mx-2' href="https://www.instagram.com/alfeshabdul__/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a className='mx-2' href="https://www.facebook.com/alfesh.a.r" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a className='mx-2' href="https://www.linkedin.com/in/alfesh-abdul-659951222/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className='mx-2' href="https://github.com/alfeshabdul" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className='mx-2' href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default Icons;
