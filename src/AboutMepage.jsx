const file =
  "https://drive.google.com/uc?export=download&id=1tHMc6aMa6k2GCLxto0VPbVyuL23Zbt_z";

const AboutMe = () => {
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
    <div id="AboutMe">
      <div className="About-cont">
        <button className="About-bnt">About Me</button>
      </div>

      <div className="About">
        <div className="About-sec1">
          <div className="box1"></div>
          <div className="box2">
            <span className="comma">"</span>As a developer, I excel at
            conducting thorough research to ensure the accuracy and reliability
            of my work. I can break down complex technical concepts into clear
            and concise code or documentation, making intricate ideas more
            accessible to users and team members alike.
            <span className="comma">"</span>
          </div>
        </div>
        <div className="About-sec2">
          <h2>Do Some Awesome Stuff With Me </h2>
          <h4>Developes With first Experince</h4>
          <p>
            I’m thrilled to introduce myself as a full-stack web developer with
            a strong focus on backend development. My expertise lies in building
            scalable and efficient server-side applications, database
            management, and API integrations to support seamless user
            experiences on the frontend. With a solid foundation in both
            frontend and backend technologies, I’m able to develop end-to-end
            solutions that are both reliable and user-centric. I’m passionate
            about solving complex problems, optimizing performance, and
            contributing to impactful projects.
          </p>
          <button
            className="button"
            onClick={() => {
              download(file);
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
