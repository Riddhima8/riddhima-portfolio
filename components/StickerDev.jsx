export default function StickerDev({ className = '' }) {
  return (
    <svg
      className={className}
      width="520"
      height="420"
      viewBox="0 0 520 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>
      <rect x="20" y="30" rx="26" ry="26" width="480" height="360" fill="url(#g1)" opacity="0.18" filter="url(#shadow)" />
      <g transform="translate(60,60)">
        <rect x="0" y="0" width="280" height="180" rx="14" fill="#0b1223" stroke="#38bdf8" strokeOpacity="0.5" />
        <text x="18" y="36" fontSize="18" fill="#cdeffd" fontFamily="Poppins, sans-serif">const me = <tspan>{'{'}</tspan></text>
        <text x="34" y="66" fontSize="16" fill="#bfe9ff" fontFamily="Poppins, sans-serif">role: 'Software Dev & AI/ML',</text>
        <text x="34" y="96" fontSize="16" fill="#bfe9ff" fontFamily="Poppins, sans-serif">stack: ['Python','Flutter','C++']</text>
        <text x="18" y="126" fontSize="18" fill="#cdeffd" fontFamily="Poppins, sans-serif"><tspan>{'}'}</tspan></text>
      </g>
      <g transform="translate(360,220)">
        <circle cx="40" cy="40" r="40" fill="#38bdf8" opacity="0.25" />
        <circle cx="92" cy="14" r="14" fill="#60a5fa" opacity="0.7" />
        <circle cx="8" cy="8" r="8" fill="#a78bfa" opacity="0.8" />
      </g>
    </svg>
  );
}


