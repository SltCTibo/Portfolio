const { default: Image } = require("next/image")

const Skill = ({ name, icon }) => {
    return (
        <div className="hover:scale-110 hover: transform transition-transform duration-200 shadow-xl shadow-black w-[113px] h-[113px] md:w-[133px] md:h-[133px] bg-clip-border bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFA3] flex items-center justify-center rounded-xl">
            <div className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] p-2 bg-gray-200 flex flex-col justify-center items-center rounded-xl text-black font-bold space-y-2 justify-between">
                <Image src={icon} className="h-[60px] md:h-[70px] w-[60px] md:w-[70px]" height={70} width={70} alt={name} />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Skill;