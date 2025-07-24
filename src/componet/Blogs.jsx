const Blogs = () =>{
    return(
        <>
            <section className="section-md background">
  <h2 className="text-center">OUR LATES BLOGS</h2>
  <div
    className="row justify-content-evenly py-3 mt-5"
    data-aos="zoom-in-up"
    data-aos-duration={1000}
  >
    <div className="col-sm-12 col-md-3">
      <div className="card Blog1">
        <img src="public/images/Blog1.jpg" alt="Blog 1" />
        <div className="card-body">
          <h4 className="card-title">Michel Joe</h4>
          <p className="justify">A Trust source for quality plant</p>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-3">
      <div className="card Blog1">
        <img src="public/images/Blog2.jpg" alt="Blog 1" />
        <div className="card-body">
          <br />
          <h4 className="card-title">Maria Joe</h4>
          <p className="justify">Enhance your Space with lush Greenery.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-3">
      <div className="card Blog1">
        <img src="public/images/Blog3.jpg" alt="Blog 1" />
        <div className="card-body">
          <h4 className="card-title mt-3">Maria Alex</h4>
          <p className="justify">Why Plants are Important for home.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
};
export default Blogs