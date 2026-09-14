import { useNavigate } from "react-router-dom";
import "../styles/studio.css";

function Landing() {
  const navigate = useNavigate();
  return <main className="studio-shell"><nav className="studio-nav"><div className="brand">GENESIS <span>STUDIO</span></div><div className="status">● ELINA creative engine</div></nav><section className="hero"><span className="eyebrow">AI creative command center</span><h1>From one idea<br />to something real.</h1><p>Genesis Studio helps creators move from a blank page to a focused creative brief, story direction, and production-ready plan.</p><button className="primary-button" onClick={() => navigate("/studio")}>Begin creating ↗</button></section></main>;
}
export default Landing;
