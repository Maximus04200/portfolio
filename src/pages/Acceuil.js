import heroBg from "../components/img/images/hero-bg.jpg";
import profile from "../components/img/images/john-doe-about.jpg";
import { useState, useEffect } from "react";
import Modal from "../components/Modal.js";




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
                        <p>Voici ma présentation...</p>
                    </div>
                </div>
                <h3>Mes compétences</h3>
                <p>HTML5 90%</p>
                <div className="progress mb-3">
                    <div className="progress-bar bg-danger" style={{ width: "80%" }}></div>
                </div>
                <p>CSS3 80%</p>
                <div className="progress mb-3">
                    <div className="progress-bar bg-info" style={{ width: "60%" }}></div>
                </div>
                <p>JavaScript 40%</p>
                <div className="progress mb-3">
                    <div className="progress-bar bg-info" style={{ width: "40%" }}></div>
                </div>
                <p>PHP 10%</p>
                <div className="progress mb-3">
                    <div className="progress-bar bg-info" style={{ width: "10%" }}></div>
                </div>
                <p>MySQL 10%</p>
                <div className="progress mb-3">
                    <div className="progress-bar bg-info" style={{ width: "10%" }}></div>
                </div>

            </section>
        </div>
    );
};

export default Accueil;