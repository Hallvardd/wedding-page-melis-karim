import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Dresscode({ scrollY }: { scrollY: number }) {
    const { t } = useLanguage();

    return (
        <div
            className="w-full flex flex-col items-center justify-center"
            style={{
                transform: `translateY(${Math.min(scrollY * 0.03, 15)}px)`,
                willChange: 'transform'
            }}
        >
            <div className="container max-w-7xl mx-auto px-6 sm:px-8">
                <div
                    className="text-center mb-20"
                    data-name="section-header"
                    style={{
                        transform: `translateY(${Math.min(scrollY * 0.05, 20)}px)`
                    }}
                >
                    <h2 className="text-gray-900 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[0.95] mb-8">
                        {t('dresscode.title')}
                    </h2>

                </div>

                <div
                    className="max-w-4xl mx-auto"
                    style={{
                        transform: `translateY(${Math.min(scrollY * 0.02, 10)}px)`
                    }}
                >
                    <div
                        className="backdrop-blur-xl rounded-3xl p-12 sm:p-16 md:p-20 relative overflow-hidden text-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            boxShadow: '0 1px 3px -1px rgba(0, 0, 0, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.8)'
                        }}
                    >
                        {/* Subtle gradient overlay */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-5 pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                            }}
                        />

                        <div className="relative z-10 space-y-8">


                            <div className="space-y-6">
                                <p className="text-gray-700 text-[18px] sm:text-[19px] md:text-[20px] leading-[1.47] font-normal tracking-[0.011em] max-w-2xl mx-auto">
                                    {t('dresscode.description')}
                                </p>

                                <div className="pt-6">
                                    <div
                                        className="w-full h-px opacity-30 mb-6"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
                                        }}
                                    />
                                    <p className="text-gray-700 text-[16px] sm:text-[17px] leading-[1.4] tracking-[0.011em] italic">
                                        {t('dresscode.note')}
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
