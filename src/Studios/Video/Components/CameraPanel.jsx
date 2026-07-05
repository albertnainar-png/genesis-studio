import {
  Camera,
  Aperture,
  Move3D,
  Maximize,
  RotateCcw,
  Video,
} from "lucide-react";

function CameraPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="border-b border-white/10 p-5">

        <h2 className="flex items-center gap-2 text-xl font-bold text-white">

          <Camera size={22} />

          Camera Controls

        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Configure cinematic camera settings.
        </p>

      </div>

      <div className="space-y-5 p-5">

        {/* Camera Type */}

        <div>

          <label className="mb-2 block text-sm text-zinc-400">

            Camera Type

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white outline-none">

            <option>Wide Shot</option>
            <option>Medium Shot</option>
            <option>Close Up</option>
            <option>Extreme Close Up</option>
            <option>Drone Shot</option>
            <option>Tracking Shot</option>

          </select>

        </div>

        {/* Lens */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Aperture size={16} />

            Lens (mm)

          </label>

          <input
            type="range"
            min="14"
            max="200"
            defaultValue="35"
            className="w-full"
          />

          <div className="mt-2 text-right text-sm text-zinc-400">

            35mm

          </div>

        </div>

        {/* Camera Height */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Move3D size={16} />

            Camera Height

          </label>

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />

        </div>

        {/* Movement */}

        <div>

          <label className="mb-2 block text-sm text-zinc-400">

            Camera Movement

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>Static</option>
            <option>Pan Left</option>
            <option>Pan Right</option>
            <option>Tilt Up</option>
            <option>Tilt Down</option>
            <option>Dolly In</option>
            <option>Dolly Out</option>
            <option>Orbit</option>

          </select>

        </div>

        {/* Aspect Ratio */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Maximize size={16} />

            Aspect Ratio

          </label>

          <div className="grid grid-cols-2 gap-3">

            <button className="rounded-xl border border-violet-500 bg-violet-500/20 py-3 text-sm">

              16:9

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm">

              9:16

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm">

              1:1

            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm">

              21:9

            </button>

          </div>

        </div>

        {/* FPS */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Video size={16} />

            Frame Rate

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>24 FPS (Cinema)</option>
            <option>30 FPS</option>
            <option>60 FPS</option>
            <option>120 FPS</option>

          </select>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 transition hover:bg-white/10">

          <RotateCcw size={18} />

          Reset Camera

        </button>

      </div>

    </section>
  );
}

export default CameraPanel;