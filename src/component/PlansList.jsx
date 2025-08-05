

const PlansList = ({ addToCart }) => {
  const handleAdd = (name, price, image) => {
    const qty = 1;
    addToCart({ name, price, quantity: qty, image });
  };

  return (
    <>
      <section className="section-md">
        <h1 className="text-center">TOP SELLING PLANTS</h1>
        <div className="row justify-content-evenly py-3 mt-3">

          {/* Example: RED ROSE */}
          <div className="col-sm-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <img src="/public/Images/rose1.jpg" alt="Red Rose" className="card-img-top" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">RED ROSE</h4>
                <p className="card-text">Red Rose is a classic...</p>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <span className="fw-bold text-success">₹399</span>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("RED ROSE", 399, "/public/Images/rose1.jpg")}>ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* SUNFLOWER */}
          <div className="col-sm-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="public/images/sunflow.jpg"
                alt="Sunflower"
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">SUNFLOWER</h4>
                <p className="card-text justify">
                  The sunflower is a tall, bright, and vibrant flower known for its large yellow petals and brown center. It turns its face toward the sun, a behavior called heliotropism.
                </p>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <span className="fw-bold text-success">₹299</span>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("SUNFLOWER", 299, "/public/Images/sunflow.jpg")}>ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* CHERRY BLOSSOM */}
          <div className="col-sm-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="public/images/cherry.jpg"
                alt="Cherry Blossom"
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">Cherry Blossom (Sakura)</h4>
                <p className="card-text justify">
                  Cherry Blossom is a delicate pink or white flower that blooms in spring. It symbolizes beauty, renewal, and the fleeting nature of life, widely celebrated in Japan.
                </p>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <span className="fw-bold text-success">₹499</span>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Cherry Blossom (Sakura)", 499,"/public/Images/cherry.jpg")}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-md">
        <div className="row justify-content-evenly py-3 mt-3">
          {/* TULIP */}
          <div className="col-sm-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="public/images/Tulip.jpg"
                alt="Tulip"
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">Tulip</h4>
                <p className="card-text justify">
                  Tulip is a bright, cup-shaped flower that blooms in spring. It symbolizes perfect love, elegance, and new beginnings. Especially popular in the Netherlands.
                </p>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <span className="fw-bold text-success">₹449</span>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Tulip", 449, "/public/Images/Tulip.jpg")}>ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* DAISY */}
          <div className="col-sm-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="public/images/Daisy.jpg"
                alt="Daisy"
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">Daisy</h4>
                <p className="card-text justify">
                  Daisy is a simple yet charming flower with white petals and a yellow center. It symbolizes innocence and purity, and blooms mostly in spring and summer.
                </p>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <span className="fw-bold text-success">₹199</span>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Daisy", 199, "/public/Images/Daisy.jpg")}>ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* ORCHID */}
          <div className="col-sm-12 col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src="public/images/Orchid.jpg"
                alt="Orchid"
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">Orchid</h4>
                <p className="card-text justify">
                  Orchid is an exotic and elegant flower known for its unique shape and colors. It symbolizes beauty, luxury, love, and strength. Orchids bloom long and beautifully.
                </p>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <span className="fw-bold text-success">₹599</span>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Orchid", 599,"/public/Images/Orchid.jpg")}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansList;