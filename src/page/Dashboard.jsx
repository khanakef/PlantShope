import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, User, Settings, LogOut } from "lucide-react"; // ✅ icons (lucide-react)

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch user/admin details from backend
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

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        credentials: "include",
      });
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (!userData) return <div className="flex items-center justify-center min-h-screen">Loading dashboard...</div>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          🌱 My Dashboard
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-800 rounded">
            <Home size={18} /> Home
          </button>
          <button className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-800 rounded">
            <User size={18} /> Profile
          </button>
          <button className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-800 rounded">
            <Settings size={18} /> Settings
          </button>
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 m-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
          <h1 className="text-xl font-bold">
            Welcome, <span className="text-green-600">{userData.username || "Admin"}</span> 👋
          </h1>
          <span className="text-gray-500">Role: {userData.role || "User"}</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-gray-600 text-sm">Email</h2>
            <p className="text-lg font-semibold">{userData.email}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-gray-600 text-sm">Account Created</h2>
            <p className="text-lg font-semibold">
              {userData.created_at ? new Date(userData.created_at).toLocaleDateString() : "N/A"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-gray-600 text-sm">Status</h2>
            <p className="text-lg font-semibold text-green-600">Active</p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Quick Actions</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Manage Profile
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
