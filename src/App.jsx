import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownToLine, ArrowRight, Bot, Check,
  Clapperboard, Copy, FolderKanban, Home, Image as ImageIcon, Menu,
  Mic2, Music2, Plus, Search, Settings2, Sparkles, WandSparkles
} from "lucide-react";
import "./App.css";

const MODES = [
  { id: "video", label: "Video", detail: "Stories, reels and cinematic films", icon: Clapperboard },
  { id: "music", label: "Music", detail: "Songs, scores and soundtracks", icon: Music2 },
  { id: "artwork", label: "Artwork", detail: "Covers, posters and visual worlds", icon: ImageIcon },
  { id: "voice", label: "Voice", detail: "Narration and spoken-word concepts", icon: Mic2 },
];

const starterIdeas = [
  { title: "A story worth sharing", type: "video", prompt: "A short cinematic story about choosing hope when life feels uncertain." },
  { title: "A sound for the moment", type: "music", prompt: "An uplifting cinematic worship track that builds from intimate piano to a powerful chorus." },
  { title: "A world in one frame", type: "artwork", prompt: "A surreal visual of light breaking through a storm over a quiet landscape." },
];

function makeBrief({ title, idea, type, audience, mood, length }) {
  const cleanIdea = idea.trim();
  const mode = MODES.find((item) => item.id === type)?.label || "Creative";
  const words = cleanIdea.split(/\s+/).filter(Boolean);
  const subject = words.length > 16 ? words.slice(0, 16).join(" ") + "…" : cleanIdea;
  const hooks = {
    video: "Open with a striking visual that makes the viewer feel the central tension immediately.",
    music: "Begin with a memorable melodic phrase; let the arrangement grow with the emotion.",
    artwork: "Build the composition around one unmistakable focal point and a clear visual metaphor.",
    voice: "Start with a human, conversational opening; let the message become more assured as it develops.",
  };
  const structures = {
    video: ["The opening image establishes the world and emotional question.", "The central moment introduces a choice, discovery or turning point.", "The ending delivers a memorable resolution and a final visual beat."],
    music: ["Verse: establish the feeling and central message.", "Chorus: express the main idea in a memorable, repeatable line.", "Bridge / outro: create the emotional lift and a satisfying finish."],
    artwork: ["Primary subject: make the central idea instantly recognisable.", "Environment: use light, colour and depth to reinforce the mood.", "Finishing details: keep supporting elements restrained and intentional."],
    voice: ["Opening: establish context and connect with the listener.", "Main message: deliver the core thought in clear, natural language.", "Close: finish with one memorable takeaway or call to reflection."],
  };
  return {
    title: title.trim() || `${mode} project`,
    type, audience, mood, length,
    concept: `Create a ${mode.toLowerCase()} experience around: ${subject}. Keep the central idea clear, emotionally engaging and appropriate for ${audience.toLowerCase()}.`,
    direction: `Mood: ${mood}. Audience: ${audience}. Format: ${length}. Prioritise a strong central idea, purposeful pacing and a cohesive visual or sonic identity.`,
    hook: hooks[type],
    beats: structures[type],
    deliverables: type === "video"
      ? ["Creative brief and shot direction", "Opening hook and scene-by-scene outline", "Suggested title, caption and thumbnail direction"]
      : type === "music"
      ? ["Song concept and lyrical direction", "Verse / chorus / bridge structure", "Sound palette and production notes"]
      : type === "artwork"
      ? ["Art direction and composition notes", "Colour palette and lighting direction", "Generation-ready visual prompt"]
      : ["Voice concept and delivery direction", "Structured narration outline", "Pacing, tone and emphasis notes"],
    rawIdea: cleanIdea,
  };
}

function readProjects() {
  try { return JSON.parse(localStorage.getItem("genesis-projects") || "[]"); }
  catch { return []; }
}

