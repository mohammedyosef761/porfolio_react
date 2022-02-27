
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ypm931q', 'template_wf6w9lu', form.current, 'user_f8iyWbfLcYMKpMkZSwZF8');
    e.target.reset();
      };
  return (
    <section id="contact">
      {/* <h5>Get In Touch</h5> */}
      <h2>Contact Me</h2>

      <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h6>mohammedyosef712@gmail.com</h6>
        <a href="mohammedyosef712@gmail.com" target="_blank" className='btn btn-danger'>Send a message</a>
      </article>

      <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+963938135761</h5>
        <a href="https://api.whatsapp.com/send?phone=+963938135761" target="_blank" className='btn btn-danger'>Send a message</a>
      </article>
      </div>
      {/* End Of Contaction */}

      <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='your full name' required />
            <input type="email" name="email" placeholder='Your email' required/>
            <textarea name="message"   rows="7" placeholder="your Message" required >
            </textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact