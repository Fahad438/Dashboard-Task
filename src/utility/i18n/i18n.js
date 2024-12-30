import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // استيراد المكتبة

const resources = {
    en: {
        translation: {
          "Dashboard": "Dashboard",
          "Sidebar": [
            { key: "Dashboard", label: "Dashboard", icon: "Home" },
            { key: "Users", label: "Users", icon: "Users" },
            { key: "Products", label: "Products", icon: "Products" },
            { key: "Settings", label: "Settings", icon: "Settings" }
          ],
         
        }
      },
      ar: {
        translation: {
          "Dashboard": "لوحة التحكم",
          "Sidebar": [
            { key: "Dashboard", label: "لوحة التحكم", icon: "Home" },
            { key: "Users", label: "المستخدمين", icon: "Users" },
            { key: "Products", label: "المنتجات", icon: "Products" },
            { key: "Settings", label: "الإعدادات", icon: "Settings" }
          ],
        
        }
      }
    };
i18n
  .use(LanguageDetector) // استخدام detector
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar", // اللغة الافتراضية هي العربية
    detection: {
      // خيارات الكشف عن اللغة
      order: ['localStorage', 'navigator', 'querystring', 'cookie'], // ترتيب الكشف عن اللغة
      caches: ['localStorage'], // تخزين اللغة في localStorage
    },
    interpolation: {
      escapeValue: false, // React يحمي من XSS
    },
    react: {
      useSuspense: false, // عدم استخدام Suspense لتحميل الترجمة
    },
  });

export default i18n;
