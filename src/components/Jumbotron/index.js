import React from "react";
import { Jumbotron } from 'react-bootstrap';

function Jumbo() {

    return (
        <Jumbotron bg="light" expand="lg">
           <div className="">
              <div className="my-5 mx-5">
                <h2>Start tracking your nutritional goals.</h2>
              </div>
            </div>
         </Jumbotron>
    );
}

export default Jumbo;



