import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { AiOutlineExport } from "react-icons/ai";

const LargeProjectCard = ({ title, subtitle, description, skills, gihtubLink, productionLink, image, index }) => {
    return index % 2 === 0 ? (
        <div className="justify-between flex flex-row">
            <div className="flex flex-col space-y-10 justify-between w-[50%]">
                <div className="flex flex-col">
                    <h3>{title}</h3>
                    <h4 className="text-gray-400">{subtitle}</h4>
                </div>
                <div className="text-justify rounded-xl shadow-sm shadow-black bg-[#2B2B2D] p-8">
                    <p>{description}</p>
                </div>
                <div className="text-[14px] space-x-4 flex flex-row">
                    { skills.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    {gihtubLink !== "" && <Link href={gihtubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-[40px] w-[40px] text-black cursor-pointer hover:text-gray-200" />
                    </Link>}
                    {productionLink !== "" && <Link href={productionLink} target="_blank" rel="noopener noreferrer">
                        <AiOutlineExport className="h-[37px] w-[37px] text-black hover:text-gray-200 cursor-pointer" />
                    </Link>}
                </div>
            </div>
            <div className="w-[45%] rounded-2xl">
                <img src={image} className="flex-1" alt={title} />
            </div>
        </div>
    ) : (
        <div className="justify-between flex flex-row">
            <div className="w-[45%] rounded-2xl">
                <img src={image} className="flex-1" alt={title} />
            </div>
            <div className="flex flex-col space-y-10 justify-between items-end w-[45%]">
                <div className="flex flex-col items-end">
                    <h3>{title}</h3>
                    <h4 className="text-gray-400">{subtitle}</h4>
                </div>
                <div className="text-justify rounded-xl shadow-sm shadow-black bg-[#2B2B2D] p-8">
                    <p>{description}</p>
                </div>
                <div className="text-[14px] space-x-4 flex flex-row">
                    { skills.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    {productionLink !== "" && <Link href={productionLink} target="_blank" rel="noopener noreferrer">
                        <AiOutlineExport className="h-[37px] w-[37px] text-black hover:text-gray-200 cursor-pointer" />
                    </Link>}
                    {gihtubLink !== "" && <Link href={gihtubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-[40px] w-[40px] text-black cursor-pointer hover:text-gray-200" />
                    </Link>}
                </div>
            </div>
        </div>
    )
}

const MediumProjectCard = ({ title, subtitle, description, skills, gihtubLink, progress }) => {
    return (
        <div className="justify-between space-y-4 p-6 rounded-xl shadow-2xl shadow-black w-[30%] flex flex-col items-center bg-[#2B2B2D] hover:scale-105 transform duration-300">
            <div className="flex flex-row w-full justify-between items-center">
                <div className="flex flex-col">
                    <h3>{title}</h3>
                    <h4 className="text-gray-400">{subtitle}</h4>
                </div>
                <Link href={gihtubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-[25px] w-[25px] text-black cursor-pointer" />
                </Link>
            </div>
            <p className="text-justify">{description}</p>
            <div className="flex flex-row justify-between w-full items-center">
                <div className="text-[14px] space-x-4 flex flex-row">
                    { skills.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
                <div className="relative flex items-center justify-center h-[60px] w-[60px]">
                    <svg className="absolute transform -rotate-50" viewBox="0 0 36 36">
                        <path
                        className="text-gray-300"
                        d={`M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        />
                        <path
                        className="text-green-500"
                        strokeDasharray={`${progress}, 100`} // Dynamically set the progress
                        d={`M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        />
                    </svg>
                    <div className="absolute text-[15px] font-semibold text-white">
                        {progress}%
                    </div>
                </div>
            </div>
        </div>
    )
}

const SmallProjectCard = ({ title, subtitle, description, skills, startDate }) => {
    return (
        <div className="w-[90%] space-y-3 rounded-2xl shadow-2xl shadow-black p-4 bg-[#2B2B2D] hover:scale-105 transform duration-300">
            <div>
                <h3>{title}</h3>
                <h4 className="text-gray-400">{subtitle}</h4>
            </div>
            <p>{description}</p>
            <p>{startDate}</p>
            <div className="text-[14px] space-x-4 flex flex-row">
                { skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                ))}
            </div>
        </div>
    )
}

const ProjectCard = ({ data, size, index }) => {
    switch (size) {
        case "large":
            return <LargeProjectCard title={data.name} subtitle={data.subtitle} description={data.description} skills={data.skills} gihtubLink={data.gihtubURL} productionLink={data.productionURL} image={data.image} index={index} />
        case "medium":
            return <MediumProjectCard title={data.name} subtitle={data.subtitle} description={data.description} skills={data.skills} gihtubLink={data.gihtubURL} progress={data.progress} />
        case "small":
            return <SmallProjectCard title={data.name} subtitle={data.subtitle} description={data.description} skills={data.skills} startDate={data.startDate}/>
        default:
            return <div>Rien du tout</div>
    }
}

export default ProjectCard;