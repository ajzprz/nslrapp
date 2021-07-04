import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import '../App.css';
import Underconstuction from '../components/underconstuction';

function Background(){
    return (
        <div className="App">
                <Container>
                   <Row>
                     <div className="title">
                    <h1>Background</h1>
                    </div>
                    </Row>
                    <Row>
                    <Underconstuction/>
                        </Row>
                </Container>
            </div>
       
    )
}

export default Background
