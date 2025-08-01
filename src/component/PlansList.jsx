import React from "react";

const PlansList = ({ addToCart }) => {
  const handleAdd = (name, price, qtyId) => {
    const qty = parseInt(document.getElementById(qtyId).value) || 1;
    addToCart({ name, price, quantity: qty });
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
                <div className="d-flex align-items-center">
                  <label htmlFor="qty1" className="me-2 mb-0 fw-medium">Qty:</label>
                  <input type="number" id="qty1" min="1" defaultValue="1" className="form-control form-control-sm" style={{ width: "60px" }} />
                </div>
              </div>
              <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("RED ROSE", 399, "qty1")}>ADD TO CART</button>
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
                  <div className="d-flex align-items-center">
                    <label htmlFor="qty2" className="me-2 mb-0 fw-medium">Qty:</label>
                    <input type="number" id="qty2" min="1" defaultValue="1" className="form-control form-control-sm" style={{ width: "60px" }} />
                  </div>
                </div>
                 <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("SUNFLOWERE", 299, "qty1")}>ADD TO CART</button>
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
                  <div className="d-flex align-items-center">
                    <label htmlFor="qty3" className="me-2 mb-0 fw-medium">Qty:</label>
                    <input type="number" id="qty3" min="1" defaultValue="1" className="form-control form-control-sm" style={{ width: "60px" }} />
                  </div>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Cherry Blossom (Sakura)", 499, "qty1")}>ADD TO CART</button>
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
                  <div className="d-flex align-items-center">
                    <label htmlFor="qty4" className="me-2 mb-0 fw-medium">Qty:</label>
                    <input type="number" id="qty4" min="1" defaultValue="1" className="form-control form-control-sm" style={{ width: "60px" }} />
                  </div>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Tulip", 449, "qty1")}>ADD TO CART</button>
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
                  <div className="d-flex align-items-center">
                    <label htmlFor="qty5" className="me-2 mb-0 fw-medium">Qty:</label>
                    <input type="number" id="qty5" min="1" defaultValue="1" className="form-control form-control-sm" style={{ width: "60px" }} />
                  </div>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Daisy", 199, "qty1")}>ADD TO CART</button>
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
                  <div className="d-flex align-items-center">
                    <label htmlFor="qty6" className="me-2 mb-0 fw-medium">Qty:</label>
                    <input type="number" id="qty6" min="1" defaultValue="1" className="form-control form-control-sm" style={{ width: "60px" }} />
                  </div>
                </div>
                <button className="bg-dark text-white btn w-100" onClick={() => handleAdd("Orchid", 599, "qty1")}>ADD TO CART</button>
              </div>
            </div>
          </div>
       </div>
      </section>
    </>
  );
};

export default PlansList;