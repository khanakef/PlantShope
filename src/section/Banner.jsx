const Banner = ({ slides, carouselId = "mainBanner" }) => (
  <section style={{ paddingTop: "1px" }}>
    <div id={carouselId} className="carousel slide">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map(({ image, caption, alt }, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <img src={image} className="d-block w-100" alt={alt || "Banner"} />
            {caption && (
              <div className="carousel-caption text-light">
                <h1>{caption}</h1>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            className="carousel-control-prev WHG"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next WHG"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  </section>
);

export default Banner;