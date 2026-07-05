import { motion } from "framer-motion";

import {
  FolderOpen,
  Sparkles,
  Clock3,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: "24",
    subtitle: "Active creative projects",
    icon: FolderOpen,
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    title: "AI Generations",
    value: "1,248",
    subtitle: "Assets created",
    icon: Sparkles,
    color: "from-indigo-600 to-violet-600",
  },
  {
    title: "Hours Saved",
    value: "186",
    subtitle: "Estimated productivity",
    icon: Clock3,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "System Health",
    value: "99.9%",
    subtitle: "Genesis Platform",
    icon: Activity,
    color: "from-emerald-500 to-green-600",
  },
];

function WorkspaceStats() {
  return (
    <section className="mt-12">

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
              >

                <Icon
                  size={30}
                  className="text-white"
                />

              </div>

              <h2 className="mt-6 text-4xl font-black text-white">

                {item.value}

              </h2>

              <h3 className="mt-2 text-lg font-semibold text-white">

                {item.title}

              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">

                {item.subtitle}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default WorkspaceStats;