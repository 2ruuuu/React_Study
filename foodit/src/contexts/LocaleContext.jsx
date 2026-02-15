import {createContext, useContext, useState} from "react";

const LocaleContext = createContext();

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다.");
  }
  const {locale} = context;
  return locale;
};

export const useSetLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다.");
  }
  const {setLocale} = context;
  return setLocale;
};

export const LocaleProvider = ({defaultValue = "ko", children}) => {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      {children}
    </LocaleContext.Provider>
  );
};
