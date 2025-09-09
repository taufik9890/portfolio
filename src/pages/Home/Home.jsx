import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Image, Spinner } from "react-bootstrap";
import pro_pic from "../../assets/images/pro_pic.jpg";
const Home = () => {
  const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("/about");
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader_div">
          <Spinner animation="grow" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Container>
          <Row className="home_part">
            <Col sm={12} lg={{ span: 5, offset: 1 }}  xxl={6}>
              <div className="header">
                <h1>I'm Taufik Mahbub</h1>
                <h2>Mern Stack Developer</h2>
                <p>
                  I'm a Bangladeshi based Mern Stack Developer. I've been
                  working as a Mern Stack Developer for 3 years. I'm a
                  passionate Full-Stack Web Developer specializing in the MERN
                  stack (MongoDB, Express.js, React, Node.js). I build robust,
                  scalable web applications with clean code, intuitive UI, and
                  seamless user experiences.
                </p>
                <div className="btn_design">
                  <a className="" onClick={() => gotoAbout()} href="">
                    More About Me <FaArrowRight />
                  </a>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={4} xxl={{ span: 5 }}>
              <div className="propic_container">
                <div className="home_propic">
                  <Image src={pro_pic} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Home;
