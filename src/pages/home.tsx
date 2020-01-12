import React, { useState, useEffect, useRef, useMemo } from "react";
import Header from "./header";
import Choose from "./choose";
import Footer from "./footer";
import Prompt from "./prompt";
import Style from "./index.less";

export default () => {
  // 获取底图尺寸
  const [backgroundWidth, setBackgroundWidth] = useState(window.innerWidth);
  const [backgroundHeight, setBackgroundHeight] = useState(window.innerHeight);
  useEffect(() => {
    setBackgroundWidth(window.innerWidth);
    setBackgroundHeight(window.innerHeight);
  }, []);

  // 主体样式
  const style = useMemo(
    () => ({
      backgroundSize: `${backgroundWidth}px ${backgroundHeight}px`
    }),
    [backgroundWidth, backgroundHeight]
  );

  const canvasEl: any = useRef(null);
  const percent = 0.5;
  const alpha = 1;
  const rgb = [0, 0, 0];
  const lineWidth = 5;
  const using = true;
  const chooseBrush = false;
  const chooseColor = false;
  const chooseDl = false;
  const chooseClear = false;
  const eraserEnable = false;
  const lastPoint = { x: undefined, y: undefined };

  const sketchpad = canvasEl.current;
  const ctx = canvasEl.current.getContext("2d");

  const setCanvasSize = () => {
    sketchpad.width = backgroundWidth;
    sketchpad.height = backgroundHeight;
  };

  useEffect(() => {
    setCanvasSize();
  }, [setCanvasSize, backgroundWidth, backgroundHeight]);

  const initCanvas = () => {};

  return (
    <>
      <div className={Style.app} style={style}>
        <canvas ref={canvasEl}></canvas>
        <Header />
        <Choose />
        <Prompt />
        <Footer />
      </div>
    </>
  );
};
