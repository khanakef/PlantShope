
const Header = ({ toggleCart, cartItems }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark-subtle">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <div className="logo-container">
                <img
                  src="public/images/LOGO.png "
                  alt="Logo"
                />
              </div>
            </a>
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
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
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
              </ul>

              {/* Cart icon */}
              <div className="cart-icon-container position-absolute end-0 me-3">
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
              </div>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
