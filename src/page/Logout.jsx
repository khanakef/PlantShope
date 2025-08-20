import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
  await fetch("http://localhost:5000/logout", {
    method: "POST",
    credentials: "include"
  });
  localStorage.removeItem("user");   // ✅ clear local storage
  navigate("/login", { replace: true });
};


  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default Logout;
