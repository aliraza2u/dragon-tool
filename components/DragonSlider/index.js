import React from "react";
import styles from "../DragonSlider/DragonSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomButton from "../CustomButton/index";
import { slider } from "./SliderApi";
const DragonSlider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderHeading}>
        <h1>Pricing & Plan</h1>
        <p>What Makes us Best !</p>
      </div>
      <div className={styles.buttonWrap}>
        <CustomButton
          children={"Most Popular"}
          className={styles.sliderButton}
        />
      </div>
      <Slider {...settings} className={styles.tools}>
        {slider.map((x, i) => (
          <div key={i} className={styles.sliderTools}>
            <h1>{x.sliderHeading}</h1>
            <p>{x.sliderParagrafh}</p>

            <div className={styles.list}>
              <ul>
                {x.list.map((y, index) => (
                  <li key={index}>{y}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DragonSlider;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
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
