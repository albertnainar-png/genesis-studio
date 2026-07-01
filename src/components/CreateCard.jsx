import "../styles/createcard.css";

function CreateCard({ title, description, icon }) {
  return (
    <div className="create-card">

      <div className="card-glow"></div>

      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="launch-btn">
        Launch →
      </button>

    </div>
  );
}

export default CreateCard;