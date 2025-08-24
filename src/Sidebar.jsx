import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaToolbox } from "react-icons/fa";
import { MdMessage, MdMiscellaneousServices } from "react-icons/md";

const Sidebar = () => {

  
  return (
    <div className='sidebar' >
      <nav >
        <ul className='sidebar_list'>
          <li className='side_item' >
            <Link to="/" className='side_link' >< FaHome  size={24}/> <span className='hover_label'>Home</span></Link>
          </li>
          <li className='side_item'>
            <Link to="/about" className='side_link' ><FaUser size={16} /><span className='hover_label'>About</span></Link>
          </li>
          <li className='side_item'>
            <Link to="/portfolio" className='side_link' ><FaToolbox size={19} /><span className='hover_label'>Portfolio</span></Link>
          </li>
          <li className='side_item'>
            <Link to="/portfolio" className='side_link' ><MdMiscellaneousServices size={23} /><span className='hover_label'>Blog</span></Link>
          </li>
          <li className='side_item'>
            <Link to="/contact" className='side_link' ><MdMessage size={20} /><span className='hover_label'>Contact</span></Link>
          </li>
        </ul>
      </nav> 
    </div>
  )
}

export default Sidebar
