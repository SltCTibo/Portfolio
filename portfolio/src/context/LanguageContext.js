"use client"

const { useContext, createContext, useState } = require("react");

import frExperiences from "@/data/fr/experiences.json"
import enExperiences from "@/data/en/experiences.json"

import frTitle from "@/data/fr/title.json"
import enTitle from "@/data/en/title.json"

import frProject from "@/data/fr/projects.json"
import enProject from "@/data/en/projects.json"

import frNavbar from "@/data/fr/navbar.json"
import enNavbar from "@/data/en/navbar.json"

import frFormation from "@/data/fr/formation.json"
import enFormation from "@/data/en/formation.json"

import enSpecializationDatas from "@/data/en/specializations.json";
import frSpecializationDatas from "@/data/fr/specializations.json";

import enContact from "@/data/en/contact.json"
import frContact from "@/data/fr/contact.json"

const LanguageContext = createContext({});

const LanguageWrapper = ({ children }) => {

    const [currentLanguage, setCurrentLanguage] = useState("en");

    const navbar = currentLanguage === "en" ? enNavbar : frNavbar;
    const title = currentLanguage === "en" ? enTitle : frTitle;
    const experiences = currentLanguage === "en" ? enExperiences : frExperiences;
    const projects = currentLanguage === "en" ? enProject : frProject;
    const formations = currentLanguage === "en" ? enFormation : frFormation;
    const specialization = currentLanguage === "en" ? enSpecializationDatas : frSpecializationDatas;
    const contact = currentLanguage === "en" ? enContact : frContact

    return(
        <LanguageContext.Provider
            value={{
                currentLanguage,
                setCurrentLanguage,
                navbar,
                title,
                experiences,
                projects,
                formations,
                specialization,
                contact
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