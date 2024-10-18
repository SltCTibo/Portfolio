"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfessionnalCard from "@/components/ProfessionalCard";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaWhatsapp, FaUserGraduate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi"
import { FaComputer } from "react-icons/fa6";
import { TiBusinessCard } from "react-icons/ti";

import Skill from "@/components/Skill";
import { useLanguage } from "@/context/LanguageContext";

import skills from "@/data/skills.json";

import Specializations from "@/components/Specializations";

import Head from "next/head";
import Formation from "@/components/Formation";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const { currentLanguage, navbar, title, experiences, projects, formations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("+33784089674");
      toast.success(title.phoneNumber + " (+33784089674)!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy the phone number.");
    }
  };

  return (
    <>
    <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className="bg-[#242732] min-h-screen">
      <Head>
          <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar data={navbar}/>

      <main className="justify-center w-full flex flex-col">
        <Toaster position="bottom-center" reverseOrder={false} />

        <div className="relative bg-cover bg-center w-full h-screen" style={{ backgroundImage: "url('/background.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#242732]"></div>
          
          <div className="relative z-10 mx-10 w-[40%] mt-[100px] text-white">
            <h1 className="font-bold text-[60px]">FULL-STACK</h1>
            <h2 className="text-[50px] mb-6 font-bold">& BLOCKCHAIN DEVELOPER</h2>
            <p className="text-justify w-[80%] text-[20px]">
              {title.description}
            </p>
            <div className="w-[75%] items-center justify-center flex p-6 space-x-10">
              <button onClick={() => setIsOpen(true)} className="bg-white cursor-pointer border border-black px-6 py-3 rounded-full text-black text-[16px] w-[200px] font-bold shadow-xl hover:bg-gray-300">{title.contactMe}</button>
              <a className="flex cursor-pointer items-center justify-center bg-gray-800 border border-gray-500 px-6 py-3 rounded-full text-white text-[16px] w-[200px] shadow-xl hover:bg-gray-900" href="/Resume-Thibault-BARBE.pdf" target="_blank" rel="noopener noreferrer">{title.resume}</a>
            </div>
            <div className="flex flex-col py-5">
              <h3 className="font-semibold pb-4 text-[27px]">{title.socials}</h3>
              <div className="flex flex-row space-x-10">
                <div className="hover:bg-gray-400 cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                  <Link href="https://github.com/SltCTibo" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-[25px] w-[25px] text-black cursor-pointer" />
                  </Link>
                </div>
                <div className="hover:bg-gray-400 cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                  <Link href="https://www.malt.fr/profile/thibaultbarbe" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                    <Image src="/svgviewer-output.svg" width={30} height={30} alt="Malt Logo"/>
                  </Link>
                </div>
                <div className="hover:bg-gray-400 cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                  <Link href="https://www.linkedin.com/in/thibault-barbe-079a2a1b0/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-[25px] w-[25px] text-black cursor-pointer" />
                  </Link>
                </div>
                <div className="hover:bg-gray-400 cursor-pointer flex justify-center items-center w-[45px] h-[45px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                  <FaWhatsapp className="h-[25px] text-black w-[25px] cursor-pointer" onClick={handleCopy} />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-5">
              <h3 className="font-semibold pb-4 text-[27px]">{title.mainSkills}</h3>
              <div className="flex flex-row space-x-10">
              <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                    <Link href="https://github.com/SltCTibo">
                      <Image width={30} height={30} src={"/skills/reactjs.png"} alt="ReactJS"/>
                    </Link>
                  </div>
                  <p className="mt-2 font-semibold">ReactJS</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                    <Link href="https://github.com/SltCTibo">
                    <Image width={30} height={30} src={"/skills/nextjs-icon.svg"} alt="NextJS"/>
                    </Link>
                  </div>
                  <p className="mt-2 font-semibold">NextJS</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                    <Link href="https://github.com/SltCTibo">
                    <Image width={30} height={30} src={"/skills/rust.webp"} alt="Rust"/>
                    </Link>
                  </div>
                  <p className="mt-2 font-semibold">Rust</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                    <Link href="https://github.com/SltCTibo">
                    <Image width={30} height={30} src={"/skills/node.png"} alt="ReactJS"/>
                    </Link>
                  </div>
                  <p className="mt-2 font-semibold">NodeJS</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full item bg-white opacity-90 shadow-md shadow-black">
                    <Link href="https://github.com/SltCTibo">
                      <Image src="/anchor_logo.png" width={30} height={30} alt="Anchor Solana" />
                    </Link>
                  </div>
                  <p className="mt-2 font-semibold">Anchor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Specializations data={title} currentLanguage={currentLanguage} />
        <div id="skills" className="space-y-6 px-10 scroll-mt-[100px]">
          <div className="flex flex-row items-center justify-between space-x-4">
            <GiSkills className="w-[100px] h-[90px]" />
            <h1 className="">{title.skills}</h1>
            <div className="pl-8 flex-1 justify-end flex h-[2px] bg-white" />
          </div>
          <h3>{title.programmingLanguage}</h3>
          <div className="flex flex-row items-center space-x-4">
            { skills.language.map((skill, key) => (
              <Skill key={key} name={skill.name} icon={skill.icon} />
            ))
            }
          </div>
          <h3>{title.frontFramework}</h3>
          <div className="flex flex-row items-center space-x-4">
            { skills.frontend.map((skill, key) => (
              <Skill key={key} name={skill.name} icon={skill.icon} />
            ))
            }
          </div>
          <h3>{title.backFramework}</h3>
          <div className="flex flex-row items-center space-x-4">
            { skills.backend.map((skill, key) => (
              <Skill key={key} name={skill.name} icon={skill.icon} />
            ))
            }
          </div>
          <h3>{title.blockchainDev}</h3>
          <div className="flex flex-row items-center space-x-4">
            { skills.blockchain.map((skill, key) => (
              <Skill key={key} name={skill.name} icon={skill.icon} />
            ))
            }
          </div>
          <h3>DATABASE</h3>
          <div className="flex flex-row items-center space-x-4">
            { skills.database.map((skill, key) => (
              <Skill key={key} name={skill.name} icon={skill.icon} />
            ))
            }
          </div>
          <h3>{title.tools}</h3>
          <div className="flex flex-row items-center space-x-4">
            { skills.tools.map((skill, key) => (
              <Skill key={key} name={skill.name} icon={skill.icon} />
            ))
            }
          </div>
        </div>
        <div id="experiences" className="p-10 scroll-mt-[100px]">
          <div className="flex flex-row items-center justify-between space-x-4">
            <TiBusinessCard className="w-[110px] h-[100px]" />
            <h1 className="">{title.professionalExperiences}</h1>
            <div className="pl-8 justify-end flex-1 h-[2px] bg-white" />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-row w-[80%] items-center justify-around mt-10">
              { experiences.map((experience, key) => (
                <ProfessionnalCard
                  company={experience.company}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  job={experience.job}
                  description={experience.description}
                  skills={experience.skills}
                  skillsLogo={experience.skillsLogo}
                  type={experience.type}
                  logo={experience.logo}
                  companySite={experience.companySite}
                  data={title}
                  key={key}
                />
              ))}
            </div>
          </div>
        </div>
        <div id="projects" className="p-10 scroll-mt-[90px] space-y-[20px] ">
          <div className="flex flex-row items-center justify-between space-x-4">
            <FaComputer className="w-[100px] h-[90px]" />
            <h1>{title.projects}</h1>
            <div className="pl-8 justify-end flex-1 h-[2px] bg-white" />
          </div>
          <div className="space-y-20 items-center flex flex-col justify-center">
            <div className="space-y-20 w-[90%] flex flex-col justify-center items-center">
              { projects.past.map((project, key) => (
                <ProjectCard data={project} key={key} size={"large"} index={key} />
              ))}
            </div>
            <div className="space-y-6 w-full flex flex-col items-center justify-center">
              <h2>{title.present}</h2>
              <div className="flex flex-row space-x-10 justify-center">
                { projects.present.map((project, key) => (
                  <ProjectCard data={project} key={key} size={"medium"} />
                ))}
              </div>
            </div>
            <div className="space-y-[50px] flex flex-col items-center justify-center">
              <h2>{title.futur}</h2>
              <div className="flex flex-col space-y-6 items-center justify-center">
                { projects.futur.map((project, key) => (
                  <ProjectCard data={project} key={key} size={"small"} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="formation" className="p-10 scroll-mt-[90px] space-y-10">
          <div className="flex flex-row items-center justify-between space-x-4">
            <FaUserGraduate className="w-[100px] h-[90px]" />
            <h1>{title.formation}</h1>
            <div className="pl-8 justify-end flex-1 h-[2px] bg-white" />
          </div>
          <div className="flex items-center justify-center w-[90%]">
            <div className="w-[90%] space-y-8 flex flex-col">
              { formations.map((formation, key) => (
                <Formation formation={formation} key={key} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <button onClick={() => setIsOpen(true)} className="text-[30px] font-bold border-2 border-white py-3 px-6 rounded-xl hover:bg-white hover:text-black">{title.contactMe}</button>
        </div>
      </main>
      <Footer data={title} />
    </div>
    </>
  );
}
