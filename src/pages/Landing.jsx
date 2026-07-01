import { Link } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing">

      <div className="landing-overlay"></div>

      <div className="landing-content">

        <div className="brand">

          <div className="brand-logo">
            G
          </div>

          <div>

            <h1>Genesis Studio</h1>

            <p>Powered by ELINA</p>

          </div>

        </div>

        <div className="hero-text">

          <span className="tag">
            THE CREATIVE OPERATING SYSTEM
          </span>

          <h2>
            One Idea.
            <br />
            Endless Creation.
          </h2>

          <p>
            Create cinematic videos, original music, artwork and AI voices
            from one unified creative workspace.
          </p>

          <div className="hero-buttons">

            <Link to="/dashboard" className="primary-btn">
              Enter Studio →
            </Link>

            <button className="secondary-btn">
              Watch Demo
            </button>

          </div>

        </div>

        <div className="stats">

          <div className="stat-card">
            <h3>4</h3>
            <span>Creative Studios</span>
          </div>

          <div className="stat-card">
            <h3>1</h3>
            <span>AI Assistant</span>
          </div>

          <div className="stat-card">
            <h3>∞</h3>
            <span>Creative Possibilities</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Landing;