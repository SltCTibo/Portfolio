import { useLanguage } from "@/context/LanguageContext";

const Specializations = ({ data, currentLanguage }) => {
    const { specialization } = useLanguage();

    return (
        <div className="w-full p-6 my-10 flex flex-row justify-around items-end">
          <div className="w-[23%] h-[380px] items-center flex flex-col">
            <div className="relative items-center justify-center bg-cover bg-center flex flex-col w-full h-full rounded-2xl shadow-lg shadow-black py-6 px-12" style={{ backgroundImage: "url('/specializations/specializations.webp')" }}>
                <h2 className="text-gray-200 text-[30px]">{data.specializations}</h2>
            </div>
          </div>
          <div className="w-[16%] items-center flex flex-col group">
          <div
                className="space-y-3 relative items-center justify-end bg-cover bg-center flex flex-col w-full h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center"
                style={{ backgroundImage: "url('/specializations/front-end.png')" }}
            >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    FRONT-END
                </h2>
                <p className="text-gray-100 hidden group-hover:block transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300 text-[20px]">
                    {specialization.frontEnd}
                </p>
            </div>
          </div>
          <div className="w-[16%] items-center flex flex-col group">
            <div className="space-y-3 relative items-center justify-end bg-cover bg-center flex flex-col w-full h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center" style={{ backgroundImage: "url('/specializations/back-end.jpeg')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    BACK-END
                </h2>
                <p className="text-gray-100 hidden group-hover:block transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300 text-[20px]">
                    {specialization.backEnd}
                </p>
            </div>
          </div>
          <div className="w-[16%] items-center flex flex-col group">
            <div className="space-y-3 relative items-center justify-end bg-cover bg-center flex flex-col w-full h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center" style={{ backgroundImage: "url('/specializations/solana.webp')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    SOLANA
                </h2>
                <p className="text-gray-100 hidden group-hover:block transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300 text-[20px]">
                    {specialization.solana}
                </p>
            </div>
          </div>
          <div className="w-[16%] items-center flex flex-col group">
          <div className="space-y-3 relative items-center justify-end bg-cover bg-center flex flex-col w-full h-[380px] rounded-2xl shadow-lg shadow-black hover:filter-gray-400 px-2 text-center" style={{ backgroundImage: "url('/specializations/security.png')" }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                <h2 className="text-gray-200 z-40 transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300">
                    SECURITY
                </h2>
                <p className="text-gray-100 hidden group-hover:block transform translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-300 text-[20px]">
                    {specialization.security}
                </p>
            </div>
          </div>
        </div>
    )
}

export default Specializations;