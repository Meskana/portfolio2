import { motion } from "framer-motion";
import image from "./images/image.png";
const file =
  "https://drive.google.com/uc?export=download&id=1tHMc6aMa6k2GCLxto0VPbVyuL23Zbt_z";
const Main = () => {
  const download = (url) => {
    const filname = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filname);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-6 md:p-12 bg-gray-50">
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold pb-3">
          Hi! <span className="text-[#3aa672]">I'm Dev.Chukwudi </span>
        </h1>
        <h2 className="text-xl font-medium pb-2 text-gray-700">
          Great to see you
        </h2>
        <p className="pb-6 text-gray-600 leading-relaxed">
          Hello! I'm Certified Software Engineer by ALX | Full Stack developer |
          Computer Engineering graduate at FPO with a strong passion for
          software development. I specialize in designing, developing, and
          deploying robust web applications using a diverse range of frontend
          and backend technologies.
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="px-5 py-2 bg-[#3aa672] text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
          onClick={() => {
            download(file);
          }}
        >
          Download CV
        </motion.button>
      </motion.div>
      <motion.div
        className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto overflow-hidden border-2 border-[#3aa672]  shadow-lg py-3 px-2 rounded-xl"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={image}
          alt="passport"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </main>
  );
};
export default Main;
