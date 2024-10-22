import { useLanguage } from "@/context/LanguageContext";

const Footer = ({ data }) => {
    const { currentLanguage } = useLanguage();
    return (
        <footer className="w-full h-[200px] flex justify-center items-center">
            <div className="w-full mx-6 md:w-[70%] border-t border-green-100 justify-center items-center flex flex-col p-8">
                <a className="underline cursor-pointer hover:text-blue-300" href={`/Resume-Thibault-BARBE-${currentLanguage}.pdf`} target="_blank" rel="noopener noreferrer">{data.myResume}</a>
                <p>{data.footer}</p>
                <p>© 2024, Barbe industry</p>
            </div>
        </footer>
    )
}

export default Footer;