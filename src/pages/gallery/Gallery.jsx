import React from "react";
import "./Gallery.css";
import { PAGES } from "../../config/text";
import Grid from "../../components/grid/Grid";

const Gallery = () => {
  const { title, images } = PAGES.GALLERY;
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">{title}</h1>
      <Grid images={images} notFound={PAGES.NOTFOUND}/>
    </div>
  );
};

export default Gallery;
