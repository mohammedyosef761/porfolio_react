import React from 'react'
import ME from '../../assets/img22.png';
import './header.css'
import CV from '../../assets/cv.pdf'

const Header = () => {
  return (
    <div className='container header__img d-flex'>
    <img src={ME} alt="my image" />
    <div className='text'>
    <h2 className='text-primary'>I am mohammed yosef </h2>
     <h1 className='text-danger'>I am Mechatronics Engineer and front end developer</h1>
     <div className='cta'>
           <a href={CV} download className='btn btn-danger p-4'>Download CV</a>
           <a href="#contact" className='btn btn-primary p-4'>Let's Talk</a>
    </div>
     </div>
    </div>
  )
}

export default Header