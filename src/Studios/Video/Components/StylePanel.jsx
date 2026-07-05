import {
  Palette,
  Sparkles,
  Contrast,
  Sun,
  Droplets,
  Layers,
  Wand2,
} from "lucide-react";

function StylePanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="border-b border-white/10 p-5">

        <h2 className="flex items-center gap-2 text-xl font-bold text-white">

          <Palette size={22} />

          Visual Style

        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Define the cinematic look of your project.
        </p>

      </div>

      <div className="space-y-5 p-5">

        {/* Style Preset */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Sparkles size={16} />

            Style Preset

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>Cinematic</option>
            <option>Hollywood</option>
            <option>Realistic</option>
            <option>Fantasy</option>
            <option>Anime</option>
            <option>Pixar</option>
            <option>Noir</option>
            <option>Cyberpunk</option>

          </select>

        </div>

        {/* Color Grading */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Palette size={16} />

            Color Grade

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>Natural</option>
            <option>Warm</option>
            <option>Cool</option>
            <option>Teal & Orange</option>
            <option>Golden Hour</option>
            <option>Monochrome</option>

          </select>

        </div>

        {/* Contrast */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Contrast size={16} />

            Contrast

          </label>

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="65"
            className="w-full"
          />

          <div className="mt-2 text-right text-sm text-zinc-400">

            65%

          </div>

        </div>

        {/* Brightness */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Sun size={16} />

            Brightness

          </label>

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="70"
            className="w-full"
          />

        </div>

        {/* Saturation */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Droplets size={16} />

            Saturation

          </label>

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="60"
            className="w-full"
          />

        </div>

        {/* Effects */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Layers size={16} />

            Cinematic Effects

          </label>

          <div className="grid grid-cols-2 gap-3">

            <button className="rounded-xl border border-violet-500 bg-violet-500/20 py-3 text-sm">

              Bloom

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm">

              Lens Flare

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm">

              Film Grain

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm">

              Depth of Field

            </button>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold transition hover:scale-[1.02]">

          <Wand2 size={18} />

          Apply ELINA Style

        </button>

      </div>

    </section>
  );
}

export default StylePanel;