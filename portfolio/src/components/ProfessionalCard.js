import Image from "next/image";
import Link from "next/link";

const ProfessionalCard = ({ company, logo, startDate, endDate, job, description, skills, skillsLogo, companySite, data }) => {
    return (
      <div className="w-full lg:w-[30%] mx-auto bg-[#2B2B2D] rounded-xl shadow-xl shadow-black border border-gray-700 mb-6 hover:scale-105 lg:hover:scale-110 duration-300">
        <div className="flex flex-col items-center">
          <div className="w-full h-[200px]">
            <img src={logo} className="w-full h-full object-cover rounded-t-xl" alt={company} />
          </div>
          <div className="p-6 flex flex-col items-center justify-center w-full">
            <Link href={companySite} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">
              {company}
            </Link>
            <h3 className="font-bold text-[16px] md:[20px] text-white uppercase">{job}</h3>
            <p className="text-gray-500 text-sm">
              {startDate} - {endDate || 'Present'}
            </p>
          </div>
        </div>

        <div className="mt-4 p-6">
          <p className="text-gray-300 text-justify">{description}</p>
        </div>

        <div className="mt-4 flex flex-col items-center mb-3">
          <h3 className="text-md font-semibold text-white mb-6 text-[15px] md:text-[25px]">{data.keySkills}</h3>
          <ul className="flex flex-row w-full justify-around items-center">
            {skills.map((skill, index) => (
              <div key={index + "-div"} className="flex flex-col items-center space-y-2">
                <div className="border-[3px] border-gray-200 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                  <Image key={index} src={skillsLogo[index]} width={50} height={50} className="p-1" alt={skill} />
                </div>
                <li key={index} className="text-gray-300">{skill}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default ProfessionalCard;