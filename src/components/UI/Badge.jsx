function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const variants = {
    primary:
      "bg-violet-500/20 text-violet-300 border border-violet-500/30",

    success:
      "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",

    warning:
      "bg-amber-500/20 text-amber-300 border border-amber-500/30",

    danger:
      "bg-red-500/20 text-red-300 border border-red-500/30",

    neutral:
      "bg-white/5 text-zinc-300 border border-white/10",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs rounded-lg",
    md: "px-3 py-1.5 text-sm rounded-xl",
    lg: "px-4 py-2 text-base rounded-xl",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        tracking-wide
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;