import {FcGlobe} from 'react-icons/fc';
import {FcPicture} from 'react-icons/fc';
import {FcCommandLine} from 'react-icons/fc';
import {FcPuzzle} from 'react-icons/fc';
import {FcBriefcase} from 'react-icons/fc';
import {FcCollect} from 'react-icons/fc';
const Service = () => {
  return (
    <div className="services">
      <div className="services-cont">
        <button className="About-bnt">Services</button>
        <h1>We Provide The Best Services</h1>
      </div>

      <div className="container">
        <div className="box">
          <h1><FcCommandLine className="box-icon"/></h1>
            <h4>Web Development</h4>
          <p>In summary, as a web designer and writer, I bring a unique blend of
          creativity, technical expertise, and strong communication skills to
          every project I undertake. Whether it's designing visually stunning
          websites or crafting compelling written content, I am committed to
          delivering exceptional results that align with my clients' objectives.
          I look forward to the opportunity to collaborate with you and
          contribute to your success.</p>
        </div>
        <div className="box">
          <h1><FcGlobe className="box-icon"/></h1>
        <h4>Web Design</h4>
          In summary, as a web designer and writer, I bring a unique blend of
          creativity, technical expertise, and strong communication skills to
          every project I undertake. Whether it's designing visually stunning
          websites or crafting compelling written content, I am committed to
          delivering exceptional results that align with my clients' objectives.
          I look forward to the opportunity to collaborate with you and
          contribute to your success.
        </div>
        <div className="box">
          <h1><FcBriefcase className="box-icon"/></h1>
        <h4>User Interface</h4>
          In summary, as a web designer and writer, I bring a unique blend of
          creativity, technical expertise, and strong communication skills to
          every project I undertake. Whether it's designing visually stunning
          websites or crafting compelling written content, I am committed to
          delivering exceptional results that align with my clients' objectives.
          I look forward to the opportunity to collaborate with you and
          contribute to your success.
        </div>
        <div className="box">
          <h1><FcCollect  className="box-icon"/></h1>
        <h4>Graphics Design</h4>
          In summary, as a web designer and writer, I bring a unique blend of
          creativity, technical expertise, and strong communication skills to
          every project I undertake. Whether it's designing visually stunning
          websites or crafting compelling written content, I am committed to
          delivering exceptional results that align with my clients' objectives.
          I look forward to the opportunity to collaborate with you and
          contribute to your success.
        </div>
        <div className="box">
          <h1><FcPicture className="box-icon" /></h1>
        <h4>Photograph</h4>
          In summary, as a web designer and writer, I bring a unique blend of
          creativity, technical expertise, and strong communication skills to
          every project I undertake. Whether it's designing visually stunning
          websites or crafting compelling written content, I am committed to
          delivering exceptional results that align with my clients' objectives.
          I look forward to the opportunity to collaborate with you and
          contribute to your success.
        </div>
        <div className="box">
          <h1><FcPuzzle className="box-icon"/></h1>
        <h4>Brand Design</h4>
          In summary, as a web designer and writer, I bring a unique blend of
          creativity, technical expertise, and strong communication skills to
          every project I undertake. Whether it's designing visually stunning
          websites or crafting compelling written content, I am committed to
          delivering exceptional results that align with my clients' objectives.
          I look forward to the opportunity to collaborate with you and
          contribute to your success.
        </div>
      </div>
    </div>
  );
};
export default Service;
