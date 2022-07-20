import React from "react";
import imageLoadingGif from './../../assets/images/loading.gif';

export default function Splash() {
  return (
    <div className="container-splash">
      <img src={imageLoadingGif} alt={"loading gif"} className={"container-splash__img"}/>
      <p className={"container-splash__text"}>Loading...</p>
    </div>
  );
}
