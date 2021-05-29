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
            <Card.Title className="text-center" >RealTime Detection</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-success">Demo</Button>

          </Card.Footer>
        </Card>
        <Card className="text-center shadow">
          <Card.Img variant="top" src="2.png" />
          <Card.Body>
            <Card.Title className="text-center" >Detect from Videos</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-success">Demo</Button>
          </Card.Footer>
        </Card>
        <Card className="text-center shadow">
          <Card.Img variant="top" src="3.png" />
          <Card.Body>
            <Card.Title className="text-center" >Detect From Photos</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-success">Demo</Button>
          </Card.Footer>
        </Card>
      </CardDeck>
        </div>
    )
}

export default Cards