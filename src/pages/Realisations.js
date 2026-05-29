import project1 from "../components/img/images/portfolio/coder.jpg";
import project2 from "../components/img/images/portfolio/espace-bien-etre.jpg";
import project3 from "../components/img/images/portfolio/fresh-food.jpg";
import project4 from "../components/img/images/portfolio/restaurant-japonais.jpg";
import project5 from "../components/img/images/portfolio/screens.jpg";
import project6 from "../components/img/images/portfolio/seo.jpg";

const Realisation = () => {
    return (
        <section className="container my-5">
            <h2 className="text-center">Mes réalisations</h2>
            <div className="row">

                <div className="col-4">
                    <div className="card">
                        <img src={project1} alt="Coder" className="card-img-top" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Coder</h3>
                            <p className="card-text">Description du projet</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <img src={project2} alt="Espace Bien-Etre" className="card-img-top" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Espace Bien-Etre</h3>
                            <p className="card-text">Description du projet</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <img src={project3} alt="Fresh Food" className="card-img-top" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Fresh Food</h3>
                            <p className="card-text">Description du projet</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <img src={project4} alt="Restaurant Japonais" className="card-img-top" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Restaurant Japonais</h3>
                            <p className="card-text">Description du projet</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src={project5} alt="screens" className="card-img-top" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Screens</h3>
                            <p className="card-text">Description du projet</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <img src={project6} alt="seo" className="card-img-top" />
                        <div className="card-body text-center">
                            <h3 className="card-title">SEO</h3>
                            <p className="card-text">Description du projet</p>
                            <a href="#" className="btn btn-primary">Voir le site</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Realisation;