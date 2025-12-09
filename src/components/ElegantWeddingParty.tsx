import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import imgHenner from "figma:asset/012daeb75dba7a52675164bdac8b8ecc56dfd137.png";
import imgJounes from "figma:asset/7e354359a6bfd53bf053fef990b02d5d71af753e.png";
import imgMandy from "figma:asset/21fc46a879edec18d54f2616245e1a1ae09c2beb.png";
import imgMarie from "figma:asset/2f5e7cae21ced5fb191f3b4bea3eb8a4b18a55b9.png";
import imgInes from "figma:asset/a2063f8d37d62140ea97ddd45a7a387490170b66.png";
import imgGeraldine from "figma:asset/f055ed4d330297e7c3c47ac352bd0507e6e263cb.png";

export function ElegantWeddingParty({ scrollY }: { scrollY: number }) {
    const { t } = useLanguage();

    const bridesMaids = [
        {
            name: "weddingParty.geraldine",
            language: "🇩🇪 🇫🇷 ",
            phone: import.meta.env.VITE_PHONE_GERALDINE,
            image: imgGeraldine,
        },
        {
            name: "weddingParty.marie",
            language: "🇩🇪  🇬🇧  🇫🇷 ",
            phone: import.meta.env.VITE_PHONE_MARIE,
            image: imgMarie,
        },
        {
            name: "weddingParty.mandy",
            language: "🇩🇪  🇬🇧 ",
            phone: import.meta.env.VITE_PHONE_MANDY,
            image: imgMandy,
        },
        {
            name: "weddingParty.ines",
            language: "🇩🇪  🇬🇧 ",
            phone: import.meta.env.VITE_PHONE_INES,
            image: imgInes,
        },
    ];

    const groomsMen = [
        {
            name: "weddingParty.jounes",
            language: "🇩🇪 ",
            phone: import.meta.env.VITE_PHONE_JOUNES,
            image: imgJounes,
        },
        {
            name: "weddingParty.henner",
            language: "🇩🇪 ",
            phone: import.meta.env.VITE_PHONE_HENNER,
            image: imgHenner,
        },
    ];

    const PersonCard = ({
        person,
        index,
    }: {
        person: { name: string; language: string; phone: string; image?: string };
        index: number;
    }) => {
        const translatedName = t(person.name);
        const whatsappNumber = person.phone.replace(/[\s+]/g, "");

        return (
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block backdrop-blur-xl rounded-3xl p-6 sm:p-8 transition-all duration-500 group relative overflow-hidden hover:scale-[1.02] cursor-pointer"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    transform: `translateY(${Math.sin((scrollY + index * 100) * 0.01) * 5}px)`,
                    transitionDelay: `${index * 100}ms`,
                }}
            >
                <div
                    className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                    }}
                />
                <div className="relative z-10">
                    <div className="text-center mb-6">
                        <div
                            className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/30 overflow-hidden"
                            style={{
                                background: "rgba(255, 255, 255, 0.4)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                            }}
                        >
                            {person.image ? (
                                <img
                                    src={person.image}
                                    alt={translatedName}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            ) : (
                                <span className="text-gray-700 text-[28px] font-medium">
                                    {translatedName
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")
                                        .slice(0, 2)}
                                </span>
                            )}
                        </div>
                        <h4 className="text-gray-800 text-[15px] sm:text-[16px] font-semibold mb-3 tracking-[-0.01em] leading-[1.3] min-h-[1.3em]">
                            {translatedName}
                        </h4>
                        <p>{person.language}</p>
                    </div>

                    <div
                        className="rounded-2xl p-4 transition-colors border border-white/30 min-h-[56px] flex items-center justify-center"
                        style={{
                            background: "rgba(255, 255, 255, 0.3)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                        }}
                    >
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                            <span className="text-[17px] font-normal tracking-[0.011em] whitespace-nowrap">
                                {person.phone}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        );
    };

    return (
        <div
            className="w-full"
            style={{
                transform: `translateY(${Math.min(scrollY * 0.02, 10)}px)`,
                willChange: "transform",
            }}
        >
            <div className="container max-w-7xl mx-auto px-6 sm:px-8">
                <div
                    className="text-center mb-20"
                    style={{
                        transform: `translateY(${Math.min(scrollY * 0.04, 20)}px)`,
                    }}
                >
                    <h2 className="text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[0.95] mb-8">
                        {t("weddingParty.teamTitle")}
                    </h2>
                    <p className="text-gray-700 text-[17px] sm:text-[18px] md:text-[19px] font-normal leading-[1.47] tracking-[0.011em] max-w-3xl mx-auto">
                        {t("weddingParty.description")}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Bride's Side */}
                    <div className="mb-20">
                        <div
                            className="text-center mb-12"
                            style={{
                                transform: `translateY(${Math.min(scrollY * 0.03, 15)}px)`,
                            }}
                        >
                            <h3 className="text-gray-900 text-[18px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-[1.2] mb-4">
                                {t("weddingParty.melisName")} {t("weddingParty.bridesmaids")}
                            </h3>
                            <div className="w-20 h-0.5 bg-gray-200 mx-auto"></div>
                        </div>

                        <div
                            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
                            style={{
                                transform: `translateY(${Math.min(scrollY * 0.02, 10)}px)`,
                            }}
                        >
                            {bridesMaids.map((person, index) => (
                                <PersonCard key={index} person={person} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Groom's Side */}
                    <div>
                        <div
                            className="text-center mb-12"
                            style={{
                                transform: `translateY(${Math.min(scrollY * 0.03, 15)}px)`,
                            }}
                        >
                            <h3 className="text-gray-900 text-[18px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-[1.2] mb-4">
                                {t("weddingParty.karimName")} {t("weddingParty.groomsmen")}
                            </h3>
                            <div className="w-20 h-0.5 bg-gray-200 mx-auto"></div>
                        </div>

                        <div
                            className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto justify-items-center"
                            style={{
                                transform: `translateY(${Math.min(scrollY * 0.02, 10)}px)`,
                            }}
                        >
                            {groomsMen.map((person, index) => (
                                <PersonCard key={index} person={person} index={index + 4} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
