import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthMiddleware = ({ children }) => {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const tabToken = sessionStorage.getItem("tabToken");

    // Agar tabToken hi nahi hai → force login
    if (!tabToken) {
      setIsAuth(false);
      return;
    }

    fetch("http://localhost:5000/check-auth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setIsAuth(data.authenticated))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  const publicRoutes = ["/login", "/register"];
  const currentPath = location.pathname;

  if (publicRoutes.includes(currentPath)) return children;
  if (!isAuth) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export default AuthMiddleware;
