import Badge from "./Badge";

function SectionTitle({
  title,
  subtitle,
  badge,
  action,
  className = "",
}) {
  return (
    <div
      className={`mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${className}`}
    >
      <div>

        <div className="flex items-center gap-3">

          <h2 className="text-3xl font-bold tracking-tight text-white">

            {title}

          </h2>

          {badge && (
            <Badge>

              {badge}

            </Badge>
          )}

        </div>

        {subtitle && (

          <p className="mt-2 max-w-2xl text-zinc-400">

            {subtitle}

          </p>

        )}

      </div>

      {action && (

        <div>

          {action}

        </div>

      )}

    </div>
  );
}

export default SectionTitle;