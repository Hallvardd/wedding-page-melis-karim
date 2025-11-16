import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function SectionContent() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="w-full py-32 px-8"
      style={{ 
        transform: `translateY(${Math.min(scrollY * 0.02, 10)}px)`,
        willChange: 'transform'
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[0.95]">
            {t('gifts.title')}
          </h2>
        </div>

        <div 
          className="backdrop-blur-xl rounded-3xl p-12 sm:p-16 md:p-20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 1px 3px -1px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}
        >
          <div 
            className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
            }}
          />
          
          <div className="relative z-10 space-y-8">
            <p className="text-gray-800 text-[17px] sm:text-[18px] md:text-[19px] leading-[1.47] tracking-[0.011em] font-bold font-normal">
              {t('gifts.description')}
            </p>
            
            <p className="text-gray-700 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.47] tracking-[0.011em] font-normal">
              {t('gifts.description2')}
            </p>
            
            <div className="pt-4">
              <p className="text-gray-800 text-[17px] tracking-[0.011em] leading-[1.47] font-normal font-bold">
                {t('gifts.thanks')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GiftRegistry() {
  return (
    <div className="w-full">
      <SectionContent />
    </div>
  );
}