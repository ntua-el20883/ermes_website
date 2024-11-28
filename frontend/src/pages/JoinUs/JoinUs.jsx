import React, { useState } from "react";
import "./JoinUs.css"; // Make sure to create this CSS file for styling

const JoinUs = () => {
  const [cv, setCv] = useState(null); // State to hold the uploaded file

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCv(file); // Set the file to the state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cv) {
      alert("CV uploaded successfully!"); // Placeholder message, can be extended to submit the file to a server.
    } else {
      alert("Please upload your CV before submitting.");
    }
  };

  return (
    <div className="join-us-page">
      <h1>We Are Hiring!</h1>
      <p className="motivation-text">
        At Ermes, we believe in empowering talent to create revolutionary
        products. Join our passionate team of innovators and help shape the future
        of technology! If you're ready to take the next step in your career,
        we want to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="cv-upload-form">
        <div className="upload-container">
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Upload CV</button>
        </div>
      </form>
    </div>
  );
};

export default JoinUs;
