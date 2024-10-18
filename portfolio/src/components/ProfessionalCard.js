import Image from "next/image";
import Link from "next/link";

const ProfessionnalCard = ({ company, logo, startDate, endDate, job, description, skills, skillsLogo, companySite, data }) => {
    return (
        <div className="w-[30%] h-[800px] max-w-4xl mx-auto bg-[#2B2B2D] rounded-xl shadow-xl shadow-black border border-gray-700 mb-6 hover:scale-110 duration-300">
          <div className="flex flex-col items-center">
            <div className="w-full h-[20%]">
                <img src={logo} className="w-[100%] rounded-t-xl" />
            </div>
            <div className="p-6 flex flex-col items-center p-6">
                <Link href={companySite} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">{company}</Link>
                <h3 className="font-bold lg:text-[20px] text-[25px] text-white uppercase">{job}</h3>
                <div className="text-right">
                <p className="text-gray-500 text-sm">
                    {startDate} - {endDate || 'Present'}
                </p>
                </div>
            </div>
          </div>
          <div className="mt-4 p-6">
            <p className="text-gray-300 text-justify">{description}</p>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h2 className="text-md font-semibold text-white mb-6">{data.keySkills}</h2>
            <ul className="flex flex-row w-full justify-around items-center">
              {skills.map((skill, index) => (
                <div key={index + "-div"} className="flex flex-col items-center space-y-2">
                    <div key={index + "-div-div"} className="border-[3px] border-gray-200 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                        <Image key={index} src={skillsLogo[index]} width={50} height={50} alt={skill} />
                    </div>
                    <li key={index}>{skill}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default ProfessionnalCard;