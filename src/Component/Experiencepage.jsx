import image from "../images/coin.png";
import image2 from "../images/hotel.png";
import image3 from "../images/temp.png";
import { FaGithub } from "react-icons/fa";
const Experience = () => {
  return (
    <div className="container-exp" id="Project">
      <section class="section3">
        <h1>My Personal/Fuctuerd Project</h1>
        <div className="sec3">
          <div className="box">
            <img src={image} className="project-image" alt="passport" />
            <p>This is CoinResearch App</p>
            <button className="btnt">
              <a href="https://github.com/Meskana/Test_project1/tree/main/my_app">
                <FaGithub />
                GitHub
              </a>
            </button>
            <button className="btnt">
              <a href="youtube">Preview</a>
            </button>
          </div>
          <div className="box">
            <img src={image2} className="project-image" alt="passport" />
            <p>Thia is Hotel Managment App</p>
            <button className="btnt">
              <a href="https://github.com/Muslimbello/Hotel-Management-System/tree/main/clients">
                <FaGithub />
                GitHub
              </a>
            </button>
            <button className="btnt">
              <a href="#Main">Preview</a>
            </button>
          </div>
          <div className="box">
            <img src={image3} className="project-image" alt="passport" />
            <p>This is a Templete portfolio i did for a cliant</p>
            <button className="btnt">
              <a href="https://github.com/Meskana/portfolio2">
                <FaGithub />
                GitHub
              </a>
            </button>
            <button className="btnt">
              <a href="https://templat-porfolio.onrender.com/">Preview</a>
            </button>
          </div>
        </div>
      </section>
      <div className="exp-box">
        <div>
          <h1>2+</h1>
          <p> Project Complet</p>
        </div>

        <div>
          <h1>1+</h1>
          <p> Win Award</p>
        </div>

        <div>
          <h1>0+</h1>
          <p> Complet Cliant</p>
        </div>

        <div>
          <h1>0+</h1>
          <p> Years Experince</p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
