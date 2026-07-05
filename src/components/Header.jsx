import { Bell, Search, Sparkles } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-white/10 bg-[#0B0B12]/90 backdrop-blur-xl">

      <div className="flex h-full items-center justify-between px-8">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xl font-bold text-white shadow-lg shadow-violet-600/40">

            G

          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight text-white">

              Genesis Studio

            </h1>

            <p className="text-sm text-zinc-500">

              Powered by ELINA

            </p>

          </div>

        </div>

        {/* CENTER */}

        <div className="hidden w-full max-w-xl lg:flex">

          <div className="relative w-full">

            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search projects, assets, prompts..."
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 pl-14 pr-24 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-violet-500"
            />

            <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-400">

              Ctrl K

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

          <div className="hidden rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 xl:flex">

            ● System Online

          </div>

          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">

            <Bell
              size={20}
              className="text-white"
            />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-violet-500"></span>

          </button>

          <button className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 transition hover:bg-white/10">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 font-bold text-white">

              A

            </div>

            <div className="hidden text-left lg:block">

              <p className="text-sm font-semibold text-white">

                Albert

              </p>

              <p className="text-xs text-zinc-500">

                Founder

              </p>

            </div>

          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/30 transition hover:scale-105">

            <Sparkles
              size={20}
              className="text-white"
            />

          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;