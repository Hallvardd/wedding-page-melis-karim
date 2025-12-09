import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-a2pif5rxfb";
import imgRectangle14 from "figma:asset/58e86cbe74003e6fb69944de74d0dea5b40de6de.png";
import imgRectangle15 from "figma:asset/c486c20bb8dc95ef4762040ee76a7564a8502a5f.png";
import imgRectangle16 from "figma:asset/b824857bbafa17237dc53f9610e5e7ef7b72d703.png";
import { useLanguage } from "../contexts/LanguageContext";

export function Services({ scrollY }: { scrollY: number }) {
    const { t } = useLanguage();

    return (
        <div
            className="content-stretch flex flex-col items-center justify-center relative w-full"
            data-name="services"
        >
            {/* Section Title */}
            <div
                className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.08, 30)}px)`,
                }}
            >
                <div className="text-center mb-20">
                    <h2 className="text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[0.95] mb-8">
                        {t("services.title")}
                    </h2>
                </div>

                <div className="text-center mb-20">
                    <p className="text-gray-700 text-[17px] sm:text-[18px] md:text-[19px] font-normal leading-[1.47] tracking-[0.011em] max-w-3xl mx-auto">
                        {t("services.instructions")}
                    </p>
                </div>

                {/* Service Cards with refined glassmorphism */}
                <div className="max-w-6xl mx-auto">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch justify-center"
                        style={{
                            transform: `translateY(${Math.min(scrollY * 0.05, 20)}px)`,
                            gridAutoRows: "1fr",
                        }}
                    >
                        {/* Sektempfang Card */}
                        <div
                            className="backdrop-blur-xl rounded-3xl hover:scale-[1.02] transition-all duration-500 overflow-hidden w-full max-w-[350px] flex flex-col"
                            data-name="service-card"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                                border: "1px solid rgba(255, 255, 255, 0.8)",
                                transform: `translateY(${Math.sin(scrollY * 0.01) * 8}px)`,
                                transitionDelay: "0ms",
                            }}
                        >
                            <div
                                className="bg-center bg-cover bg-no-repeat h-[200px] w-full rounded-t-3xl"
                                style={{ backgroundImage: `url('${imgRectangle14}')` }}
                            />
                            <div className="p-8 text-center relative z-10 flex-1 flex flex-col">
                                <div
                                    className="absolute inset-0 rounded-b-3xl opacity-5 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                                    }}
                                />
                                <h3 className="text-gray-800 text-[20px] sm:text-[22px] font-semibold mb-3 tracking-[-0.015em] leading-[1.2] relative z-10 min-h-[2.4em]">
                                    {t("services.reception")}
                                </h3>
                                <p className="text-gray-700 text-[16px] sm:text-[17px] leading-[1.47] font-normal tracking-[0.011em] relative z-10">
                                    {t("services.receptionTime")}
                                </p>
                            </div>
                        </div>

                        {/* Trauung Card */}
                        <div
                            className="backdrop-blur-xl rounded-3xl hover:scale-[1.02] transition-all duration-500 overflow-hidden w-full max-w-[350px] flex flex-col"
                            data-name="service-card"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                                border: "1px solid rgba(255, 255, 255, 0.8)",
                                transform: `translateY(${Math.sin(scrollY * 0.01 + 2) * 8}px)`,
                                transitionDelay: "150ms",
                            }}
                        >
                            <div
                                className="bg-center bg-cover bg-no-repeat h-[200px] w-full rounded-t-3xl"
                                style={{ backgroundImage: `url('${imgRectangle15}')` }}
                            />
                            <div className="p-8 text-center relative z-10 flex-1 flex flex-col">
                                <div
                                    className="absolute inset-0 rounded-b-3xl opacity-5 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                                    }}
                                />
                                <h3 className="text-gray-800 text-[20px] sm:text-[22px] font-semibold mb-3 tracking-[-0.015em] leading-[1.2] relative z-10 min-h-[2.4em]">
                                    {t("services.ceremony")}
                                </h3>
                                <p className="text-gray-700 text-[16px] sm:text-[17px] leading-[1.47] font-normal tracking-[0.011em] relative z-10">
                                    {t("services.ceremonyTime")}
                                </p>
                            </div>
                        </div>

                        {/* Dinner Card */}
                        <div
                            className="backdrop-blur-xl rounded-3xl hover:scale-[1.02] transition-all duration-500 overflow-hidden w-full max-w-[350px] flex flex-col"
                            data-name="service-card"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                                border: "1px solid rgba(255, 255, 255, 0.8)",
                                transform: `translateY(${Math.sin(scrollY * 0.01 + 4) * 8}px)`,
                                transitionDelay: "300ms",
                            }}
                        >
                            <div
                                className="bg-center bg-cover bg-no-repeat h-[200px] w-full rounded-t-3xl"
                                style={{ backgroundImage: `url('${imgRectangle16}')` }}
                            />
                            <div className="p-8 text-center relative z-10 flex-1 flex flex-col">
                                <div
                                    className="absolute inset-0 rounded-b-3xl opacity-5 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                                    }}
                                />
                                <h3 className="text-gray-800 text-[20px] sm:text-[22px] font-semibold mb-3 tracking-[-0.015em] leading-[1.2] relative z-10 min-h-[2.4em]">
                                    {t("services.dinner")} & {t("services.party")}
                                </h3>
                                <div className="text-gray-700 text-[16px] sm:text-[17px] leading-[1.47] font-normal tracking-[0.011em] relative z-10 space-y-2">
                                    <p>{t("services.dinnerTime")}</p>
                                    <p>{t("services.partyTime")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
