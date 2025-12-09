import { useEffect, useState } from 'react';
import svgPaths from "./svg-o2558dm5ae";
import imgRectangle14 from "figma:asset/58e86cbe74003e6fb69944de74d0dea5b40de6de.png";
import imgRectangle15 from "figma:asset/41c1a10e3833bd0975db4e869609b0ce06495c70.png";
import imgRectangle16 from "figma:asset/27fddfd3654770f677e6e7e4b3e8e666080fae46.png";
import imgMapPlaceholder from "figma:asset/6287e279e54e87c6582cf5f2281ccd03b91bd3fe.png";
import imgImgPlaceholder from "figma:asset/9917ddc3f11635b70e4743f941dfb83c3dc158ee.png";
import { imgHeroContent } from "./svg-4c1o4";

import { Dresscode } from "../components/Dresscode";
import { ElegantLocation } from "../components/ElegantLocation";
import { ElegantWeddingParty } from "../components/ElegantWeddingParty";
import { GiftRegistry } from "../components/GiftRegistry";
import { Services } from "../components/Services";
import { WeddingCountdown } from "../components/WeddingCountdown";
import { HotelCarousel } from "../components/HotelCarousel";
import { useLanguage } from "../contexts/LanguageContext";


function SectionHeader() {
    const { t } = useLanguage();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col gap-6 items-center justify-center relative shrink-0 text-center w-full px-6 max-w-4xl mx-auto" data-name="section-header">
            {/* Save the Date label */}
            <div
                className="text-gray-600/90 text-[13px] sm:text-[15px] font-medium tracking-[0.15em] uppercase leading-[1.2] opacity-80"
                style={{
                    transform: `translateY(${Math.sin(scrollY * 0.008) * 2}px)`
                }}
            >
                <p>{t('hero.saveTheDate')}</p>
            </div>

            {/* Names */}
            <div
                className="text-gray-900/95 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-light tracking-[-0.03em] leading-[0.9] mb-2"
                style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    fontWeight: '300',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    transform: `translateY(${Math.sin(scrollY * 0.008 + 1) * 2}px)`
                }}
            >
                <p>{t('hero.names')}</p>
            </div>

            {/* Date */}
            <div
                className="text-gray-700/90 text-[22px] sm:text-[26px] md:text-[30px] font-normal tracking-[-0.01em] leading-[1.1]"
                style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    fontWeight: '400',
                    transform: `translateY(${Math.sin(scrollY * 0.008 + 2) * 2}px)`
                }}
            >
                <p>{t('hero.date').replace('Am: ', '').replace('Tarih: ', '').replace('في: ', '')}</p>
            </div>
        </div>
    );
}

function HeroContent({ scrollY }) {
    return (
        <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            data-name="hero-content"
            style={{
                maskImage: `url('${imgHeroContent}')`,
                transform: `translateY(${Math.min(scrollY * 0.4, 150)}px)`,
                willChange: 'transform',
                opacity: Math.max(0.7, 1 - scrollY * 0.002)
            }}
        >
            <div
                className="transform transition-all duration-300 ease-out"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.2, 80)}px) scale(${Math.max(0.95, 1 - scrollY * 0.0005)})`,
                    filter: `blur(${Math.min(scrollY * 0.01, 2)}px)`
                }}
            >
                <SectionHeader />
            </div>
        </div>
    );
}

function Content() {
    return <div className="absolute box-border content-stretch flex items-center justify-between left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat overflow-clip px-4 sm:px-8 md:px-16 py-6 top-0 w-full" data-name="content" style={{ maskImage: `url('${imgHeroContent}')` }} />;
}

function Frame9({ scrollY }) {
    return (
        <div className="content-stretch flex flex-col h-[900px] items-center justify-start relative shrink-0 w-full overflow-hidden">
            {/* Apple-style gradient background */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: 'linear-gradient(135deg, rgba(245,245,247,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(248,250,252,0.9) 100%)',
                    transform: `translateY(${scrollY * 0.02}px)`
                }}
            />

            <div className="h-[1012px] relative shrink-0 w-full" data-name="hero">
                <div
                    className="absolute bg-center bg-cover bg-no-repeat bottom-[3.43%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat right-0 top-[-11.62%] w-full"
                    data-name="img_placeholder"
                    style={{
                        backgroundImage: `url('${imgImgPlaceholder}')`,
                        maskImage: `url('${imgHeroContent}')`,
                        transform: `translateY(${scrollY * 0.05}px)`,
                        opacity: 0.85,
                        filter: 'blur(0.5px) saturate(1.1)'
                    }}
                />
                <HeroContent scrollY={scrollY} />
                <Content />
            </div>
        </div>
    );
}

export default function LandingWeb() {
    const { t } = useLanguage();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="content-stretch flex flex-col items-center justify-center relative w-full min-h-screen overflow-x-hidden" data-name="landing (web)">
            {/* Hero Section */}
            <section className="w-full relative">
                <Frame9 scrollY={scrollY} />
            </section>

            {/* Countdown Section */}
            <section
                className="w-full py-24 md:py-32 flex flex-col items-center"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.05, 20)}px)`,
                    willChange: 'transform'
                }}
            >
                <div className="text-center max-w-6xl mx-auto px-6 sm:px-8 mb-8">
                    <h2 className="text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[0.95] mb-8">
                        {t('countdown.title')}
                    </h2>

                </div>
                <WeddingCountdown scrollY={scrollY} />
            </section>

            {/* Services Timeline */}
            <section
                className="w-full py-16 md:py-24"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.03, 15)}px)`,
                    willChange: 'transform'
                }}
            >
                <Services />
            </section>

            {/* Location */}
            <section
                className="w-full py-16 md:py-24"
                data-name="locations"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.04, 20)}px)`,
                    willChange: 'transform'
                }}
            >
                <ElegantLocation />
            </section>

            {/* Hotels Carousel */}
            <section className="w-full py-16 md:py-24">
                <HotelCarousel />
            </section>

            {/* Dresscode */}
            <section
                className="w-full py-16 md:py-24"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.06, 25)}px)`,
                    willChange: 'transform'
                }}
            >
                <Dresscode />
            </section>

            {/* Wedding Party Contact */}
            <section
                className="w-full py-16 md:py-24"
                data-name="contact-us"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.02, 12)}px)`,
                    willChange: 'transform'
                }}
            >
                <ElegantWeddingParty />
            </section>

            {/* Gift Registry */}
            <section
                className="w-full py-16 md:py-24"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.03, 15)}px)`,
                    willChange: 'transform'
                }}
            >
                <GiftRegistry />
            </section>
        </div>
    );
}
