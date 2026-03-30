export default function SkillCard({ title, items }) {
  return (
    <div className="card p-5" data-aos="fade-up">
      <h4 className="font-semibold mb-3 text-white/90">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10 hover:border-accent/60 transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}


