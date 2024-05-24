import React, { useState } from "react";
import "../css/about.css";
import { Helmet } from "react-helmet";
import jj from '../img/jj.jpg';
import yaroSlav from '../img/yaro-slav.jpg';
import navJot from '../img/nav-jot.jpg';
import mdFahim from '../img/md-fahim.jpg';

const teamMembers = [
  { name: "Yaroslav Fedorenko", role: "CEO", image: {yaroSlav} },
  { name: "Jia Jia", role: "CTO", image: {jj} },
  { name: "Navjot Kaur", role: "COO", image: {navJot} },
  { name: "Md Fahim", role: "CUO", image: {mdFahim} },
];

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
  };

  return (
    <div className="container">
      <Helmet>
        <title>About Trendz team</title>
      </Helmet>
      {/* Intro Section */}
      {/* <section className="intro-section">
        <h1 className="intro-title">Welcome to Trendz</h1>
        <p className="intro-subtitle">
          Your one-stop shop for the latest trends in fashion.
        </p>
      </section> */}
      {/* Meet Our Team Section */}
      <section className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-avatar"
              />
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Us and Feedback Form Section */}
      <section className="contact-feedback-section">
        <div className="contact-us">
          <h2 className="contact-title">Contact Us</h2>
          <ul className="contact-list">
            <li>Email: contact@trendz.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Fashion Ave, Winnipeg, MB 12345</li>
          </ul>
        </div>
        <div className="feedback-form-container">
          <form className="feedback-form" onSubmit={handleSubmit}>
            <h2 className="feedback-title">Feedback</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
