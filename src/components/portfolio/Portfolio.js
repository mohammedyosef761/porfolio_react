import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/mobile2.png';
import IMG2 from '../../assets/food.png';
import IMG3 from '../../assets/Cloths1.png';
import IMG4 from '../../assets/Crud.png';
import IMG5 from '../../assets/library.png';
import IMG6 from '../../assets/robot.png';
import IMG7 from '../../assets/portfolio.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>My recent Work</h5> */}
      <h2>Portfolio</h2>
      <div className='container'>
      <div className='portfolio__container'>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={IMG1} alt=""/>
            <h3>Eccomarace Mobiles App</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/mohammedyosef761/Profetional_Eccomarace_webSite" className='btn btn-danger' target="_blank">Github</a>
            <a href="https://eccomarace-website.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </div>

        </article>
 
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
           <img src={IMG2} alt=""/>
            <h3>Eccomarace Foods App </h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/mohammedyosef761/my_react_app" className='btn btn-danger' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </div>

        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
           <img src={IMG3} alt=""/>
            <h3>Eccomarace Cloths app </h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/mohammedyosef761/Shopping_Cloths_App" className='btn btn-danger' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </div>

        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
           <img src={IMG4} alt=""/>
            <h3>Crud Api Posts</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/mohammedyosef761/CRUD-API" className='btn btn-danger' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </div>

        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
           <img src={IMG7} alt=""/>
            <h3>My Portfolio</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/mohammedyosef761/" className='btn btn-danger' target="_blank">Github</a>
            <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </div>

        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
           <img src={IMG5} alt=""/>
            <h3>Librart Managment Books with oop c++</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/mohammedyosef761/Libaray_management_book" className='btn btn-danger' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </div>

        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
           <img src={IMG6} alt=""/>
            <h3>Line follong robot with Arduino and c++</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn btn-danger' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </div>

        </article>

       


        </div>
      </div>
    </section>
  )
}

export default Portfolio