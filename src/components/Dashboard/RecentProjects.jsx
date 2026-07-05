import { motion } from "framer-motion";

import {
  Clapperboard,
  Music4,
  Image,
  Mic2,
  ArrowRight,
  Calendar,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    title: "Restored Authority",
    type: "Album",
    status: "In Progress",
    updated: "2 hours ago",
    icon: Music4,
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    title: "Where You Find Me",
    type: "Music Video",
    status: "Rendering",
    updated: "Yesterday",
    icon: Clapperboard,
    color: "from-indigo-600 to-violet-600",
  },
  {
    title: "Good Night",
    type: "Artwork",
    status: "Completed",
    updated: "3 days ago",
    icon: Image,
    color: "from-pink-600 to-orange-500",
  },
  {
    title: "Still Learning To Walk",
    type: "Voice",
    status: "Draft",
    updated: "Last Week",
    icon: Mic2,
    color: "from-cyan-500 to-blue-600",
  },
];

function statusVariant(status) {
  switch (status) {
    case "Completed":
      return "success";
    case "Rendering":
      return "warning";
    case "In Progress":
      return "primary";
    default:
      return "neutral";
  }
}

function RecentProjects() {
  return (
    <section className="mt-14">

      <SectionTitle
        title="Recent Projects"
        subtitle="Continue where you left off."
        action={
          <Button variant="secondary">
            View All
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">

        {projects.map((project, index) => {

          const Icon = project.icon;

          return (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >

              <Card>

                <div className="flex items-start justify-between">

                  <div className="flex gap-5">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color}`}
                    >
                      <Icon
                        size={28}
                        className="text-white"
                      />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-zinc-400">
                        {project.type}
                      </p>

                      <div className="mt-4">

                        <Badge variant={statusVariant(project.status)}>
                          {project.status}
                        </Badge>

                      </div>

                    </div>

                  </div>

                  <ArrowRight
                    className="text-zinc-500"
                    size={20}
                  />

                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">

                  <Calendar size={16} />

                  Updated {project.updated}

                </div>

              </Card>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default RecentProjects;