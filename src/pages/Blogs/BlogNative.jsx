import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import nativeexpo from "../../assets/images/nativeexpo.png";
import dlp from "../../assets/images/dlp.png";
import ccvd from "../../assets/images/ccvd.png";

const BlogNative = () => {
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
            <Row className="blognative_img_row">
              <Col xs={8}>
              <div className="blognative_header">
                <h3>
                  Apps I have developed and maintained while working for Ct
                  Health
                </h3>
              </div>
                <div className="blognative_img">
                  <Image alt="chossy_foddy" loading="lazy" src={nativeexpo} />
                  <div className="blognativext">
                    <p>
                      During my time at the company, I independently developed
                      the front-end of four React Native mobile applications.
                      The UI designs were provided to me via Figma by our design
                      team, and I was responsible for implementing them into
                      fully functional front-end applications using React
                      Native. As I have since left the company, these projects
                      are still under development, and I no longer hold the
                      authority to showcase them publicly.
                      <br/>
                      <br/>
                         <span>BNDR Patients App</span> – A patient-facing application that
                          allows users to directly connect with doctors through
                          a streamlined call-to-action interface. This was
                          developed as a companion app to the already published
                          BNDR Doctor’s app.
                        <br/>
                      <br/>
                          <span>Ibrahim Doctor’s App</span> – A dedicated platform for
                          diabetic doctors, enabling direct communication and
                          interaction with patients through call-to-action
                          features.
                        <br/>
                      <br/>
                          <span>Ibrahim Appointment Keeper App</span> – An application
                          designed to simplify the appointment process by
                          allowing patients to directly contact appointment
                          keepers and schedule consultations with doctors.
                        <br/>
                      <br/>
                          <span>Ibrahim Ambulance Provider App</span> – A service-oriented
                          application inspired by the Uber model, enabling
                          patients to view available ambulances in real time,
                          book one instantly, and receive location-based
                          assistance.
                    </p>
                    {/* <p>I made 4 React Native apps that were all front end. I made all of them myself. Our UI designer provided me with the design in figma and I completed the front end developement with the React Native. Since I left the company these apps were still in developement and also provided them the authority. So I really don't have the authority to show them here.</p>
                    <p>first app was BNDR Patients app. the Doctor's app have been already published so I was doing the patients. It's a call to action app where patients can directly call the doctors</p>
                    <p>Second app was Ibrahim Cardiac Doctor's app. It's a call to action app where patients can directly call the doctors</p>
                    <p>Third app was Ibrahim Cardiac Appointment Keeper app. It's a call to action app where patients can directly call the Appointment Keeper and Appoint for the doctor</p>
                    <p>Fourth app was Ibrahim Cardiac Ambulance Provider app. It's a call to action app as well as an Ambulance Provider where patients can directly map out the available ambulances and appoint one. It's more like an Uber inspired app. I got my main inspiration from Uber</p> */}
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

export default BlogNative;
