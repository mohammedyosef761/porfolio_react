import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser}from 'react-icons/ai'
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {AiFillContacts} from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  return (
   <nav>
     <a href='#' className={activeNav ==='#'?'active':''} onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>
     <a href='#about' className={activeNav ==='#about'?'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
     <a href='#experience' className={activeNav ==='#experience'?'active':''} onClick={()=>setActiveNav('#experience')}><BiBook/></a>
     <a href='#portfolio' className={activeNav ==='#portfolio'?'active':''} onClick={()=>setActiveNav('#portfolio')}><RiServiceLine/></a>
     <a href='#contact' className={activeNav ==='#contact'?'active':''} onClick={()=>setActiveNav('#contact')}><AiFillContacts/></a>
   </nav>
  )
}

export default Nav