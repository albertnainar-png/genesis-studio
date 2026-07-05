import {
  Film,
  Plus,
  Clock3,
  Camera,
  ChevronRight,
  GripVertical,
} from "lucide-react";

const scenes = [
  {
    id: 1,
    title: "Opening Scene",
    duration: "00:12",
    camera: "Wide Shot",
    description: "Sunrise over the mountains as worship begins.",
    status: "Ready",
  },
  {
    id: 2,
    title: "Lead Character",
    duration: "00:18",
    camera: "Medium Shot",
    description: "Main character walks toward the cross.",
    status: "Ready",
  },
  {
    id: 3,
    title: "Prayer",
    duration: "00:20",
    camera: "Close Up",
    description: "Hands lifted in worship.",
    status: "Draft",
  },
  {
    id: 4,
    title: "Final Glory",
    duration: "00:15",
    camera: "Drone Shot",
    description: "Heavenly light fills the landscape.",
    status: "Pending",
  },
];

function Storyboard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="flex items-center gap-2 text-2xl font-bold text-white">

            <Film size={24} />

            Storyboard

          </h2>

          <p className="mt-2 text-zinc-400">
            ELINA converts your vision into cinematic scenes.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-semibold transition hover:scale-105">

          <Plus size={18} />

          Add Scene

        </button>

      </div>

      {/* Storyboard */}

      <div className="grid gap-5 p-6 lg:grid-cols-2 xl:grid-cols-4">

        {scenes.map((scene) => (

          <div
            key={scene.id}
            className="group rounded-2xl border border-white/10 bg-[#11111A] transition hover:border-violet-500 hover:bg-[#151522]"
          >

            {/* Thumbnail */}

            <div className="relative flex h-40 items-center justify-center rounded-t-2xl bg-gradient-to-br from-violet-700/30 to-fuchsia-700/20">

              <Film
                size={50}
                className="text-violet-300"
              />

              <div className="absolute right-3 top-3 rounded-lg bg-black/60 px-2 py-1 text-xs text-white">

                Scene {scene.id}

              </div>

            </div>

            {/* Content */}

            <div className="p-5">

              <div className="flex items-start justify-between">

                <h3 className="text-lg font-semibold text-white">

                  {scene.title}

                </h3>

                <GripVertical
                  size={18}
                  className="cursor-move text-zinc-500"
                />

              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-400">

                {scene.description}

              </p>

              {/* Details */}

              <div className="mt-5 space-y-3">

                <div className="flex items-center justify-between text-sm">

                  <span className="flex items-center gap-2 text-zinc-500">

                    <Clock3 size={16} />

                    Duration

                  </span>

                  <span className="font-medium text-white">

                    {scene.duration}

                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="flex items-center gap-2 text-zinc-500">

                    <Camera size={16} />

                    Camera

                  </span>

                  <span className="font-medium text-white">

                    {scene.camera}

                  </span>

                </div>

              </div>

              {/* Footer */}

              <div className="mt-6 flex items-center justify-between">

                <span
                  className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                    scene.status === "Ready"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : scene.status === "Draft"
                      ? "bg-amber-500/20 text-amber-300"
                      : "bg-zinc-700/40 text-zinc-300"
                  }`}
                >
                  {scene.status}
                </span>

                <button className="flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200">

                  Edit

                  <ChevronRight size={16} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Storyboard;