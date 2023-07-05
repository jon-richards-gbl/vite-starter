import React from "react";
import { v4 as uuidv4 } from "uuid";

export interface validationMessage {
  isError: boolean;
  text: string;
}

const ValidationChecklist = ({
  messageArray,
}: {
  messageArray: Array<validationMessage>;
}): React.JSX.Element => {
  return (
    <ul className="validation-checklist">
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
              title="success message"
            />
          ) : (
            <i
              className="fa-solid fa-check"
              style={{ color: "#436e43" }}
              title="error message"
            />
          )}
          {message.text}
        </li>
      ))}
    </ul>
  );
};

export default ValidationChecklist;
