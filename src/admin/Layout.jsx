import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Sidebar toggle fix
    const sidebarToggle = document.getElementById("sidebarToggle");
    if (sidebarToggle) {
      const handleToggle = (e) => {
        e.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
      };
      sidebarToggle.addEventListener("click", handleToggle);

      return () => {
        sidebarToggle.removeEventListener("click", handleToggle);
      };
    }
  }, []);

  // ✅ Logout Function
  const handleLogout = () => {
    fetch("http://localhost:5000/api/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        localStorage.removeItem("user");   // local data clear
        sessionStorage.clear();
        navigate("/login", { replace: true }); // replace se back button disable
      })
      .catch((err) => console.error("Logout error:", err));
  };


  return (
    <>
      <title>Dashboard - SB Admin</title>
      <link
        href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css"
        rel="stylesheet"
      />
      <link
        href="/public/admin template/startbootstrap-sb-admin-gh-pages/css/styles1.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="">
          Start Bootstrap
        </a>

        {/* 🔽 Sidebar Toggle Button */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars" />
        </button>

        {/* 🔽 Right Side User Menu */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              {/* ✅ Logout button with functionality */}
              <li>
                <button
                  className="dropdown-item text-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div id="layoutSidenav">
        {/* Sidebar */}
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <a className="nav-link" href="">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt" />
                  </div>
                  Dashboard
                </a>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <a className="nav-link" href="">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-area" />
                  </div>
                  Charts
                </a>
                <a className="nav-link" href="">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table" />
                  </div>
                  Tables
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>

        {/* ✅ Yahan par children render hoga */}
        <div id="layoutSidenav_content">
          <main>{children}</main>

          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright © Your Website 2023
                </div>
                <div>
                  <a href="#">Privacy Policy</a> ·{" "}
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
