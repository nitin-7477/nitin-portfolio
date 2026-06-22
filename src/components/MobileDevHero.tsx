export function MobileDevHero() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 400"
      fill="none"
      role="img"
      aria-label="React Native and Expo mobile app development"
      className="bento-featured-art"
    >
      <defs>
        <linearGradient id="bento-bg" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="0.45" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#7dd3fc" />
        </linearGradient>
        <linearGradient id="bento-phoneGlow" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#e0f2fe" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="bento-screen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#0f172a" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
        <filter id="bento-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0369a1" floodOpacity="0.25" />
        </filter>
      </defs>

      <rect width="800" height="400" fill="url(#bento-bg)" />

      <circle cx="120" cy="80" r="90" fill="#fff" fillOpacity="0.12" />
      <circle cx="680" cy="320" r="110" fill="#fff" fillOpacity="0.1" />
      <circle cx="520" cy="60" r="50" fill="#fff" fillOpacity="0.08" />

      <g filter="url(#bento-shadow)" transform="translate(48 52)">
        <rect width="220" height="140" rx="14" fill="#0f172a" fillOpacity="0.88" />
        <rect x="14" y="14" width="52" height="10" rx="5" fill="#ef4444" fillOpacity="0.85" />
        <rect x="74" y="14" width="52" height="10" rx="5" fill="#f59e0b" fillOpacity="0.85" />
        <rect x="134" y="14" width="52" height="10" rx="5" fill="#22c55e" fillOpacity="0.85" />
        <text x="18" y="52" fontFamily="ui-monospace, monospace" fontSize="11" fill="#7dd3fc">
          {"<App />"}
        </text>
        <text x="18" y="72" fontFamily="ui-monospace, monospace" fontSize="11" fill="#94a3b8">
          import
        </text>
        <text x="58" y="72" fontFamily="ui-monospace, monospace" fontSize="11" fill="#f472b6">
          {" React"}
        </text>
        <text x="18" y="92" fontFamily="ui-monospace, monospace" fontSize="11" fill="#94a3b8">
          from
        </text>
        <text x="48" y="92" fontFamily="ui-monospace, monospace" fontSize="11" fill="#86efac">
          &apos;react-native&apos;
        </text>
      </g>

      <g filter="url(#bento-shadow)" transform="translate(310 36)">
        <rect width="180" height="328" rx="28" fill="url(#bento-phoneGlow)" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" />
        <rect x="12" y="12" width="156" height="304" rx="22" fill="url(#bento-screen)" />
        <rect x="62" y="22" width="56" height="8" rx="4" fill="#334155" />
        <rect x="24" y="48" width="132" height="72" rx="12" fill="#0ea5e9" fillOpacity="0.35" />
        <rect x="24" y="132" width="60" height="60" rx="12" fill="#ffffff" fillOpacity="0.12" />
        <rect x="96" y="132" width="60" height="60" rx="12" fill="#ffffff" fillOpacity="0.12" />
        <rect x="24" y="252" width="132" height="44" rx="12" fill="#38bdf8" />
        <text x="90" y="280" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#0f172a">
          Ship
        </text>
      </g>

      <g filter="url(#bento-shadow)" transform="translate(530 72) rotate(8 70 130)">
        <rect width="140" height="260" rx="22" fill="url(#bento-phoneGlow)" stroke="#fff" strokeOpacity="0.45" strokeWidth="2" />
        <rect x="10" y="10" width="120" height="240" rx="18" fill="url(#bento-screen)" />
        <circle cx="70" cy="90" r="28" fill="#61dafb" fillOpacity="0.25" />
        <rect x="24" y="190" width="92" height="36" rx="10" fill="#a78bfa" fillOpacity="0.55" />
      </g>

      <g transform="translate(88 228)">
        <ellipse cx="64" cy="64" rx="58" ry="22" stroke="#61dafb" strokeWidth="4" />
        <ellipse cx="64" cy="64" rx="58" ry="22" stroke="#61dafb" strokeWidth="4" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="58" ry="22" stroke="#61dafb" strokeWidth="4" transform="rotate(120 64 64)" />
        <circle cx="64" cy="64" r="10" fill="#61dafb" />
        <circle cx="64" cy="64" r="5" fill="#0f172a" />
      </g>

      <g transform="translate(620 210)" filter="url(#bento-shadow)">
        <rect width="120" height="120" rx="28" fill="#0f172a" fillOpacity="0.82" />
        <path d="M36 78 L60 42 L84 78 Z" fill="#fff" />
        <rect x="48" y="78" width="24" height="8" rx="2" fill="#fff" />
        <text x="60" y="108" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#fff" letterSpacing="0.08em">
          EXPO
        </text>
      </g>

      <rect x="250" y="318" width="92" height="34" rx="17" fill="#fff" fillOpacity="0.22" stroke="#fff" strokeOpacity="0.35" />
      <text x="296" y="340" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#0f172a">
        TypeScript
      </text>
      <rect x="360" y="348" width="108" height="34" rx="17" fill="#fff" fillOpacity="0.22" stroke="#fff" strokeOpacity="0.35" />
      <text x="414" y="370" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#0f172a">
        iOS · Android
      </text>
    </svg>
  );
}
