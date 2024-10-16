"use client"

const { useContext, createContext, useState } = require("react");

const LanguageContext = createContext({});

const LanguageWrapper = ({ children }) => {

    const [currentLanguage, setCurrentLanguage] = useState("en");

    return(
        <LanguageContext.Provider
            value={{
                currentLanguage,
                setCurrentLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageWrapper;
export function useLanguage() {
    return useContext(LanguageContext);
}