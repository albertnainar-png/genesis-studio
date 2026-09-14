import { useMemo, useState } from "react";

const templates = {
  worship: {
    label: "Worship short",
    hook: "A 30-second visual journey from pressure to praise.",
    beats: ["Open with a human struggle", "Shift into a moment of surrender", "Land on a memorable praise line"],
    assets: ["9:16 key artwork", "30-second shot list", "Caption-ready voiceover", "Shorts title + hashtags"],
  },
  launch: {
    label: "Product launch",
    hook: "Make the audience feel the problem, then reveal the transformation.",
    beats: ["Name the friction", "Show the new possibility", "End with one clear action"],
    assets: ["Hero visual", "15-second teaser", "Feature storyboard", "Launch caption"],
  },
  story: {
    label: "Story concept",
    hook: "A character faces a meaningful choice and changes through it.",
    beats: ["Introduce the character", "Raise the central tension", "Resolve with a strong image"],
    assets: ["Story logline", "Scene outline", "Character direction", "Cover artwork prompt"],
  },
};

function ProjectBrief({ idea }) {
  const [template, setTemplate] = useState("worship");
  const [copied, setCopied] = useState(false);
  const data = useMemo(() => templates[template], [template]);
  const title = idea.trim() || "A new creative idea";
  const brief = `PROJECT: ${title}\nFORMAT: ${data.label}\n\nCREATIVE HOOK\n${data.hook}\n\nSTORY BEATS\n${data.beats.map((beat, i) => `${i + 1}. ${beat}`).join("\n")}\n\nDELIVERABLES\n${data.assets.map((asset) => `- ${asset}`).join("\n")}`;

  function copyBrief() {
    navigator.clipboard?.writeText(brief);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="project-brief">
      <div className="brief-topline">
        <div>
          <span className="eyebrow">ELINA OUTPUT</span>
          <h2>{title}</h2>
        </div>
        <button className="ghost-button" onClick={copyBrief}>{copied ? "Copied" : "Copy brief"}</button>
      </div>
      <div className="template-row">
        {Object.entries(templates).map(([key, value]) => (
          <button key={key} className={template === key ? "template active" : "template"} onClick={() => setTemplate(key)}>{value.label}</button>
        ))}
      </div>
      <div className="brief-grid">
        <div className="brief-card"><span className="eyebrow">Creative hook</span><p>{data.hook}</p></div>
        <div className="brief-card"><span className="eyebrow">Story beats</span><ol>{data.beats.map((beat) => <li key={beat}>{beat}</li>)}</ol></div>
        <div className="brief-card"><span className="eyebrow">Production pack</span><ul>{data.assets.map((asset) => <li key={asset}>{asset}</li>)}</ul></div>
      </div>
    </section>
  );
}

export default ProjectBrief;
