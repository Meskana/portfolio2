import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Modal } from "../Component/Modal";
//import { Link } from "react-router-dom";
const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="navBar">
        <h2 style={{ color: "#3aa672" }}>CHUK'S</h2>
        <div className={click ? "nav-box active" : "nav-box"}>
          <ul>
            <li>
              <a href="#Main">Home</a>
            </li>
            <li>
              <a href="#AboutMe">About</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
          </ul>
          <button
            className="button-nav"
            style={{ float: "right" }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Contact Me
          </button>
        </div>
        <div className="humbager" onClick={handleClick}>
          {click ? (
            <RxCross2 className="humbago" />
          ) : (
            <FaBars className="humbago" />
          )}
        </div>
      </div>
      {showModal && <Modal closeModal={setShowModal} />}
    </div>
  );
};
export default NavBar;
