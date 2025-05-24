import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  const gotoAbout = ()=>{
    navigate('/about')
  }

  return (
    <Container>
      <Row>
        <Col xs={6}>1 of 1</Col>
        <Col xs={6}>
          <div className="header">
            <h1>I'm Taufik Mahbub</h1>
            <h2>Mern Stack Developer</h2>
            <p>
              I'm a Bangladeshi based Mern Stack Developer. I've been working as
              a Mern Stack Developer for 3 years. I'm a passionate Full-Stack
              Web Developer specializing in the MERN stack (MongoDB, Express.js,
              React, Node.js). I build robust, scalable web applications with
              clean code, intuitive UI, and seamless user experiences.
            </p>
            <div className="btn_design">

            <a className="" onClick={()=>gotoAbout()} href="">More About Me <FaArrowRight /></a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
