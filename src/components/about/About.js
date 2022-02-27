import React from 'react'
import './about.css'
import ME from '../../assets/img22.png'
import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
     <section id="about">

         {/* <h5 >Get To Know</h5> */}
         <h2>About Me</h2>
        
         <div className='container  about__container'>
          {/* <div className='about__me'>
            </div> */}
          <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                           <FiAward className='about__icon'/>
                          <h5>Experience in front end developer</h5>
                          <small>1+ years working</small>
                    </article>

                    <article className='about__card'>
                           <VscFolderLibrary className='about__icon'/>
                          <h5>Educatoin</h5>
                          <small>Mechatronics Enginner</small>
                    </article>
                   
                    <article className='about__card'>
                           <VscFolderLibrary className='about__icon'/>
                          <h5>projects</h5>
                          <small>6+ completed</small>
                    </article>

                </div>
                {/* <p></p> */}
                {/* <a href="#contact" className='btn btn-primary mt-2 link'>Let's Talk</a> */}
          </div>
        </div>
     </section>
  )
}

export default About