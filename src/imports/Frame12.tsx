import { useEffect, useState } from 'react';
import svgPaths from "./svg-k5xdkcrkdk";
import imgMapPlaceholder from "figma:asset/6287e279e54e87c6582cf5f2281ccd03b91bd3fe.png";

// Custom hook for parallax scroll effect
function useParallax() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0 w-full" data-name="section-header">
      <div className="font-['Segoe_UI:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#576250] text-[32px] text-center tracking-[-0.64px] w-full">
        <p className="leading-[40px]">Standort</p>
      </div>
    </div>
  );
}

function Locations() {
  const scrollY = useParallax();
  
  return (
    <div 
      className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-full" 
      data-name="locations"
      style={{ transform: `translateY(${scrollY * 0.01}px)` }}
    >
      <SectionHeader />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Segoe_UI:Regular',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#90998b] text-[16px] text-center w-full">
      <div className="leading-[24px] relative shrink-0 w-[248px]">
        <p className="mb-0">Grundmühle 1</p>
        <p>74936 Siegelsbach</p>
      </div>
      <div className="leading-[24px] relative shrink-0 w-[248px]">
        <p className="mb-0">Telefon: <a href="tel:+497264921384" className="text-[#576250] hover:underline">+49 7264 921384</a></p>
        <p>E-Mail: <a href="mailto:info@siegelsbacher-muehle.de" className="text-[#576250] hover:underline">info@siegelsbacher-muehle.de</a></p>
      </div>
    </div>
  );
}

function HeadOffice() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="head-office">
      <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#90998b] text-[16px] text-center w-full">
        <p className="leading-[24px]">Siegelsbacher Mühle</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-[209px]">
      <HeadOffice />
    </div>
  );
}

function Frame10() {
  const scrollY = useParallax();
  
  return (
    <div 
      className="content-stretch flex gap-6 items-start justify-start relative shrink-0"
      style={{ transform: `translateY(${scrollY * 0.015}px)` }}
    >
      <div className="relative h-[330px] rounded-[8px] shrink-0 w-[393px] overflow-hidden" data-name="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.8!2d8.9404!3d49.2985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSiegelsbach%2C%20Deutschland!5e0!3m2!1sde!2sde!4v1640995200000"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Siegelsbacher Mühle Karte"
        />
      </div>
      <Frame11 />
    </div>
  );
}

function IconLocation() {
  return (
    <div className="absolute left-[478.5px] size-7 top-[243px]" data-name="icon/location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="icon/location">
          <path d={svgPaths.p19fcdd00} fill="var(--fill-0, #B8C1B2)" id="Vector 1" />
          <path d={svgPaths.p2652dd00} fill="var(--fill-0, #424242)" id="Vector" />
          <path d={svgPaths.p11a20900} fill="var(--fill-0, #424242)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame12() {
  const scrollY = useParallax();
  
  return (
    <div 
      className="content-stretch flex flex-col gap-6 items-center justify-start relative size-full"
      style={{ transform: `translateY(${scrollY * 0.02}px)` }}
    >
      <Locations />
      <Frame10 />
      <IconLocation />
    </div>
  );
}