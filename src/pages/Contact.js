const Contact = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center">Contact</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Nom et Prénom" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>

        <div className="mb-3">
          <input type="tel" className="form-control" placeholder="Téléphone" required />
        </div>

        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Sujet" required />
        </div>
        
        <div className="mb-3">
          <textarea className="form-control" placeholder="Votre message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;