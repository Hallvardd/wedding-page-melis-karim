import svgPaths from "./svg-6u28bbmgzz";

export default function Vector() {
  return (
    <div className="relative w-full h-full overflow-hidden" data-name="vector">
      {/* Desktop and Tablet View */}
      <div className="hidden lg:block absolute inset-0 opacity-30">
        <svg 
          className="block w-full h-full" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice" 
          viewBox="0 0 1104 619"
        >
          <path 
            d={svgPaths.pe5baa80} 
            id="vector" 
            stroke="var(--stroke-0, #CAD1C6)" 
            strokeLinecap="round" 
            strokeWidth="2" 
          />
        </svg>
      </div>
      
      {/* Tablet View - Slightly cropped */}
      <div className="hidden md:block lg:hidden absolute inset-0 opacity-25">
        <svg 
          className="block w-full h-full" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice" 
          viewBox="100 50 900 500"
        >
          <path 
            d={svgPaths.pe5baa80} 
            id="vector" 
            stroke="var(--stroke-0, #CAD1C6)" 
            strokeLinecap="round" 
            strokeWidth="1.8" 
          />
        </svg>
      </div>
      
      {/* Mobile View - Focused on central curve */}
      <div className="block md:hidden absolute inset-0 opacity-20">
        <svg 
          className="block w-full h-full" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice" 
          viewBox="300 150 500 300"
        >
          <path 
            d={svgPaths.pe5baa80} 
            id="vector" 
            stroke="var(--stroke-0, #CAD1C6)" 
            strokeLinecap="round" 
            strokeWidth="1.5" 
          />
        </svg>
      </div>
    </div>
  );
}