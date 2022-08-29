import React from 'react';
import './MainSlideImg.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function MainSlideImg() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      navigation={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="img1"
          src="https://alessi.co.kr/_dj/img/mainbanner/2208-1.jpg"
          alt="메인이미지"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img1"
          src="https://alessi.co.kr/_dj/img/mainbanner/2103-1.gif"
          alt="메인이미지"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="img1"
          src="https://alessi.co.kr/_dj/img/mainbanner/2207-2.jpg"
          alt="메인이미지"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlideImg;
