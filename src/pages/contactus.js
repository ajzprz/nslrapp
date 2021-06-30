
import React from 'react';
import emailjs from 'emailjs-com';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Jumbotron, Button } from "react-bootstrap";
import '../App.css';

export default function Contactus() {
   
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3bdrl7i', 'template_kwdodoi', e.target, 'user_ibZHfcb49FQmJK17U962E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
        <div className="App">
                <Container>
                    <Row>
                        <Jumbotron className="bg-transparent">
                        <h1>Contact Us</h1>
                            <h5>
                                Whether you'd like to request a demo, ask a question, or just say hello, <br></br>
                                 our team is ready to connect with you!
                            </h5>
                        </Jumbotron>
                        </Row>
                    
                    <Row>
                    <div className='contactdiv'>
                    <h2>
                        Send Us Suggestion Via Email
                    </h2>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                         <input type="text" name="user_name"  placeholder=" Your Name"/> <br/>
                         <input type="email" name="user_email"  placeholder=" Your E-Mail"/> <br/>
                        <textarea name="message" id="txtarea"  placeholder=" Your Message" /> <br/>
                        <input type="submit" value="Send" />
                        {/* <p>{msg}</p> */}
                        </form>
                        </div>
                    </Row>
                </Container>
            </div>
       
    )
}

