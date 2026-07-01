import "../styles/elina.css";

function ElinaPanel() {
  return (
    <aside className="elina-panel">

      <div className="elina-top">

        <div className="elina-badge">
          AI
        </div>

        <div>

          <h2>ELINA</h2>

          <p>Genesis AI Creative Assistant</p>

        </div>

      </div>

      <div className="status-card">

        <span className="status-dot"></span>

        <span>Online</span>

      </div>

      <div className="prompt-card">

        <label>What are we creating today?</label>

        <textarea
          placeholder="Describe your idea...

Example:

Create a cinematic worship video about David defeating Goliath.

Generate matching music and artwork."
        ></textarea>

      </div>

      <div className="quick-prompts">

        <button>Video</button>

        <button>Music</button>

        <button>Artwork</button>

        <button>Voice</button>

      </div>

      <button className="generate-button">

        Generate with ELINA

      </button>

    </aside>
  );
}

export default ElinaPanel;