import { useState } from "react";

import { LogoutMessageProps } from "./types";

const LogoutMessage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="madal">
          <div className="overlay">
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                eius incidunt ea doloribus nam ipsa vero expedita quo eligendi
                odio. Eaque commodi quo possimus eveniet incidunt, dignissimos
                consectetur nisi veniam.
              </p>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutMessage;