function App() {
  const [projects, setProjects] = useState(readProjects);
  const [view, setView] = useState("dashboard");
  const [activeMode, setActiveMode] = useState("video");
  const [query, setQuery] = useState("");
  const [idea, setIdea] = useState("");
  const [title, setTitle] = useState("");
  const [audience, setAudience] = useState("General audience");
  const [mood, setMood] = useState("Cinematic and uplifting");
  const [length, setLength] = useState("Short-form (under 60 seconds)");
  const [activeProject, setActiveProject] = useState(null);
  const [notice, setNotice] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    localStorage.setItem("genesis-projects", JSON.stringify(projects));
  }, [projects]);

  const filteredProjects = useMemo(() => projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase()) ||
    project.rawIdea.toLowerCase().includes(query.toLowerCase())
  ), [projects, query]);

  const flash = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };

  const startNew = (mode = "video", seed = "") => {
    setActiveMode(mode);
    setIdea(seed);
    setTitle("");
    setActiveProject(null);
    setView("create");
    setMobileNav(false);
  };

  const createProject = (event) => {
    event.preventDefault();
    if (!idea.trim()) return;
    const brief = makeBrief({ title, idea, type: activeMode, audience, mood, length });
    const project = { id: Date.now().toString(), ...brief, createdAt: new Date().toISOString() };
    setProjects((current) => [project, ...current]);
    setActiveProject(project);
    setView("project");
    flash("Your creative brief is ready.");
  };

  const openProject = (project) => {
    setActiveProject(project);
    setView("project");
  };

  const copyBrief = async (project = activeProject) => {
    if (!project) return;
    const text = formatBrief(project);
    try {
      await navigator.clipboard.writeText(text);
      flash("Brief copied to clipboard.");
    } catch {
      flash("Clipboard access is unavailable in this browser.");
    }
  };

  const exportBrief = (project = activeProject) => {
    if (!project) return;
    const blob = new Blob([formatBrief(project)], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "genesis-brief"}.md`;
    link.click();
    URL.revokeObjectURL(url);
    flash("Brief exported.");
  };

  const removeProject = (id) => {
    setProjects((current) => current.filter((project) => project.id !== id));
    setActiveProject(null);
    setView("projects");
    flash("Project removed.");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="mobile-menu icon-button" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation"><Menu size={19} /></button>
        <button className="brand" onClick={() => setView("dashboard")}>
          <span className="brand-mark"><Sparkles size={19} /></span>
          <span><strong>GENESIS</strong><small>CREATIVE STUDIO</small></span>
        </button>
        <div className="topbar-center"><span className="status-dot" /> ELINA workspace <span className="topbar-divider">/</span> <span className="muted">Personal workspace</span></div>
        <div className="topbar-right"><span className="avatar">A</span></div>
      </header>

      <div className="app-body">
        <aside className={`sidebar ${mobileNav ? "sidebar-open" : ""}`}>
          <div className="workspace-label">WORKSPACE</div>
          <nav>
            <button className={view === "dashboard" ? "nav-item active" : "nav-item"} onClick={() => { setView("dashboard"); setMobileNav(false); }}><Home size={17} /> Overview</button>
            <button className={view === "projects" || view === "project" ? "nav-item active" : "nav-item"} onClick={() => { setView("projects"); setMobileNav(false); }}><FolderKanban size={17} /> My projects <span className="nav-count">{projects.length}</span></button>
          </nav>
          <div className="workspace-label studio-label">CREATE</div>
          {MODES.map((mode) => {
            const Icon = mode.icon;
            return <button key={mode.id} className={view === "create" && activeMode === mode.id ? "nav-item active" : "nav-item"} onClick={() => startNew(mode.id)}><Icon size={17} /> {mode.label} Studio</button>;
          })}
          <div className="sidebar-bottom">
            <div className="elina-mini"><span className="elina-avatar"><Bot size={18} /></span><div><strong>ELINA</strong><small>Creative producer</small></div><span className="online-dot" /></div>
            <p>From one idea to a complete creative direction.</p>
            <button className="nav-item settings-link" onClick={() => flash("Workspace settings are coming in a future release.")}><Settings2 size={17} /> Settings</button>
          </div>
        </aside>

        <main className="main-content">
          {view === "dashboard" && <Dashboard projects={projects} onCreate={startNew} onOpen={openProject} onViewProjects={() => setView("projects")} />}
          {view === "projects" && <Projects projects={filteredProjects} query={query} setQuery={setQuery} onOpen={openProject} onCreate={() => startNew()} />}
          {view === "create" && <CreateView mode={activeMode} setMode={setActiveMode} idea={idea} setIdea={setIdea} title={title} setTitle={setTitle} audience={audience} setAudience={setAudience} mood={mood} setMood={setMood} length={length} setLength={setLength} onSubmit={createProject} />}
          {view === "project" && activeProject && <ProjectView project={activeProject} onCopy={copyBrief} onExport={exportBrief} onDelete={removeProject} onBack={() => setView("projects")} />}
        </main>
      </div>
      {notice && <div className="toast"><Check size={16} /> {notice}</div>}
    </div>
  );
}

function Dashboard({ projects, onCreate, onOpen, onViewProjects }) {
  return <div className="page-wrap">
    <div className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-line" /> YOUR CREATIVE WORKSPACE</div><h1>Make something <span>meaningful.</span></h1><p className="page-subtitle">Bring your idea. ELINA helps shape the creative direction.</p></div><button className="primary-button" onClick={() => onCreate("video")}><Plus size={17} /> New project</button></div>
    <section className="hero-panel">
      <div className="hero-copy"><div className="hero-kicker"><Sparkles size={14} /> INTRODUCING YOUR CREATIVE PRODUCER</div><h2>One idea.<br /><em>Endless creation.</em></h2><p>Turn a starting thought into a focused brief, a creative direction and a practical production plan — all in one workspace.</p><button className="light-button" onClick={() => onCreate("video")}>Start with an idea <ArrowRight size={16} /></button></div>
      <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="core"><Sparkles size={42} /></div><span className="orbit-tag tag-one">IDEA</span><span className="orbit-tag tag-two">STORY</span><span className="orbit-tag tag-three">CREATE</span></div>
      <div className="hero-foot"><span>01 / IMAGINE</span><span>02 / SHAPE</span><span>03 / CREATE</span></div>
    </section>
    <section className="section-block"><div className="section-heading"><div><div className="eyebrow">CHOOSE YOUR CANVAS</div><h2>Creative studios</h2></div></div><div className="studio-grid">{MODES.map((mode) => { const Icon = mode.icon; return <button className="studio-card" key={mode.id} onClick={() => onCreate(mode.id)}><span className={`studio-icon ${mode.id}`}><Icon size={21} /></span><span className="studio-card-title">{mode.label} Studio</span><span className="studio-card-desc">{mode.detail}</span><span className="card-arrow"><ArrowRight size={16} /></span></button>; })}</div></section>
    <section className="section-block recent-block"><div className="section-heading"><div><div className="eyebrow">YOUR WORK IN PROGRESS</div><h2>Recent projects</h2></div><button className="text-button" onClick={onViewProjects}>View all <ArrowRight size={15} /></button></div>
      {projects.length ? <div className="project-list">{projects.slice(0, 3).map((project) => <ProjectRow key={project.id} project={project} onClick={() => onOpen(project)} />)}</div> : <div className="empty-state"><div className="empty-icon"><FolderKanban size={22} /></div><strong>Your next idea starts here.</strong><p>Create your first project and ELINA will shape it into a creative brief.</p><button className="outline-button" onClick={() => onCreate("video")}><Plus size={15} /> Create first project</button></div>}
    </section>
    <div className="disclosure"><Bot size={17} /><span><strong>ELINA is in preview.</strong> This version creates structured creative briefs locally. Direct image, music, voice and video generation are not connected yet.</span></div>
  </div>;
}

function Projects({ projects, query, setQuery, onOpen, onCreate }) {
  return <div className="page-wrap"><div className="page-header"><div><div className="eyebrow">YOUR WORKSPACE</div><h1>My projects</h1><p className="page-subtitle">Every idea you have shaped with ELINA.</p></div><button className="primary-button" onClick={onCreate}><Plus size={17} /> New project</button></div><div className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your projects..." /></div>{projects.length ? <div className="project-list full-list">{projects.map((project) => <ProjectRow key={project.id} project={project} onClick={() => onOpen(project)} />)}</div> : <div className="empty-state"><div className="empty-icon"><FolderKanban size={22} /></div><strong>No matching projects yet.</strong><p>Try another search or start a new creative brief.</p><button className="outline-button" onClick={onCreate}><Plus size={15} /> New project</button></div>}</div>;
}

function CreateView({ mode, setMode, idea, setIdea, title, setTitle, audience, setAudience, mood, setMood, length, setLength, onSubmit }) {
  const selected = MODES.find((item) => item.id === mode) || MODES[0];
  const Icon = selected.icon;
  return <div className="page-wrap create-wrap"><div className="backline"><span className="eyebrow">NEW CREATIVE PROJECT</span><span className="step-label">STEP 01 <i /> CREATIVE BRIEF</span></div><h1>Let's shape your <span>idea.</span></h1><p className="page-subtitle">Start with a rough thought. It doesn't need to be perfect.</p><form className="create-layout" onSubmit={onSubmit}><div className="form-panel"><label className="field-label">What are we creating?</label><div className="mode-picker">{MODES.map((item) => { const ModeIcon = item.icon; return <button type="button" key={item.id} className={mode === item.id ? "mode-option selected" : "mode-option"} onClick={() => setMode(item.id)}><ModeIcon size={18} /><span>{item.label}</span></button>; })}</div><label className="field-label" htmlFor="project-title">Project name <span className="optional">OPTIONAL</span></label><input id="project-title" className="text-input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Give your project a name" /><label className="field-label" htmlFor="project-idea">Describe your idea <span className="required">REQUIRED</span></label><textarea id="project-idea" className="idea-input" value={idea} onChange={(event) => setIdea(event.target.value)} placeholder="What's the story, message or feeling you want to create? Add any details you already have in mind..." required rows={7} /><div className="starter-row"><span>NEED A STARTING POINT?</span>{starterIdeas.map((starter) => <button type="button" key={starter.title} onClick={() => { setMode(starter.type); setIdea(starter.prompt); }}>{starter.title}</button>)}</div><div className="field-grid"><div><label className="field-label" htmlFor="audience">Who is it for?</label><select id="audience" className="text-input" value={audience} onChange={(event) => setAudience(event.target.value)}><option>General audience</option><option>Christian audience</option><option>Young adults</option><option>Creators and artists</option><option>Professional audience</option><option>Children and families</option></select></div><div><label className="field-label" htmlFor="mood">Creative mood</label><select id="mood" className="text-input" value={mood} onChange={(event) => setMood(event.target.value)}><option>Cinematic and uplifting</option><option>Bold and energetic</option><option>Intimate and emotional</option><option>Minimal and thoughtful</option><option>Dark and atmospheric</option><option>Playful and colourful</option></select></div></div><div><label className="field-label" htmlFor="length">Preferred format</label><select id="length" className="text-input" value={length} onChange={(event) => setLength(event.target.value)}><option>Short-form (under 60 seconds)</option><option>Mid-form (1–5 minutes)</option><option>Long-form (5+ minutes)</option><option>Flexible / not decided</option><option>Single image / artwork</option><option>Full song</option></select></div><button className="primary-button generate-brief" type="submit" disabled={!idea.trim()}><WandSparkles size={17} /> Shape my creative brief <ArrowRight size={16} /></button><p className="privacy-note">Your draft is saved in this browser. No external AI service or paid API is used in this preview.</p></div><aside className="elina-side"><div className="elina-heading"><span className="elina-avatar large"><Bot size={22} /></span><div><strong>ELINA</strong><small>YOUR CREATIVE PRODUCER</small></div><span className="online-dot" /></div><div className="elina-message"><span className="message-label">A NOTE FROM ELINA</span><p>Every great project begins somewhere. Tell me what you're imagining — even if it's just a feeling — and we'll give it shape.</p></div><div className="elina-tip"><Sparkles size={16} /><span><strong>Try this:</strong> Tell me the message you want people to remember, the emotion you want them to feel, or the story you want to tell.</span></div><div className="side-mode"><Icon size={16} /><span>Selected studio</span><strong>{selected.label}</strong></div></aside></form></div>;
}

function ProjectView({ project, onCopy, onExport, onDelete, onBack }) {
  const mode = MODES.find((item) => item.id === project.type) || MODES[0];
  const Icon = mode.icon;
  return <div className="page-wrap project-detail"><div className="backline"><button className="back-button" onClick={onBack}>← All projects</button><span className="eyebrow">CREATIVE BRIEF</span></div><div className="project-hero"><span className={`studio-icon ${project.type}`}><Icon size={21} /></span><div><div className="eyebrow">{mode.label.toUpperCase()} PROJECT</div><h1>{project.title}</h1><p className="page-subtitle">Created {new Date(project.createdAt).toLocaleDateString()}</p></div><div className="project-actions"><button className="outline-button" onClick={() => onCopy(project)}><Copy size={15} /> Copy</button><button className="primary-button" onClick={() => onExport(project)}><ArrowDownToLine size={16} /> Export brief</button></div></div><div className="brief-banner"><Bot size={20} /><div><strong>ELINA has shaped your idea.</strong><p>Review this creative direction, then export it to use with your preferred production tools.</p></div></div><div className="brief-grid"><section className="brief-card wide"><div className="brief-card-head"><span>01</span><h3>The concept</h3></div><p>{project.concept}</p><div className="brief-meta"><span>Audience <strong>{project.audience}</strong></span><span>Mood <strong>{project.mood}</strong></span><span>Format <strong>{project.length}</strong></span></div></section><section className="brief-card"><div className="brief-card-head"><span>02</span><h3>Opening hook</h3></div><p>{project.hook}</p></section><section className="brief-card"><div className="brief-card-head"><span>03</span><h3>Creative direction</h3></div><p>{project.direction}</p></section><section className="brief-card wide"><div className="brief-card-head"><span>04</span><h3>Story / production beats</h3></div><ol className="beat-list">{project.beats.map((beat, index) => <li key={beat}><span>{String(index + 1).padStart(2, "0")}</span>{beat}</li>)}</ol></section><section className="brief-card wide"><div className="brief-card-head"><span>05</span><h3>Deliverables</h3></div><ul className="deliverable-list">{project.deliverables.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul></section></div><div className="detail-footer"><span>ELINA PREVIEW · CREATIVE DIRECTION ONLY</span><button className="danger-link" onClick={() => onDelete(project.id)}>Delete project</button></div></div>;
}

function ProjectRow({ project, onClick }) {
  const mode = MODES.find((item) => item.id === project.type) || MODES[0];
  const Icon = mode.icon;
  return <button className="project-row" onClick={onClick}><span className={`studio-icon small ${project.type}`}><Icon size={17} /></span><span className="project-row-main"><strong>{project.title}</strong><small>{project.rawIdea}</small></span><span className="project-type">{mode.label}</span><span className="project-date">{new Date(project.createdAt).toLocaleDateString()}</span><ArrowRight size={16} className="row-arrow" /></button>;
}

function formatBrief(project) {
  const mode = MODES.find((item) => item.id === project.type)?.label || "Creative";
  return `# ${project.title}\n\n**Genesis Studio · ELINA Creative Brief**\n**Studio:** ${mode}\n**Audience:** ${project.audience}\n**Mood:** ${project.mood}\n**Format:** ${project.length}\n\n## Original idea\n${project.rawIdea}\n\n## Concept\n${project.concept}\n\n## Creative direction\n${project.direction}\n\n## Opening hook\n${project.hook}\n\n## Story / production beats\n${project.beats.map((beat, index) => `${index + 1}. ${beat}`).join("\n")}\n\n## Deliverables\n${project.deliverables.map((item) => `- [ ] ${item}`).join("\n")}\n\n---\nGenerated locally by Genesis Studio preview. No external generation service was used.\n`;
}

export default App;
