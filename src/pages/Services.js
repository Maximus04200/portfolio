const Services = () => {
    return (
        <section className="container my-5">
            <h2 className="text-center">Mon offre de services</h2>
            <div className="row">
                <div className="col-4">
                <div className="card">
                    <div className="card-body text-center">
                        <i className="bi bi-pencil"></i>
                        <h3 className="card-title">UX Design</h3>
                        <p className="card-text">Conception d'interfaces intuitives et agréables centrées sur l'expérience utilisateur.</p>
                    </div>
                </div>
                </div>
                <div className="col-4">
                <div className="card">
                    <div className="card-body text-center">
                        <i className="bi bi-code-slash"></i>
                        <h3 className="card-title">Front-End</h3>
                        <p className="card-text">Développement d'interfaces web modernes avec HTML, CSS, JavaScript et React.</p>
                    </div>
                </div>
                </div>
                <div className="col-4">
                <div className="card">
                    <div className="card-body text-center">
                        <i className="bi bi-server"></i>
                        <h3 className="card-title">Back-End</h3>
                        <p className="card-text">Création d'APIs et de serveurs robustes avec Node.js, PHP et bases de données.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

                )
};

                export default Services;