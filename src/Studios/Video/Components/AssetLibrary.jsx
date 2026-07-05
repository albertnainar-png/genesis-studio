import {
  Search,
  Image,
  Video,
  Music,
  User,
  Upload,
  FolderOpen,
} from "lucide-react";

const assets = [
  {
    id: 1,
    name: "Jesus Character",
    type: "Character",
    icon: User,
  },
  {
    id: 2,
    name: "Mountain Sunrise",
    type: "Environment",
    icon: Image,
  },
  {
    id: 3,
    name: "Worship Track",
    type: "Audio",
    icon: Music,
  },
  {
    id: 4,
    name: "Drone Footage",
    type: "Video",
    icon: Video,
  },
  {
    id: 5,
    name: "Clouds Pack",
    type: "Image",
    icon: Image,
  },
];

function AssetLibrary() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="border-b border-white/10 p-5">

        <div className="flex items-center justify-between">

          <h2 className="flex items-center gap-2 text-xl font-bold text-white">

            <FolderOpen size={22} />

            Asset Library

          </h2>

          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-3 transition hover:scale-105">

            <Upload size={18} />

          </button>

        </div>

        {/* Search */}

        <div className="relative mt-5">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search assets..."
            className="w-full rounded-xl border border-white/10 bg-[#11111A] py-3 pl-12 pr-4 text-white outline-none focus:border-violet-500"
          />

        </div>

      </div>

      {/* Assets */}

      <div className="max-h-[500px] space-y-3 overflow-y-auto p-5">

        {assets.map((asset) => {

          const Icon = asset.icon;

          return (

            <div
              key={asset.id}
              className="flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-[#11111A] p-4 transition hover:border-violet-500 hover:bg-[#171722]"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20">

                <Icon
                  size={24}
                  className="text-violet-300"
                />

              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-white">

                  {asset.name}

                </h3>

                <p className="text-sm text-zinc-400">

                  {asset.type}

                </p>

              </div>

            </div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 font-medium transition hover:bg-white/10">

          Browse Complete Library

        </button>

      </div>

    </section>
  );
}

export default AssetLibrary;