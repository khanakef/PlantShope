import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    city: "",
    country: "",
    pinCode: "",
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
          navigate("/userdata"); // redirect to blank userdata page
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

      {/* Full Name */}
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          value={formData.fullName}
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

      {/* Phone */}
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Address */}
      <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea
          name="address"
          className="form-control"
          rows="3"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* City */}
      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      {/* Country */}
      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          name="country"
          className="form-control"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>

      {/* Pin Code */}
      <div className="mb-3">
        <label className="form-label">Pin Code</label>
        <input
          type="text"
          name="pinCode"
          className="form-control"
          value={formData.pinCode}
          onChange={handleChange}
          required
        />
      </div>

      {/* DOB */}
      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          name="dob"
          className="form-control"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      {/* Gender */}
      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select
          name="gender"
          className="form-control"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
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
