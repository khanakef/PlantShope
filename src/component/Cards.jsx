import { useNavigate } from 'react-router-dom';

const Cards = ({ data, onButtonClick }) => {
    const navigate = useNavigate();

    return (
        <section className="section-md Background">
            <h2 className="text-center">OUR TOP SELLING PLANTS AND TREES</h2>
            <div className="row justify-content-evenly py-3 mt-5">
                {data.map((card, index) => (
                    <div
                        key={index}
                        className="col-sm-12 col-md-4 mt-5"
                        data-aos="fade-up"
                        data-aos-delay={card.delay}
                    >
                        <div className="card"> 
                            <div>
                               <img src={card.img} alt={card.alt} style={{ height: "350px",width:"100%" }} />

                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{card.title}</h4>
                                <p>{card.description}</p>

                                {card.price && (
                                    <p className="fw-bold text-success">₹{card.price}</p>
                                )}

                                <button
                                    className="btn bg-dark text-white"
                                    onClick={() => {
                                        if (onButtonClick) {
                                            onButtonClick(card);
                                        } else {
                                            navigate('/Shop');
                                        }
                                    }}
                                >
                                     {card.buttonText ? card.buttonText : (onButtonClick ? "ADD TO CART" : "SHOP NOW")}
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
