import {
  Home,
  Clapperboard,
  Music4,
  Image,
  Mic2,
  FolderOpen,
  Bot,
  Settings,
} from "lucide-react";

const menu = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Clapperboard, label: "Video Studio" },
  { icon: Music4, label: "Music Studio" },
  { icon: Image, label: "Artwork Studio" },
  { icon: Mic2, label: "Voice Studio" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Bot, label: "ELINA AI" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="flex w-72 flex-col justify-between border-r border-white/10 bg-black/30 backdrop-blur-xl">

      <div className="px-6 pt-8">

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Workspace
          </p>
        </div>

        <nav className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                  item.active
                    ? "bg-gradient-to-r from-violet-600/25 to-fuchsia-600/15 text-white border border-violet-500/30"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />

                <span className="font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}

        </nav>
      </div>

      <div className="border-t border-white/10 p-6">

        <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 p-5">

          <p className="text-xs uppercase tracking-widest text-violet-300">
            Current Sprint
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Alpha 2
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Nebula Release
            <br />
            Video Studio in development.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;