const file = "http://localhost:3000/MyCv.pdf";
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
    <div>
      <div className="About-cont">
        <button className="About-bnt">About Me</button>
      </div>

      <div className="About">
        <div className="About-sec1">
          <div className="box1"></div>
          <div className="box2">
            <span className="comma">"</span>I am skilled at conducting thorough
            research to ensure the accuracy and credibility of my content. I can
            distill complex ideas into clear and concise language, making even
            the most intricate concepts accessible to readers
            <span className="comma">"</span>
          </div>
        </div>
        <div className="About-sec2">
          <h2>Do Some Awesome Stuff With Me </h2>
          <h4>Designer With 10th Experince</h4>
          <p>
            As a web designer, I possess a deep understanding of user experience
            (UX) and user interface (UI) design principles. I have a keen eye
            for aesthetics and strive to create visually stunning websites that
            are not only visually appealing but also functional and easy to
            navigate. I am proficient in HTML, CSS, JavaScript, and other
            relevant web technologies, enabling me to build responsive and
            dynamic websites that adapt seamlessly across various devices and
            platforms.
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
