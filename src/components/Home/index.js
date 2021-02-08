import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row justify-content-center>
          <Col>
            <div className="">
              <div className="my-5 mx-5">
                <h2>Start tracking your nutritional goals.</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
