import { Sparkles, Wand2, Film } from "lucide-react";

function PromptComposer() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14] p-6">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="flex items-center gap-2 text-2xl font-bold">

            <Film size={24} />

            Director's Console

          </h2>

          <p className="mt-2 text-zinc-400">
            Describe your vision. ELINA will transform it into scenes.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-semibold transition hover:scale-105">

          <Sparkles size={18} />

          Generate Storyboard

        </button>

      </div>

      {/* Top Row */}

      <div className="grid gap-5 md:grid-cols-3">

        <div>

          <label className="mb-2 block text-sm text-zinc-400">
            Project Name
          </label>

          <input
            className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white outline-none focus:border-violet-500"
            placeholder="My New Film"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm text-zinc-400">
            Genre
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white outline-none">

            <option>Worship</option>
            <option>Cinematic</option>
            <option>Drama</option>
            <option>Documentary</option>
            <option>Animation</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm text-zinc-400">
            Visual Style
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white outline-none">

            <option>Photorealistic</option>
            <option>Cinematic</option>
            <option>Anime</option>
            <option>Pixar</option>
            <option>Fantasy</option>

          </select>

        </div>

      </div>

      {/* Prompt */}

      <div className="mt-6">

        <label className="mb-2 block text-sm text-zinc-400">
          Director's Vision
        </label>

        <textarea
          rows={8}
          placeholder="Describe your movie. ELINA will automatically create scenes, characters, environments and camera shots."
          className="w-full rounded-2xl border border-white/10 bg-[#11111A] p-5 text-white outline-none transition focus:border-violet-500"
        />

      </div>

      {/* Bottom */}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">

        <div>

          <h3 className="font-semibold text-white">
            ELINA Suggestion
          </h3>

          <p className="mt-1 text-sm text-zinc-400">
            The more descriptive your vision, the better the storyboard,
            camera movements, and cinematic shots.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10">

          <Wand2 size={18} />

          Improve Prompt

        </button>

      </div>

    </section>
  );
}

export default PromptComposer;