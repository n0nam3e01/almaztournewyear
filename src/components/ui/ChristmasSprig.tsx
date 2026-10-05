export function ChristmasSprig({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 200"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#2a683e" strokeLinecap="round">
        <path d="M-20 8Q145 42 290 180" strokeWidth="4" />
        {[35, 65, 95, 125, 155, 185, 215].map((x, i) => (
          <g
            key={x}
            transform={`translate(${x} ${10 + i * 17}) rotate(${20 + i * 3})`}
          >
            <path
              d="M0 0l42-30M0 0l45 25M12 8l38-20M12 8l28 38M-8-5l24-36"
              strokeWidth="2.5"
            />
            <path d="M0 0l12-43M0 0l-8 36" strokeWidth="1.5" />
          </g>
        ))}
      </g>
      <path d="M103 62v30M213 128v18" stroke="#bb9253" strokeWidth="1.4" />
      <circle cx="103" cy="107" r="17" fill="#a83b43" />
      <circle cx="98" cy="102" r="5" fill="#ffffff45" />
      <circle cx="213" cy="155" r="11" fill="#d6b676" />
      <circle cx="44" cy="57" r="5" fill="#a83b43" />
      <circle cx="55" cy="63" r="4" fill="#a83b43" />
    </svg>
  );
}
