import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";

import React from "react";
const Service = () => {
  return (
    <div className="Skills">
      <div className="skill-txt">
        <button className="skill-btn">
          <h2>My Skills</h2>
        </button>
      </div>

      <div className="skills-writeUp">
        <p>
          Am highly skilled and versatile web developer and programmer with
          proficiency in a diverse range of technologies. With a solid
          foundation in front-end and back-end development, they have honed
          their expertise across several programming languages, libraries, and
          frameworks.
        </p>
      </div>
      <div className="skill-txt">
        <button className="skill-btn">
          <h2>Key Skills & Expertise</h2>
        </button>
      </div>
      <div className="skills-card">
        <div className="skills-card-box1">
          <i>
            <FaHtml5 />/<FaCss3Alt />
          </i>
          <p>
            <span>HTML & CSS:</span> Proficient in building clean, responsive,
            and visually appealing websites, i have mastered HTML for
            structuring web content and CSS for styling it. Their ability to
            create adaptive layouts ensures a seamless user experience across
            different devices.
          </p>
        </div>

        <div className="skills-card-box2">
          <i>
            <FaBootstrap />
          </i>
          <p>
            <span>Bootstrap:</span> With expertise in Bootstrap, am efficiently
            creates mobile-first, responsive web designs. They leverage
            Bootstrap’s grid system, components, and utilities to speed up
            development while maintaining high-quality designs.
          </p>
        </div>

        <div className="skills-card-box3">
          <i>
            <TbBrandJavascript />/<FaReact />
          </i>
          <p>
            <span>JavaScript & React:</span> As a seasoned JavaScript developer,
            i enhances web applications with dynamic and interactive features.
            And deep understanding of React allows me to build modern,
            component-based user interfaces with ease.
          </p>
        </div>

        <div className="skills-card-box4">
          <i>
            <FaPython />
          </i>
          <p>
            <span>Python (Flask):</span> On the backend, i adept in Python and
            its micro-framework, Flask. They have experience in creating robust
            and scalable web applications, REST APIs, and server-side logic.
            Their Flask projects demonstrate a clear understanding of web
            routing, database integration, and deployment.
          </p>
        </div>

        <div className="skills-card-box5">
          <p>
            <span>C-Language:</span> In addition to web development, am
            proficient in C, a foundational programming language. They utilize C
            to write efficient, low-level code, understanding the principles of
            memory management, pointers, and data structures. my skills in C
            allows me to solve complex computational problems with precision.
          </p>
        </div>

        <div className="skills-card-box6">
          <i>
            <FaGithub />
          </i>
          <p>
            <span>GitHub:</span>am familiar with version control using Git and
            GitHub, which allows me to manage projects collaboratively. Their
            workflow involves branching, merging, resolving conflicts, and
            ensuring a streamlined development process. They are also
            experienced in using GitHub for open-source collaboration and code
            sharing.
          </p>
        </div>

        <div className="skills-card-box7">
          <i>
            <FaUbuntu />
          </i>
          <p>
            <span>Shell Commands (Ubuntu):</span> Comfortable working within a
            Linux environment, am proficient in using shell commands on Ubuntu
            for tasks such as navigating the file system, managing packages, and
            automating processes. Their familiarity with the command line
            enhances their efficiency in development and server management.
          </p>
        </div>
      </div>
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
