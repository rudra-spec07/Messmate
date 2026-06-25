function StatCard({ title, value }) {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-900
      rounded-2xl
      p-6
      shadow-md
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      border
      border-slate-200
      dark:border-slate-800
    "
    >
      <p
        className="
        text-sm
        text-slate-500
        dark:text-slate-400
      "
      >
        {title}
      </p>

      <h2
        className="
        text-3xl
        font-bold
        mt-3
        text-slate-800
        dark:text-white
      "
      >
        {value}
      </h2>
    </div>
  );
}

export default StatCard;