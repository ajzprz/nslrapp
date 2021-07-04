import React from 'react'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row} from "react-bootstrap";
import Underconstuction from '../components/underconstuction';


const Fromvid = () => {
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

export default Fromvid
