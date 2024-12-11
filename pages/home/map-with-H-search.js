/**
 * It takes a locale as an argument, and returns an object with the translations for that locale
 * @returns The return value of the function is the props object.
 */
import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarFour from "../../layout/headers/NavbarFour";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterFour from "../../layout/footers/FooterFour";
import BodyContent from "../../components/home/map-with-search";
import { ConfigDB } from "../../config/themeCustomizerConfig";

const MapWithHSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#ff5c41");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#ff8c41");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarFour />
      <BodyContent map={"HSearch"} />
      <FooterFour />
    </>
  );
};

export default MapWithHSearch;
