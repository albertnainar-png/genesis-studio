import {
  Clock3,
  Play,
  Flag,
  Plus,
  Scissors,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "Opening",
    duration: "00:12",
    color: "bg-violet-600",
  },
  {
    id: 2,
    title: "Character Intro",
    duration: "00:18",
    color: "bg-fuchsia-600",
  },
  {
    id: 3,
    title: "Prayer",
    duration: "00:20",
    color: "bg-blue-600",
  },
  {
    id: 4,
    title: "Miracle",
    duration: "00:24",
    color: "bg-emerald-600",
  },
  {
    id: 5,
    title: "Final Worship",
    duration: "00:30",
    color: "bg-orange-500",
  },
];

function SceneTimeline() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

        <div>

          <h2 className="flex items-center gap-2 text-xl font-bold text-white">

            <Clock3 size={22} />

            Timeline

          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Arrange scenes and control pacing.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 font-semibold transition hover:scale-105">

          <Plus size={18} />

          Add Scene

        </button>

      </div>

      {/* Timeline Scale */}

      <div className="border-b border-white/10 px-6 py-4">

        <div className="flex justify-between text-xs text-zinc-500">

          {Array.from({ length: 13 }).map((_, index) => (

            <span key={index}>
              {index * 10}s
            </span>

          ))}

        </div>

      </div>

      {/* Timeline Clips */}

      <div className="space-y-5 p-6">

        {timeline.map((scene) => (

          <div
            key={scene.id}
            className="flex items-center gap-4"
          >

            {/* Scene Number */}

            <div className="w-28 text-sm font-semibold text-zinc-300">

              Scene {scene.id}

            </div>

            {/* Clip */}

            <div
              className={`relative flex h-16 flex-1 items-center rounded-2xl ${scene.color} px-5 shadow-lg transition hover:scale-[1.01]`}
            >

              <div>

                <h3 className="font-semibold text-white">

                  {scene.title}

                </h3>

                <p className="text-xs text-white/80">

                  {scene.duration}

                </p>

              </div>

              <div className="absolute right-4 flex gap-3">

                <button className="rounded-lg bg-black/20 p-2 hover:bg-black/30">

                  <Play
                    size={16}
                    fill="white"
                    className="text-white"
                  />

                </button>

                <button className="rounded-lg bg-black/20 p-2 hover:bg-black/30">

                  <Scissors size={16} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Bottom Bar */}

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-5">

        <div className="flex items-center gap-2 text-zinc-400">

          <Flag size={18} />

          Total Runtime

          <span className="font-semibold text-white">

            01:44

          </span>

        </div>

        <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

          ELINA has optimized scene pacing.

        </div>

      </div>

    </section>
  );
}

export default SceneTimeline;