import React from "react";

export default () => {
  return (
    <>
      <div className="alert"></div>
      <div className="caveat">
        <div className="description">Are you sure to clear the artboard?</div>
        <button id="clearAll">Yes</button>
        <button id="noClear">No</button>
      </div>
    </>
  );
};
