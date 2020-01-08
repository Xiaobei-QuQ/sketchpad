import React from "react";

export default () => {
  const circleArr = [
    {
      src_url: "../imgs/ic_menu_pencil.png",
      className: "brush-pencil"
    },
    {
      src_url: "",
      className: "color"
    },
    {
      src_url: "../imgs/download2.png",
      className: "dl"
    },
    {
      src_url: "../imgs/clean.png",
      className: "clear"
    },
    {
      src_url: "../imgs/ic_menu_hard_eraser.png",
      className: "eraser"
    }
  ];
  return (
    <>
      <div className="footer-control" id="footer-control">
        {circleArr.map(item => (
          <button className={item.className} id="brush">
            <img src={item.src_url} alt="" />
          </button>
        ))}
      </div>
      <div className="alert"></div>
      <div className="caveat">
        <div className="description">Are you sure to clear the artboard?</div>
        <button id="clearAll">Yes</button>
        <button id="noClear">No</button>
      </div>
    </>
  );
};
