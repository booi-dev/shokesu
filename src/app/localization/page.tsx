"use client";

import Localization from "./Localization";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

const translationsEn = { text: "This is my name in english - Ninza" };
const translationsFr = {};

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: translationsEn },
    fr: { translations: translationsFr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const Page = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Localization />
    </div>
  );
};

export default Page;
