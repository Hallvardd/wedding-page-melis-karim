import svgPaths from "./svg-o6xi1ax1n3";

export default function Vector() {
  return (
    <div className="relative w-full h-full overflow-hidden" data-name="vector">
      {/* Desktop and Tablet View */}
      <div className="hidden md:block absolute inset-0 opacity-30">
        <svg 
          className="block w-full h-full" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice" 
          viewBox="0 0 1710 619"
        >
          <path 
            d={svgPaths.p3ecbcce0} 
            id="vector" 
            stroke="var(--stroke-0, #CAD1C6)" 
            strokeLinecap="round" 
            strokeWidth="2" 
          />
        </svg>
      </div>
      
      {/* Mobile View - Simplified version */}
      <div className="block md:hidden absolute inset-0 opacity-20">
        <svg 
          className="block w-full h-full" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice" 
          viewBox="400 100 900 400"
        >
          <path 
            d={svgPaths.p3ecbcce0} 
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