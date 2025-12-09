import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed top-6 right-6 z-50">
            <div
                className="backdrop-blur-3xl rounded-2xl p-1.5 flex items-center gap-1.5"
                style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.7))',
                    boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                }}
            >
                <div className="flex items-center gap-1 pr-2 pl-1">
                    <div
                        className="p-1.5 rounded-xl"
                        style={{
                            background: 'rgba(142, 152, 153, 0.1)'
                        }}
                    >
                        <Globe className="w-4 h-4" style={{ color: '#8e9899' }} />
                    </div>
                </div>

                <button
                    onClick={() => setLanguage('de')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${language === 'de'
                            ? 'text-white'
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                    style={language === 'de' ? {
                        background: 'linear-gradient(to right, #8e9899, #7a8586)',
                        boxShadow: '0 4px 12px rgba(142, 152, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    } : {
                        background: 'transparent'
                    }}
                >
                    DE
                </button>

                <button
                    onClick={() => setLanguage('tr')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${language === 'tr'
                            ? 'text-white'
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                    style={language === 'tr' ? {
                        background: 'linear-gradient(to right, #8e9899, #7a8586)',
                        boxShadow: '0 4px 12px rgba(142, 152, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    } : {
                        background: 'transparent'
                    }}
                >
                    TR
                </button>

                <button
                    onClick={() => setLanguage('ar')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${language === 'ar'
                            ? 'text-white'
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                    style={language === 'ar' ? {
                        background: 'linear-gradient(to right, #8e9899, #7a8586)',
                        boxShadow: '0 4px 12px rgba(142, 152, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    } : {
                        background: 'transparent'
                    }}
                >
                    AR
                </button>

                <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${language === 'en'
                            ? 'text-white'
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                    style={language === 'en' ? {
                        background: 'linear-gradient(to right, #8e9899, #7a8586)',
                        boxShadow: '0 4px 12px rgba(142, 152, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    } : {
                        background: 'transparent'
                    }}
                >
                    EN
                </button>
            </div>
        </div>
    );
}
