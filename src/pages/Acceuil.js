import heroBg from "../components/img/images/hero-bg.jpg";
import profile from "../components/img/images/john-doe-about.jpg";
import { useState, useEffect } from "react";
import Modal from "../components/Modal.js";
import competences from "../data/competences.js";



const Accueil = () => {

    const [githubData, setGithubData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/Maximus04200")
            .then(res => res.json())
            .then(data => {
                setGithubData(data);
                console.log(data);
            });
    }, []);

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            {/* Hero */}
            <div className="hero">
                <img src={heroBg} alt="Hero banner" />
                <div className="hero-content">
                    <h1>Martin Di Nota</h1>
                    <h2>Développeur Web</h2>
                    <button onClick={() => setModalOpen(true)} className="btn btn-primary">
                        En savoir plus
                    </button>
                    {modalOpen && <Modal githubData={githubData} onClose={() => setModalOpen(false)} />}
                </div>
            </div>


            <section className="container my-5">
                <h2>À propos</h2>
                <div className="row">
                    <div className="col-6">
                        <img src={profile} alt="Martin Di Nota" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <p>Bonjour je me présente Martin Di Nota. Je suis un jeune développeur web. Actuellement en formation en tant que développeur full stack à l'école CEF. J'ai débuté ma formation en avril 2026. Je vous présente mon portfolio créé par mes propres compétences.</p>
                        <h3>Mes compétences</h3>
                        {competences.map((comp) => (
                            <div key={comp.id}>
                                <p>{comp.nom} {comp.pourcentage}%</p>
                                <div className="progress mb-3">
                                    <div className={`progress-bar ${comp.couleur}`} style={{ width: `${comp.pourcentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accueil;