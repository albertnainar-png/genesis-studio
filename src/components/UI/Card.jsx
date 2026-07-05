import { motion } from "framer-motion";

function Card({
  children,
  title,
  subtitle,
  icon,
  footer,
  hover = true,
  className = "",
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : {}}
      transition={{ duration: 0.25 }}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-xl
        shadow-black/30
        ${className}
      `}
    >
      {(title || icon) && (
        <div className="mb-6 flex items-center gap-4">

          {icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/30">
              {icon}
            </div>
          )}

          <div>

            {title && (
              <h3 className="text-xl font-bold text-white">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-zinc-400">
                {subtitle}
              </p>
            )}

          </div>

        </div>
      )}

      <div>
        {children}
      </div>

      {footer && (
        <div className="mt-6 border-t border-white/10 pt-5">
          {footer}
        </div>
      )}

    </motion.div>
  );
}

export default Card;