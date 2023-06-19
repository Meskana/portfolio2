import image from "./images/image.png";
const file = "http://localhost:3000/MyCv.pdf";
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
    <main className="main">
      <div className="main-div1">
        <h1>
          Hi! <span style={{ color: "#3aa672" }}>I'M Chuks. </span>
        </h1>
        <h1>Great to see you</h1>
        <p>
          I am delighted to take this opportunity to introduce myself as a
          talented web designer and skilled writer. My passion for creativity
          and my expertise in both fields have enabled me to create engaging and
          visually appealing online experiences while crafting compelling
          written content.
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
      <div className="main-div2">
        <img src={image} className="main-image" />
      </div>
    </main>
  );
};
export default Main;
