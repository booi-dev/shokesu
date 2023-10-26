"use client";

import Localization from "./Localization";

import i18n from "i18next";
import { Suspense } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import Loading from "./loading";

const translationsEn = { text: "This is my name in english 1 - Ninza" };
const translationsFr = { text: "This is my name in Frencg 1 - Ninza" };

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
      <Suspense fallback={<Loading />}>
        <Localization t={t} />
      </Suspense>
    </div>
  );
};

export default Page;
