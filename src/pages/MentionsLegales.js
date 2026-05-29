import { Helmet } from "react-helmet";

const MentionsLegales = () => {
    return (
        <div>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
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
                                <p>Martin Di Nota</p>
                                <p>71 chemin de bois domenge</p>
                                <p>06 15 44 28 24</p>
                                <p>04200 Mison</p>
                                <p>martin.dinota@outlook.fr</p>
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
                                <p>alwaysdata</p>
                                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <p><a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
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
                                Ce site a été réalisé par Martin Di Nota, étudiant au Centre Européen de Formation.
                                Les images sont libres de droits issues de Pixabay.
                                Le favicon est fourni par Flaticon.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MentionsLegales;