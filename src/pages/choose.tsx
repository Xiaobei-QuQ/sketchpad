import React from "react";

export default () => {
  const brushArr = [
    {
      src_url: "../imgs/ic_menu_pencil.png",
      className: "brush-pencil"
    },
    {
      src_url: "../imgs/ic_menu_pen.png",
      className: "brush-pen"
    },
    {
      src_url: "../imgs/ic_menu_watercolor.png",
      className: "brush-watercolor"
    },
    {
      src_url: "../imgs/ic_menu_soft_charcoal.png",
      className: "brush-soft"
    }
  ];
  const colorArr = [Array(16), Array(16)];

  return (
    <>
      <div className="choose">
        <div className="chooseBrush" id="chooseBrush">
          <ul>
            {brushArr.map((item, index) => (
              <li key={index}>
                <button className={item.className}>
                  <img src={item.src_url} alt="" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="chooseColor" id="chooseColor">
          <div className="colors clearfix">
            {colorArr.map((Item, Index) => (
              <div className={`colors-${Index + 1}`}>
                <div className="buttons">
                  {Item.map((item, index) => (
                    <div className={`button button-${index}`}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="circle-content">
            <div className="firstPage active"></div>
            <div className="secondPage"></div>
          </div>
        </div>
        <div className="chooseBg" id="chooseBg"></div>
      </div>
    </>
  );
};
