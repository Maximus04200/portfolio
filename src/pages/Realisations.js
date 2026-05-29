import projets from "../data/projets";

const Realisation = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center">Mes réalisations</h2>
      <div className="row">
        {projets.map((projet) => (
          <div className="col-4 mb-4" key={projet.id}>
            <div className="card">
              <img src={projet.image} alt={projet.titre} className="card-img-top" />
              <div className="card-body text-center">
                <h3 className="card-title">{projet.titre}</h3>
                <p className="card-text">{projet.description}</p>
                <a href={projet.lien} className="btn btn-primary">Voir le site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Realisation;