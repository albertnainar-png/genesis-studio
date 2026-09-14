import { useState } from "react";
import ProjectBrief from "../components/ProjectBrief";
import "../styles/studio.css";

function Studio() {
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <main className="studio-shell">
      <nav className="studio-nav"><div className="brand">GENESIS <span>STUDIO</span></div><div className="status">● ELINA creative engine</div></nav>
      <section className="hero"><span className="eyebrow">One idea → complete creative project</span><h1>Make something worth sharing.</h1><p>Genesis Studio turns a rough idea into a focused creative brief, story direction, and production-ready deliverables. Built for creators who want momentum, not blank pages.</p></section>
      <section className="workspace">
        <div className="panel"><span className="eyebrow">Start with a thought</span><h2>What are we creating?</h2><p>Give ELINA a sentence, a theme, or a problem. The clearer the intent, the stronger the output.</p><textarea className="idea-input" value={idea} onChange={(event) => setIdea(event.target.value)} placeholder="A worship short about moving from fear to faith..."/><button className="primary-button" onClick={() => setSubmitted(idea)}>Generate creative brief ↗</button></div>
        {submitted ? <ProjectBrief idea={submitted}/> : <div className="empty-state"><span className="eyebrow">Your workspace</span><h2>Nothing generated yet.</h2><p>Enter an idea on the left. Your first creative project will appear here with a hook, story beats, and a production pack.</p></div>}
      </section>
    </main>
  );
}
export default Studio;
