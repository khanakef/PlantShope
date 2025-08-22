import { Link } from "react-router-dom";
// import Logout from "../page/Logout";

const Header = ({ toggleCart, cartItems }) => {
  const totalItems = new Set(cartItems.map(item => item.id)).size;
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // ✅ same storage
  const user = JSON.parse(localStorage.getItem("user")); // ✅ Check login

  const handleDeleteTables = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/delete-all-tables", {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data.message); // ✅ Console me success msg
  } catch (error) {
    console.error("❌ Error deleting tables:", error);
  }
};
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-dark-subtle fixed-top">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <div className="logo-container">
              <img src="public/images/LOGO.png" alt="Logo" />
            </div>
          </a>

          {/* Toggle Button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav align-items-lg-center w-100">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>

              {/* Cart icon */}
              <li className="nav-item mt-2 mt-lg-0 ms-lg-auto">
                <button
                  className="btn-transparent position-relative border-0 bg-transparent"
                  id="cartbtn"
                  type="button"
                  onClick={toggleCart}
                >
                  <i className="fa-solid fa-cart-shopping" style={{ fontSize: 25 }} />
                  {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                      <span className="visually-hidden">cart items</span>
                    </span>
                  )}
                </button>
              </li>

              {/* ✅ Show Data Button */}
              <li className="nav-item ms-3">
                <button className="btn btn-info" onClick={handleDeleteTables}>
                  Delete All Data
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
