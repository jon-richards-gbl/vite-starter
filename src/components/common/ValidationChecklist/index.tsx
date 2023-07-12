import React from "react";
import { v4 as uuidv4 } from "uuid";

import { ValidationMessage } from "../../../store/signUpPages/state";

const ValidationChecklist = ({
  messageArray,
}: {
  messageArray: Array<ValidationMessage>;
}): React.JSX.Element => {
  // Clip pattern to visually hide content to provide content for screen readers only
  // const clipStyle = {
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50 %)",
  //   height: "1px",
  //   overflow: "hidden",
  //   position: "absolute",
  //   whiteSpace: "nowrap",
  //   width: "1px",
  // };

  return (
    <ul
      className="validation-checklist"
      // This will instruct a screen reader to announce the vadliation messages
      // when the user pauses rather than on every key stroke. This role includes
      // an 'aria-live' region by default
      role="status"
      // To maximize compatibility, it is advised to add this redundant aria-live
      // when using the 'status' role
      aria-live="polite"
      aria-atomic="true"
    >
      {messageArray.map((message, i) => (
        <li
          className={message.isError ? "error-message" : "success-message"}
          // As this will be a list, each item will need a unique key
          key={uuidv4()}
        >
          {/* Font Awesome cross and tick - alt text added as titles */}
          {message.isError ? (
            <i
              className="fa-solid fa-xmark"
              style={{ color: "#b22222" }}
              //title="error message"
              title="Error:"
            />
          ) : (
            <i
              className="fa-solid fa-check"
              style={{ color: "#436e43" }}
              //title="success message"
              title="OK:"
            />
          )}
          <span aria-hidden="true"> - </span>
          {message.text}
        </li>
      ))}
    </ul>
  );
};

export default ValidationChecklist;
