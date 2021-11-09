import React from "react";
import Brosur1 from "assets/img/brosur-1.jpg";
import Brosur2 from "assets/img/brosur-2.jpg";
function LoadPdf() {
  return (
    <>
      <div className="">
        <img src={Brosur1} alt="" width="100%" />
      </div>
      <div className="">
        <img src={Brosur2} alt="" width="100%" />
      </div>
    </>
  );
}

export default LoadPdf;
