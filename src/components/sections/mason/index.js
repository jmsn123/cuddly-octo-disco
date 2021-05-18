import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./index.css";
function Mason() {
  return (
    <div className="container">
      <div className="title">
        <h2>Check out my Work</h2>
      </div>
      <Masonry columnsCount={3} gutter={4}>
        <img src="https://cdn.pixabay.com/photo/2020/11/01/19/41/autumn-5704791_1280.jpg" />

        <img src="https://cdn.pixabay.com/photo/2020/07/27/02/30/hands-5441201_1280.jpg" />

        <img src="https://picsum.photos/200/350?random=3" />

        <img src="https://picsum.photos/500/700?random=76" />

        <img src="https://picsum.photos/600/300?random=87" />

        <img src="https://picsum.photos/250/300?random=43" />

        <img src="https://picsum.photos/200/300?random=78" />

        <img src="https://picsum.photos/200/300?random=34" />
      </Masonry>
    </div>
  );
}

export default Mason;
