import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

function Jumbo() {

    return (
        <Jumbotron id="jumbo">
          <Container >
           <div className="">
              <div className="my-5 mx-5">
                <h2>Start tracking your nutritional goals.</h2>
              </div>
            </div>
            </Container>
         </Jumbotron>
    );
}

export default Jumbo;



