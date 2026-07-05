import { motion } from "framer-motion";

import {
  Bot,
  Sparkles,
  Clapperboard,
  Music4,
  Image,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const activities = [
  {
    icon: Bot,
    title: "ELINA analyzed your workspace",
    description:
      "Found 3 opportunities to improve your creative workflow.",
    time: "Just now",
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    icon: Clapperboard,
    title: "Video project updated",
    description:
      "Where You Find Me storyboard is ready for review.",
    time: "15 min ago",
    color: "from-indigo-600 to-violet-600",
  },
  {
    icon: Music4,
    title: "Music generation completed",
    description:
      "Restored Authority track exported successfully.",
    time: "42 min ago",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Image,
    title: "Artwork generated",
    description:
      "New album artwork created for Good Night.",
    time: "Yesterday",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Creative suggestion",
    description:
      "ELINA recommends creating a teaser trailer for your album.",
    time: "Yesterday",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: CheckCircle2,
    title: "Workspace synchronized",
    description:
      "All Genesis Studio assets are up to date.",
    time: "2 days ago",
    color: "from-emerald-500 to-green-600",
  },
];

function ActivityFeed() {
  return (
    <section className="mt-14">

      <SectionTitle
        title="Activity Feed"
        subtitle="Everything happening across Genesis Studio."
      />

      <Card>

        <div className="space-y-6">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (

              <motion.div
                key={activity.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex items-start gap-5 rounded-2xl border border-white/5 p-5 transition hover:bg-white/5"
              >

                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activity.color}`}
                >

                  <Icon
                    size={26}
                    className="text-white"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-white">

                    {activity.title}

                  </h3>

                  <p className="mt-2 leading-7 text-zinc-400">

                    {activity.description}

                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">

                    <Clock3 size={15} />

                    {activity.time}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </Card>

    </section>
  );
}

export default ActivityFeed;