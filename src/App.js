import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("kr");
  const { t } = useTranslation(["page"]);



  const onChangeLang = (text) => {
    setText(text === "en" ? "kr" : "en");
    i18n.changeLanguage(text);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>{t("page:startPage")}</h2>
      <button onClick={() => onChangeLang(text)}>Change Language</button>
    </div>
  );
}

export default App;
