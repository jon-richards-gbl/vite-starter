import { useState } from "react";

// import { LogoutMessageProps } from "./Types";

interface LogoutMessageProps {
  modal: boolean;
  toggleModal: () => void;
}

const LogoutMessage: React.FC<LogoutMessageProps> = ({
  modal,
  toggleModal,
}) => {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const logoutModal = () => {
    localStorage.removeItem("userData");

    window.location.reload();
  };

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                eius incidunt ea doloribus nam ipsa vero expedita quo eligendi
                odio. Eaque commodi quo possimus eveniet incidunt, dignissimos
                consectetur nisi veniam.
              </p>
              <button
                onClick={() => {
                  toggleModal();
                  logoutModal();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutMessage;
