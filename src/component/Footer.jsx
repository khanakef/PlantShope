const Footer = () =>{
    return(
        <>
            <>
  <footer className=" bg-dark-subtle py-5"  data-aos="zoom-in-up">
    <div className="container">
      <div className=" footer-wrapper row justify-content-evenly">
        <div className="col-sm-12 col-md-6 col-lg-3 align-self-center">
          <div className="intro-img animation-left">
            <div className="img">
              <img src="public/Images/LOGO.png" alt="main logo" />
            </div>
            <p className="text-center mt-2">
              {" "}
              Plants Shop © All Rights Reserved.
            </p>
            <div className="text-center mt-3">
              <a href="#" title="Facebook" className="btn-transparent">
                <i className="fa-brands fa-facebook fa-bounce h4 text-light" />
              </a>
              <a href="#" title="Instagram" className="btn-transparent px-3">
                <i className="fa-brands fa-instagram fa-bounce h4 text-light" />
              </a>
              <a href="#" title="Youtube" className="btn-transparent">
                <i className="fa-brands fa-youtube fa-bounce h4 text-light" />
              </a>
              <a href="#" title="LinkedIn" className="btn-transparent px-3">
                <i className="fa-brands fa-linkedin fa-bounce h4 text-light" />
              </a>
            </div>
          </div>
        </div>
        <nav className="footer-main-nav col-sm-10 col-md-6 col-lg-2 my-3 animation-bottom">
          <h3 className="mb-3 text-dark ">Quick Links</h3>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active text-dark" href="index.html">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="about-us/company-profile/company-profile.html"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="gallery/gallery.html">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="clients/client.html">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="contact-us/contactus.html">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="products/cat 5-6-cables.html">
                Why Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="get-in-touch col-sm-10 col-md-6 col-lg-3 my-3 animation-bottom">
          <h3 className="mb-3 text-dark">Get in Touch</h3>
          <div className="row touch">
            <div className="col-2 px align-self-center">
              <i
                className="fa-solid fa-location-dot"
                style={{ fontSize: "1.2rem" }}
              />
            </div>
            <p className="col text-dark">
              Kat Kat Gate , New S.T Colony Aurangabad, <br />
              Maharashtra 431001.
            </p>
          </div>
          <div className=" p-3 row ">
            <div className="col-2 px-0 contact-box">
              <i className="fa-regular fa-envelope" />
            </div>
            <div className="col-10 px-0">
              <p className="my-0 text-dark">Drop Us a Line</p>
              <h6 className="text-white my-0">
                <a href="mailto:info@example.com">info@example.com</a>
              </h6>
            </div>
          </div>
          <div className=" p-3 row">
            <div className="col-2 px-0 contact-box">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="col-10 px-0">
              <p className="my-0 text-dark">Call Us Now</p>
              <h6 className="text-white my-0">
                <a href="#">+91 9422577039</a> , <br />{" "}
                <a href="#">+91 9373777087</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* offcanvas */}
  {/* <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        Your Cart
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <h2 className="empty text-center">Your Cart is Empty</h2>
      <div className="cart"></div>
    </div>
  </div> */}
</>

        </>
    )
};
export default Footer