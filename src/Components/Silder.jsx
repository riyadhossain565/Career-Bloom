import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import sliderImg1 from "../assets/slider55.png";
import sliderImg2 from "../assets/slider-img (1).jpg";
import sliderImg3 from "../assets/slider11.jpg";
import sliderImg4 from "../assets/slider66.png";

const Slider = () => {
  return (
    <div className="my-4">
      <Swiper
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper rounded-lg h-[400px] overflow-hidden"
      >
        {/* Slides */}
        <SwiperSlide>
          <img
            src={sliderImg1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg4}
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
