const ProgressBar = ({ nom, pourcentage, couleur }) => {
  return (
    <div>
      <p>{nom} {pourcentage}%</p>
      <div className="progress mb-3">
        <div className={`progress-bar ${couleur}`} style={{ width: `${pourcentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;