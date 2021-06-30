import React from 'react'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from "react-bootstrap";
import underconstruction from "../under construction.png";

const Fromvid = () => {
    return (
        <div className="App">
        <Container>
                   <Row>
                     <div className="title">
                    <h1>Detect From Video</h1>
                    </div>
                    </Row>
                    <Row>
                    <div className="App-header cust-height">
                    <img src={underconstruction} 
                        alt = "underconstruction"
                         width={800}   
                         height={400}
                    />
                        </div>
                </Row>
                {/* <Row>
                    <div className="predictions">
                      <form action="">
                        <textarea ref={textAreaRef} rows="10" cols="40" value={text} placeholder="Your Signs Predictions" id="output" >  </textarea>
                        <Row >
                        <Button variant="info" className="center" onClick={copyToClipboard}>Copy</Button>
                        <Button variant="danger" className="center" onClick={eraseText}>Clear</Button>
                        </Row>
                        <div className="text-center ">
                        {copySuccess}
                        {deleteSuccess}
                        </div>
                      </form>
                    </div>
                </Row> */}

        </Container>
    </div>
    )
}

export default Fromvid
