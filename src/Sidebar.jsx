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
            <Link to="/" className='side_link' >< FaHome  size={24}/></Link>
          </li>
          <li className='side_item'>
            <Link to="/about" className='side_link' ><FaUser size={19} /></Link>
          </li>
          <li className='side_item'>
            <Link to="/portfolio" className='side_link' ><FaToolbox size={19} /></Link>
          </li>
          <li className='side_item'>
            <Link to="/portfolio" className='side_link' ><MdMiscellaneousServices size={23} /></Link>
          </li>
          <li className='side_item'>
            <Link to="/portfolio" className='side_link' ><MdMessage size={20} /></Link>
          </li>
        </ul>
      </nav> 
    </div>
  )
}

export default Sidebar
