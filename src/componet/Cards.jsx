import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="section-md Background">
                <h2 className="text-center">OUR TOP SELLIG PLANTS AND TREEE</h2>
                <div className="row justify-content-evenly py-3 mt-5 ">
                    {/* First Card */}
                    <div className="col-sm-12 col-md-3">
                        <div className="card">
                            <div>
                                <img src="public/images/anthurium.jpg" alt="anthurium" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Anthurium Red Plant</h4>
                                <p>
                                    Anthurium is a genus of about 1,000 perennial plants. They are
                                    native to tropical America, including Central America, northern
                                    South America, and the Caribbean.
                                </p>
                                <button
                                    className="btn bg-dark text-white"
                                    onClick={() => navigate('/Shop')}
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="col-sm-12 col-md-3">
                        <div className="card">
                            <div>
                                <img src="public/images/Peace.jpg" alt="peace lily" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Peace Lily</h4>
                                <p>
                                    The peace lily (Spathiphyllum) is a tropical perennial that can live
                                    for years and flower repeatedly. The name comes from its white
                                    flowers that resemble white flags of peace.
                                </p>
                                <button
                                    className="btn bg-dark text-white"
                                    onClick={() => navigate('/Shop')}
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="col-sm-12 col-md-3">
                        <div className="card">
                            <div>
                                <img src="public/images/anthurium.jpg" alt="anthurium" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Anthurium Red Plant</h4>
                                <p>
                                    Anthurium is a genus of about 1,000 perennial plants. They are
                                    native to tropical America, including Central America, northern
                                    South America, and the Caribbean.
                                </p>
                                <button
                                    className="btn bg-dark text-white"
                                    onClick={() => navigate('/Shop')}
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cards;
