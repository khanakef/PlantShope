import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../admin/Layout";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/check-auth", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.authenticated) {
          setUserData(data.user || data.admin);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [navigate]);
  

  if (!userData) return <div className="flex items-center justify-center min-h-screen">Loading dashboard...</div>;

  return (
    <Layout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <p>Welcome, {userData.name || "Admin"} 🎉</p>
      </div>
    </Layout>
  );
};

export default Dashboard;
