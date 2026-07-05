import {
  Home,
  Clapperboard,
  Music4,
  Image,
  Mic2,
  FolderOpen,
  Bot,
  Settings,
  ChevronRight,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: Home,
    active: true,
  },
  {
    title: "Video Studio",
    icon: Clapperboard,
  },
  {
    title: "Music Studio",
    icon: Music4,
  },
  {
    title: "Artwork Studio",
    icon: Image,
  },
  {
    title: "Voice Studio",
    icon: Mic2,
  },
  {
    title: "Projects",
    icon: FolderOpen,
  },
  {
    title: "ELINA",
    icon: Bot,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="sticky top-20 flex h-[calc(100vh-80px)] w-72 flex-col border-r border-white/10 bg-[#09090F]">

      {/* Workspace */}

      <div className="border-b border-white/10 p-6">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Workspace
        </p>

        <div className="mt-5 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 p-4">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-white">
                Genesis Studio
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                Alpha 2.1
              </p>

            </div>

            <div className="h-3 w-3 rounded-full bg-emerald-400"></div>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Navigation
        </p>

        <nav className="space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
                  item.active
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/20"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">

                  <Icon size={20} />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </div>

                <ChevronRight
                  size={16}
                  className={`transition ${
                    item.active
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

              </button>
            );

          })}

        </nav>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

          <p className="text-sm font-semibold text-white">
            ELINA Core
          </p>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            AI Operating System is online and monitoring your workspace.
          </p>

          <div className="mt-5 flex items-center justify-between">

            <span className="text-xs text-zinc-500">
              System Health
            </span>

            <span className="font-bold text-emerald-400">
              99.98%
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;