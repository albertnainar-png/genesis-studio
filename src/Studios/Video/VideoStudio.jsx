import { useEffect, useMemo, useRef, useState } from "react";
import {
  AudioLines,
  BrainCircuit,
  CheckCircle2,
  Clapperboard,
  Download,
  FileVideo,
  Gauge,
  ImagePlus,
  Infinity as InfinityIcon,
  Layers3,
  Mic2,
  Pause,
  Play,
  Plus,
  RadioTower,
  Rocket,
  RotateCcw,
  ScanLine,
  Settings2,
  Sparkles,
  Square,
  Upload,
  Video,
  Wand2,
} from "lucide-react";

import "./styles/video.css";

const DEFAULT_PROMPT =
  "A future-facing cinematic launch sequence inside an alien NASA command deck, luminous holograms, impossible spacecraft engineering, human emotion, orbital sunrise, ultra realistic.";

const sceneColors = [
  "scene-cyan",
  "scene-violet",
  "scene-lime",
  "scene-amber",
  "scene-rose",
  "scene-blue",
];

const cameraMoves = [
  "Orbital tracking shot",
  "Zero-gravity dolly",
  "Macro lens scan",
  "Thermal satellite sweep",
  "Deep-space crane move",
  "Handheld documentary pulse",
];

const visualBeats = [
  "holographic waveform grid",
  "reactive starfield tunnel",
  "liquid metal nebula",
  "solar flare particle field",
  "alien glyph control room",
  "planetary horizon scan",
];

function formatDuration(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return "No limit";
  }

  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor(totalSeconds / 3600);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function buildScenes({ prompt, duration, mode, audioName, videoName }) {
  const runtime = Number.isFinite(duration) && duration > 0 ? duration : 180;
  const sceneCount = Math.max(4, Math.ceil(runtime / 42));
  const averageDuration = runtime / sceneCount;
  const words = prompt
    .split(/\s+/)
    .map((word) => word.replace(/[^a-z0-9]/gi, ""))
    .filter(Boolean);

  return Array.from({ length: sceneCount }, (_, index) => {
    const keyword = words[index % Math.max(words.length, 1)] || "Genesis";
    const start = index * averageDuration;
    const isAudioDriven = mode !== "prompt";

    return {
      id: crypto.randomUUID(),
      number: index + 1,
      title: isAudioDriven ? `Beat Chamber ${index + 1}` : `Sequence ${index + 1}`,
      start,
      duration: averageDuration,
      camera: cameraMoves[index % cameraMoves.length],
      color: sceneColors[index % sceneColors.length],
      description: isAudioDriven
        ? `ELINA maps ${audioName || "the audio"} into a ${visualBeats[index % visualBeats.length]} with ${keyword.toLowerCase()} energy.`
        : `ELINA visualizes ${keyword.toLowerCase()} through ${visualBeats[index % visualBeats.length]} and cinematic mission lighting.`,
      layer: videoName ? `Video layer: ${videoName}` : "Generated neural video layer",
      status: index < 2 ? "Ready" : "Synthesized",
    };
  });
}

