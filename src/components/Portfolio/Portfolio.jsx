import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import chossy_foddy from "../../assets/images/chossy_foddy.png";
import arche from "../../assets/images/arche.png";
import appon from "../../assets/images/appon.png";
import hunt from "../../assets/images/hunt.png";
import lamda from "../../assets/images/lamda.png";
import arf from "../../assets/images/arf.png";
import panda_commerce from "../../assets/images/panda_commerce.png";

const Portfolio = () => {
  return (
    <Container>
      <div className="portfolio_part">
        <Row className="portfolio_header_row">
          <Col xs={6}>
            <div className="portfolio_header">
              <h1>
                my <span>portfolio</span>
              </h1>
              <h2>Works</h2>
            </div>
          </Col>
        </Row>
        <Row className="port_img_row">
          <Col xs={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/chossy-foddy/index.html" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={chossy_foddy} />
              </a>
            </div>
          </Col>
          <Col xs={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/arche/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={arche} />
              </a>
            </div>
          </Col>
          <Col xs={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/appon/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={appon} />
              </a>
            </div>
          </Col>
          <Col xs={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/hunt/" rel="noopener noreferrer" target="_blank">
                <Image alt="hunt" loading="lazy" src={hunt} />
              </a>
            </div>
          </Col>
          <Col xs={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/lamda/#" rel="noopener noreferrer" target="_blank">
                <Image alt="lamda" loading="lazy" src={lamda} />
              </a>
            </div>
          </Col>
          <Col xs={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/arf/" rel="noopener noreferrer" target="_blank">
                <Image alt="arf" loading="lazy" src={arf} />
              </a>
            </div>
          </Col>
          <Col xs={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/panda_commerce/#" rel="noopener noreferrer" target="_blank">
                <Image alt="panda_commerce" loading="lazy" src={panda_commerce} />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Portfolio;
