import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN_STRINGS from "./i18n/en.json";

const resources = {
  en: {
    translation: EN_STRINGS,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
