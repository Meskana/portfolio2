import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";

export const skillsData = [
  {
    id: 1,
    icon: (
      <>
        <FaHtml5 /> / <FaCss3Alt />
      </>
    ),
    title: "HTML & CSS",
    description:
      "Proficient in building clean, responsive, and visually appealing websites. I have mastered HTML for structuring content and CSS for styling. My ability to create adaptive layouts ensures a seamless experience across different devices.",
  },
  {
    id: 2,
    icon: <FaBootstrap />,
    title: "Bootstrap",
    description:
      "With expertise in Bootstrap, I efficiently create mobile-first, responsive web designs. I leverage its grid system and utilities to speed up development while maintaining design quality.",
  },
  {
    id: 3,
    icon: (
      <>
        <TbBrandJavascript /> / <FaReact />
      </>
    ),
    title: "JavaScript & React",
    description:
      "As a seasoned JavaScript developer, I enhance web apps with dynamic and interactive features. My deep understanding of React helps me build modern, component-based user interfaces with ease.",
  },
  {
    id: 4,
    icon: <FaPython />,
    title: "Python (Flask)",
    description:
      "On the backend, I’m skilled in Python and its micro-framework Flask. I build robust APIs and server-side logic, with strong understanding of routing, database integration, and deployment.",
  },
  {
    id: 5,
    title: "C Language",
    description:
      "Beyond web development, I’m proficient in C, allowing me to write efficient low-level code and understand memory management, pointers, and data structures.",
  },
  {
    id: 6,
    icon: <FaGithub />,
    title: "GitHub",
    description:
      "I’m experienced with version control using Git and GitHub for managing collaborative projects — branching, merging, resolving conflicts, and contributing to open source.",
  },
  {
    id: 7,
    icon: <FaUbuntu />,
    title: "Shell Commands (Ubuntu)",
    description:
      "I’m comfortable using shell commands in Ubuntu for navigating the file system, managing packages, and automating processes — improving efficiency in development and server management.",
  },
];

const Service = () => {
  return (
    <div className="Skills" id="Skills">
      <div className="w-[90%] max-w-6xl mx-auto p-2 md:p-2 text-center md:text-left mt-4 mb-4 font-bold">
        <h2 className=" text-[#3aa672]  text-center">My Skills</h2>
      </div>

      <div className="w-[90%] max-w-6xl mx-auto p-2 md:p-2 text-center md:text-left  ">
        <p>
          I’m a highly skilled and versatile web developer and programmer with
          proficiency in a diverse range of technologies. With a solid
          foundation in both front-end and back-end development, I’ve honed my
          expertise across several programming languages, libraries, and
          frameworks.
        </p>
      </div>
      <div className="w-[90%] max-w-6xl mx-auto p-2 md:p-2 text-center md:text-left mt-4 mb-4">
        <h2 className=" text-[#3aa672]  text-center font-bold">
          Key Skills & Expertise
        </h2>
      </div>
      <div className="skills-card22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="skills-card-box bg-white shadow-lg p-6 rounded-2xl flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
          >
            {skill.icon && (
              <div className="text-3xl text-[#3aa672] mb-3 flex  ">
                {skill.icon}
              </div>
            )}
            <p className="text-gray-800">
              <span className="font-semibold text-white  bg-[#3aa672] p-1">
                {skill.title}:
              </span>{" "}
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      <div className="skills-card"></div>
      <div className="marqua">
        <div className="marquee">
          <div className="meq-box">
            <FaUbuntu />
          </div>
          <div className="meq-box">
            <FaGithub />
          </div>
          <div className="meq-box">
            <FaPython />
          </div>
          <div className="meq-box">
            <TbBrandJavascript />
          </div>
          <div className="meq-box">
            <FaReact />
          </div>
          <div className="meq-box">
            <FaBootstrap />
          </div>
          <div className="meq-box">
            <FaHtml5 />
          </div>
          <div className="meq-box">
            <FaCss3Alt />
          </div>
        </div>

        <div className="marquee">
          <div className="meq-box">
            <FaUbuntu />
          </div>
          <div className="meq-box">
            <FaGithub />
          </div>
          <div className="meq-box">
            <FaPython />
          </div>
          <div className="meq-box">
            <TbBrandJavascript />
          </div>
          <div className="meq-box">
            <FaReact />
          </div>
          <div className="meq-box">
            <FaBootstrap />
          </div>
          <div className="meq-box">
            <FaHtml5 />
          </div>
          <div className="meq-box">
            <FaCss3Alt />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
