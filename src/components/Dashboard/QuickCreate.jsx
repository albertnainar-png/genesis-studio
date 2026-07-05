import { motion } from "framer-motion";

import {
  Clapperboard,
  Music4,
  Image,
  Mic2,
  ArrowRight,
} from "lucide-react";

import Card from "../ui/Card";

const studios = [
  {
    title: "Video Studio",
    description:
      "Transform your ideas into cinematic AI videos with professional storytelling.",
    icon: Clapperboard,
    gradient:
      "from-violet-600 to-fuchsia-600",
  },
  {
    title: "Music Studio",
    description:
      "Compose worship music, orchestral scores and cinematic soundtracks.",
    icon: Music4,
    gradient:
      "from-indigo-600 to-violet-600",
  },
  {
    title: "Artwork Studio",
    description:
      "Generate thumbnails, album artwork, posters and illustrations.",
    icon: Image,
    gradient:
      "from-pink-600 to-orange-500",
  },
  {
    title: "Voice Studio",
    description:
      "Create narration, voiceovers and expressive AI voices.",
    icon: Mic2,
    gradient:
      "from-cyan-500 to-blue-600",
  },
];

function QuickCreate() {
  return (
    <section className="mt-12">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Creative Studios
          </h2>

          <p className="mt-2 text-zinc-400">
            Everything you need to create professional content.
          </p>

        </div>

      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

        {studios.map((studio, index) => {

          const Icon = studio.icon;

          return (

            <motion.div
              key={studio.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >

              <Card hover>

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${studio.gradient} shadow-lg`}
                >

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {studio.title}

                </h3>

                <p className="mt-4 leading-7 text-zinc-400">

                  {studio.description}

                </p>

                <button
                  className="group mt-8 flex items-center gap-2 font-semibold text-violet-400 transition hover:text-white"
                >

                  Launch Studio

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </button>

              </Card>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default QuickCreate;