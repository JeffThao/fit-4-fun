import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../NavBar";
import Jumbo from "../Jumbotron"

function Home() {
  return (
    <div>
      <NavBar />
      <Jumbo />
      <Container>
        <Row justify-content-center>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
