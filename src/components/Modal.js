const Modal = ({ githubData, onClose }) => {
  if (!githubData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Mon profil GitHub</h2>
        <img src={githubData.avatar_url} alt="Avatar" width="100" />
        <p>{githubData.login}</p>
        <p>Repos : {githubData.public_repos}</p>
        <p>Followers : {githubData.followers}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;