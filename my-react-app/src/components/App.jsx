import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "../styles.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import videos from "../videos.js";
import Video from "./Video.jsx"

function createVideo(info) {
  return (
    <Video
      url = {info.url}
      title = {info.title}
    />
  );
}
const items = videos.map(createVideo);

const App = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };
  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <div>
        <h1 className="block3"> Our favorite videos</h1>
      </div>
      <div className ="vid">
        <AliceCarousel
          activeIndex={mainIndex}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
      {/* <div class="carousel-indicators">
        <button type="button" data-bs-target="vid" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="vid" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="vid" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
      </div>
      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
  );
};

export default App;
