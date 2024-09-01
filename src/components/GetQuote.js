import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './GetQuote.css';

const GetQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs.send('service_uxox1dk', 'template_5p2ohnw', {
      name: name,
      email: email,
      message: message,
    }, 'aDNtWgyBA_304wJQ_')
    .then((response) => {
      console.log('Email successfully sent!', response);
    })
    .catch((err) => {
      console.error('Failed to send email. Error:', err);
    });

    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="get-quote">
      <h2>Get a Quote</h2>
      <form onSubmit={handleSubmit} className="quote-form">
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetQuote;
