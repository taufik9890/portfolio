import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import CountUp from "react-countup";
import "react-circular-progressbar/dist/styles.css";
import AnimatedCircularProgressbar from "../AnimatedCircularProgressbar/AnimatedCircularProgressbar";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Spinner } from "react-bootstrap";
const About = () => {
  const percentage = 60;
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
          <div className="about_part">
            <Row className="about_header_row">
              <Col xs={12}>
                <div className="about_header">
                  <h1>
                    About <span>Me</span>
                  </h1>
                  <h2>Resume</h2>
                </div>
              </Col>
            </Row>
            <Row className="about_info">
              <Col lg={6} xs={12}>
                <div className="about_left">
                  <h4>personal infos</h4>
                  <Row>
                    <Col xs={6} lg={5}>
                      <div className="about_info_left">
                        <h6>
                          First Name: <span>Taufik</span>
                        </h6>
                        <h6>
                          Last Name: <span>Mahbub</span>
                        </h6>
                        <h6>
                          Age: <span>27</span>
                        </h6>
                        <h6>
                          Nationality: <span>Bangladeshi</span>
                        </h6>
                        <h6>
                          Freelance: <span>Avaibility</span>
                        </h6>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="about_info_left">
                        <h6>
                          Address: <span>Sector - 14, Uttara, Dhaka</span>
                        </h6>
                        <h6>
                          Phone: <span>+8801632016137</span>
                        </h6>
                        <h6>
                          Email: <span>taufik9890@gmail.com</span>
                        </h6>
                        <h6>
                          GitHub:{" "}
                          <span>
                            <a
                              href="https://github.com/taufik9890"
                              target="_blank"
                            >
                              dev-taufik
                            </a>
                          </span>
                        </h6>
                        <h6>
                          Languages: <span>English, Bangla and Hindi</span>
                        </h6>
                      </div>
                    </Col>
                    <div className="btn_design">
                      <a
                        href="https://drive.google.com/file/d/1mdcX5Y5TxndkoMk2KPRtc3DEG7x_zqus/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV <FaDownload />
                      </a>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col lg={6} xs={12}>
                <Row className="about_info_right">
                  <Col xs={6} className="info_box">
                    <CountUp
                      start={0}
                      end={3}
                      duration={3}
                      separator=" "
                      decimal=","
                      suffix="+"
                      style={{
                        color: "#72B626",
                        fontSize: "60px",
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                      }}
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    ></CountUp>
                    <h4>Years of experience</h4>
                  </Col>
                  <Col xs={6} className="info_box">
                    <CountUp
                      start={0}
                      end={30}
                      duration={3}
                      separator=" "
                      decimal=","
                      suffix="+"
                      style={{
                        color: "#72B626",
                        fontSize: "60px",
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                      }}
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    ></CountUp>
                    <h4>Projects</h4>
                  </Col>
                  <Col xs={6} className="info_box">
                    <CountUp
                      start={0}
                      end={10}
                      duration={3}
                      separator=" "
                      decimal=","
                      suffix="+"
                      style={{
                        color: "#72B626",
                        fontSize: "60px",
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                      }}
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    ></CountUp>
                    <h4>Happy Customers</h4>
                  </Col>
                  <Col xs={6} className="info_box">
                    <CountUp
                      start={0}
                      end={22}
                      duration={3}
                      separator=" "
                      decimal=","
                      suffix="+"
                      style={{
                        color: "#72B626",
                        fontSize: "60px",
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 700,
                      }}
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    ></CountUp>
                    <h4>Technologies Mastered</h4>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="skills_part">
            <Row className="skill_header_row">
              <Col xs={6}>
                <div className="skills_header">
                  <h4>My Skills</h4>
                </div>
              </Col>
            </Row>
            <Row className="barRow">
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={85}
                  barText={"React Js"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={55}
                  barText={"Next Js"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={45}
                  barText={"Node Js"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={80}
                  barText={"React Native"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={50}
                  barText={"JavaScript"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={45}
                  barText={"Mongo DB"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={50}
                  barText={"Firebase"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={55}
                  barText={"Sql"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={45}
                  barText={"Redux"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={40}
                  barText={"Ajax"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={95}
                  barText={"React Bootstrap"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={95}
                  barText={"Bootstrap"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={70}
                  barText={"Tailwind"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={60}
                  barText={"Material UI"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={65}
                  barText={"Scss"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={90}
                  barText={"Css"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={95}
                  barText={"Html5"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={70}
                  barText={"GitHub"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={60}
                  barText={"Vercel"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={50}
                  barText={"Unfuddle"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={80}
                  barText={"Figma"}
                />
              </Col>
              <Col xs={6} sm={4} md={3} lg={2}>
                <AnimatedCircularProgressbar
                  targetPercentage={60}
                  barText={"Adobe Photoshop"}
                />
              </Col>
            </Row>
          </div>
          <div className="education_part">
            <Row className="education_header_row">
              <Col xs={6}>
                <div className="education_header">
                  <h4>education & experiences</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={{span:5, offset:1}}>
                <div className="education_main">
                  <div className="education_row">
                    <div className="education_logo">
                      <FaGraduationCap color="#fff" />
                    </div>
                    <div className="education_texts">
                      <h5>June 2016 - June 2020</h5>
                      <h4>
                        Computer Science & Engineering -{" "}
                        <span>Uttara University</span>
                      </h4>
                      <p>
                        I have completed my graduation from here. Learned a lot
                        about programming during this 4 year
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={{span:5, offset:1}}>
                <div className="education_main">
                  <div className="education_row">
                    <div className="education_logo">
                      <MdOutlineWorkHistory color="#fff" />
                    </div>
                    <div className="education_texts">
                      <h5>Nov 2021 - July 2023</h5>
                      <h4>
                        Web Designer - <span>A.R Family LLC</span>
                      </h4>
                      <p>
                        I was mainly working as a Front End Web Developer
                        remotely. I focused on Bootstrap, Html 5, Css and jQuery
                        while being in this company
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} md={6} lg={{span:5, offset:1}}>
                <div className="education_main">
                  <div className="education_row">
                    <div className="education_logo">
                      <FaGraduationCap color="#fff" />
                    </div>
                    <div className="education_texts">
                      <h5>July 2020 - Feb 2021</h5>
                      <h4>
                        Responsive Web Design - <span>Creative IT</span>
                      </h4>
                      <p>
                        I learned mostly about Html5, CSS3, Bootstrap 5, jQuery,
                        and little bit of Javascript
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={{span:5, offset:1}}>
                <div className="education_main">
                  <div className="education_row">
                    <div className="education_logo">
                      <MdOutlineWorkHistory color="#fff" />
                    </div>
                    <div className="education_texts">
                      <h5>Nov 2023 - Feb 2025</h5>
                      <h4>
                        Web Developer -{" "}
                        <span>CT Health LTD(Birdem, Badass Foundation)</span>
                      </h4>
                      <p>
                        I was innitially recruited for developing React Native
                        Apps and React Js web application for Front End
                        Developement. I solely developed these apps with my own
                        experience in React Js and React Native. Later I was
                        responsible for maintaining the Back-End and Databases
                        of several websites from the company.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={{span:5, offset:1}}>
                <div className="education_main">
                  <div className="education_row">
                    <div className="education_logo">
                      <FaGraduationCap color="#fff" />
                    </div>
                    <div className="education_texts">
                      <h5>Aug 2022 - Dec 2024</h5>
                      <h4>
                        Mern Stack Developement - <span>Creative It</span>
                      </h4>
                      <p>
                        This has been a long online course for me learning about
                        Basic web designing with Bootstrap, Tailwind, Material
                        UI, then We learned about React Js, Node Js, Express Js,
                        Mongo DB, Redux, React Native and many more. With major
                        projects like chatting application, Full-stack
                        eccomerce(still on production) and Full-stack social
                        media app(still on production)
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default About;
