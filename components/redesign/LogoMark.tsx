/** BIL 品牌符号（纯图形，无字）：蓝圆 + 红五边形 + 金双弧 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 132 112"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="44" cy="44" r="42" fill="#002FA7" />
      <polygon points="56,40 90,64 77,104 35,104 22,64" fill="#CC2936" />
      <path
        d="M93 27 Q113 54 101 83"
        stroke="#C9A84C"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M104 22 Q127 53 113 88"
        stroke="#D9C079"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
