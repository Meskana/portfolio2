import { motion } from "framer-motion";

const file =
  "https://drive.google.com/uc?export=download&id=1tHMc6aMa6k2GCLxto0VPbVyuL23Zbt_z";

const AboutMe = () => {
  const download = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section id="AboutMe" className="w-full py-2 ">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <button className="bg-emerald-100 px-8 py-3 text-emerald-600 rounded-lg font-bold shadow-md hover:shadow-lg transition">
          About Me
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-5">
        {/* Left Overlapping Boxes */}
        <motion.div
          className="relative flex justify-center w-full lg:w-[40%]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <div className="absolute h-[45vh] -mt-8 -ml-12 w-[70%] sm:w-[50%] bg-emerald-600  shadow-lg"></div>
          <div className="relative h-[45vh] w-[70%] sm:w-[50%] bg-indigo-900 text-white  shadow-lg p-2 sm:p-5 font-medium flex items-center justify-center">
            <span className="text-sm">
              As a full-stack developer, I conduct thorough research to ensure
              the accuracy and reliability of my work, translating complex
              technical concepts into clear, concise code and documentation for
              seamless accessibility by users and the development team
            </span>
          </div>
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Hi, I’m Chukwudi Ilonuba
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            I’m a Full Stack Developer with a strong focus on Frontend
            Development. I’m passionate about building modern, responsive, and
            user-centered web applications that deliver seamless experiences. My
            core stack includes React.js, TypeScript, and Tailwind CSS, and I
            have solid experience integrating APIs, handling state management
            with Redux Toolkit Query, and implementing features like
            authentication, PIN confirmation, and transaction receipts. On the
            backend, I work with Python (Django) to design and develop efficient
            APIs, ensuring smooth communication between client and server. I
            enjoy collaborating across teams—translating ideas into scalable,
            maintainable, and visually appealing products. My goal is to craft
            web solutions that combine clean design, strong functionality, and
            great performance—bridging the gap between frontend elegance and
            backend logic.
          </p>
          <motion.button
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition w-fit"
            whileHover={{ scale: 1.05 }}
            onClick={() => download(file)}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
