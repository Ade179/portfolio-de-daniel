import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rockets from '../../img/rockets.png';
import AALA from '../../img/AALA.png';
import carbook from '../../img/carbook.png';
import MathMagiciain from '../../img/MathMagician.png';
import 'swiper/css';

const Portfolio = () => (
  <div className="portfolio" id="Portfolio">

    <span>Recent Projects</span>
    <span>Portfolio</span>

    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor
      className="portfolio-slider"
    >
      <SwiperSlide>
        <img src={MathMagiciain} alt="" srcSet="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Rockets} alt="" srcSet="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={AALA} alt="" srcSet="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={carbook} alt="" srcSet="" />
      </SwiperSlide>
    </Swiper>

  </div>
);

export default Portfolio;
