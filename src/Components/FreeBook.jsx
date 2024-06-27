import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreeBook() {
  const freeBooks = list.filter((item) => item.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl pb-2"> Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          perferendis dignissimos enim explicabo quisquam, magni laboriosam eius
          excepturi natus maiores officiis quam provident voluptatum a dolorum
          deserunt amet laborum sint?
        </p>

        <div>
          <div className="slider-container pb-10 pt-10">
            <Slider {...settings}>
             { freeBooks.map((item) => 
              {
                return <Cards item={item} />
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
