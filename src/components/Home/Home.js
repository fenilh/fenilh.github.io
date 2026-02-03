 
import { Container, Row, Col } from "react-bootstrap";
 
import imggg from "../../Assets/imggg.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
 
import {
  AiFillGithub,
  AiOutlineTwitter,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Limbachiya Fenil</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

       <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
  <img
    src={imggg}
    alt="home pic"
    style={{
      maxWidth: "100%",
      height: "70%",

      borderRadius: "50%",            // round image
      border: "6px solid #1f2a44",

      boxShadow:
        "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 8px rgba(255, 255, 255, 0.03)",

      transform: "scaleX(-1)",        // flip image horizontally
      transition: "all 0.4s ease",
    }}
  />
</Col>

          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fenilh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/fenil021"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fenil-limbachiya-b91932233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
