export function SaveTheDate() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#576250] to-[#687760] rounded-2xl p-12 shadow-xl">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-6 left-12 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="relative text-center text-white">
        <div className="mb-4">
          <div className="font-['Segoe_UI:Regular',_sans-serif] text-[18px] opacity-90 mb-2">
            Save the Date
          </div>
          <h2 className="font-['Segoe_UI:Bold',_sans-serif] text-[42px] leading-tight mb-2">
            Melis & Karim
          </h2>
          <div className="font-['Segoe_UI:Regular',_sans-serif] text-[16px] opacity-90 mb-6">
            laden euch herzlich zur Hochzeit ein
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
          <div className="font-['Segoe_UI:Bold',_sans-serif] text-[32px] mb-2">
            08. August 2026
          </div>
          <div className="font-['Segoe_UI:Regular',_sans-serif] text-[18px] opacity-90">
            Siegelsbacher Mühle, Siegelsbach
          </div>
        </div>
        
        <div className="mt-8 font-['Segoe_UI:Regular',_sans-serif] text-[16px] opacity-90">
          Weitere Details folgen bald! 💕
        </div>
      </div>
    </div>
  );
}