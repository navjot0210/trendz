import React, { useState } from "react";
import "../css/about.css";
import { Helmet } from "react-helmet";
import jj from '../img/jj.jpg';
import yaroSlav from '../img/yaro-slav.jpg';
import navJot from '../img/nav-jot.jpg';
import mdFahim from '../img/md-fahim.jpg';

const teamMembers = [
  { name: "Yaroslav Fedorenko", role: "CEO", image: yaroSlav },
  { name: "JJ", role: "CTO", image: jj },
  { name: "Navjot Kaur", role: "COO", image: navJot },
  { name: "Md Fahim", role: "CUO", image: mdFahim },
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
      <section className="team-section grid center">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-cards flex space-between">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-avatar"
              />
              <div className="team-name">{member.name}</div>
              <div className="position">Student, MITT</div>
              <div className="program">(Software Developer)</div>
              <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-solid fa-envelope"></i>
              </div>
              {/* <div className="team-role">{member.role}</div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
