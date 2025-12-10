import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Hotel {
    name: string;
    address: string;
    distance: string;
    price: string;
    website: string;
}

const hotels: Hotel[] = [
    {
        name: "Pension Spatzennest",
        address: "Gundelsheimer Str. 34, 74906 Bad Rappenau-Heinsheim",
        distance: "10",
        price: "ca. 75€",
        website: "https://www.booking.com/Share-JOyv0N1",
    },
    {
        name: "Best Western Hotel",
        address: "Buchäckering 42, Bad Rappenau",
        distance: "8",
        price: "ca. 90€",
        website:
            "https://www.bestwestern.de/hotels/Bad-Rappenau/Best-Western-Hotel-BadRappenau/hotel",
    },
    {
        name: "Adler Gaststube Hotel",
        address: "Babstadterstraße 26, Bad Rappenau",
        distance: "8",
        price: "ca. 90€",
        website: "https://www.hotel-adler-bad-rappenau.de",
    },
    {
        name: "Motel am Fürfelder Schloss",
        address: "Wilhelm-Hauff-Straße 52, Bad Rappenau",
        distance: "12",
        price: "102€",
        website: "https://www.motel-fuerfeld.de",
    },
];

export function HotelCarousel() {
    const { t, language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoAdvance = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
        }, 8000);
    };

    useEffect(() => {
        startAutoAdvance();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
        startAutoAdvance();
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length,
        );
        startAutoAdvance();
    };

    return (
        <div
            className="w-full flex items-center justify-center"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
                {/* Section Header */}
                <div
                    className="text-center mb-20"
                >
                    <h2 className="text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[0.95] mb-8">
                        {t("hotels.title")}
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {hotels.map((hotel, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0"
                                >
                                    <a
                                        href={hotel.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block backdrop-blur-xl rounded-3xl p-10 sm:p-12 md:p-14 mx-2 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer group"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                                            backdropFilter: "blur(20px)",
                                            WebkitBackdropFilter: "blur(20px)",
                                            boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                                            border: "1px solid rgba(255, 255, 255, 0.8)",
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                                            }}
                                        />
                                        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
                                            <div className="flex-1 text-left px-6">
                                                <h3 className="text-gray-800 text-[20px] sm:text-[24px] font-semibold mb-4 tracking-[-0.015em] leading-[1.2]">
                                                    {hotel.name}
                                                </h3>
                                                <div className="text-gray-700 text-[16px] sm:text-[17px] leading-[1.47] space-y-3 font-normal tracking-[0.011em] ">
                                                    <p>{hotel.address}</p>
                                                    <p className="text-gray-600">
                                                        {hotel.distance}{" "}
                                                        {t("hotels.minutes")}{" "}
                                                        {t("hotels.distance")}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="text-gray-800 font-semibold text-[18px] sm:text-[20px] px-8 py-4 rounded-2xl tracking-[-0.01em] border border-white/30"
                                                style={{
                                                    background: "rgba(255, 255, 255, 0.4)",
                                                    backdropFilter: "blur(8px)",
                                                    WebkitBackdropFilter: "blur(8px)",
                                                }}
                                            >
                                                {hotel.price}
                                                {t("hotels.perNight")}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-xl rounded-full p-3 hover:scale-110 transition-all duration-300 z-10"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)",
                            backdropFilter: "blur(15px)",
                            WebkitBackdropFilter: "blur(15px)",
                            boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.8)",
                        }}
                        aria-label="Previous hotel"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-xl rounded-full p-3 hover:scale-110 transition-all duration-300 z-10"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)",
                            backdropFilter: "blur(15px)",
                            WebkitBackdropFilter: "blur(15px)",
                            boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.8)",
                        }}
                        aria-label="Next hotel"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {hotels.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                                    }`}
                                aria-label={`Go to hotel ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
