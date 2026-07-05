import {
  Rocket,
  Play,
  Pause,
  Square,
  Download,
  Video,
  Clock3,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const queue = [
  {
    id: 1,
    name: "Opening Scene",
    progress: 100,
    status: "Completed",
  },
  {
    id: 2,
    name: "Prayer Scene",
    progress: 62,
    status: "Rendering",
  },
  {
    id: 3,
    name: "Final Worship",
    progress: 0,
    status: "Queued",
  },
];

function RenderPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="border-b border-white/10 p-5">

        <h2 className="flex items-center gap-2 text-xl font-bold text-white">

          <Rocket size={22} />

          Render Studio

        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Render and export your cinematic project.
        </p>

      </div>

      {/* Render Settings */}

      <div className="space-y-5 p-5">

        <div>

          <label className="mb-2 block text-sm text-zinc-400">

            Resolution

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>720p</option>
            <option>1080p</option>
            <option>1440p</option>
            <option>4K UHD</option>
            <option>8K</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm text-zinc-400">

            Output Format

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>MP4 (H.264)</option>
            <option>HEVC (H.265)</option>
            <option>MOV</option>
            <option>AVI</option>
            <option>Image Sequence</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm text-zinc-400">

            Quality

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>Draft</option>
            <option>Balanced</option>
            <option>High</option>
            <option>Ultra</option>

          </select>

        </div>

      </div>

      {/* Render Controls */}

      <div className="border-t border-white/10 p-5">

        <div className="grid grid-cols-4 gap-3">

          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-3 transition hover:scale-105">

            <Play className="mx-auto" size={18} />

          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">

            <Pause className="mx-auto" size={18} />

          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">

            <Square className="mx-auto" size={18} />

          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10">

            <Download className="mx-auto" size={18} />

          </button>

        </div>

      </div>

      {/* Queue */}

      <div className="border-t border-white/10 p-5">

        <h3 className="mb-4 font-semibold text-white">

          Render Queue

        </h3>

        <div className="space-y-4">

          {queue.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-[#11111A] p-4"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h4 className="font-medium text-white">

                    {item.name}

                  </h4>

                  <p className="mt-1 text-xs text-zinc-400">

                    {item.status}

                  </p>

                </div>

                {item.status === "Completed" ? (

                  <CheckCircle2
                    size={20}
                    className="text-emerald-400"
                  />

                ) : (

                  <Video
                    size={20}
                    className="text-violet-400"
                  />

                )}

              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Statistics */}

      <div className="border-t border-white/10 p-5">

        <div className="space-y-3 text-sm">

          <div className="flex items-center justify-between">

            <span className="flex items-center gap-2 text-zinc-400">

              <Clock3 size={16} />

              Estimated Time

            </span>

            <span className="font-medium text-white">

              07m 24s

            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="flex items-center gap-2 text-zinc-400">

              <Cpu size={16} />

              GPU Usage

            </span>

            <span className="font-medium text-emerald-400">

              82%

            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RenderPanel;