import LandingWeb from "./imports/LandingWeb";
import { useState, useEffect } from "react";
import imgImgPlaceholder from "figma:asset/9917ddc3f11635b70e4743f941dfb83c3dc158ee.png";
import { imgHeroContent } from "./imports/svg-4c1o4";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function PasswordProtection({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) {
  const { t } = useLanguage();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const WEDDING_PASSWORD = import.meta.env.VITE_WEDDING_PASSWORD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === WEDDING_PASSWORD) {
      localStorage.setItem("wedding-authenticated", "true");
      onAuthenticated();
    } else {
      setError(t("password.wrong"));
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden flex items-center justify-center">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Beautiful couple photo background - same as header */}
      <div className="fixed inset-0 -z-10">
        {/* Hero couple photo background */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${imgImgPlaceholder}')`,
            maskImage: `url('${imgHeroContent}')`,
            opacity: 0.85,
            filter: "blur(0.5px) saturate(1.1)",
          }}
        />

        {/* Apple-style gradient overlay for readability */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,245,247,0.85) 0%, rgba(255,255,255,0.75) 50%, rgba(248,250,252,0.85) 100%)",
          }}
        />

        {/* Subtle depth enhancement */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)",
            backgroundSize: "600px 600px, 800px 800px",
          }}
        />
      </div>

      {/* Password form */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div
          className={`bg-white/80 backdrop-blur-3xl border border-white/40 rounded-3xl p-10 transition-all duration-500 ${isShaking ? "animate-shake" : ""}`}
          style={{
            boxShadow:
              "0 32px 64px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
            background:
              "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.75))",
          }}
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl text-gray-900 mb-4 tracking-tight">
              {t("password.title")}
            </h1>
            <div
              className="w-16 h-0.5 mx-auto mb-6 rounded-full"
              style={{ background: "#8e9899" }}
            ></div>
            <p className="text-gray-700 text-lg">{t("password.enter")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder={t("password.placeholder")}
                className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 text-gray-900 placeholder-gray-600 text-lg"
                style={
                  {
                    boxShadow:
                      "inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.4)",
                    "--tw-ring-color": "rgba(142, 152, 153, 0.4)",
                  } as React.CSSProperties
                }
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(142, 152, 153, 0.5)";
                  e.target.style.boxShadow =
                    "inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 2px rgba(142, 152, 153, 0.4)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  e.target.style.boxShadow =
                    "inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.4)";
                }}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-sm mt-3 font-medium">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] text-lg"
              style={{
                background: "linear-gradient(to right, #8e9899, #7a8586)",
                boxShadow:
                  "0 8px 25px rgba(142, 152, 153, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #7a8586, #6b7475)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #8e9899, #7a8586)";
              }}
            >
              {t("password.login")}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(20px) rotate(1deg); }
          66% { transform: translateY(20px) translateX(-20px) rotate(-1deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
          20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem("wedding-authenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  return (
    <LanguageProvider>
      <AppContent
        isAuthenticated={isAuthenticated}
        onAuthenticated={handleAuthenticated}
      />
    </LanguageProvider>
  );
}

function AppContent({
  isAuthenticated,
  onAuthenticated,
}: {
  isAuthenticated: boolean;
  onAuthenticated: () => void;
}) {
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={onAuthenticated} />;
  }

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Enhanced glassmorphism background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f8fafc 75%, #f1f5f9 100%)",
          }}
        />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.02) 0%, transparent 50%)",
            backgroundSize: "800px 800px, 600px 600px, 700px 700px",
          }}
        />

        {/* Floating gradient orbs for depth */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1))",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "linear-gradient(45deg, rgba(168, 85, 247, 0.08), rgba(59, 130, 246, 0.08))",
            animation: "float 25s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-0 w-full">
        <LandingWeb />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(20px) rotate(1deg); }
          66% { transform: translateY(20px) translateX(-20px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
}
