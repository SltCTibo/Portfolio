import { useLanguage } from "@/context/LanguageContext";

const Specializations = ({ data }) => {
    const { specialization } = useLanguage();

    return (
        <div className="w-full p-6 my-10 flex flex-col lg:flex-row justify-around items-center lg:items-end space-y-6 lg:space-y-0">
            <div className="w-full lg:w-[23%] h-[300px] lg:h-[380px] flex items-center flex-col">
                <div
                className="relative flex flex-col items-center justify-center bg-cover bg-center w-full h-full rounded-2xl shadow-lg shadow-black py-6 px-12"
                style={{ backgroundImage: "url('/specializations/specializations.webp')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-0 opacity-40 transition-opacity duration-300 rounded-2xl"></div>
                    <h2 className="text-gray-200 z-40 text-[24px] lg:text-[30px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                        SPECIALIZATIONS
                    </h2>
                </div>
            </div>

            <div className="w-full lg:w-[16%] flex items-center flex-col group">
                <div
                className="space-y-3 relative flex flex-col items-center justify-end bg-cover bg-center w-full h-[300px] lg:h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center"
                style={{ backgroundImage: "url('/specializations/front-end.png')" }}
                >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 text-[24px] lg:text-[30px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    FRONT-END
                </h2>
                <p className="text-gray-100 hidden group-hover:block text-[16px] lg:text-[20px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    {specialization.frontEnd}
                </p>
                </div>
            </div>

            <div className="w-full lg:w-[16%] flex items-center flex-col group">
                <div
                className="space-y-3 relative flex flex-col items-center justify-end bg-cover bg-center w-full h-[300px] lg:h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center"
                style={{ backgroundImage: "url('/specializations/back-end.jpeg')" }}
                >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 text-[24px] lg:text-[30px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    BACK-END
                </h2>
                <p className="text-gray-100 hidden group-hover:block text-[16px] lg:text-[20px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    {specialization.backEnd}
                </p>
                </div>
            </div>

            <div className="w-full lg:w-[16%] flex items-center flex-col group">
                <div
                className="space-y-3 relative flex flex-col items-center justify-end bg-cover bg-center w-full h-[300px] lg:h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center"
                style={{ backgroundImage: "url('/specializations/solana.webp')" }}
                >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 text-[24px] lg:text-[30px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    SOLANA
                </h2>
                <p className="text-gray-100 hidden group-hover:block text-[16px] lg:text-[20px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    {specialization.solana}
                </p>
                </div>
            </div>

            <div className="w-full lg:w-[16%] flex items-center flex-col group">
                <div
                className="space-y-3 relative flex flex-col items-center justify-end bg-cover bg-center w-full h-[300px] lg:h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center"
                style={{ backgroundImage: "url('/specializations/security.png')" }}
                >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 text-[24px] lg:text-[30px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    SECURITY
                </h2>
                <p className="text-gray-100 hidden group-hover:block text-[16px] lg:text-[20px] transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    {specialization.security}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Specializations;