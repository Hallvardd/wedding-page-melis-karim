import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "de" | "tr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Password Protection
    "password.title": "Melis & Karim",
    "password.enter": "Bitte geben Sie das Passwort ein",
    "password.placeholder": "Passwort",
    "password.wrong": "Falsches Passwort",
    "password.login": "Anmelden",

    // Hero
    "hero.saveTheDate": "Save the Date",
    "hero.names": "Melis und Karim",
    "hero.date": "Am: 08.08.2026",

    // Countdown
    "countdown.title": "Bis wir den Bund für das Leben schließen.",
    "countdown.days": "Tage",
    "countdown.hours": "Stunden",
    "countdown.minutes": "Minuten",
    "countdown.seconds": "Sekunden",
    "countdown.invitationTitle": "Save the Date",
    "countdown.until":
      "Wir freuen uns sehr, diesen besonderen Tag mit Euch zu feiern und laden Euch herzlich zu unserer Hochzeit ein.",
    "countdown.rsvpDeadline": "Bitte antwortet bis zum 31.01.2026.",
    "countdown.date": "08. August 2026",
    "countdown.location": "Siegelsbacher Mühle, Siegelsbach",
    "countdown.rsvpButton": "Jetzt antworten",
    "countdown.saveButton": "Zum Kalender hinzufügen",

    // Services/Program
    "services.title": "Programm",
    "services.instructions":
      "Alle Programmpunkte finden in der Siegelbacher Mühle statt.",
    "services.reception": "Sektempfang",
    "services.receptionTime": "14:30 Uhr",
    "services.ceremony": "Freie Trauung",
    "services.ceremonyTime": "15:30 Uhr",
    "services.dinner": "Dinner",
    "services.dinnerTime":
      "Für alle Gäste ist gesorgt und für jeden Geschmack ist etwas dabei.",
    "services.party": "Party",
    "services.partyTime":
      "Im Anschluss stoßen wir gemeinsam an und feiern weiter durch den Abend.",

    // Hotels
    "hotels.title": "Naheliegende Hotels",
    "hotels.distance": "zur Hochzeitslocation",
    "hotels.perNight": "/Nacht",
    "hotels.website": "Webseite besuchen",

    // Dresscode
    "dresscode.title": "Dresscode",
    "dresscode.description":
      "Wir freuen uns auf eine elegante Feier mit Euch und bitten um festliche Garderobe.",
    "dresscode.note":
      "Bitte vermeidet weiß - das bleibt der Braut vorbehalten!",

    // Location
    "location.title": "Hochzeitslocation",
    "location.name": "Siegelsbacher Mühle",
    "location.description": "Historische Mühle mit rustikalem Charme",
    "location.address": "Grundmühle 1, 74936 Siegelsbach",
    "location.route": "Route planen",
    "location.mapNote":
      "Klicken Sie auf die Karte für eine detaillierte Ansicht",
    "location.car": "Mit dem Auto",
    "location.carDescription":
      "Kostenlose Parkplätze vor Ort verfügbar. Von der A6 Ausfahrt Sinsheim ca. 15 Minuten.",
    "location.public": "Öffentliche Verkehrsmittel",
    "location.publicDescription":
      "Bahnhof Sinsheim, dann Bus 782 nach Siegelsbach Zentrum. 5 Minuten Fußweg zur Location.",

    // Wedding Party
    "weddingParty.title": "Hochzeitsgesellschaft",
    "weddingParty.bride": "Braut",
    "weddingParty.groom": "Bräutigam",
    "weddingParty.contact": "Kontakt",
    "weddingParty.teamTitle": "Unser Brautpaar-Team",
    "weddingParty.description":
      "Unsere Trauzeugen stehen Euch gerne für alle Fragen rund um die Hochzeit zur Verfügung. Zögert nicht, sie zu kontaktieren!",
    "weddingParty.bridesmaids": "Brautjungfern",
    "weddingParty.groomsmen": "Trauzeugen",
    "weddingParty.melisName": "Melis",
    "weddingParty.karimName": "Karims",
    "weddingParty.geraldine": "Geraldine Henneberger-Reiss",
    "weddingParty.marie": "Marie Beuse",
    "weddingParty.mandy": "Mandy Holland",
    "weddingParty.ines": "Ines Geuder",
    "weddingParty.jounes": "Jounes Bökenkamp",
    "weddingParty.henner": "Henner Müller",

    // Gift Registry
    "gifts.title": "Geschenke",
    "gifts.description":
      "Das schönste Geschenk ist Eure Anwesenheit an unserem besonderen Tag.",
    "gifts.description2":
      "Möchtet Ihr uns beschenken, freuen wir uns am meisten über einen kleinen Geldbeitrag zu unserer gemeinsamen Zukunft. Bitte habt Verständnis, dass wir auf andere Aufmerksamkeiten, wie beispielsweise Blumen, gerne verzichten möchten.",
    "gifts.thanks": "Vielen Dank\nMelis und Karim\n🖤",
  },
  tr: {
    // Password Protection
    "password.title": "Melis & Karim",
    "password.enter": "Lütfen şifreyi girin",
    "password.placeholder": "Şifre",
    "password.wrong": "Yanlış şifre",
    "password.login": "Giriş",

    // Hero
    "hero.saveTheDate": "Tarihi Unutmayınız",
    "hero.names": "Melis ve Karim",
    "hero.date": "Tarih: 08.08.2026",

    // Countdown
    "countdown.title": "Melis ve Karim'in bu özel gününe kadar kalan süre.",
    "countdown.days": "Gün",
    "countdown.hours": "Saat",
    "countdown.minutes": "Dakika",
    "countdown.seconds": "Saniye",
    "countdown.invitationTitle": "Katılın!",
    "countdown.until":
      "Bu özel günü sizinle kutlamaktan çok mutluyuz ve sizi düğünümüze davet ediyoruz.",
    "countdown.rsvpDeadline":
      "Lütfen 31.01.2026 tarihine kadar katılıp katılmayacağınızı bize bildirin.",
    "countdown.date": "08 Ağustos 2026",
    "countdown.location": "Siegelsbacher Mühle, Siegelsbach",
    "countdown.rsvpButton": "Şimdi cevap verin",
    "countdown.saveButton": "Takvimime Ekle",

    // Services/Program
    "services.title": "Program",
    "services.instructions": "Tüm program Siegelsbacher Mühle'de yapılacaktır.",
    "services.reception": "Şampanya İkramı",
    "services.receptionTime": "14:30",
    "services.ceremony": "Nikah Töreni",
    "services.ceremonyTime": "15:30",
    "services.dinner": "Akşam Yemeği",
    "services.dinnerTime":
      "Tüm misafirler için özenle hazırlanmış, her damak tadına uygun lezzetler.",
    "services.party": "Eğlence",
    "services.partyTime":
      "Ardından birlikte kadeh kaldırıp akşam boyunca kutlamaya devam edeceğiz.",

    // Hotels
    "hotels.title": "Yakındaki Oteller",
    "hotels.distance": "düğün mekanına",
    "hotels.perNight": "/Gece",
    "hotels.website": "Web sitesini ziyaret edin",

    // Dresscode
    "dresscode.title": "Kıyafet Kodu",
    "dresscode.description":
      "Sizlerle birlikte şık bir kutlama yapmayı dört gözle bekliyoruz ve resmi kıyafet rica ediyoruz.",
    "dresscode.note":
      "Lütfen beyaz renk giymeyiniz - bu gelinin ayrıcalığıdır!",

    // Location
    "location.title": "Düğün Mekanı",
    "location.name": "Siegelsbacher Mühle",
    "location.description": "Rustik çekiciliğe sahip tarihi değirmen",
    "location.address": "Grundmühle 1, 74936 Siegelsbach Almanya",
    "location.route": "Yol tarifi alın",
    "location.mapNote": "Detaylı görünüm için haritaya tıklayınız",
    "location.car": "Arabayla",
    "location.carDescription":
      "Ücretsiz park yerleri mevcuttur. A6 Sinsheim çıkışından yaklaşık 15 dakika.",
    "location.public": "Toplu Taşıma",
    "location.publicDescription":
      "Sinsheim tren istasyonu, ardından 782 numaralı otobus ile Siegelsbach merkeze. Mekana 5 dakika yürüme mesafesi.",

    // Wedding Party
    "weddingParty.title": "Düğün Ekibi",
    "weddingParty.bride": "Gelin",
    "weddingParty.groom": "Damat",
    "weddingParty.contact": "İletişim",
    "weddingParty.teamTitle": "Düğün Ekibimiz",
    "weddingParty.description":
      "Düğünle ilgili tüm sorularınız için sağdıçlarımız size yardımcı olmaktan mutluluk duyar. Onlarla iletişime geçmekten çekinmeyin!",
    "weddingParty.bridesmaids": "Nedimeler",
    "weddingParty.groomsmen": "Sağdıçlar",
    "weddingParty.melisName": "Melis",
    "weddingParty.karimName": "Karims",
    "weddingParty.geraldine": "Geraldine Henneberger-Reiss",
    "weddingParty.marie": "Marie Beuse",
    "weddingParty.mandy": "Mandy Holland",
    "weddingParty.ines": "Ines Geuder",
    "weddingParty.jounes": "Jounes Bökenkamp",
    "weddingParty.henner": "Henner Müller",

    // Gift Registry
    "gifts.title": "Hediyeler",
    "gifts.description": "En güzel hediye, özel günümüzde varlığınızdır.",
    "gifts.description2":
      "Bize hediye vermek isterseniz, ortak geleceğimize ve evlilik hayatımızın başlangıcına küçük bir maddi katkıdan çok mutlu oluruz. Çiçek gibi diğer dikkat işaretlerinden hoşnutlukla vazgeçmek istediğimizi lütfen anlayışla karşılayın.",
    "gifts.thanks": "Çok teşekkür ederiz\nMelis ve Karim\n🖤",
  },
  ar: {
    // Password Protection
    "password.title": "مليس و كريم",
    "password.enter": "الرجاء إدخال كلمة المرور",
    "password.placeholder": "كلمة المرور",
    "password.wrong": "كلمة مرور خاطئة",
    "password.login": "تسجيل الدخول",

    // Hero
    "hero.saveTheDate": "احفظوا التاريخ",
    "hero.names": "مليس و كريم",
    "hero.date": "في: 08.08.2026",

    // Countdown
    "countdown.title": "حت يربط مليس و كريم حياتهما معاً.",
    "countdown.days": "يوم",
    "countdown.hours": "ساعة",
    "countdown.minutes": "دقيقة",
    "countdown.seconds": "ثانية",
    "countdown.invitationTitle": "انضم إلينا!",
    "countdown.until":
      "نحن سعداء جداً لمشاركة هذا اليوم الخاص معكم وندعوكم لحضور زفافنا.",
    "countdown.rsvpDeadline": "يرجى إعلامنا حتى 31.01.2026 إذا كنتم حاضرين.",
    "countdown.date": "08 أغسطس 2026",
    "countdown.location": "Siegelsbacher Mühle, Siegelsbach",
    "countdown.rsvpButton": "أجب الآن",
    "countdown.saveButton": "أضف إلى التقويم",

    // Services/Program
    "services.title": "البرنامج",
    "services.instructions":
      "سيتم تنفيذ البرنامج بأكمله في  Siegelsbacher Mühle.",
    "services.reception": "استقبال الشمبانيا",
    "services.receptionTime": "14:30",
    "services.ceremony": "حفل الزفاف",
    "services.ceremonyTime": "15:30",
    "services.dinner": "العشاء",
    "services.dinnerTime": "نوفر لجميع الضيوف طعاماً يناسب كل الأذواق.",
    "services.party": "الحفلة",
    "services.partyTime":
      "بعد ذلك، سنرفع الكأس معاً ونستمر في الاحتفال طوال المساء.",

    // Hotels
    "hotels.title": "فنادق قريبة",
    "hotels.distance": "من موقع الزفاف",
    "hotels.perNight": "/ليلة",
    "hotels.website": "زيارة الموقع",

    // Dresscode
    "dresscode.title": "الزي المطلوب",
    "dresscode.description": "نتطلع إلى احتفال أنيق معكم ونطلب زياً رسمياً.",
    "dresscode.note": "يرجى تجنب اللون الأبيض - هذا للعروس فقط!",

    // Location
    "location.title": "موقع الزفاف",
    "location.name": "Siegelsbacher Mühle",
    "location.description": "طاحونة تاريخية ذات طابع ريفي",
    "location.address": "Grundmühle 1, 74936 Siegelsbach Almanيا",
    "location.route": "خطط المسار",
    "location.mapNote": "انقر على الخريطة للحصول على عرض تفصيلي",
    "location.car": "بالسيارة",
    "location.carDescription":
      "تتوفر مواقف مجانية للسيارات في الموقع. من مخرج A6 في سينسهايم حوالي 15 دقيقة.",
    "location.public": "وسائل النقل العامة",
    "location.publicDescription":
      "محطة قطار سينسهايم، ثم حافلة 782 إلى وسط سيغلسباخ. 5 دقائق مشياً إلى الموقع.",

    // Wedding Party
    "weddingParty.title": "فريق الزفاف",
    "weddingParty.bride": "العروس",
    "weddingParty.groom": "العريس",
    "weddingParty.contact": "اتصال",
    "weddingParty.teamTitle": "فريق العروسين",
    "weddingParty.description":
      "شهود الزفاف لدينا متاحون بكل سرور للإجابة على جميع الأسئلة المتعلقة بالزفاف. لا تترددوا في الاتصال بهم!",
    "weddingParty.bridesmaids": "وصيفات العروس",
    "weddingParty.groomsmen": "شهود العريس",
    "weddingParty.melisName": "مليس",
    "weddingParty.karimName": "كريم",
    "weddingParty.geraldine": "جيرالدين هينبرغر-ريس",
    "weddingParty.marie": "ماري بويزه",
    "weddingParty.mandy": "ماندي هولاند",
    "weddingParty.ines": "إينيس جيودر",
    "weddingParty.jounes": "يونس بوكنكامب",
    "weddingParty.henner": "هينر مولر",

    // Gift Registry
    "gifts.title": "الهدايا",
    "gifts.description": "أجمل هدية هي حضوركم في يومنا الخاص.",
    "gifts.description2":
      "إذا أردتم إهداءنا شيئاً، فسنكون سعداء جداً بمساهمة مالية صغيرة لمستقبلنا المشترك. نرجو تفهمكم أننا نفضل عدم تلقي هدايا أخرى مثل الزهور.",
    "gifts.thanks": "شكراً جزيلاً\nمليس و كريم 🖤",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const detectLanguage = async () => {
      // Check localStorage first - user preference always wins
      const savedLanguage = localStorage.getItem(
        "wedding-language",
      ) as Language;
      if (
        savedLanguage &&
        (savedLanguage === "de" ||
          savedLanguage === "tr" ||
          savedLanguage === "ar")
      ) {
        setLanguageState(savedLanguage);
        return;
      }

      // Try IP-based geolocation
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code?.toLowerCase();

        if (countryCode) {
          // Map countries to languages
          if (
            countryCode === "de" ||
            countryCode === "at" ||
            countryCode === "ch"
          ) {
            // Germany, Austria, Switzerland
            setLanguageState("de");
          } else if (countryCode === "tr") {
            // Turkey
            setLanguageState("tr");
          } else if (
            [
              "sa",
              "ae",
              "sy",
              "iq",
              "jo",
              "lb",
              "ps",
              "ye",
              "kw",
              "om",
              "qa",
              "bh",
              "eg",
              "ly",
              "tn",
              "dz",
              "ma",
              "mr",
              "sd",
            ].includes(countryCode)
          ) {
            // Arabic-speaking countries
            setLanguageState("ar");
          } else {
            // Fallback to browser language for other countries
            const browserLanguage = navigator.language.toLowerCase();
            if (browserLanguage.startsWith("tr")) {
              setLanguageState("tr");
            } else if (browserLanguage.startsWith("ar")) {
              setLanguageState("ar");
            } else {
              setLanguageState("de");
            }
          }
          return;
        }
      } catch (error) {
        console.log("IP geolocation failed, falling back to browser language");
      }

      // Fallback to browser language detection
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith("tr")) {
        setLanguageState("tr");
      } else if (browserLanguage.startsWith("ar")) {
        setLanguageState("ar");
      } else {
        setLanguageState("de");
      }
    };

    detectLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("wedding-language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["de"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
