import "../styles/createcard.css";

function CreateCard({ icon, title, description }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default CreateCard;