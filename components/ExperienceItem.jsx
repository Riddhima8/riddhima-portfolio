export default function ExperienceItem({ title, org, period, details }) {
  return (
    <div className="card p-5" data-aos="fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-xs text-white/60">{period}</span>
      </div>
      <p className="text-sm text-white/80 mb-2">{org}</p>
      <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}


