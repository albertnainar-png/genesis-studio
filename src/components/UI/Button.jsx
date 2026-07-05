import { motion } from "framer-motion";

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  icon,
  className = "",
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50",

    secondary:
      "bg-white/5 border border-white/10 text-white hover:bg-white/10",

    ghost:
      "bg-transparent text-zinc-300 hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-base rounded-2xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  return (
    <motion.button
      whileHover={{
        scale: disabled ? 1 : 1.03,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.97,
      }}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-3
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {icon}

      {children}
    </motion.button>
  );
}

export default Button;