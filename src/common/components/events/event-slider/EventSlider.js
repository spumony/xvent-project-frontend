import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from "reactstrap";

import "./EventSlider.scss";
import Slide2 from "../../../img/jpg/15.jpg";
import Slide3 from "../../../img/jpg/16.jpg";
import Slide1 from "../../../img/jpg/17.jpg";

const items = [
  {
    src: Slide1,
  },
  {
    src: Slide2,
  },
  {
    src: Slide3,
  },
];

const EventSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="event-slider-img" src={item.src} alt={item.altText} />
        <CarouselCaption
          className="event-slider-caption"
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Container fluid className="d-flex justify-content-center">
      <Carousel
        className="event-slider-carousel"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Container>
  );
};

export default EventSlider;
