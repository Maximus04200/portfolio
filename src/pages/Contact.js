import FormInput from "../components/ui/Forminput.js";

const Contact = () => {
    return (
        <div>
            <section className="container my-5">
                <h2 className="text-center">Contact</h2>
                <form>
                    <FormInput type="text" placeholder="Nom et Prénom" required />
                    <FormInput type="email" placeholder="Email" required />
                    <FormInput type="tel" placeholder="Téléphone" required />
                    <FormInput type="text" placeholder="Sujet" required />
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Votre message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </section>

            <section>
                <h2 className="text-center">Mes Coordonnées</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45716.58487126241!2d5.86758135!3d44.262924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cb070aa0cd65e7%3A0x3cf082d072c81a92!2s04200%20Mison!5e0!3m2!1sfr!2sfr!4v1780044468173!5m2!1sfr!2sfr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;