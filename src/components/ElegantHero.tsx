import { useEffect, useState } from 'react';
import { Heart, MapPin, Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function ElegantHero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  const weddingDate = new Date('2026-08-08T17:00:00');

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-[#f8faf8] via-[#ffffff] to-[#eef2ee] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#576250] rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-[#90998b] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-[#576250] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-[#90998b] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Save the Date Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#576250]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Heart className="w-4 h-4 text-[#576250]" />
              <span className="font-['Segoe_UI:Regular',_sans-serif] text-[#576250] text-[16px]">
                Save the Date
              </span>
              <Heart className="w-4 h-4 text-[#576250]" />
            </div>
            
            <h1 className="font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[64px] md:text-[80px] leading-tight mb-4">
              Melis & Karim
            </h1>
            
            <p className="font-['Segoe_UI:Regular',_sans-serif] text-[#90998b] text-[20px] mb-8">
              laden euch herzlich zur Hochzeit ein
            </p>

            {/* Wedding Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-[#576250]" />
                  <div className="text-left">
                    <div className="font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[24px]">
                      08. August 2026
                    </div>
                    <div className="font-['Segoe_UI:Regular',_sans-serif] text-[#90998b] text-[16px]">
                      Freitag
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#576250]" />
                  <div className="text-left">
                    <div className="font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[20px]">
                      Siegelsbacher Mühle
                    </div>
                    <div className="font-['Segoe_UI:Regular',_sans-serif] text-[#90998b] text-[16px]">
                      Siegelsbach
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="bg-gradient-to-r from-[#576250] to-[#687760] rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-white" />
              <h3 className="font-['Segoe_UI:Bold',_sans-serif] text-white text-[24px]">
                Countdown bis zur Hochzeit
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                <div className="font-['Segoe_UI:Bold',_sans-serif] text-white text-[36px] leading-none">
                  {mounted ? timeLeft.days : 0}
                </div>
                <div className="font-['Segoe_UI:Regular',_sans-serif] text-white/80 text-[14px] mt-2">
                  Tage
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                <div className="font-['Segoe_UI:Bold',_sans-serif] text-white text-[36px] leading-none">
                  {mounted ? timeLeft.hours : 0}
                </div>
                <div className="font-['Segoe_UI:Regular',_sans-serif] text-white/80 text-[14px] mt-2">
                  Stunden
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                <div className="font-['Segoe_UI:Bold',_sans-serif] text-white text-[36px] leading-none">
                  {mounted ? timeLeft.minutes : 0}
                </div>
                <div className="font-['Segoe_UI:Regular',_sans-serif] text-white/80 text-[14px] mt-2">
                  Minuten
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                <div className="font-['Segoe_UI:Bold',_sans-serif] text-white text-[36px] leading-none">
                  {mounted ? timeLeft.seconds : 0}
                </div>
                <div className="font-['Segoe_UI:Regular',_sans-serif] text-white/80 text-[14px] mt-2">
                  Sekunden
                </div>
              </div>
            </div>
            
            <p className="font-['Segoe_UI:Regular',_sans-serif] text-white/80 text-[16px]">
              bis wir den Bund fürs Leben schließen! 💍
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}