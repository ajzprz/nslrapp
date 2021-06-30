import { Button } from 'react-bootstrap';
import React from 'react'
import { Card, CardDeck } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Cards = () => {
    return (
        <div>
            <h1 className="text-center">Our Features</h1>
        <CardDeck>
        <Card className="text-center shadow">
          <Card.Img variant="top" src="1.png" />
          <Card.Body>
            <Card.Title className="text-center" ><b>RealTime Detection </b></Card.Title>
            <Card.Text>
              Use our app to detect Nepali Sign Language in Realtime using your webcam.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a href="realtime"><Button variant="outline-success">Demo</Button></a> 

          </Card.Footer>
        </Card>
        <Card className="text-center shadow">
          <Card.Img variant="top" src="2.png" />
          <Card.Body>
            <Card.Title className="text-center" ><b>Detect from Image </b></Card.Title>
            <Card.Text>
            Use our app to detect Nepali Sign Language from your photos.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a href="fromimg"><Button variant="outline-success">Demo</Button></a> 
          </Card.Footer>
        </Card>
        <Card className="text-center shadow">
          <Card.Img variant="top" src="3.png" />
          <Card.Body>
            <Card.Title className="text-center" > <b> Detect From Video </b></Card.Title>
            <Card.Text>
            Use our app to detect Nepali Sign Language from your videos.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a href="fromvid"><Button variant="outline-success">Demo</Button></a> 
          </Card.Footer>
        </Card>
      </CardDeck>
        </div>
    )
}

export default Cards