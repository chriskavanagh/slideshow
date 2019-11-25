import React from "react";

const IMG = ({ property }) => {
  const { index, src, alt } = property;
  const height = 400;
  const width = 1200;

  return (
    <div
      style={{ paddingBottom: (height / width) * 100 + "%" }}
      className="img--wrapper"
    >
      <img src={src} alt={alt} className="slider--img" />
    </div>
  );
};

export default IMG;
