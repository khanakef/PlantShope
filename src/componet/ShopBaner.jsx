const ShopBaner = () => {
    return (
        <>
            <section>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <video
                                className="d-block w-100"
                                src="/Images/7675962-hd_1920_1080_25fps.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>

                        </div>
                        <div className="carousel-item">
                            <img src="/public/Images/pexels-saijanani-selvarajan-759261681-33143925.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/public/Images/pexels-fotios-photos-1090638.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev WHG"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon " aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next WHG"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
};
export default ShopBaner