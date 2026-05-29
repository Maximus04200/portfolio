const MentionsLegales = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center">Mentions légales</h2>
      <div className="accordion" id="mentionsAccordion">

        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#editeur">
              Éditeur du site
            </button>
          </h2>
          <div id="editeur" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Contenu éditeur...
            </div>
          </div>
        </div>

        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#hebergeur">
              Hébergeur
            </button>
          </h2>
          <div id="hebergeur" className="accordion-collapse collapse">
            <div className="accordion-body">
              Contenu hébergeur...
            </div>
          </div>
        </div>


<div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#credits">
              Crédits
            </button>
          </h2>
          <div id="credits" className="accordion-collapse collapse">
            <div className="accordion-body">
              Contenu crédits...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;