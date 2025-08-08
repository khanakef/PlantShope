

const Facilities = () => {

  return (
    <>
      <section className="section-md">
        <div className="row justify-content-evenly w-100 mt-5">
          
          {/* Secure Payment */}
          <div
            className="col-sm-12 col-md-3 text-center"
            data-aos="zoom-out"
          >
            <h1>
              <i className="fa-solid fa-wallet" />
            </h1>
            <h5>Secure Payment</h5>
            <p>
              Many options for payment securely, <br /> Cash on delivery or other
              UPI's
            </p>
          </div>

          {/* Free Shipping */}
          <div
            className="col-sm-12 col-md-3 text-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <h1>
              <i className="fa-solid fa-truck" />
            </h1>
            <h5>Free shipping</h5>
            <p>Free Shipping All over India</p>
          </div>

          {/* Replacements */}
          <div
            className="col-sm-12 col-md-3 text-center"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
            <h1>
              <i className="fa-solid fa-repeat" />
            </h1>
            <h5>Replacements</h5>
            <p>7 Days Replacement</p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Facilities;
