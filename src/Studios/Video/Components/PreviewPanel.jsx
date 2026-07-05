import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize2,
  Download,
  MonitorPlay,
} from "lucide-react";

function PreviewPanel() {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

        <div>

          <h2 className="flex items-center gap-2 text-xl font-bold text-white">

            <MonitorPlay size={22} />

            Live Preview

          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Real-time cinematic preview
          </p>

        </div>

        <div className="rounded-xl bg-emerald-500/20 px-3 py-2 text-sm font-semibold text-emerald-300">

          ● Ready

        </div>

      </div>

      {/* Preview Window */}

      <div className="relative flex h-[520px] items-center justify-center bg-gradient-to-br from-[#11111A] to-[#08080D]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_70%)]" />

        <div className="relative flex h-[320px] w-[560px] items-center justify-center rounded-3xl border border-dashed border-violet-500/30 bg-black/30">

          <div className="text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-[0_0_40px_rgba(139,92,246,.5)]">

              <Play
                size={40}
                className="ml-1 text-white"
                fill="white"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Preview Window
            </h3>

            <p className="mt-2 text-zinc-400">
              Rendered scenes will appear here.
            </p>

          </div>

        </div>

      </div>

      {/* Timeline */}

      <div className="border-t border-white/10 px-6 py-5">

        <div className="h-2 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

        </div>

        <div className="mt-5 flex items-center justify-between">

          {/* Controls */}

          <div className="flex items-center gap-3">

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <SkipBack size={18} />
            </button>

            <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4 shadow-lg shadow-violet-500/30 transition hover:scale-105">
              <Play
                size={22}
                fill="white"
                className="text-white"
              />
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Pause size={18} />
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <SkipForward size={18} />
            </button>

          </div>

          {/* Time */}

          <div className="text-sm font-medium text-zinc-400">
            00:01:12 / 00:03:48
          </div>

          {/* Actions */}

          <div className="flex items-center gap-3">

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Maximize2 size={18} />
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Download size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PreviewPanel;