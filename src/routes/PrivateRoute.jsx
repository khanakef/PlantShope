// routes/PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ requiredRole }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/check-auth", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.authenticated) {
          setAuthenticated(true);
          setUser(data.user);
        } else {
          setAuthenticated(false);
        }
      } catch {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ Agar role required hai to check karo
  if (requiredRole && user.role !== requiredRole && user.role !== "superadmin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};


export default PrivateRoute;
