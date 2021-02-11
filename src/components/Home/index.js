import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../NavBar";
import Jumbo from "../Jumbotron"

function Home() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row justify-content-center>
          <Col>
            <Jumbo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
