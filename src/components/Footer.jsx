import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/Amirshahzad422"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Amir Shahzad
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Software Engineering Student | Public Speaker | Building the Future with Code
          </small>
        </p>
        <p>
          <small className="text-muted">
            © 2025 Amir Shahzad. Made with passion for technology and innovation.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
