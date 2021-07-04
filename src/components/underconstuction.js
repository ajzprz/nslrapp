import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import '../App.css';
import underconstruction from "../under construction.png";

function Underconstuction(){
    return (
        <div className="width-100">
                <Container>
                    <Row>
                    <div className="App-header cust-height">
                    <img src={underconstruction} 
                     alt = "underconstruction"
                         width={800}   
                         height={400}
                    />
                        </div>
                        </Row>
                </Container>
            </div>
    )
}

export default Underconstuction
