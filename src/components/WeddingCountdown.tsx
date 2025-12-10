import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Calendar } from "lucide-react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function WeddingCountdown() {
    const { t } = useLanguage();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mounted, setMounted] = useState(false);

    const weddingDate = new Date("2026-08-08T17:00:00");

    // Function to generate .ics calendar file
    const generateCalendarFile = () => {
        const event = {
            start: "20260808T143000",
            end: "20260809T050000",
            title: "Hochzeit Melis & Karim",
            description: "Wir freuen uns, diesen besonderen Tag mit Euch zu feiern!",
            location:
                "Siegelsbacher Mühle, Mühlenstraße 15, 74936 Siegelsbach, Deutschland",
        };

        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Melis & Karim Wedding//DE",
            "BEGIN:VEVENT",
            `DTSTART:${event.start}`,
            `DTEND:${event.end}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.description}`,
            `LOCATION:${event.location}`,
            "STATUS:CONFIRMED",
            "BEGIN:VALARM",
            "TRIGGER:-P1W",
            "ACTION:DISPLAY",
            "DESCRIPTION:Erinnerung: Hochzeit in einer Woche!",
            "END:VALARM",
            "END:VEVENT",
            "END:VCALENDAR",
        ].join("\r\n");

        const blob = new Blob([icsContent], {
            type: "text/calendar;charset=utf-8",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "melis-karim-hochzeit.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = (): TimeLeft => {
            const now = new Date().getTime();
            const difference = weddingDate.getTime() - now;

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                    ),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                };
            }

            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        setTimeLeft(calculateTimeLeft());

        return () => {
            clearInterval(timer);
        };
    }, []);

    if (!mounted) {
        return (
            <div
                className="max-w-4xl mx-auto px-4 text-center"
            >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[0, 0, 0, 0].map((_, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-xl rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                                backdropFilter: "blur(15px)",
                                WebkitBackdropFilter: "blur(15px)",
                                boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                                border: "1px solid rgba(255, 255, 255, 0.8)",
                            }}
                        >
                            <div className="text-gray-800 text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-none">
                                0
                            </div>
                            <div className="text-gray-700 text-[14px] sm:text-[15px] font-medium mt-2 tracking-[-0.01em]">
                                {
                                    [
                                        t("countdown.days"),
                                        t("countdown.hours"),
                                        t("countdown.minutes"),
                                        t("countdown.seconds"),
                                    ][index]
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div
            className="max-w-4xl mx-auto px-4 text-center"
        >
            {/* Countdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
                {/* Days */}
                <div
                    className="backdrop-blur-xl rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                        boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                >
                    <div className="text-gray-800 text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-none">
                        {timeLeft.days}
                    </div>
                    <div className="text-gray-700 text-[14px] sm:text-[15px] font-medium mt-2 tracking-[-0.01em]">
                        {t("countdown.days")}
                    </div>
                </div>
                {/* Hours */}
                <div
                    className="backdrop-blur-xl rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                        boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                >
                    <div className="text-gray-800 text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-none">
                        {timeLeft.hours}
                    </div>
                    <div className="text-gray-700 text-[14px] sm:text-[15px] font-medium mt-2 tracking-[-0.01em]">
                        {t("countdown.hours")}
                    </div>
                </div>
                {/* Minutes */}
                <div
                    className="backdrop-blur-xl rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                        boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                >
                    <div className="text-gray-800 text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-none">
                        {timeLeft.minutes}
                    </div>
                    <div className="text-gray-700 text-[14px] sm:text-[15px] font-medium mt-2 tracking-[-0.01em]">
                        {t("countdown.minutes")}
                    </div>
                </div>
                {/* Seconds */}
                <div
                    className="backdrop-blur-xl rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                        boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                >
                    <div className="text-gray-800 text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-none">
                        {timeLeft.seconds}
                    </div>
                    <div className="text-gray-700 text-[14px] sm:text-[15px] font-medium mt-2 tracking-[-0.01em]">
                        {t("countdown.seconds")}
                    </div>
                </div>
            </div>

            {/* Invitation Container */}
            <div
                className="max-w-2xl mx-auto mb-8 p-8 sm:p-10 rounded-3xl backdrop-blur-xl"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow:
                        "0 8px 32px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
            >
                {/* Title */}
                <h3 className="text-gray-900 mb-6 font-bold text-[20px]">
                    {t("countdown.invitationTitle")}
                </h3>

                {/* Invitation Text */}
                <p className="text-gray-800 mb-5">{t("countdown.until")}</p>

                {/* RSVP Deadline */}
                <p className="text-gray-900 mb-8 font-bold">
                    {t("countdown.rsvpDeadline")}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* RSVP Button */}
                    <a
                        href="https://forms.cloud.microsoft/r/Kd6sH5456Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] backdrop-blur-xl w-full sm:w-auto"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 100%)",
                            backdropFilter: "blur(15px)",
                            WebkitBackdropFilter: "blur(15px)",
                            boxShadow:
                                "0 4px 12px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.9)",
                            border: "1px solid rgba(255, 255, 255, 0.9)",
                        }}
                    >
                        <span className="text-gray-800 text-[15px] tracking-[-0.01em]">
                            {t("countdown.rsvpButton")}
                        </span>
                    </a>

                    {/* Save the Date Button */}
                    <button
                        onClick={generateCalendarFile}
                        className="group relative px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] backdrop-blur-xl w-full sm:w-auto"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 100%)",
                            backdropFilter: "blur(15px)",
                            WebkitBackdropFilter: "blur(15px)",
                            boxShadow:
                                "0 4px 12px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.9)",
                            border: "1px solid rgba(255, 255, 255, 0.9)",
                        }}
                    >
                        <span className="flex items-center justify-center gap-2 text-gray-800 text-[15px] tracking-[-0.01em]">
                            <Calendar className="w-5 h-5" />
                            {t("countdown.saveButton")}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
