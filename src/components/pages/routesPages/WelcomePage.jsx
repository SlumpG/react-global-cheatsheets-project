import ControlledCarousel from "../../features/carousel/Carousel";
import React from "react";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const {t, i18n} = useTranslation()
  return (
    <div>
      <h1>{t("WelcomePageTitle")}</h1>
      <ControlledCarousel className="carousel-container" />
    </div>
  );
};

export default WelcomePage;
