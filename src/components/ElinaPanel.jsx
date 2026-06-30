import "../styles/elina.css";

function ElinaPanel() {
  return (
    <div className="elina-panel">

      <h2>🤖 ELINA</h2>

      <p>Describe what you'd like to create.</p>

      <textarea
        placeholder="Create a cinematic worship video about David facing Goliath..."
      ></textarea>

      <button>Generate</button>

    </div>
  );
}

export default ElinaPanel;