export const LogoIcon = () => (
  <svg 
    viewBox="0 0 300 300" 
    className="w-8 h-8" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Clean House Shape */}
    <path d="M40 160 L150 50 L260 160 L235 160 L235 250 L65 250 L65 160 Z" />
    
    {/* Windows (Negative Space) */}
    <g fill="white">
      <rect x="122" y="175" width="25" height="25" />
      <rect x="153" y="175" width="25" height="25" />
      <rect x="122" y="206" width="25" height="25" />
      <rect x="153" y="206" width="25" height="25" />
    </g>
  </svg>
)