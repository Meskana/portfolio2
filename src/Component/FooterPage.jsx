import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer flex items-center justify-center gap-8 mt-6 mb-6">
      <a
        href="https://www.facebook.com/chukwudi.ilonuba"
        className="social text-[#3aa672] hover:text-white hover:bg-[#3aa672] text-3xl  hover:p-2 p-2 rounded-md hover:rounded-md"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/ilonuba.chukwudi"
        className="social text-[#3aa672] hover:text-white hover:bg-[#3aa672] text-3xl  hover:p-2 p-2 rounded-md hover:rounded-md"
      >
        <BsInstagram />
      </a>
      <a
        href="https://x.com/Dev_chukwudi"
        className="social text-[#3aa672] hover:text-white hover:bg-[#3aa672] text-3xl  hover:p-2 p-2 rounded-md hover:rounded-md"
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/ilonuba-chukwudi-a14868191/"
        className="social text-[#3aa672] hover:text-white hover:bg-[#3aa672] text-3xl  hover:p-2 p-2 rounded-md hover:rounded-md"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Meskana"
        className="social text-[#3aa672] hover:text-white hover:bg-[#3aa672] text-3xl  hover:p-2 p-2 rounded-md hover:rounded-md"
      >
        <BsGithub />
      </a>
    </div>
  );
};
export default Footer;
