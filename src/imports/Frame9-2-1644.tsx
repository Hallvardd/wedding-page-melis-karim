import { useEffect, useState } from 'react';
import imgRectangle14 from "figma:asset/58e86cbe74003e6fb69944de74d0dea5b40de6de.png";
import imgRectangle15 from "figma:asset/41c1a10e3833bd0975db4e869609b0ce06495c70.png";
import imgRectangle16 from "figma:asset/27fddfd3654770f677e6e7e4b3e8e666080fae46.png";
import imgImgPlaceholder from "figma:asset/9917ddc3f11635b70e4743f941dfb83c3dc158ee.png";
import { imgHeroContent } from "./svg-gwqno";

function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="container mx-auto px-6 py-32 relative z-10" 
      data-name="services"
      style={{ 
        transform: `translateY(${Math.min(scrollY * 0.08, 30)}px)`,
        willChange: 'transform'
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
          <span className="text-gray-700 text-[16px] font-medium">
            Unser Hochzeitstag
          </span>
        </div>
        
        <h2 className="text-gray-900 text-[48px] sm:text-[64px] md:text-[80px] font-semibold mb-6 tracking-[-0.025em] leading-[0.95]">
          Ablauf
        </h2>
        <p className="text-gray-600 text-[19px] sm:text-[21px] font-normal leading-[1.38] max-w-2xl mx-auto px-4 tracking-[0.011em]">
          Der zeitliche Ablauf unseres besonderen Tages
        </p>
      </div>

      {/* Service Cards without container box */}
      <div className="max-w-6xl mx-auto">
        <div 
          className="flex flex-col lg:flex-row gap-12 items-center justify-center"
          style={{ 
            transform: `translateY(${Math.min(scrollY * 0.05, 20)}px)`
          }}
        >
            
            {/* Sektempfang Card */}
            <div 
              className="bg-white/95 backdrop-blur-xl border border-gray-200/30 rounded-[24px] hover:scale-[1.02] transition-all duration-500 overflow-hidden w-full max-w-[340px]" 
              data-name="service-card"
              style={{ 
                transform: `translateY(${Math.sin(scrollY * 0.01) * 8}px)`,
                transitionDelay: '0ms'
              }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 h-[140px] w-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-[32px]">🥂</span>
                </div>
              </div>
              <div className="p-10 text-center">
                <h3 className="text-gray-900 text-[28px] font-semibold mb-4 tracking-[-0.02em] leading-[1.14]">
                  Sektempfang
                </h3>
                <p className="text-gray-600 text-[19px] leading-[1.38] font-normal tracking-[0.011em]">
                  16:00 Uhr
                </p>
              </div>
            </div>

            {/* Trauung Card */}
            <div 
              className="bg-white/95 backdrop-blur-xl border border-gray-200/30 rounded-[24px] hover:scale-[1.02] transition-all duration-500 overflow-hidden w-full max-w-[340px]" 
              data-name="service-card"
              style={{ 
                transform: `translateY(${Math.sin(scrollY * 0.01 + 2) * 8}px)`,
                transitionDelay: '150ms'
              }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 h-[140px] w-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-[32px]">💍</span>
                </div>
              </div>
              <div className="p-10 text-center">
                <h3 className="text-gray-900 text-[28px] font-semibold mb-4 tracking-[-0.02em] leading-[1.14]">
                  Trauung
                </h3>
                <p className="text-gray-600 text-[19px] leading-[1.38] font-normal tracking-[0.011em]">
                  17:00 Uhr
                </p>
              </div>
            </div>

            {/* Dinner Card */}
            <div 
              className="bg-white/95 backdrop-blur-xl border border-gray-200/30 rounded-[24px] hover:scale-[1.02] transition-all duration-500 overflow-hidden w-full max-w-[340px]" 
              data-name="service-card"
              style={{ 
                transform: `translateY(${Math.sin(scrollY * 0.01 + 4) * 8}px)`,
                transitionDelay: '300ms'
              }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 h-[140px] w-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-[32px]">🍽️</span>
                </div>
              </div>
              <div className="p-10 text-center">
                <h3 className="text-gray-900 text-[28px] font-semibold mb-4 tracking-[-0.02em] leading-[1.14]">
                  Dinner
                </h3>
                <p className="text-gray-600 text-[19px] leading-[1.38] font-normal tracking-[0.011em]">
                  19:00 Uhr
                </p>
              </div>
            </div>

          </div>
        </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start leading-[0] not-italic relative shrink-0 text-center w-full" data-name="section-header">
      <div className="font-['Segoe_UI:Regular',_sans-serif] relative shrink-0 text-[#90998b] text-[40px] w-[512px]">
        <p className="leading-[24px]">We’re getting Married</p>
      </div>
      <div className="font-['Segoe_UI:Bold',_sans-serif] min-w-full relative shrink-0 text-[#576250] text-[56px] tracking-[-1.12px]" style={{ width: "min-content" }}>
        <p className="leading-[64px]">{`Melis & Karim`}</p>
      </div>
      <div className="font-['Segoe_UI:Bold',_sans-serif] min-w-full relative shrink-0 text-[#576250] text-[32px] tracking-[-0.64px]" style={{ width: "min-content" }}>
        <p className="leading-[40px]">8.08.2026</p>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="absolute inset-0 flex flex-col gap-8 sm:gap-10 md:gap-14 items-center justify-center px-4" data-name="hero-content" style={{ maskImage: `url('${imgHeroContent}')` }}>
      <SectionHeader />
    </div>
  );
}

function Content() {
  return <div className="absolute box-border content-stretch flex items-center justify-between left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1440px_1012px] overflow-clip px-16 py-6 top-0 w-[1440px]" data-name="content" style={{ maskImage: `url('${imgHeroContent}')` }} />;
}

export default function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative w-full min-h-screen">
      <div className="h-[600px] sm:h-[700px] md:h-[800px] lg:h-[1012px] relative w-full" data-name="hero">
        <div className="absolute inset-0" data-name="img_placeholder" style={{ maskImage: `url('${imgHeroContent}')` }} />
        <HeroContent />
        <Content />
      </div>
      <div className="w-full" data-name="services">
        <Services />
      </div>
    </div>
  );
}