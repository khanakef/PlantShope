// Contact.jsx
import React, { useState } from "react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend or just log it
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", number: "", comment: "" }); // Reset form
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your number"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            className="form-control"
            name="comment"
            rows="4"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
