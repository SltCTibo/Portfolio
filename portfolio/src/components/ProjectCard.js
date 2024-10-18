import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { AiOutlineExport } from "react-icons/ai";

const LargeProjectCard = ({ title, subtitle, description, skills, gihtubLink, productionLink, image, index }) => {
    return index % 2 === 0 ? (
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 w-full">
        <div className="flex flex-col space-y-6 lg:space-y-10 justify-between w-full lg:w-[50%]">
          <div className="flex flex-col">
            <h3 className="text-[22px] md:text-[26px]">{title}</h3>
            <h4 className="text-gray-400">{subtitle}</h4>
          </div>
          <div className="text-justify bg-[#2B2B2D] rounded-xl shadow-sm p-6 lg:p-8">
            <p>{description}</p>
          </div>
          <div className="flex flex-wrap text-[14px] space-x-4">
            {skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
          <div className="flex flex-row space-x-4 items-center">
            {gihtubLink && <Link href={gihtubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-[40px] w-[40px] text-black cursor-pointer hover:text-gray-200" />
            </Link>}
            {productionLink && <Link href={productionLink} target="_blank" rel="noopener noreferrer">
              <AiOutlineExport className="h-[37px] w-[37px] text-black cursor-pointer hover:text-gray-200" />
            </Link>}
          </div>
        </div>
        <div className="w-full lg:w-[45%] rounded-2xl items-center flex">
          <img src={image} className="w-full h-auto object-cover rounded-2xl object-cover" alt={title} />
        </div>
      </div>
    ) : (
      <div className="flex flex-col lg:flex-row-reverse justify-between space-y-4 lg:space-y-0 w-full">
        <div className="flex flex-col space-y-6 lg:space-y-10 justify-between w-full lg:w-[50%]">
          <div className="flex flex-col items-end">
            <h3 className="text-[22px] md:text-[26px]">{title}</h3>
            <h4 className="text-gray-400">{subtitle}</h4>
          </div>
          <div className="text-justify bg-[#2B2B2D] rounded-xl shadow-sm p-6 lg:p-8">
            <p>{description}</p>
          </div>
          <div className="flex flex-wrap text-[14px] space-x-4 justify-end">
            {skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
          <div className="flex flex-row space-x-4 items-center justify-end">
            {productionLink && <Link href={productionLink} target="_blank" rel="noopener noreferrer">
              <AiOutlineExport className="h-[37px] w-[37px] text-black cursor-pointer hover:text-gray-200" />
            </Link>}
            {gihtubLink && <Link href={gihtubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-[40px] w-[40px] text-black cursor-pointer hover:text-gray-200" />
            </Link>}
          </div>
        </div>
        <div className="w-full lg:w-[45%] rounded-2xl items-center flex">
          <img src={image} className="w-full h-auto object-contain rounded-2xl" alt={title} />
        </div>
      </div>
    );
  };

  const MediumProjectCard = ({ title, subtitle, description, skills, gihtubLink, progress }) => {
    return (
      <div className="flex flex-col justify-between space-y-4 p-6 rounded-xl shadow-2xl shadow-black bg-[#2B2B2D] hover:scale-105 transform duration-300 w-full sm:w-[48%] lg:w-[30%] items-start">
        {/* Title and GitHub Link */}
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-[16px] sm:text-[18px] md:text-[22px]">{title}</h3>
            <h4 className="text-gray-400 text-[14px] sm:text-[16px]">{subtitle}</h4>
          </div>
          <Link href={gihtubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px] text-black cursor-pointer" />
          </Link>
        </div>

        {/* Description */}
        <p className="text-justify text-[14px] sm:text-[16px] md:text-[18px]">{description}</p>

        {/* Skills and Progress Bar */}
        <div className="flex flex-row justify-between w-full items-center">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-[12px] sm:text-[14px] w-full">
            {skills.map((skill, index) => (
              <p key={index} className="bg-gray-700 p-1 rounded">{skill}</p>
            ))}
          </div>
          <div className="relative flex items-center justify-center h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]">
            <svg className="absolute transform -rotate-50" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="text-green-500"
                strokeDasharray={`${progress}, 100`}
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
            <div className="absolute text-[12px] sm:text-[15px] font-semibold text-white">
              {progress}%
            </div>
          </div>
        </div>
      </div>
    );
  };

const SmallProjectCard = ({ title, subtitle, description, skills, startDate }) => {
    return (
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] space-y-3 rounded-2xl shadow-2xl shadow-black p-4 bg-[#2B2B2D] hover:scale-105 transform duration-300">
        <div>
          <h3 className="text-[18px] md:text-[20px]">{title}</h3>
          <h4 className="text-gray-400 text-[16px]">{subtitle}</h4>
        </div>
        <p className="text-[16px] md:text-[18px]">{description}</p>
        <p className="text-gray-400">{startDate}</p>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-[12px] sm:text-[14px] w-full">
            {skills.map((skill, index) => (
              <p key={index} className="bg-gray-700 p-1 rounded">{skill}</p>
            ))}
          </div>
      </div>
    );
  };

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