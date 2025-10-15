import React from "react";
import { motion } from "framer-motion";
import image from "../images/coin.png";
import image2 from "../images/hotel.png";
import image3 from "../images/temp.png";
import image4 from "../images/twm.png";
import image5 from "../images/billrtech.png";
import image6 from "../images/closematch.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: image4,
    title: "The Wealthy Man web-App",
    github: "https://github.com/Meskana/TMW-Frontend",
    preview: "https://tmw-frontend.vercel.app/",
  },
  {
    id: 1,
    image: image5,
    title: "Billrtech App",
    github: "https://github.com/Meskana/utility-app-frontend",
    preview: "https://billrtech-offical.vercel.app/",
  },
  {
    id: 1,
    image: image,
    title: "CoinResearch App",
    github: "https://github.com/Meskana/Test_project1/tree/main/my_app",
    preview: "https://youtube.com",
  },
  {
    id: 1,
    image: image6,
    title: "CloseMatch App",
    github: "https://github.com/Skidesign1/Closematch-admin",
    preview: "https://closematch.vercel.app/homepage",
  },
  {
    id: 2,
    image: image2,
    title: "Hotel Management App",
    github:
      "https://github.com/Muslimbello/Hotel-Management-System/tree/main/clients",
    preview: "#Main",
  },
  {
    id: 3,
    image: image3,
    title: "Client Portfolio Template",
    github: "https://github.com/Meskana/portfolio2",
    preview: "https://templat-porfolio.onrender.com/",
  },
];

const stats = [
  { id: 1, value: "4+", label: "Projects Completed" },
  { id: 2, value: "1+", label: "Awards Won" },
  { id: 3, value: "2+", label: "Clients Served" },
  { id: 4, value: "3+", label: "Years Experience" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const Experience = () => {
  return (
    <div
      id="Project"
      className="bg-[#3aa672] pt-12 flex flex-col items-center text-white overflow-hidden mt-8"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        My Personal / Featured Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            className="bg-[#3aa672] rounded-lg shadow-[3px_3px_3px_-1px_rgba(0,0,0,0.3),_-3px_-3px_3px_-1px_rgba(255,255,255,0.3)] hover:shadow-2xl transition duration-300 p-4 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full  object-cover  mb-4"
            />
            <p className="text-white font-medium mb-4">{project.title}</p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex  gap-2 font-medium bg-white text-emerald-600 py-1 px-3 rounded-md shadow-[3px_3px_3px_-1px_rgba(0,0,0,0.3),_-3px_-3px_3px_-1px_rgba(255,255,255,0.3)]"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 font-medium  py-1 px-3 rounded-md shadow-[3px_3px_3px_-1px_rgba(0,0,0,0.3),_-3px_-3px_3px_-1px_rgba(255,255,255,0.3)]"
              >
                Preview
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-50 text-center text-gray-700 rounded-t-3xl w-[90%] sm:w-[70%] flex flex-wrap justify-around gap-6 py-8"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h1 className="text-emerald-600 text-3xl font-bold">
              {stat.value}
            </h1>
            <p className="text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
