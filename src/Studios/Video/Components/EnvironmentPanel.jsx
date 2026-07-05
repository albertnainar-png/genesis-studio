import {
  Mountain,
  Sun,
  Cloud,
  Trees,
  Clock3,
  Sparkles,
  MapPin,
} from "lucide-react";

function EnvironmentPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="border-b border-white/10 p-5">

        <h2 className="flex items-center gap-2 text-xl font-bold text-white">

          <Mountain size={22} />

          Environment

        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Build the world for your story.
        </p>

      </div>

      <div className="space-y-5 p-5">

        {/* Location */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <MapPin size={16} />

            Location

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>Mountain</option>
            <option>Forest</option>
            <option>Desert</option>
            <option>Beach</option>
            <option>Temple</option>
            <option>City</option>
            <option>Village</option>

          </select>

        </div>

        {/* Time of Day */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Clock3 size={16} />

            Time of Day

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>Sunrise</option>
            <option>Morning</option>
            <option>Noon</option>
            <option>Golden Hour</option>
            <option>Sunset</option>
            <option>Night</option>

          </select>

        </div>

        {/* Weather */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Cloud size={16} />

            Weather

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>Clear Sky</option>
            <option>Cloudy</option>
            <option>Rain</option>
            <option>Storm</option>
            <option>Snow</option>
            <option>Fog</option>

          </select>

        </div>

        {/* Lighting */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Sun size={16} />

            Lighting Intensity

          </label>

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="75"
            className="w-full"
          />

          <div className="mt-2 text-right text-sm text-zinc-400">

            75%

          </div>

        </div>

        {/* Vegetation */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Trees size={16} />

            Vegetation

          </label>

          <select className="w-full rounded-xl border border-white/10 bg-[#11111A] px-4 py-3 text-white">

            <option>None</option>
            <option>Grassland</option>
            <option>Forest</option>
            <option>Dense Jungle</option>
            <option>Autumn Trees</option>

          </select>

        </div>

        {/* Atmosphere */}

        <div>

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <Sparkles size={16} />

            Atmosphere

          </label>

          <textarea
            rows={4}
            placeholder="Describe the atmosphere..."
            className="w-full rounded-xl border border-white/10 bg-[#11111A] p-4 text-white outline-none focus:border-violet-500"
          />

        </div>

      </div>

    </section>
  );
}

export default EnvironmentPanel;