import "./Testimonials.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Testimonial from "./Testimonial";
import Testimonialsdata from "./Testimonialsdata";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What do people say about me</h2>
      <p>These are testimonials from people around me</p>
      <div className="container">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1450,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          {Testimonialsdata.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
