import React from "react";
import { useTranslation } from "react-i18next";

const languageSelector = () => {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <div className="w-fit">
      {/* Select box to change language */}
      <select
        className="custom-select"
        style={{ width: 200 }}
        onChange={changeLanguageHandler}
      >
        <option value="en">English</option>
        <option value="hn">Hindi</option>
      </select>
      {/* call name of the variable from  the translation.json file to t() method */}
      <h1>{t("manish")}</h1>
    </div>
  );
};

export default languageSelector;
