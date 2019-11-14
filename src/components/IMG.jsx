import React from "react";

const IMG = ({ property }) => {
  const { index, src, alt } = property;
  return (
    <div id={`image-${index}`} className="image">
      <img src={src} width={1200} height={400} alt={alt} />
    </div>
  );
};

export default IMG;
