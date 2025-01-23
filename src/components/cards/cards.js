import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = () => {
  return (
    <div>
      <h1 className="text-center">Our Features</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card className="text-center shadow h-100">
            <Card.Img variant="top" src="1.png" />
            <Card.Body>
              <Card.Title className="text-center">
                <b>RealTime Detection</b>
              </Card.Title>
              <Card.Text>
                Use our app to detect Nepali Sign Language in Realtime using
                your webcam.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="realtime">
                <Button variant="outline-success">Demo</Button>
              </a>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="text-center shadow h-100">
            <Card.Img variant="top" src="2.png" />
            <Card.Body>
              <Card.Title className="text-center">
                <b>Detect from Image</b>
              </Card.Title>
              <Card.Text>
                Use our app to detect Nepali Sign Language from your photos.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="fromimg">
                <Button variant="outline-success">Demo</Button>
              </a>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="text-center shadow h-100">
            <Card.Img variant="top" src="3.png" />
            <Card.Body>
              <Card.Title className="text-center">
                <b>Detect From Video</b>
              </Card.Title>
              <Card.Text>
                Use our app to detect Nepali Sign Language from your videos.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="fromvid">
                <Button variant="outline-success">Demo</Button>
              </a>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
