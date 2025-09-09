import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaToolbox, FaBars, FaTimes } from "react-icons/fa";
import { MdMessage, MdMiscellaneousServices } from "react-icons/md";

import { Navbar, Nav, Container } from "react-bootstrap";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button> */}
      <Navbar expand="lg" className="sidebar" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav_colp" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="sidebar_list">
            <Nav.Link className="side_item">
              <Link to="/" className="side_link">
                <FaHome size={24} /> <span className="hover_label">Home</span>
              </Link>
            </Nav.Link>
            <Nav.Link className="side_item">
              <Link to="/about" className="side_link">
                <FaUser size={16} />
                <span className="hover_label">About</span>
              </Link>
            </Nav.Link>
            <Nav.Link className="side_item">
              <Link to="/portfolio" className="side_link">
                <FaToolbox size={19} />
                <span className="hover_label">Portfolio</span>
              </Link>
            </Nav.Link>
            <Nav.Link className="side_item">
              <Link to="/blogs" className="side_link">
                <MdMiscellaneousServices size={23} />
                <span className="hover_label">Blog</span>
              </Link>
            </Nav.Link>
            <Nav.Link className="side_item">
              <Link to="/contact" className="side_link">
                <MdMessage size={20} />
                <span className="hover_label">Contact</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Sidebar;
