import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  Sparkles,
  Clapperboard,
  Music4,
  Image,
  Mic2,
  ArrowRight,
  Bot,
  FolderOpen,
} from "lucide-react";

const studios = [
  {
    title: "Video Studio",
    description: "Create cinematic AI videos from simple prompts.",
    icon: Clapperboard,
  },
  {
    title: "Music Studio",
    description: "Compose original music and worship soundtracks.",
    icon: Music4,
  },
  {
    title: "Artwork Studio",
    description: "Generate artwork, thumbnails and album covers.",
    icon: Image,
  },
  {
    title: "Voice Studio",
    description: "Clone voices and create realistic narration.",
    icon: Mic2,
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#07070B] text-white">

      <Header />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 overflow-auto p-10">

          {/* HERO */}

          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/40 via-[#14141D] to-[#0D0D14] p-12">

            <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

              {/* LEFT */}

              <div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2">

                  <Sparkles className="h-4 w-4 text-violet-300" />

                  <span className="text-sm tracking-wide text-violet-200">

                    GENESIS AI

                  </span>

                </div>

                <h1 className="text-6xl font-black leading-tight tracking-tight">

                  One Idea.

                  <br />

                  <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">

                    Endless Creation.

                  </span>

                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

                  Transform one creative idea into cinematic videos,
                  original music, artwork and voice using a single
                  intelligent workspace.

                </p>

                <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold shadow-xl shadow-violet-600/30 transition hover:scale-105">

                  Start New Project

                  <ArrowRight className="h-5 w-5" />

                </button>

              </div>

              {/* RIGHT */}

              <div className="flex items-center justify-center">

                <div className="relative flex h-80 w-80 items-center justify-center">

                  <div className="absolute h-full w-full animate-pulse rounded-full border border-violet-500/20" />

                  <div className="absolute h-64 w-64 rounded-full border border-violet-500/30" />

                  <div className="absolute h-48 w-48 rounded-full border border-fuchsia-500/40" />

                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-[0_0_80px_rgba(139,92,246,.6)]">

                    <Bot className="h-20 w-20 text-white" />

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* QUICK CREATE */}

          <section className="mt-12">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-3xl font-bold">

                Creative Studios

              </h2>

              <button className="text-violet-400">

                View All

              </button>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {studios.map((studio) => {

                const Icon = studio.icon;

                return (

                  <div
                    key={studio.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10"
                  >

                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/30">

                      <Icon className="h-8 w-8 text-white" />

                    </div>

                    <h3 className="text-2xl font-bold">

                      {studio.title}

                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">

                      {studio.description}

                    </p>

                  </div>

                );

              })}

            </div>

          </section>

          {/* ELINA */}

          <section className="mt-12 grid gap-8 xl:grid-cols-[2fr_1fr]">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="mb-4 text-3xl font-bold">

                Recent Projects

              </h2>

              <div className="mt-8 flex h-72 items-center justify-center rounded-2xl border border-dashed border-violet-500/20">

                <FolderOpen className="h-16 w-16 text-violet-400" />

              </div>

            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-900/20 to-black/20 p-8">

              <div className="flex items-center gap-4">

                <Bot className="h-10 w-10 text-violet-400" />

                <div>

                  <h3 className="text-2xl font-bold">

                    ELINA

                  </h3>

                  <p className="text-sm text-zinc-400">

                    AI Creative Director

                  </p>

                </div>

              </div>

              <textarea
                className="mt-8 h-56 w-full rounded-2xl border border-white/10 bg-black/30 p-5 outline-none focus:border-violet-500"
                placeholder="Describe what you'd like to create..."
              />

              <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-semibold">

                Generate with ELINA

              </button>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;