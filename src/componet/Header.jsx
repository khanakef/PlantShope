const Header =()=> {
    return(
        <>
            <header className="position-fixed w-100 z-1">
                <nav className="navbar navbar-expand-lg bg-dark-subtle">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <div className="logo-container">
                                <img src="public/images/White Minimalist Greenhouses Logo.png" alt="Logo" />
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
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Shop/shop.html">
                                        Shop
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Products
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="mx-3 position-relative">
                                <button
                                    className="btn-transparent position-relative"
                                    id="cartbtn"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample"
                                    aria-controls="offcanvasExample"
                                >
                                    <i className="fa-solid fa-cart-shopping" style={{ fontSize: 20 }} />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        0<span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )

};
export default Header