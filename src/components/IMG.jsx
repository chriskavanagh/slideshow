import React from "react";

const IMG = ({ property: { src, alt } }) => {
  return (
    <div>
      <img src={src} alt={alt} className="slider--img" />
    </div>
  );
};

export default IMG;
