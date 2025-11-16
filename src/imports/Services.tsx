import svgPaths from "./svg-a2pif5rxfb";
import imgRectangle14 from "figma:asset/58e86cbe74003e6fb69944de74d0dea5b40de6de.png";
import imgRectangle15 from "figma:asset/41c1a10e3833bd0975db4e869609b0ce06495c70.png";
import imgRectangle16 from "figma:asset/27fddfd3654770f677e6e7e4b3e8e666080fae46.png";

function Services() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-end relative size-full" data-name="services">
      <div className="absolute h-[614.55px] left-[-414.08px] top-[-28.41px] w-[1706.16px]" data-name="vector">
        <div className="absolute inset-[-0.24%_-0.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1710 619">
            <path d={svgPaths.p3ecbcce0} id="vector" stroke="var(--stroke-0, #CAD1C6)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="font-['Segoe_UI:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#576250] text-[32px] text-center tracking-[-0.64px]" style={{ width: "min-content" }}>
        <p className="leading-[40px]">Ablauf</p>
      </div>
      <div className="h-[373px] relative rounded-[24px] shrink-0 w-full" data-name="service-cards">
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex gap-4 h-[373px] items-center justify-center px-8 py-0 relative w-full">
            <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
              <div className="bg-white box-border content-stretch flex flex-col gap-4 h-[298px] items-center justify-start p-[12px] relative rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-[248px]" data-name="service-card">
                <div className="bg-center bg-cover bg-no-repeat h-[210px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[223px]" style={{ backgroundImage: `url('${imgRectangle14}')` }} />
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#90998b] text-[16px] text-center text-nowrap whitespace-pre">
                  <p className="font-['Segoe_UI:Bold',_sans-serif] mb-0">Sektempfang</p>
                  <p>16:00 Uhr</p>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-4 h-[298px] items-center justify-start p-[12px] relative rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-[248px]" data-name="service-card">
                <div className="bg-center bg-cover bg-no-repeat h-[210px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[223px]" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
                <div className="font-['Segoe_UI:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#90998b] text-[16px] text-center text-nowrap">
                  <p className="leading-[24px] whitespace-pre">
                    <span>
                      Trauung
                      <br aria-hidden="true" />
                    </span>
                    <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic">17:00 Uhr</span>
                  </p>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col gap-4 h-[298px] items-center justify-start p-[12px] relative rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-[248px]" data-name="service-card">
                <div className="bg-center bg-cover bg-no-repeat h-[210px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[223px]" style={{ backgroundImage: `url('${imgRectangle16}')` }} />
                <div className="font-['Segoe_UI:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#90998b] text-[16px] text-center text-nowrap">
                  <p className="leading-[24px] whitespace-pre">
                    <span>
                      Dinner
                      <br aria-hidden="true" />
                    </span>
                    <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic">19:00 Uhr</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services1() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-end relative size-full" data-name="services">
      <Services />
    </div>
  );
}