import React, { useEffect, useState } from "react";
import "../App.css";
import "./Gallery.css";

const images = [
  { id: "1", imageName: "img1.jpg", tag: "cream" },
  { id: "2", imageName: "img2.jpg", tag: "jelly" },
  { id: "3", imageName: "img3.jpg", tag: "jelly" },
  { id: "4", imageName: "img4.jpg", tag: "jelly" },
  { id: "5", imageName: "img5.jpg", tag: "cream" },
  { id: "6", imageName: "img6.jpg", tag: "cream" },
  { id: "7", imageName: "img7.jpg", tag: "jelly" },
  { id: "8", imageName: "img8.jpg", tag: "jelly" },
  { id: "9", imageName: "img9.jpg", tag: "jelly" },
  { id: "10", imageName: "img10.jpg", tag: "cream" },
  { id: "11", imageName: "img11.jpg", tag: "jelly" },
  { id: "12", imageName: "img12.jpg", tag: "jelly" },
  { id: "13", imageName: "img13.jpg", tag: "jelly" },
  { id: "14", imageName: "img14.jpg", tag: "jelly" },
  { id: "15", imageName: "img15.jpg", tag: "jelly" },
  { id: "16", imageName: "img16.jpg", tag: "cream" },
  { id: "17", imageName: "img17.jpg", tag: "jelly" },
  { id: "18", imageName: "img18.jpg", tag: "jelly" },
  { id: "19", imageName: "img19.jpg", tag: "jelly" },
  { id: "20", imageName: "img20.jpg", tag: "jelly" },
];

function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App" handleSetTag={setTag}>
      <header className="gallery-head">
        <h3>GALLERY</h3>
      </header>
      <div className="galleryfilter">
        <TagButton
          name="all"
          handleSetTag={setTag}
          tagActive={tag === "all" ? true : false}
        />
        <TagButton
          name="cream"
          handleSetTag={setTag}
          tagActive={tag === "cream" ? true : false}
        />
        <TagButton
          name="jelly"
          handleSetTag={setTag}
          tagActive={tag === "jelly" ? true : false}
        />
      </div>

      <div className="container">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <img className="image" src={`./images/${image.imageName}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`btn ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;
