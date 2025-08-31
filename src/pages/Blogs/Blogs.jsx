import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import chitchat from "../../assets/images/chitchat.jpg";
import natto from "../../assets/images/natto.png";
import chossy_foddy from "../../assets/images/chossy_foddy.png";
import Card from "react-bootstrap/Card";
import coding from "../../assets/images/coding.jpg";
import react_native from "../../assets/images/react_native.jpg";
import { Link } from "react-router-dom";
const Blogs = () => {
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
          <div className="blog_part">
            <Row className="blog_header_row">
              <Col xs={6}>
                <div className="blog_header">
                  <h1>
                    my <span>blogs</span>
                  </h1>
                  <h2>Posts</h2>
                </div>
              </Col>
            </Row>
            <Row className="blog_img_row">
              <Col xs={4}>
                <Card className="blog_card">
                  <Link to="/blogdetails" className="card_image" >
                    <Card.Img
                      variant="top"
                      src={coding}
                      height={270}
                    />
                    <div className="overlay"></div>
                  </Link >
                  <Card.Body>
                    <h4>Websites I have maintained while working for Ct Health </h4>
                    <Card.Text>
                      <p>
                       In addition to Front-End development, I was responsible for maintaining the Back-End of several websites. I also implemented multiple key functionalities to improve performance, user experience, and overall efficiency.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className="blog_card">
                  <Link to="/blognative" className="card_image" >
                    <Card.Img
                      variant="top"
                      src={react_native}
                      height={270}
                    />
                    <div className="overlay"></div>
                  </Link>
                  <Card.Body>
                    <h4>Apps I have developed and maintained while working for Ct Health</h4>
                    <Card.Text>
                      <p>
                       I was innitially recruited for developing React Native Apps. I solely developed these apps with my own experience in React Js</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default Blogs;