export default function VideoStudio() {
  const audioInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const renderTimerRef = useRef(null);

  const [project, setProject] = useState({
    name: "Genesis OS Film",
    genre: "Alien NASA",
    style: "Photorealistic quantum cinema",
    prompt: DEFAULT_PROMPT,
  });
  const [settings, setSettings] = useState({
    resolution: "8K",
    fps: "60",
    aspectRatio: "16:9",
    format: "MP4 H.265",
    quality: "Ultra",
    renderMode: "Unlimited timeline",
  });
  const [mode, setMode] = useState("hybrid");
  const [activeWorkspace, setActiveWorkspace] = useState("create");
  const [audio, setAudio] = useState({
    file: null,
    name: "",
    url: "",
    duration: 0,
    manualDuration: "",
    visualizer: "Spectral Nebula",
    motion: "Beat reactive camera",
    captions: true,
  });
  const [videoLayer, setVideoLayer] = useState({
    name: "",
    url: "",
    blend: "Hologram composite",
  });
  const [scenes, setScenes] = useState(() =>
    buildScenes({
      prompt: DEFAULT_PROMPT,
      duration: 180,
      mode: "hybrid",
      audioName: "",
      videoName: "",
    }),
  );
  const [renderJob, setRenderJob] = useState({
    status: "Ready",
    progress: 0,
    message: "ELINA kernel online.",
  });

  const runtime = useMemo(() => {
    const manualSeconds = Number(audio.manualDuration) * 60;
    if (Number.isFinite(audio.duration) && audio.duration > 0) return audio.duration;
    if (Number.isFinite(manualSeconds) && manualSeconds > 0) return manualSeconds;
    return scenes.reduce((total, scene) => total + scene.duration, 0);
  }, [audio.duration, audio.manualDuration, scenes]);

  const systemReadout = useMemo(
    () => [
      { label: "Runtime", value: formatDuration(runtime), icon: InfinityIcon },
      { label: "Scenes", value: scenes.length, icon: Clapperboard },
      { label: "FPS", value: `${settings.fps}`, icon: Gauge },
      { label: "ELINA", value: renderJob.status, icon: BrainCircuit },
    ],
    [runtime, scenes.length, settings.fps, renderJob.status],
  );

  const workspaces = [
    { id: "create", label: "Create", icon: Wand2 },
    { id: "audio", label: "Audio", icon: AudioLines },
    { id: "storyboard", label: "Storyboard", icon: Clapperboard },
    { id: "render", label: "Render", icon: Rocket },
  ];

  useEffect(() => {
    return () => {
      if (audio.url) URL.revokeObjectURL(audio.url);
      if (videoLayer.url) URL.revokeObjectURL(videoLayer.url);
      window.clearInterval(renderTimerRef.current);
    };
  }, [audio.url, videoLayer.url]);

  useEffect(() => {
    if (renderJob.status !== "Rendering") return undefined;

    renderTimerRef.current = window.setInterval(() => {
      setRenderJob((job) => {
        const nextProgress = Math.min(100, job.progress + 4);
        return {
          status: nextProgress >= 100 ? "Completed" : "Rendering",
          progress: nextProgress,
          message:
            nextProgress >= 100
              ? "Render package sealed. Export manifest is ready."
              : "Synthesizing scenes, audio, camera paths, and neural overlays.",
        };
      });
    }, 520);

    return () => window.clearInterval(renderTimerRef.current);
  }, [renderJob.status]);

  const updateProject = (field, value) => {
    setProject((current) => ({ ...current, [field]: value }));
  };

  const updateSettings = (field, value) => {
    setSettings((current) => ({ ...current, [field]: value }));
  };

  const generateStoryboard = () => {
    const nextScenes = buildScenes({
      prompt: project.prompt,
      duration: runtime,
      mode,
      audioName: audio.name,
      videoName: videoLayer.name,
    });
    setScenes(nextScenes);
    setRenderJob({
      status: "Ready",
      progress: 0,
      message: "Storyboard rebuilt by ELINA.",
    });
  };

  const improvePrompt = () => {
    setProject((current) => ({
      ...current,
      prompt: `${current.prompt} Add NASA mission-control precision, alien material science, emotionally grounded characters, volumetric light, predictive camera choreography, and audio-reactive holographic interfaces.`,
    }));
  };

  const addScene = () => {
    setScenes((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        number: current.length + 1,
        title: `Freeform Sequence ${current.length + 1}`,
        start: runtime,
        duration: 45,
        camera: "Manual director shot",
        color: sceneColors[current.length % sceneColors.length],
        description: "A user-added scene slot ready for ELINA direction.",
        layer: "Generated neural video layer",
        status: "Draft",
      },
    ]);
  };

  const handleAudioUpload = (event) => {
    const [file] = event.target.files;
    if (!file) return;

    if (audio.url) URL.revokeObjectURL(audio.url);
    const url = URL.createObjectURL(file);
    const probe = document.createElement("audio");

    probe.preload = "metadata";
    probe.src = url;
    probe.onloadedmetadata = () => {
      setAudio((current) => ({
        ...current,
        file,
        name: file.name,
        url,
        duration: Number.isFinite(probe.duration) ? probe.duration : 0,
      }));
      setMode("audio");
    };
    probe.onerror = () => {
      setAudio((current) => ({
        ...current,
        file,
        name: file.name,
        url,
        duration: 0,
      }));
      setMode("audio");
    };
  };

  const handleVideoUpload = (event) => {
    const [file] = event.target.files;
    if (!file) return;

    if (videoLayer.url) URL.revokeObjectURL(videoLayer.url);
    setVideoLayer((current) => ({
      ...current,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
  };

  const startRender = () => {
    setRenderJob({
      status: "Rendering",
      progress: 1,
      message: "ELINA render engines engaged.",
    });
  };

  const pauseRender = () => {
    setRenderJob((job) => ({
      ...job,
      status: job.status === "Rendering" ? "Paused" : "Rendering",
      message: job.status === "Rendering" ? "Render paused." : "Render resumed.",
    }));
  };

  const stopRender = () => {
    setRenderJob({
      status: "Ready",
      progress: 0,
      message: "Render sequence reset.",
    });
  };

  const downloadManifest = () => {
    const manifest = {
      project,
      mode,
      settings,
      audio: {
        name: audio.name,
        duration: runtime,
        visualizer: audio.visualizer,
        motion: audio.motion,
        captions: audio.captions,
      },
      videoLayer: {
        name: videoLayer.name,
        blend: videoLayer.blend,
      },
      scenes,
      renderJob,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(manifest, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${project.name.replace(/\s+/g, "-").toLowerCase()}-elina-video-manifest.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="video-os">
      <section className="mission-hero">
        <div className="mission-copy">
          <span className="eyebrow">
            <RadioTower size={16} />
            ELINA Operating System
          </span>
          <h1>Genesis Video Command</h1>
          <p>
            Build prompt films, audio-reactive videos, and layered cinematic exports from
            one mission console. Runtime is unlimited; ELINA follows the length of your
            audio or your manual timeline.
          </p>
        </div>

        <div className="mission-actions">
          <button className="icon-button primary" onClick={generateStoryboard} title="Generate storyboard">
            <Sparkles size={18} />
            Generate
          </button>
          <button className="icon-button" onClick={addScene} title="Add scene">
            <Plus size={18} />
            Scene
          </button>
          <button className="icon-button" onClick={downloadManifest} title="Download ELINA manifest">
            <Download size={18} />
            Export
          </button>
        </div>
      </section>

      <section className="readout-grid">
        {systemReadout.map((item) => {
          const Icon = item.icon;
          return (
            <div className="readout-card" key={item.label}>
              <Icon size={20} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          );
        })}
      </section>

      <nav className="workspace-tabs" aria-label="Video studio workspaces">
        {workspaces.map((workspace) => {
          const Icon = workspace.icon;

          return (
            <button
              className={activeWorkspace === workspace.id ? "active" : ""}
              key={workspace.id}
              onClick={() => setActiveWorkspace(workspace.id)}
              type="button"
            >
              <Icon size={18} />
              {workspace.label}
            </button>
          );
        })}
      </nav>

      <section className={`console-grid workspace-${activeWorkspace}`}>
        <div className="panel director-panel">
          <div className="panel-title">
            <Wand2 size={20} />
            <div>
              <h2>Director Kernel</h2>
              <p>Prompt, genre, and ELINA creative mode.</p>
            </div>
          </div>

          <div className="mode-tabs" role="tablist" aria-label="Video creation mode">
            {[
              ["hybrid", "Hybrid"],
              ["prompt", "Prompt"],
              ["audio", "Audio to Video"],
            ].map(([value, label]) => (
              <button
                className={mode === value ? "active" : ""}
                key={value}
                onClick={() => setMode(value)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>

          <label>
            Project Name
            <input value={project.name} onChange={(event) => updateProject("name", event.target.value)} />
          </label>

          <div className="two-column">
            <label>
              Genre
              <select value={project.genre} onChange={(event) => updateProject("genre", event.target.value)}>
                <option>Alien NASA</option>
                <option>Cinematic Documentary</option>
                <option>Worship Film</option>
                <option>Cybernetic Drama</option>
                <option>Mythic Space Opera</option>
              </select>
            </label>
            <label>
              Visual Style
              <select value={project.style} onChange={(event) => updateProject("style", event.target.value)}>
                <option>Photorealistic quantum cinema</option>
                <option>NASA mission realism</option>
                <option>Alien crystal technology</option>
                <option>Volumetric anime film</option>
                <option>IMAX documentary grade</option>
              </select>
            </label>
          </div>

          <label>
            Director's Vision
            <textarea
              rows={8}
              value={project.prompt}
              onChange={(event) => updateProject("prompt", event.target.value)}
            />
          </label>

          <div className="button-row">
            <button className="icon-button primary" onClick={generateStoryboard}>
              <BrainCircuit size={18} />
              Ask ELINA
            </button>
            <button className="icon-button" onClick={improvePrompt}>
              <Sparkles size={18} />
              Upgrade Prompt
            </button>
          </div>
        </div>

        <div className="panel preview-panel">
          <div className="panel-title">
            <ScanLine size={20} />
            <div>
              <h2>Live Neural Preview</h2>
              <p>{renderJob.message}</p>
            </div>
          </div>

          <div className="preview-window">
            {videoLayer.url ? (
              <video src={videoLayer.url} muted loop playsInline controls />
            ) : (
              <div className="preview-core">
                <div className="orbital-ring" />
                <Rocket size={58} />
                <strong>{audio.name ? "Audio-reactive video armed" : "Awaiting mission media"}</strong>
                <span>{audio.name || "Upload audio, write a prompt, or combine both."}</span>
              </div>
            )}
          </div>

          {audio.url && (
            <audio className="audio-player" src={audio.url} controls />
          )}

          <div className="transport-bar">
            <button className="round-button" onClick={startRender} title="Start render">
              <Play size={18} />
            </button>
            <button className="round-button" onClick={pauseRender} title="Pause render">
              <Pause size={18} />
            </button>
            <button className="round-button" onClick={stopRender} title="Stop render">
              <Square size={18} />
            </button>
            <div className="progress-track">
              <span style={{ width: `${renderJob.progress}%` }} />
            </div>
            <strong>{renderJob.progress}%</strong>
          </div>
        </div>

        <div className="panel audio-panel">
          <div className="panel-title">
            <AudioLines size={20} />
            <div>
              <h2>Audio to Video</h2>
              <p>Convert any song, voice, score, or sermon into a visual sequence.</p>
            </div>
          </div>

          <input ref={audioInputRef} type="file" accept="audio/*" onChange={handleAudioUpload} hidden />
          <input ref={videoInputRef} type="file" accept="video/*,image/*" onChange={handleVideoUpload} hidden />

          <div className="drop-zone" onClick={() => audioInputRef.current?.click()} role="button" tabIndex={0}>
            <Upload size={22} />
            <strong>{audio.name || "Upload audio"}</strong>
            <span>{audio.name ? formatDuration(audio.duration) : "No duration cap. ELINA reads the full file."}</span>
          </div>

          <div className="two-column">
            <label>
              Manual Runtime (minutes)
              <input
                type="number"
                min="0"
                placeholder="Optional"
                value={audio.manualDuration}
                onChange={(event) => setAudio((current) => ({ ...current, manualDuration: event.target.value }))}
              />
            </label>
            <label>
              Visualizer
              <select
                value={audio.visualizer}
                onChange={(event) => setAudio((current) => ({ ...current, visualizer: event.target.value }))}
              >
                <option>Spectral Nebula</option>
                <option>Mission Waveform</option>
                <option>Alien Glyph Pulse</option>
                <option>Planetary Equalizer</option>
              </select>
            </label>
          </div>

          <label>
            Audio Motion
            <select value={audio.motion} onChange={(event) => setAudio((current) => ({ ...current, motion: event.target.value }))}>
              <option>Beat reactive camera</option>
              <option>Voice intensity zoom</option>
              <option>Bass orbit propulsion</option>
              <option>Ambient drift</option>
            </select>
          </label>

          <button className="media-button" onClick={() => videoInputRef.current?.click()}>
            <ImagePlus size={18} />
            {videoLayer.name || "Add video/image layer"}
          </button>

          <label>
            Video Layer Blend
            <select value={videoLayer.blend} onChange={(event) => setVideoLayer((current) => ({ ...current, blend: event.target.value }))}>
              <option>Hologram composite</option>
              <option>Full background video</option>
              <option>Neural overlay</option>
              <option>Light-map projection</option>
            </select>
          </label>

          <label className="toggle-line">
            <input
              type="checkbox"
              checked={audio.captions}
              onChange={(event) => setAudio((current) => ({ ...current, captions: event.target.checked }))}
            />
            Auto-generate beat markers and captions
          </label>
        </div>

        <div className="panel settings-panel">
          <div className="panel-title">
            <Settings2 size={20} />
            <div>
              <h2>Render Matrix</h2>
              <p>Future-grade export settings.</p>
            </div>
          </div>

          <div className="settings-grid">
            {[
              ["resolution", "Resolution", ["1080p", "4K", "8K", "12K Experimental"]],
              ["fps", "Frame Rate", ["24", "30", "60", "120"]],
              ["aspectRatio", "Aspect", ["16:9", "9:16", "1:1", "21:9"]],
              ["format", "Format", ["MP4 H.265", "MP4 H.264", "MOV ProRes", "Image Sequence"]],
              ["quality", "Quality", ["Draft", "Balanced", "Ultra", "Orbital Master"]],
              ["renderMode", "Timeline", ["Unlimited timeline", "Loopable", "Short-form", "Feature film"]],
            ].map(([key, label, options]) => (
              <label key={key}>
                {label}
                <select value={settings[key]} onChange={(event) => updateSettings(key, event.target.value)}>
                  {options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </div>

        <div className="panel storyboard-panel">
          <div className="panel-title">
            <Clapperboard size={20} />
            <div>
              <h2>Storyboard</h2>
              <p>Generated scene intelligence from prompt, audio, and video layers.</p>
            </div>
          </div>

          <div className="scene-grid">
            {scenes.map((scene) => (
              <article className="scene-card" key={scene.id}>
                <div className={`scene-thumb ${scene.color}`}>
                  <FileVideo size={26} />
                  <span>{formatDuration(scene.start)}</span>
                </div>
                <div className="scene-body">
                  <div>
                    <strong>{scene.title}</strong>
                    <small>{formatDuration(scene.duration)} / {scene.camera}</small>
                  </div>
                  <p>{scene.description}</p>
                  <span>{scene.layer}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel timeline-panel">
          <div className="panel-title">
            <Layers3 size={20} />
            <div>
              <h2>Unlimited Timeline</h2>
              <p>Total runtime: {formatDuration(runtime)}</p>
            </div>
          </div>

          <div className="timeline-strip">
            {scenes.map((scene) => (
              <div
                className={`timeline-clip ${scene.color}`}
                key={scene.id}
                style={{ flexGrow: Math.max(1, scene.duration) }}
                title={`${scene.title} ${formatDuration(scene.duration)}`}
              >
                <span>{scene.number}</span>
              </div>
            ))}
          </div>

          <div className="render-card">
            <div>
              <Mic2 size={18} />
              <span>Audio Sync</span>
              <strong>{audio.name ? "Locked" : "Waiting"}</strong>
            </div>
            <div>
              <Video size={18} />
              <span>Video Layer</span>
              <strong>{videoLayer.name ? "Loaded" : "Generated"}</strong>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Export</span>
              <strong>{renderJob.status}</strong>
            </div>
          </div>

          <div className="button-row">
            <button className="icon-button primary" onClick={startRender}>
              <Rocket size={18} />
              Render Video
            </button>
            <button className="icon-button" onClick={stopRender}>
              <RotateCcw size={18} />
              Reset
            </button>
            <button className="icon-button" onClick={downloadManifest}>
              <Download size={18} />
              Manifest
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
