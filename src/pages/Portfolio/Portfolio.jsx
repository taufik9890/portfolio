import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import chitchat from "../../assets/images/chitchat.jpg";
import natto from "../../assets/images/natto.png";
import chossy_foddy from "../../assets/images/chossy_foddy.png";
import gymnasium from "../../assets/images/gymnasium.png";
import jirvana from "../../assets/images/jirvana.png";
import innovate from "../../assets/images/innovate.png";
import arche from "../../assets/images/arche.png";
import qwery from "../../assets/images/qwery.png";
import ngo from "../../assets/images/ngo.png";
import waxom from "../../assets/images/waxom.png";
import agenc from "../../assets/images/agenc.png";
import appon from "../../assets/images/appon.png";
import hunt from "../../assets/images/hunt.jpg";
import holmberg from "../../assets/images/holmberg.png";
import lamda from "../../assets/images/lamda.png";
import alex from "../../assets/images/alex.png";
import arf from "../../assets/images/arf.png";
import panda_commerce from "../../assets/images/panda_commerce.png";
import client_site from "../../assets/images/client_site.png";
import server_site from "../../assets/images/server_site.png";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>
      setLoading(false), 1000
    )
  },[])
  return (
    <>{
      loading? (<div className="loader_div">
        <Spinner animation="grow" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>)
      : (
        <Container>
      <div className="portfolio_part">
        <Row className="portfolio_header_row">
          <Col xs={12}>
            <div className="portfolio_header">
              <h1>
                my <span>portfolio</span>
              </h1>
              <h2>Works</h2>
            </div>
          </Col>
        </Row>
        <Row className="portfolio_header_row">
          <Col xs={12}>
            <div className="portfolio_header">
                  <h4>Full Stack E-comerce Project</h4>
            </div>
          </Col>
        </Row>
         <Row className="port_img_row">
          <Col xs={6} lg={6}>
            <div className="port_img_full">
              <a href="https://fullstack-mernian-2204-rxs6.vercel.app/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={client_site} />
                <div className="overlay">
                  <p>Client Side <FaLink /></p>
                </div>
              </a>
            </div>
          </Col>
          <Col xs={6} lg={6}>
            <div className="port_img_full">
              <a href="https://fullstack-mernian-2204-srha.vercel.app/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={server_site} />
                <div className="overlay">
                  <p>Server Side <FaLink /></p>
                </div>
              </a>
            </div>
          </Col>
          </Row>
          <Row className="portfolio_header_row">
          <Col xs={12}>
            <div className="portfolio_header">
                <h4>Front End Projects</h4>
            </div>
          </Col>
        </Row>
        <Row className="port_img_row">
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://chitchatfinal.vercel.app/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={chitchat} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://nattofinal.vercel.app/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={natto} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/chossy-foddy/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={chossy_foddy} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/Jirvana/" rel="noopener noreferrer" target="_blank">
                <Image alt="jirvana" loading="lazy" src={jirvana} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/gymnasium/" rel="noopener noreferrer" target="_blank">
                <Image alt="gymnasium" loading="lazy" src={gymnasium} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/innovate/" rel="noopener noreferrer" target="_blank">
                <Image alt="innovate" loading="lazy" src={innovate} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/arche/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={arche} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/ngo/" rel="noopener noreferrer" target="_blank">
                <Image alt="ngo" loading="lazy" src={ngo} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/waxom/" rel="noopener noreferrer" target="_blank">
                <Image alt="waxom" loading="lazy" src={waxom} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/agenc/" rel="noopener noreferrer" target="_blank">
                <Image alt="agenc" loading="lazy" src={agenc} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/appon/" rel="noopener noreferrer" target="_blank">
                <Image alt="chossy_foddy" loading="lazy" src={appon} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/qwery/" rel="noopener noreferrer" target="_blank">
                <Image alt="qwery" loading="lazy" src={qwery} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/hunt/" rel="noopener noreferrer" target="_blank">
                <Image alt="hunt" loading="lazy" src={hunt} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/holmberg/#" rel="noopener noreferrer" target="_blank">
                <Image alt="holmberg" loading="lazy" src={holmberg} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/lamda/#" rel="noopener noreferrer" target="_blank">
                <Image alt="lamda" loading="lazy" src={lamda} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/alex/" rel="noopener noreferrer" target="_blank">
                <Image alt="alex" loading="lazy" src={alex} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/arf/" rel="noopener noreferrer" target="_blank">
                <Image alt="arf" loading="lazy" src={arf} />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={4}>
            <div className="port_img">
              <a href="https://taufik9890.github.io/panda_commerce/#" rel="noopener noreferrer" target="_blank">
                <Image alt="panda_commerce" loading="lazy" src={panda_commerce} />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
      )
    }
    
    
    </>
    
  );
};

export default Portfolio;
