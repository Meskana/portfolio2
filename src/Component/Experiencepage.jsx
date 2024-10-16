import image from "../images/coin.png";
import image2 from "../images/hotel.png";
import image3 from "../images/temp.png";
const Experience = () => {
  return (
    <div className="container-exp">
      <div className="container-bnt">
        <button className="exp-bnt">Projects</button>
      </div>

      <section class="section3">
        <h1>My Personal/Fuctuerd Project</h1>
        <div className="sec3">
          <div className="box">
            <img src={image} className="project-image" alt="passport" />
            <p>
              took an initiative of opening the company to fill the gap. it aims
              at understanding its clients wishes, and marking them a reality'
            </p>
            <button className="btnt">read more</button>
          </div>
          <div className="box">
            <img src={image2} className="project-image" alt="passport" />
            <p>
              took an initiative of opening the company to fill the gap. it aims
              at understanding its clients wishes, and marking them a reality'
            </p>
            <button className="btnt">read more</button>
          </div>
          <div className="box">
            <img src={image3} className="project-image" alt="passport" />
            <p>
              took an initiative of opening the company to fill the gap. it aims
              at understanding its clients wishes, and marking them a reality'
            </p>
            <button className="btnt">read more</button>
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
