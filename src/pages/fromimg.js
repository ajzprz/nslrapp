import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Row } from "react-bootstrap";
import '../App.css';
import Underconstuction from '../components/underconstuction';


function Fromimg () {
    return (
        <div>
        <Row>
            <div className="title">
                <h1>Detect From Image</h1>
            </div>
        </Row>
    <Underconstuction/>
    </div>
       
    )
}

export default Fromimg
