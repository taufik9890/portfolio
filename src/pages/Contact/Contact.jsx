import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { HiMailOpen } from "react-icons/hi";
import {
  FaPhoneSquareAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const { Formik } = formik;

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().required().email(),
  });

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
          <div className="contact_part">
            <Row className="contact_header_row">
              <Col xs={12}>
                <div className="contact_header">
                  <h1>
                    Get in <span>touch</span>
                  </h1>
                  <h2>Contact</h2>
                </div>
              </Col>
            </Row>
            <Row className="contact_row">
              <Col xs={12} lg={{span:5, offset:1}}>
                <div className="contact_left">
                  <h4>express your views !</h4>
                  <p>
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <div className="contact_info">
                    <HiMailOpen color="#72B626" size={45} />
                    <div className="contact_info_text">
                      <h5>mail me</h5>
                      <h6>taufik9890@gmail.com</h6>
                    </div>
                  </div>
                  <div className="contact_info">
                    <FaPhoneSquareAlt color="#72B626" size={41} />
                    <div className="contact_info_text">
                      <h5>call me</h5>
                      <h6>+8801632016137</h6>
                    </div>
                  </div>
                  <div className="contact_icon_row">
                    <a
                      href="https://github.com/taufik9890"
                      className="contact_icon"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaGithub size={18} color="#fff" />
                    </a>
                    <a
                      href="https://www.facebook.com/taufik.mahbub.1/"
                      className="contact_icon"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaFacebookF size={18} color="#fff" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/taufik-mahbub-086a11205/"
                      className="contact_icon"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaLinkedin size={18} color="#fff" />
                    </a>
                    <a
                      href="https://x.com/taufik9890"
                      className="contact_icon"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaXTwitter size={18} color="#fff" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={{span:6}}>
                <Formik
                  validationSchema={schema}
                  onSubmit={console.log}
                  initialValues={{
                    fullname: "",
                    subject: "",
                    email: "",
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row className="form_part mb-3">
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormik01"
                        >
                          <Form.Control
                            type="text"
                            name="fullname"
                            placeholder="Your Name"
                            className="custom_input"
                            value={values.fullname}
                            onChange={handleChange}
                            isInvalid={!!errors.fullname}
                            isValid={touched.fullname && !errors.fullname}
                            style={{
                              background: "#2B2A2A",
                              border: "none",
                              color: "#949392",
                              boxShadow: "none",
                              fontFamily: '"Poppins", sans-serif',
                              padding: "5px 10px",
                            }}
                          />

                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            {errors.fullname}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormik02"
                        >
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="custom_input"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            isValid={touched.email && !errors.email}
                            style={{
                              background: "#2B2A2A",
                              border: "none",
                              color: "#949392",
                              boxShadow: "none",
                              fontFamily: '"Poppins", sans-serif',
                              padding: "5px 10px",
                            }}
                          />

                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormik03"
                        >
                          <Form.Control
                            type="text"
                            name="subject"
                            placeholder="Your Subject"
                            className="custom_input"
                            value={values.subject}
                            onChange={handleChange}
                            isInvalid={!!errors.subject}
                            isValid={touched.subject && !errors.subject}
                            style={{
                              background: "#2B2A2A",
                              border: "none",
                              color: "#949392",
                              boxShadow: "none",
                              fontFamily: '"Poppins", sans-serif',
                              padding: "5px 10px",
                            }}
                          />

                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            {errors.subject}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <div className="btn_design">
                        <a
                          href="#"
                        >
                        Submit form
                           <SiMinutemailer />
                        </a>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default Contact;
