import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import '../../App.css';

const Contents = () => {
  return (
    <Container className="my-5">
      <Card className="bg-transparent border-0">
        <Card.Body>
          <h1>We translate Nepali Sign Language. Automatically.</h1>
          <p>
            NSLRS has developed technology leveraging AI and computer vision that is able to recognize and translate sign language.
            It can be used in both business and education.
          </p>
          <p>
            <a href="background">
              <Button variant="primary">Learn more</Button>
            </a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contents;
