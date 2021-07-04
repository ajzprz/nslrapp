
import React from 'react';
import { Container, Row, Jumbotron} from "react-bootstrap";
import emailjs from 'emailjs-com';
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

      var name = document.forms["regform"]["user_name"];
      var email = document.forms["regform"]["user_email"];
      var txtarea = document.forms["regform"]["txtarea"];
  
      if (name.value === "") {
          window.alert("Please enter your name.");
          name.focus();
          return false;
      }
      if (email.value === "") {
          window.alert("Please enter your name.");
          name.focus();
          return false;
      }
  
      if (txtarea.value === "") {
          window.alert("Please enter your name.");
          name.focus();
          return false;
      }
      alert ("Email Sent Sucessful")
      return true;
  }

//   function sent(){
//       
//       return true;
//   }
    return (
        <div className="App">
                <Container>
                    <Row>
                        <Jumbotron className="bg-transparent">
                        <div className="title">
                    <h1>Contact Us</h1>
                    </div>
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
                    <form name="regform" className="contact-form" onSubmit={sendEmail} >
                        <input type="hidden" name="contact_number" />
                         <input type="text" name="user_name"  placeholder=" Your Name" required /> <br/>
                         <input type="email" name="user_email"  placeholder=" Your E-Mail" required /> <br/>
                        <textarea name="message" id="txtarea"  placeholder=" Your Message" required /> <br/>
                        <input type="submit" value="Send"/>
                        </form>
                        </div>
                    </Row>
                </Container>
            </div>
       
    )
}

