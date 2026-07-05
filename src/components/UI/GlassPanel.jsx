import { motion } from "framer-motion";

function GlassPanel({
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
      }}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        shadow-black/30
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default GlassPanel;