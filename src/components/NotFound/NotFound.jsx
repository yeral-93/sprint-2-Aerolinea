import React from "react";
import { DivNotFound } from "./StyleNotFound";
import avion from "../../assets/siluetaAvion.png";

const NotFound = () => {
  return (
    <DivNotFound>
      <figure>
        <img src={avion} alt="" />
        <h1>404 Error Page</h1>
        <h4>Sorry, This page doesn't exist</h4>
      </figure>
    </DivNotFound>
  );
};

export default NotFound;
