import React from "react";
import "./Grid.css";

const Grid = ({ images, notFound}) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          className="gallery-img"
          src={image.img}
          alt={notFound}
          key={index}
        />
      ))}
    </div>
  );
};

export default Grid;
