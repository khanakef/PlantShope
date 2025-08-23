import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Function to insert data via /register route
  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Registration successful!");
        setTimeout(() => {
          navigate("/userdata"); // redirect to userdata page
        }, 1500);
      } else {
        const errorData = await res.json();
        alert("❌ Error: " + errorData.message);
      }
    } catch (err) {
      console.error("Registration Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Create an Account</h2>

      {/* Name */}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Number */}
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          name="number"
          className="form-control"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {/* ✅ Register Button */}
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Registration;
