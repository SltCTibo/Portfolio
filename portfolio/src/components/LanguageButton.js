import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const LanguageButton = () => {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const switchLanguage = () => {
        currentLanguage == "en" ? setCurrentLanguage("fr") : setCurrentLanguage("en");
    }

    return (
        <div onClick={switchLanguage} className="w-[40px] h-[40px] rounded-full">
            <Image src={currentLanguage == "en" ? "/uk.png" : "/french.png"} width={40} height={40} alt={"language button"} />
        </div>
    )
}

export default LanguageButton;