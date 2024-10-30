export const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-backgroun"></div>
      <div className="modal-box">
        <div className="modal-bnt-box">
          <button
            onClick={() => {
              closeModal(false);
            }}
            className="cancle-bnt"
          >
            X
          </button>
        </div>
        <div className="modal-cont">
          <div className="modal-content">
            <h2>Do not hasitate to put your contact below</h2>
            <p>Drop your contact here to make a communication </p>
            <form className="modal-form">
              <input
                type="text"
                placeholder="Username"
                className="modal-type"
              />
              <input type="email" placeholder="Email" className="modal-type" />
              <input
                type="number"
                placeholder="Your phone number"
                className="modal-type"
              />
              <br />
              <input type="submit" className="modal-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
