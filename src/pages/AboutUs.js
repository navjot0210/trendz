import React from "react";

function AboutUs() {
  const properties = {
    title: "Welcome to Trendz",
    description:
      "We are a trendy fashion store offering the latest styles and designs.",
    location: "123 Fashion Street, Winnipeg, MB 10001",
    hours: "Monday - Friday: 9am - 6pm",
    contact: {
      email: "info@trendz.com",
      phone: "+1 123-456-7890",
    },
  };

  return (
    <div>
      <h1>{properties.title}</h1>
      <p>{properties.description}</p>
      <p>Location: {properties.location}</p>
      <p>Hours: {properties.hours}</p>
      <p>
        Contact: {properties.contact.email} | {properties.contact.phone}
      </p>
    </div>
  );
}

export default AboutUs;
