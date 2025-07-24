const Cards = () =>{
    return(
        <>
            <section className="section-md "   >
                <h2 className="text-center">OUR TOP SELLIG PLANTS AND TREEE</h2>
                <div className="row justify-content-evenly py-3 mt-5 ">
                    <div
                        className="col-sm-12 col-md-3"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <div className="card">
                            <div className="">
                                <img src="public/images/anthurium.jpg" alt="anthurium" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Anthurium Red Plant</h4>
                                <p className="justify">
                                    Anthurium is a genus of about 1,000 perennial plants. They are
                                    native to tropical America, including Central America, northern
                                    South America, and the Caribbean.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-12 col-md-3 text-center"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <div className="card">
                            <div className="">
                                <img src="public/images/Peace.jpg" alt="anthurium" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">Peace Lily</h4>
                                <p className="justify">
                                    The peace lily (Spathiphyllum) is a tropical perennial that can live
                                    for years and flower repeatedly. The name comes from its white
                                    flowers that resemble white flags of peace.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-12 col-md-3 text-center"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <div className="card">
                            <div className="">
                                <img src="public/images/anthurium.jpg" alt="anthurium" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Anthurium Red Plant</h4>
                                <p className="justify">
                                    Anthurium is a genus of about 1,000 perennial plants. They are
                                    native to tropical America, including Central America, northern
                                    South America, and the Caribbean.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};
export default Cards