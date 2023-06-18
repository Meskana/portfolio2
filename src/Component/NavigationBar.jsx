import React from "react";
import { FcDatabase } from "react-icons/fc";
import { FcDataRecovery } from "react-icons/fc";
import { useState } from "react";
import { Modal } from "../Component/Modal";
const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <div className="navBar">
        <h2 style={{ color: "#3aa672" }}>CHUK'S</h2>
        <div className="nav-box">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Experience</li>
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
        <div
          className="humbager">
          
           
              <FcDatabase className="humbago"  />
            
              <FcDataRecovery className="humbago" />
          
          
       </div>
      </div>
      {showModal && <Modal closeModal={setShowModal} />}
    </div>
  );
};
export default NavBar;
