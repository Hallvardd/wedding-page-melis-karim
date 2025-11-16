import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function SaveTheDateWithCountdown() {
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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="content-stretch flex justify-center relative shrink-0 w-full py-32">
      <div className="w-full max-w-6xl px-8">
        <div 
          className="text-center"
          style={{ 
            transform: `translateY(${Math.min(scrollY * 0.1, 40)}px)`,
            willChange: 'transform'
          }}
        >
          {/* Save the Date Header */}
          <div className="mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-[1px] bg-gray-300"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-8 h-[1px] bg-gray-300"></div>
              </div>
            </div>
            
            <h2 className="text-gray-900 text-[48px] sm:text-[64px] md:text-[80px] font-semibold mb-8 tracking-[-0.025em] leading-[0.95]">
              Save the Date
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="text-gray-800 text-[28px] sm:text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-[1.1]">
                08. August 2026
              </div>
            </div>
            
            <p className="text-gray-600 text-[19px] sm:text-[21px] font-normal leading-[1.38] tracking-[0.011em]">
              Siegelsbacher Mühle, Siegelsbach  
            </p>
          </div>

          {/* Countdown Section without box */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <h3 className="text-gray-800 text-[28px] sm:text-[32px] md:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
                Countdown bis zur Hochzeit
              </h3>
            </div>
            
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
              style={{ 
                transform: `translateY(${Math.min(scrollY * 0.05, 20)}px)`
              }}
            >
              <div 
                className="group"
                style={{ 
                  transform: `translateY(${Math.sin(scrollY * 0.01) * 5}px)`,
                  transitionDelay: '0ms'
                }}
              >
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-[20px] p-8 hover:scale-[1.01] hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-gray-100/10"></div>
                  <div className="relative z-10">
                    <div className="text-gray-900 text-[36px] sm:text-[44px] font-semibold leading-none mb-3 tracking-[-0.025em]">
                      {mounted ? timeLeft.days : 0}
                    </div>
                    <div className="text-gray-500 text-[13px] font-medium uppercase tracking-[1.2px] leading-[1.2]">
                      Tage
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="group"
                style={{ 
                  transform: `translateY(${Math.sin(scrollY * 0.01 + 1) * 5}px)`,
                  transitionDelay: '100ms'
                }}
              >
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-[20px] p-8 hover:scale-[1.01] hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-gray-100/10"></div>
                  <div className="relative z-10">
                    <div className="text-gray-900 text-[36px] sm:text-[44px] font-semibold leading-none mb-3 tracking-[-0.025em]">
                      {mounted ? timeLeft.hours : 0}
                    </div>
                    <div className="text-gray-500 text-[13px] font-medium uppercase tracking-[1.2px] leading-[1.2]">
                      Stunden
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="group"
                style={{ 
                  transform: `translateY(${Math.sin(scrollY * 0.01 + 2) * 5}px)`,
                  transitionDelay: '200ms'
                }}
              >
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-[20px] p-8 hover:scale-[1.01] hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-gray-100/10"></div>
                  <div className="relative z-10">
                    <div className="text-gray-900 text-[36px] sm:text-[44px] font-semibold leading-none mb-3 tracking-[-0.025em]">
                      {mounted ? timeLeft.minutes : 0}
                    </div>
                    <div className="text-gray-500 text-[13px] font-medium uppercase tracking-[1.2px] leading-[1.2]">
                      Minuten
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="group"
                style={{ 
                  transform: `translateY(${Math.sin(scrollY * 0.01 + 3) * 5}px)`,
                  transitionDelay: '300ms'
                }}
              >
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-[20px] p-8 hover:scale-[1.01] hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-gray-100/10"></div>
                  <div className="relative z-10">
                    <div className="text-gray-900 text-[36px] sm:text-[44px] font-semibold leading-none mb-3 tracking-[-0.025em]">
                      {mounted ? timeLeft.seconds : 0}
                    </div>
                    <div className="text-gray-500 text-[13px] font-medium uppercase tracking-[1.2px] leading-[1.2]">
                      Sekunden
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-[1px] bg-gray-300"></div>
              <p className="text-gray-600 text-[15px] sm:text-[16px] px-4 leading-[1.4]">
                bis wir den Bund fürs Leben schließen
              </p>
              <div className="w-6 h-[1px] bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}