import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contactus() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    
    emailjs.sendForm('service_3bdrl7i', 'template_kwdodoi', e.target, 'user_ibZHfcb49FQmJK17U962E')
      .then((result) => {
        setLoading(false);
        setMessageStatus("Success! Your message has been sent.");
        e.target.reset();
      }, (error) => {
        setLoading(false);
        setMessageStatus("Error! Something went wrong. Please try again.");
      });
  }

  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
            Whether you'd like to request a demo, ask a question, or just say hello, 
            our team is ready to connect with you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-base-200 rounded-[3rem] p-8 md:p-12 border border-base-content/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="mb-8 text-base-content/70">
              Your suggestions help us improve NSLRAPP. We read every email and try to get back as fast as possible.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-base-content/80">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </div>
                  <span>nslrteam@example.com</span>
               </div>
               <div className="flex items-center gap-4 text-base-content/80">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span>Available for demos</span>
               </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="relative z-10 space-y-4 bg-base-100/50 p-6 rounded-3xl backdrop-blur-sm border border-base-content/10">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input type="text" name="user_name" placeholder="John Doe" className="input input-bordered focus:input-primary transition-all rounded-xl" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input type="email" name="user_email" placeholder="john@example.com" className="input input-bordered focus:input-primary transition-all rounded-xl" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea name="message" className="textarea textarea-bordered h-32 focus:textarea-primary transition-all rounded-xl" placeholder="Tell us how we can help..." required></textarea>
            </div>

            <button type="submit" disabled={loading} className={`btn btn-primary w-full rounded-xl mt-4 ${loading ? 'loading' : ''}`}>
              {loading ? "Sending..." : "Send Recognition Feedback"}
            </button>
            
            {messageStatus && (
              <div className={`mt-4 text-center text-sm font-medium ${messageStatus.includes('Error') ? 'text-error' : 'text-success'}`}>
                {messageStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
