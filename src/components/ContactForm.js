// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_gin7uc8', // Replace with your EmailJS service ID
      'template_b8okcps', // Replace with your EmailJS template ID
      formData,
      'KfqzsUvW4ckLodeav' // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
      alert('Message Sent Successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Message Failed to Send!');
    });

    // Reset form fields after submission
    setFormData({
      from_name: '',
      from_email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="from_name">Name</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="from_email">Email</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
