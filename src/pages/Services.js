import services from "../data/services.js";

const Services = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center">Mon offre de services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-4 mb-4" key={service.id}>
            <div className="card">
              <div className="card-body text-center">
                <i className={`bi ${service.icone}`}></i>
                <h3 className="card-title">{service.titre}</h3>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;