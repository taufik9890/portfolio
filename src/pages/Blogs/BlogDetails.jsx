import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import bndr from "../../assets/images/bndr.jpg";
import dlp from "../../assets/images/dlp.png";
import ccvd from "../../assets/images/ccvd.png";

const BlogDetails = () => {
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
            <Row className="blogdet_img_row">
              <div className="blogdet_header">
                <h3>Websites I have maintained while working for Ct Health</h3>
              </div>
              <Col xs={4}>
                <div className="blogdet_img">
                  <a
                    href="https://app.bndr-org.com.bd/login/type/user"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image alt="chossy_foddy" loading="lazy" src={bndr} />
                  </a>
                </div>
                <div className="blogdetxt">
                  <h4>BNDR</h4>
                  <p>
                    I worked on the country’s largest diabetes management web
                    application, a PHP-based platform serving over 650,000
                    patients nationwide. The system records and reports patient
                    statistics across all diabetes centers in the country. This
                    is a huge web application with a lot of functionalities in
                    it
                    <br />
                    <br />
                    Following the departure of the senior developer, I assumed
                    responsibility for these projects like BNDR, DLP, CCVD etc. My key contributions
                    included:
                    <br />
                    <br />
                    Developing and maintaining new features on the live PHP
                    <br />
                    <br />
                    Managing the SQL database to ensure accuracy, scalability,
                    and reliability.
                    <br />
                    <br />
                    Handling deployments and version control through Unfuddle.
                    <br />
                    <br />
                    Administering and troubleshooting on Linux servers to keep
                    the application stable and accessible.
                    <br />
                    <br />
                    This project demanded strong technical ownership and
                    problem-solving, as it was a mission-critical healthcare
                    solution used nationwide.
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="blogdet_img">
                  <a
                    href="https://www.dlpbadas-bd.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image alt="chossy_foddy" loading="lazy" src={dlp} />
                  </a>
                </div>
                <div className="blogdetxt">
                  <h4>DLP</h4>
                  <p>
                    I contributed to the maintenance and some development of an online examination platform (DLP), a large-scale PHP-based web application serving over 150,000 medical students nationwide. The platform provides a wide range of functionalities, including:
                    <br />
                    <br />
                    Distribution of educational resources such as PDFs and study materials.
                    <br />
                    <br />
                    Personalized student dashboards for tracking progress and activities.
                    <br />
                    <br />
                    A secure live examination system with integrated video monitoring for proctoring. Especially PCA and ECE examination
                    <br />
                    <br />
                    This project was a comprehensive solution designed to support digital learning and ensure the integrity of online assessments at scale.
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="blogdet_img">
                  <a
                    href="https://ccvd.ibrahimcardiac.org.bd/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image alt="chossy_foddy" loading="lazy" src={ccvd} />
                  </a>
                </div>
                <div className="blogdetxt">
                  <h4>CCVD</h4>
                  <p>
                    I contributed to the maintenance and feature development of an online examination platform (CCVD), a large-scale PHP-based web application serving over 150,000 medical students nationwide. The platform supports a wide range of functionalities to facilitate medical training and assessments.
                    <br />
                    <br />
                    As its scope and functionality closely resembled the DLP system, I have not repeated the same details here.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default BlogDetails;
