const baseClass = "animate-pulse bg-slate-200 dark:bg-slate-700";

function SkeletonLoader({ type = "card", count = 3, className = "" }) {
  if (type === "stats") {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
          >
            <div className={`h-4 w-24 ${baseClass} mb-4`} />
            <div className={`h-8 w-16 ${baseClass}`} />
          </div>
        ))}
      </div>
    );
  }

  if (type === "menu") {
    return (
      <div className={`grid md:grid-cols-3 gap-5 ${className}`}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
          >
            <div className={`h-5 w-24 ${baseClass} mb-4`} />
            <div className={`h-4 w-full ${baseClass} mb-2`} />
            <div className={`h-4 w-5/6 ${baseClass}`} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"
        >
          <div className={`h-5 w-36 ${baseClass} mb-3`} />
          <div className={`h-4 w-full ${baseClass} mb-2`} />
          <div className={`h-4 w-5/6 ${baseClass}`} />
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
