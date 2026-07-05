function Input({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  icon = null,
  textarea = false,
  rows = 6,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>

      {label && (
        <label className="text-sm font-semibold text-zinc-300">
          {label}
        </label>
      )}

      <div className="relative">

        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            {icon}
          </div>
        )}

        {textarea ? (
          <textarea
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/30
              resize-none
            `}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              py-4
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/30
              ${icon ? "pl-12 pr-5" : "px-5"}
            `}
          />
        )}

      </div>

    </div>
  );
}

export default Input;
