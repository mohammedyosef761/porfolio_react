import React from 'react'
import './footer.css'
import {AiFillCopyrightCircle} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
    <div className='content'>
         <AiFillCopyrightCircle/> copyright  2021

         <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mohammed-yosef-a53060185/' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mohammedyosef761" target="_blank"><FaGithub/></a>
        <a href='https://www.facebook.com/profile.php?id=100009766150204' target="_blank"><FaFacebook/></a>
    </div>
    </div>
    </footer>
  )
}

export default Footer