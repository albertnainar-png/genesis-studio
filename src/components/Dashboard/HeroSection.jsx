import { Bot, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../ui/Button";
import Badge from "../ui/Badge";

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#161126] via-[#0F1018] to-[#09090F] px-12 py-14">

      {/* Background Glow */}

      <div className="absolute right-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-violet-600/20 blur-3xl" />

      <div className="absolute left-[-150px] bottom-[-150px] h-[320px] w-[320px] rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <Badge>

            <Sparkles size={15} />

            <span className="ml-2">
              Powered by ELINA
            </span>

          </Badge>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">

            Build Anything.

            <br />

            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">

              Create Everything.

            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

            Genesis Studio transforms a single idea into
            cinematic videos, original music, stunning artwork,
            natural voices and complete publishing assets —
            all powered by ELINA.

          </p>

          <div className="mt-10 flex gap-5">

            <Button size="lg">

              Start Creating

              <ArrowRight size={18} />

            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Watch Demo
            </Button>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div

          animate={{
            rotate: 360,
          }}

          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}

          className="flex justify-center"

        >

          <div className="relative flex h-[340px] w-[340px] items-center justify-center">

            <div className="absolute h-full w-full rounded-full border border-violet-500/20" />

            <div className="absolute h-[280px] w-[280px] rounded-full border border-violet-500/30" />

            <div className="absolute h-[220px] w-[220px] rounded-full border border-fuchsia-500/40" />

            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-[0_0_80px_rgba(168,85,247,.7)]">

              <Bot
                size={70}
                className="text-white"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;