import { useId } from "react";

export function AxentraMark() {
  const tileGradientId = useId().replace(/:/g, "");
  const markGradientId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className="brand-lockup__glyph"
    >
      <defs>
        <linearGradient
          id={tileGradientId}
          x1="12"
          y1="10"
          x2="66"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F9FB" />
          <stop offset="0.7" stopColor="#F3F5F8" />
          <stop offset="1" stopColor="#EAF5FA" />
        </linearGradient>
        <linearGradient
          id={markGradientId}
          x1="18"
          y1="54"
          x2="56"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#39D3C4" />
          <stop offset="1" stopColor="#1A677B" />
        </linearGradient>
      </defs>

      <rect
        x="6"
        y="6"
        width="64"
        height="64"
        rx="16"
        fill={`url(#${tileGradientId})`}
        stroke="#FFFFFF"
        strokeOpacity="0.84"
        strokeWidth="1.4"
      />

      <circle cx="18" cy="18" r="9.5" fill="#EEF7FF" opacity="0.34" />
      <circle cx="58" cy="58" r="12" fill="#DDF5FF" opacity="0.26" />

      <ellipse cx="38" cy="57" rx="12.5" ry="2.3" fill="#BDD5DF" opacity="0.16" />

      <g
        transform="translate(11.5 10.5) scale(0.84)"
        stroke={`url(#${markGradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M31 16L22 32H33.5" strokeWidth="5.2" />
        <path d="M34 16L49 52" strokeWidth="9.2" />
        <path d="M22 36.5H36.4" strokeWidth="3.9" opacity="0.95" />
        <path d="M27 44.3H40" strokeWidth="3.9" opacity="0.92" />
        <path d="M18 50L22 36.5L28 26L34 33.3" strokeWidth="3.9" />
        <path d="M22 36.5L31.2 44.3" strokeWidth="3.9" />
        <path d="M28 26L34 33.3" strokeWidth="3.4" />
        <path d="M34 33.3H42.4" strokeWidth="3.2" opacity="0.9" />
      </g>

      <g transform="translate(11.5 10.5) scale(0.84)" fill={`url(#${markGradientId})`}>
        <circle cx="18" cy="50" r="5" />
        <circle cx="22" cy="36.5" r="4.3" />
        <circle cx="28" cy="26" r="3.7" />
        <circle cx="34" cy="33.3" r="2.9" />
        <circle cx="31.2" cy="44.3" r="3.8" />
        <circle cx="37.9" cy="36.6" r="1.95" opacity="0.92" />
        <circle cx="41.6" cy="44.3" r="1.9" opacity="0.9" />
      </g>
    </svg>
  );
}
