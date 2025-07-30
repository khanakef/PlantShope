
const Breadcrumb = ({
  title,
  subtitle,
  backgroundImage,
  subtitleColor = "white",
}) => (
  <section
    className="breadcrumb-main"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content text-center pt-14 pb-2">
          <h5 style={{ color: subtitleColor }} className=" mb-0">
            {subtitle}
          </h5>
          <h1 className="mb-0 white">{title}</h1>
        </div>
      </div>
    </div>
    <div className="bread-overlay"></div>
  </section>
);

export default Breadcrumb;