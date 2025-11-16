import { useEffect, useState } from "react";
import { MapPin, Navigation, Phone, Clock, Car, Train } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ElegantLocation() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full"
      style={{
        transform: `translateY(${Math.min(scrollY * 0.03, 15)}px)`,
        willChange: "transform",
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 sm:px-8">
        <div
          className="text-center mb-20"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.05, 20)}px)`,
          }}
        >
          <h2 className="text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[0.95] mb-8">
            {t("location.title")}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            className="grid lg:grid-cols-2 gap-16 items-stretch justify-center"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.02, 10)}px)`,
            }}
          >
            {/* Location Details */}
            <div className="space-y-8">
              <div
                className="backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
              >
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div>
                      <h3 className="text-gray-900 text-[18px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-[1.2]">
                        {t("location.name")}
                      </h3>
                      <p className="text-gray-800 text-[17px] leading-[1.47] font-normal tracking-[0.011em]">
                        {t("location.description")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Navigation className="w-6 h-6 text-gray-700 mt-1" />
                      <div>
                        <div className="text-gray-800 text-[17px] leading-[1.47] font-normal tracking-[0.011em] whitespace-pre-line">
                          {t("location.address")}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-gray-700" />
                      <a
                        href="tel:+497262123456"
                        className="text-gray-800 text-[17px] leading-[1.47] font-medium tracking-[0.011em] hover:text-gray-600 transition-colors"
                      >
                        +49 7262 123456
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 text-center">
                    <div
                      className="w-full h-px opacity-30 mb-8"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                      }}
                    />
                    <a
                      href="https://maps.google.com/?q=Siegelsbacher+Mühle,+Mühlenstraße+15,+74936+Siegelsbach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[17px] font-medium tracking-[-0.01em] transition-all duration-300 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)",
                        color: "white",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Navigation className="w-5 h-5" />
                      {t("location.route")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <div
                  className="backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-500 flex flex-col h-full hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    boxShadow:
                      "0 15px 30px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-xl flex-shrink-0 border border-white/30"
                      style={{
                        background: "rgba(255, 255, 255, 0.3)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <Car className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="text-gray-800 text-[16px] sm:text-[17px] font-semibold tracking-[-0.01em] leading-[1.3]">
                      {t("location.car")}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-[15px] sm:text-[16px] leading-[1.47] font-normal tracking-[0.011em] flex-grow">
                    {t("location.carDescription")}
                  </p>
                </div>

                <div
                  className="backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-500 flex flex-col h-full hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    boxShadow:
                      "0 15px 30px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-3 rounded-xl flex-shrink-0 border border-white/30"
                      style={{
                        background: "rgba(255, 255, 255, 0.3)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <Train className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="text-gray-800 text-[16px] sm:text-[17px] font-semibold tracking-[-0.01em] leading-[1.3]">
                      {t("location.public")}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-[15px] sm:text-[16px] leading-[1.47] font-normal tracking-[0.011em] flex-grow">
                    {t("location.publicDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div
              className="backdrop-blur-xl border border-white/20 rounded-3xl p-4 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="rounded-2xl overflow-hidden border border-white/30"
                  style={{
                    height: "700px",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.123456789!2d8.87654321!3d49.23456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSiegelsbach!5e0!3m2!1sde!2sde!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Siegelsbacher Mühle Location"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-700 text-[15px] leading-[1.4] tracking-[0.011em]">
                    {t("location.mapNote")}
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

