import React from "react";
import Header from "./header";
import Choose from "./choose";
import Footer from "./footer";
import Prompt from "./prompt";
import "./index.css";

export default () => {

  return (
    <>
      <canvas id="sketchpad"></canvas>
      <Header />
      <Choose />
      <Prompt />
      <Footer />
    </>
  );
};
