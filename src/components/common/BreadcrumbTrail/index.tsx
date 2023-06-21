import React, { Fragment } from "react";

import "./styles.css";

interface breadcrumbProps {
  formTitles: Array<string>;
  currentStep: number;
}

const BreadcrumbTrail: React.FC<breadcrumbProps> = ({
  formTitles,
  currentStep,
}): JSX.Element => {
  const content: Array<JSX.Element> = [];

  for (let i = 0; i <= currentStep; i++) {
    content.push(
      <Fragment key={formTitles[i]}>
        <div
          className="crumb"
          // if last element - mark as current step for aria,
          // mark all others as false
          aria-current={i === currentStep ? "step" : "false"}
        >
          <h5>Step {i + 1}</h5>
          <p>{formTitles[i]}</p>
        </div>
        <div className="divider" aria-hidden="true">
          {/* Add chevrons but only BETWEEN steps */}
          {i >= currentStep ? null : (
            <i className="fa-solid fa-chevron-right"></i>
          )}
        </div>
      </Fragment>
    );
  }

  content.push(
    <div className="crumb">
      <h5>Steps Remaining</h5>
      <p>{formTitles.length - currentStep}</p>
    </div>
  );

  return <div className="breadcrumb-trail">{content}</div>;
};

export default BreadcrumbTrail;
