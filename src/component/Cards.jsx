import { useNavigate } from 'react-router-dom';

const Cards = ({ data, onButtonClick }) => {
    const navigate = useNavigate();

    return (
        <section className="section-md Background">
            <h2 className="text-center mb-4">OUR TOP SELLING PLANTS AND TREES</h2>
            <div className="row justify-content-center g-4">
                {data.map((card, index) => (
                    <div
                        key={index}
                        className="col-12 col-md-4 col-lg-4" // 1 on mobile, 3 on medium, 3 on large
                        data-aos="fade-up"
                        data-aos-delay={card.delay}
                    >
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={card.img}
                                alt={card.alt}
                                className="card-img-top img-fluid"
                                style={{ objectFit: "cover", height: "350px" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h4 className="card-title">{card.title}</h4>
                                <p className="flex-grow-1">{card.description}</p>

                                {card.price && (
                                    <p className="fw-bold text-success">₹{card.price}</p>
                                )}

                                <button
                                    className="btn bg-dark text-white mt-auto"
                                    onClick={() => {
                                        if (onButtonClick) {
                                            onButtonClick(card);
                                        } else {
                                            navigate('/Shop');
                                        }
                                    }}
                                >
                                    {card.buttonText
                                        ? card.buttonText
                                        : onButtonClick
                                        ? "ADD TO CART"
                                        : "SHOP NOW"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;
