import svgPaths from "./svg-ux9sese6bu";
import imgRectangle14 from "figma:asset/58e86cbe74003e6fb69944de74d0dea5b40de6de.png";
import imgRectangle15 from "figma:asset/41c1a10e3833bd0975db4e869609b0ce06495c70.png";
import imgRectangle16 from "figma:asset/27fddfd3654770f677e6e7e4b3e8e666080fae46.png";
import imgImgPlaceholder from "figma:asset/9917ddc3f11635b70e4743f941dfb83c3dc158ee.png";
import { imgHeroContent } from "./svg-3776i";

function Services() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-end relative size-full" data-name="services">
      <div className="bg-neutral-50 h-[317px] rounded-[8px] shrink-0 w-[1100px]" data-name="container" />
      <div className="absolute box-border content-stretch flex flex-col gap-1 h-[440px] items-center justify-end left-[-0.24px] px-8 py-6 top-[21px] w-[1100px]" data-name="section-header">
        <div className="font-['Segoe_UI:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#576250] text-[32px] text-center tracking-[-0.64px] w-full">
          <p className="leading-[40px]">Ablauf</p>
        </div>
      </div>
      <div className="absolute h-[358.823px] left-[-252px] top-[-42px] w-[1603.52px]" data-name="vector">
        <div className="absolute inset-[-0.42%_-0.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1608 363">
            <path d={svgPaths.p18479bc0} id="vector" stroke="var(--stroke-0, #CAD1C6)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex gap-4 items-start justify-start left-[139px] px-8 py-0 top-[81.5px] w-[840px]" data-name="service-cards">
        <div className="h-[298px] relative shrink-0 w-[248px]" data-name="service-card">
          <div className="absolute bg-white h-[298px] left-0 rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[248px]" />
          <div className="absolute font-['Segoe_UI:Regular',_sans-serif] leading-[24px] left-[123px] not-italic text-[#90998b] text-[16px] text-center text-nowrap top-[238px] translate-x-[-50%] whitespace-pre">
            <p className="font-['Segoe_UI:Bold',_sans-serif] mb-0">Sektempfang</p>
            <p>16:00 Uhr</p>
          </div>
          <div className="absolute bg-center bg-cover bg-no-repeat h-[210px] left-3 rounded-tl-[8px] rounded-tr-[8px] top-3 w-[223px]" style={{ backgroundImage: `url('${imgRectangle14}')` }} />
        </div>
        <div className="h-[298px] relative shrink-0 w-[248px]" data-name="service-card">
          <div className="absolute bg-white h-[298px] left-0 rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[248px]" />
          <div className="absolute font-['Segoe_UI:Bold',_sans-serif] leading-[0] left-[125px] not-italic text-[#90998b] text-[16px] text-center text-nowrap top-[238px] translate-x-[-50%]">
            <p className="leading-[24px] whitespace-pre">
              <span>
                Trauung
                <br aria-hidden="true" />
              </span>
              <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic">17:00 Uhr</span>
            </p>
          </div>
          <div className="absolute bg-center bg-cover bg-no-repeat h-[210px] left-[13px] rounded-tl-[8px] rounded-tr-[8px] top-3 w-[223px]" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
        </div>
        <div className="h-[298px] relative shrink-0 w-[248px]" data-name="service-card">
          <div className="absolute bg-white h-[298px] left-0 rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[248px]" />
          <div className="absolute font-['Segoe_UI:Bold',_sans-serif] leading-[0] left-[124px] not-italic text-[#90998b] text-[16px] text-center text-nowrap top-[238px] translate-x-[-50%]">
            <p className="leading-[24px] whitespace-pre">Party</p>
          </div>
          <div className="absolute bg-center bg-cover bg-no-repeat h-[210px] left-3 rounded-tl-[8px] rounded-tr-[8px] top-3 w-[223px]" style={{ backgroundImage: `url('${imgRectangle16}')` }} />
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
    <div className="absolute bottom-[46.15%] content-stretch flex flex-col gap-14 items-center justify-start left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-464px_-385px] mask-size-[1440px_1012px] top-[38.04%] translate-x-[-50%]" data-name="hero-content" style={{ maskImage: `url('${imgHeroContent}')` }}>
      <SectionHeader />
    </div>
  );
}

function Content() {
  return <div className="absolute box-border content-stretch flex items-center justify-between left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1440px_1012px] overflow-clip px-16 py-6 top-0 w-[1440px]" data-name="content" style={{ maskImage: `url('${imgHeroContent}')` }} />;
}

export default function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative size-full">
      <div className="h-[1012px] relative shrink-0 w-full" data-name="hero">
        <div className="absolute bg-center bg-cover bg-no-repeat bottom-[3.43%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_117.544px] mask-size-[1440px_1012px] right-0 top-[-11.62%]" data-name="img_placeholder" style={{ backgroundImage: `url('${imgImgPlaceholder}')`, maskImage: `url('${imgHeroContent}')` }} />
        <HeroContent />
        <Content />
      </div>
      <div className="content-stretch flex flex-col gap-2.5 items-start justify-end relative shrink-0 w-[1100px]" data-name="services">
        <Services />
      </div>
    </div>
  );
}