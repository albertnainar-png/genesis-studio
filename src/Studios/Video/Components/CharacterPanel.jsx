import {
  User,
  Plus,
  Smile,
  Shirt,
  Sparkles,
  Trash2,
} from "lucide-react";

const characters = [
  {
    id: 1,
    name: "Jesus",
    role: "Main Character",
    emotion: "Compassion",
    costume: "White Robe",
  },
  {
    id: 2,
    name: "Disciple",
    role: "Supporting",
    emotion: "Hope",
    costume: "Brown Tunic",
  },
];

function CharacterPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0D0D14]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-5">

        <div>

          <h2 className="flex items-center gap-2 text-xl font-bold text-white">

            <User size={22} />

            Characters

          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Manage your cast across every scene.
          </p>

        </div>

        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-3 transition hover:scale-105">

          <Plus size={18} />

        </button>

      </div>

      {/* Character List */}

      <div className="space-y-4 p-5">

        {characters.map((character) => (

          <div
            key={character.id}
            className="rounded-2xl border border-white/10 bg-[#11111A] p-4 transition hover:border-violet-500"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20">

                  <User
                    size={22}
                    className="text-violet-300"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-white">

                    {character.name}

                  </h3>

                  <p className="text-sm text-zinc-400">

                    {character.role}

                  </p>

                </div>

              </div>

              <button className="rounded-lg p-2 text-zinc-500 transition hover:bg-red-500/20 hover:text-red-400">

                <Trash2 size={16} />

              </button>

            </div>

            {/* Emotion */}

            <div className="mt-4 flex items-center justify-between">

              <span className="flex items-center gap-2 text-sm text-zinc-400">

                <Smile size={16} />

                Emotion

              </span>

              <span className="rounded-lg bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">

                {character.emotion}

              </span>

            </div>

            {/* Costume */}

            <div className="mt-3 flex items-center justify-between">

              <span className="flex items-center gap-2 text-sm text-zinc-400">

                <Shirt size={16} />

                Costume

              </span>

              <span className="text-sm text-white">

                {character.costume}

              </span>

            </div>

            {/* Consistency */}

            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">

                <span className="flex items-center gap-2 text-sm text-zinc-400">

                  <Sparkles size={16} />

                  Character Consistency

                </span>

                <span className="text-xs text-violet-300">

                  96%

                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 font-medium transition hover:bg-white/10">

          Character Library

        </button>

      </div>

    </section>
  );
}

export default CharacterPanel;