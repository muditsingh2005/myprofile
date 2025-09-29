
import React, { useState } from 'react';
import './MailMe.css';

const MailMe = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Network error. Please check if the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mail-me-container">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Send me a message!</p>
      <form onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={form.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={form.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={form.message}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default MailMe;
