import React, { useState } from 'react';
import { Container, Row, Card } from "react-bootstrap";
import emailjs from 'emailjs-com';
import '../App.css';

export default function Contactus() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.user_name.value;
    const email = form.user_email.value;
    const messageContent = form.message.value;

    // Validate form fields
    if (name === "") {
      alert("Please enter your name.");
      form.user_name.focus();
      return false;
    }
    if (email === "") {
      alert("Please enter your email.");
      form.user_email.focus();
      return false;
    }
    if (messageContent === "") {
      alert("Please enter your message.");
      form.message.focus();
      return false;
    }

    setLoading(true);
    emailjs.sendForm('service_3bdrl7i', 'template_kwdodoi', form, 'user_ibZHfcb49FQmJK17U962E')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        setMessage("Email sent successfully! Thank you for contacting us.");
      }, (error) => {
        console.log(error.text);
        setLoading(false);
        setMessage("There was an issue sending your message. Please try again.");
      });
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Card className="bg-transparent">
            <div className="title">
              <h1>Contact Us</h1>
            </div>
            <h5>
              Whether you'd like to request a demo, ask a question, or just say hello, <br /> 
              our team is ready to connect with you!
            </h5>
          </Card>
        </Row>

        <Row>
          <div className='contactdiv'>
            <h2>Send Us Suggestion Via Email</h2>
            <form name="regform" className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <input type="text" name="user_name" placeholder=" Your Name" required /><br />
              <input type="email" name="user_email" placeholder=" Your E-Mail" required /><br />
              <textarea name="message" id="txtarea" placeholder=" Your Message" required /><br />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </Row>
      </Container>
    </div>
  );
}
