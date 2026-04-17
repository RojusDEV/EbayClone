"use client";

import React, { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import CarouselItem from "./CarouselItem";
import { IoPauseOutline, IoPlay } from "react-icons/io5";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imagesLength, setImagesLength] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const listLength = document.querySelectorAll("#carousel-image").length;
      setImagesLength(listLength);
    };

    handleLoad(); // Call the function to set the initial length
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imagesLength - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imagesLength - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    const intervalas = setInterval(() => {
      if (imagesLength > 0 && play) {
        showNextImage();
      }
    }, 4000);
    return () => {
      clearInterval(intervalas);
    };
  }, [imagesLength]);

  return (
    <div className="relative mx-auto w-full max-w-[90em] md:px-0">
      <button
        className="absolute -left-4 top-1/2 z-10 rounded-full bg-white p-2 shadow-xl"
        aria-label="arrow back"
        onClick={showPrevImage}
      >
        <IoChevronBackOutline size={20} />
      </button>
      <div className="relative mx-auto flex h-80 max-w-[85rem] overflow-hidden rounded-2xl">
        <CarouselItem
          order={1}
          buttonName="Hop on board"
          title="Your treasure island awaits"
          sub="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          imageIndex={imageIndex}
          background="bg-carousel-image"
        />
        <CarouselItem
          order={2}
          buttonName="Shop now"
          sub="Equip your vehicle for the adventure of a lifetime."
          title="On the road in comfort and style"
          imageIndex={imageIndex}
          background="bg-blue-300"
        />
        <CarouselItem
          order={3}
          title="Unique savings on luxury fashion"
          sub="Your purchases are backed by the eBay Money Back Guarantee."
          buttonName="Code: SIKSIKSIK "
          imageIndex={imageIndex}
          background="bg-yellow-50"
        />
        <button
          className="absolute bottom-10 right-10 rounded-full bg-gray-200 p-2"
          onClick={() => setPlay(!play)}
          aria-label="play button"
        >
          {play ? <IoPauseOutline /> : <IoPlay />}
        </button>
      </div>
      <button
        className="absolute -right-4 top-1/2 z-10 rounded-full bg-white p-2 shadow-xl"
        onClick={showNextImage}
        aria-label="arrow forward"
      >
        <IoChevronForwardOutline size={20} />
      </button>
    </div>
  );
};

export default Carousel;
